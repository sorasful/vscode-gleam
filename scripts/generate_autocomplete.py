import asyncio
import re
from pathlib import Path
from urllib.parse import urljoin

import httpx
from bs4 import BeautifulSoup
from pydantic import BaseModel


class Function(BaseModel):
    module: str
    name: str
    code: str
    description: str

    @staticmethod
    def code_to_insert_text(entry: str, module_name: str | None) -> str:
        pattern = r"fn (\w+)\(([^)]*)\)"
        match = re.search(pattern, entry)

        if match is None:
            print(f'Match is None for func : {entry}')

        function_name = match.group(1)
        arguments = match.group(2).split(',')

        placeholders = []
        for index, arg in enumerate(arguments, start=1):
            arg_name = arg.strip().split(':')[0]
            placeholders.append(f"${{{index}:{arg_name}}}")

        if module_name is not None:
            function_name = f"{module_name}.{function_name}"

        return f"{function_name}({', '.join(placeholders)})"

    @staticmethod
    def snake_to_camel(snake_str: str) -> str:
        components = snake_str.split('_')
        return components[0] + ''.join(word.capitalize() for word in components[1:])

    def to_vscode_autocomplete(self, include_module=False) -> str:
        function_name = self.name
        camel_cased_name = self.snake_to_camel(function_name)
        var_name = f"{camel_cased_name}Function"
        if include_module:
            module_name = self.module.split('/')[1]
            var_name = f"{module_name}{var_name}"

            function_name = f"{module_name}.{function_name}"

        insert_text = self.code_to_insert_text(self.code, module_name=module_name if include_module else None)
        documentation = self.description.replace('\n', ' ')
        code = self.code.replace('\n', ' ')
        text = f"""
var {var_name} = new vscode.CompletionItem("{function_name}", vscode.CompletionItemKind.Function);
{var_name}.detail = `{code}`;
{var_name}.documentation = `{documentation}`;
{var_name}.insertText = new vscode.SnippetString("{insert_text}");

completionItems.push({var_name});
        """

        return text


class AutocompletePage(BaseModel):
    functions: list[Function]

    def render(self):
        text = """import * as vscode from "vscode";

export class MyLangCompletionItemProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {


    const completionItems: vscode.CompletionItem[] = [];

    [REPLACE_ME]
    
    return completionItems;
  }
}

"""
        functions_without_module = [x.to_vscode_autocomplete() for x in self.functions]
        functions_with_module = [x.to_vscode_autocomplete(include_module=True) for x in self.functions]
        functions = [x for t in list(zip(functions_with_module, functions_without_module)) for x in t]

        text = text.replace('[REPLACE_ME]', '\n'.join(functions))

        return text


async def fetch_html(client: httpx.AsyncClient, url: str) -> str:
    response = await client.get(url)
    response.raise_for_status()
    return response.text


async def extract_modules_links(client: httpx.AsyncClient, url: str) -> list[str]:
    html = await fetch_html(client, url)
    soup = BeautifulSoup(html, "html.parser")

    absolute_links = []
    h2_elements = soup.find_all("h2")

    for h2 in h2_elements:
        if h2.text.lower() == "modules":
            ul = h2.find_next_sibling("ul")
            li_elements = ul.find_all("li")
            for li in li_elements:
                a_tag = li.find("a")
                if a_tag and a_tag.get("href"):
                    absolute_link = urljoin(url, a_tag["href"])
                    absolute_links.append(absolute_link)

    return absolute_links


async def extract_functions_for_page(client: httpx.AsyncClient, url: str) -> list[Function]:
    html = await fetch_html(client, url)
    soup = BeautifulSoup(html, "html.parser")

    categories = soup.find_all('h1', class_='module-member-kind')
    category = None
    for category in categories:
        if category.text.lower().strip() == "functions":
            break

    members = category.find_all_next('div', class_='member')

    module_name = soup.find('h1').text.strip()

    functions = []

    for member in members:
        function_name = member.find('h2').text.strip()
        function_code = member.find('pre').text.strip()
        function_description = member.find('div', class_='rendered-markdown').text.strip()

        functions.append(Function(
            module=module_name,
            name=function_name,
            description=function_description,
            code=function_code,
        ))

    return functions


async def main():
    url = "https://hexdocs.pm/gleam_stdlib/"

    async with httpx.AsyncClient() as client:
        page_urls = await extract_modules_links(client, url)
        tasks = [extract_functions_for_page(client, url) for url in page_urls]
        results = await asyncio.gather(*tasks)

    # flatten the list
    functions = [func for l in results for func in l]

    autocomplete_page = AutocompletePage(functions=functions)
    autocomplete_file_content = autocomplete_page.render()

    current_dir = Path(__file__).parent
    with open(current_dir.parent / 'src' / 'autocomplete.ts', 'w') as f:
        f.write(autocomplete_file_content)


if __name__ == '__main__':
    asyncio.run(main())
