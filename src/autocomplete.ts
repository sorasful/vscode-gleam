import * as vscode from "vscode";

export class MyLangCompletionItemProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {


    const completionItems: vscode.CompletionItem[] = [];

    
var basedecode64Function = new vscode.CompletionItem("base.decode64", vscode.CompletionItemKind.Function);
basedecode64Function.detail = `pub fn decode64(encoded: String) -> Result(BitString, Nil)`;
basedecode64Function.documentation = `Decodes a base 64 encoded string into a BitString.`;
basedecode64Function.insertText = new vscode.SnippetString("base.decode64(${1:encoded})");

completionItems.push(basedecode64Function);
        

var decode64Function = new vscode.CompletionItem("decode64", vscode.CompletionItemKind.Function);
decode64Function.detail = `pub fn decode64(encoded: String) -> Result(BitString, Nil)`;
decode64Function.documentation = `Decodes a base 64 encoded string into a BitString.`;
decode64Function.insertText = new vscode.SnippetString("decode64(${1:encoded})");

completionItems.push(decode64Function);
        

var baseencode64Function = new vscode.CompletionItem("base.encode64", vscode.CompletionItemKind.Function);
baseencode64Function.detail = `pub fn encode64(input: BitString, padding: Bool) -> String`;
baseencode64Function.documentation = `Encodes a BitString into a base 64 encoded string.`;
baseencode64Function.insertText = new vscode.SnippetString("base.encode64(${1:input}, ${2:padding})");

completionItems.push(baseencode64Function);
        

var encode64Function = new vscode.CompletionItem("encode64", vscode.CompletionItemKind.Function);
encode64Function.detail = `pub fn encode64(input: BitString, padding: Bool) -> String`;
encode64Function.documentation = `Encodes a BitString into a base 64 encoded string.`;
encode64Function.insertText = new vscode.SnippetString("encode64(${1:input}, ${2:padding})");

completionItems.push(encode64Function);
        

var baseurlDecode64Function = new vscode.CompletionItem("base.url_decode64", vscode.CompletionItemKind.Function);
baseurlDecode64Function.detail = `pub fn url_decode64(encoded: String) -> Result(BitString, Nil)`;
baseurlDecode64Function.documentation = `Decodes a base 64 encoded string with URL and filename safe alphabet into a BitString.`;
baseurlDecode64Function.insertText = new vscode.SnippetString("base.url_decode64(${1:encoded})");

completionItems.push(baseurlDecode64Function);
        

var urlDecode64Function = new vscode.CompletionItem("url_decode64", vscode.CompletionItemKind.Function);
urlDecode64Function.detail = `pub fn url_decode64(encoded: String) -> Result(BitString, Nil)`;
urlDecode64Function.documentation = `Decodes a base 64 encoded string with URL and filename safe alphabet into a BitString.`;
urlDecode64Function.insertText = new vscode.SnippetString("url_decode64(${1:encoded})");

completionItems.push(urlDecode64Function);
        

var baseurlEncode64Function = new vscode.CompletionItem("base.url_encode64", vscode.CompletionItemKind.Function);
baseurlEncode64Function.detail = `pub fn url_encode64(input: BitString, padding: Bool) -> String`;
baseurlEncode64Function.documentation = `Encodes a BitString into a base 64 encoded string with URL and filename safe alphabet.`;
baseurlEncode64Function.insertText = new vscode.SnippetString("base.url_encode64(${1:input}, ${2:padding})");

completionItems.push(baseurlEncode64Function);
        

var urlEncode64Function = new vscode.CompletionItem("url_encode64", vscode.CompletionItemKind.Function);
urlEncode64Function.detail = `pub fn url_encode64(input: BitString, padding: Bool) -> String`;
urlEncode64Function.documentation = `Encodes a BitString into a base 64 encoded string with URL and filename safe alphabet.`;
urlEncode64Function.insertText = new vscode.SnippetString("url_encode64(${1:input}, ${2:padding})");

completionItems.push(urlEncode64Function);
        

var bit_builderappendFunction = new vscode.CompletionItem("bit_builder.append", vscode.CompletionItemKind.Function);
bit_builderappendFunction.detail = `pub fn append(to: BitBuilder, suffix: BitString) -> BitBuilder`;
bit_builderappendFunction.documentation = `Appends a bit string to the end of a builder. Runs in constant time.`;
bit_builderappendFunction.insertText = new vscode.SnippetString("bit_builder.append(${1:to}, ${2:suffix})");

completionItems.push(bit_builderappendFunction);
        

var appendFunction = new vscode.CompletionItem("append", vscode.CompletionItemKind.Function);
appendFunction.detail = `pub fn append(to: BitBuilder, suffix: BitString) -> BitBuilder`;
appendFunction.documentation = `Appends a bit string to the end of a builder. Runs in constant time.`;
appendFunction.insertText = new vscode.SnippetString("append(${1:to}, ${2:suffix})");

completionItems.push(appendFunction);
        

var bit_builderappendBuilderFunction = new vscode.CompletionItem("bit_builder.append_builder", vscode.CompletionItemKind.Function);
bit_builderappendBuilderFunction.detail = `pub fn append_builder(to first: BitBuilder, suffix second: BitBuilder) -> BitBuilder`;
bit_builderappendBuilderFunction.documentation = `Appends a builder onto the end of another. Runs in constant time.`;
bit_builderappendBuilderFunction.insertText = new vscode.SnippetString("bit_builder.append_builder(${1:to first}, ${2:suffix second})");

completionItems.push(bit_builderappendBuilderFunction);
        

var appendBuilderFunction = new vscode.CompletionItem("append_builder", vscode.CompletionItemKind.Function);
appendBuilderFunction.detail = `pub fn append_builder(to first: BitBuilder, suffix second: BitBuilder) -> BitBuilder`;
appendBuilderFunction.documentation = `Appends a builder onto the end of another. Runs in constant time.`;
appendBuilderFunction.insertText = new vscode.SnippetString("append_builder(${1:to first}, ${2:suffix second})");

completionItems.push(appendBuilderFunction);
        

var bit_builderappendStringFunction = new vscode.CompletionItem("bit_builder.append_string", vscode.CompletionItemKind.Function);
bit_builderappendStringFunction.detail = `pub fn append_string(to: BitBuilder, suffix: String) -> BitBuilder`;
bit_builderappendStringFunction.documentation = `Appends a string onto the end of a builder. Runs in constant time when running on Erlang. Runs in linear time with the length of the string otherwise.`;
bit_builderappendStringFunction.insertText = new vscode.SnippetString("bit_builder.append_string(${1:to}, ${2:suffix})");

completionItems.push(bit_builderappendStringFunction);
        

var appendStringFunction = new vscode.CompletionItem("append_string", vscode.CompletionItemKind.Function);
appendStringFunction.detail = `pub fn append_string(to: BitBuilder, suffix: String) -> BitBuilder`;
appendStringFunction.documentation = `Appends a string onto the end of a builder. Runs in constant time when running on Erlang. Runs in linear time with the length of the string otherwise.`;
appendStringFunction.insertText = new vscode.SnippetString("append_string(${1:to}, ${2:suffix})");

completionItems.push(appendStringFunction);
        

var bit_builderbyteSizeFunction = new vscode.CompletionItem("bit_builder.byte_size", vscode.CompletionItemKind.Function);
bit_builderbyteSizeFunction.detail = `pub fn byte_size(builder: BitBuilder) -> Int`;
bit_builderbyteSizeFunction.documentation = `Returns the size of the builder’s content in bytes. Runs in linear time.`;
bit_builderbyteSizeFunction.insertText = new vscode.SnippetString("bit_builder.byte_size(${1:builder})");

completionItems.push(bit_builderbyteSizeFunction);
        

var byteSizeFunction = new vscode.CompletionItem("byte_size", vscode.CompletionItemKind.Function);
byteSizeFunction.detail = `pub fn byte_size(builder: BitBuilder) -> Int`;
byteSizeFunction.documentation = `Returns the size of the builder’s content in bytes. Runs in linear time.`;
byteSizeFunction.insertText = new vscode.SnippetString("byte_size(${1:builder})");

completionItems.push(byteSizeFunction);
        

var bit_builderconcatFunction = new vscode.CompletionItem("bit_builder.concat", vscode.CompletionItemKind.Function);
bit_builderconcatFunction.detail = `pub fn concat(builders: List(BitBuilder)) -> BitBuilder`;
bit_builderconcatFunction.documentation = `Joins a list of builders into a single builder. Runs in constant time.`;
bit_builderconcatFunction.insertText = new vscode.SnippetString("bit_builder.concat(${1:builders})");

completionItems.push(bit_builderconcatFunction);
        

var concatFunction = new vscode.CompletionItem("concat", vscode.CompletionItemKind.Function);
concatFunction.detail = `pub fn concat(builders: List(BitBuilder)) -> BitBuilder`;
concatFunction.documentation = `Joins a list of builders into a single builder. Runs in constant time.`;
concatFunction.insertText = new vscode.SnippetString("concat(${1:builders})");

completionItems.push(concatFunction);
        

var bit_builderconcatBitStringsFunction = new vscode.CompletionItem("bit_builder.concat_bit_strings", vscode.CompletionItemKind.Function);
bit_builderconcatBitStringsFunction.detail = `pub fn concat_bit_strings(bits: List(BitString)) -> BitBuilder`;
bit_builderconcatBitStringsFunction.documentation = `Joins a list of bit strings into a single builder. Runs in constant time.`;
bit_builderconcatBitStringsFunction.insertText = new vscode.SnippetString("bit_builder.concat_bit_strings(${1:bits})");

completionItems.push(bit_builderconcatBitStringsFunction);
        

var concatBitStringsFunction = new vscode.CompletionItem("concat_bit_strings", vscode.CompletionItemKind.Function);
concatBitStringsFunction.detail = `pub fn concat_bit_strings(bits: List(BitString)) -> BitBuilder`;
concatBitStringsFunction.documentation = `Joins a list of bit strings into a single builder. Runs in constant time.`;
concatBitStringsFunction.insertText = new vscode.SnippetString("concat_bit_strings(${1:bits})");

completionItems.push(concatBitStringsFunction);
        

var bit_builderfromBitStringFunction = new vscode.CompletionItem("bit_builder.from_bit_string", vscode.CompletionItemKind.Function);
bit_builderfromBitStringFunction.detail = `pub fn from_bit_string(bits: BitString) -> BitBuilder`;
bit_builderfromBitStringFunction.documentation = `Creates a new builder from a bit string. Runs in constant time.`;
bit_builderfromBitStringFunction.insertText = new vscode.SnippetString("bit_builder.from_bit_string(${1:bits})");

completionItems.push(bit_builderfromBitStringFunction);
        

var fromBitStringFunction = new vscode.CompletionItem("from_bit_string", vscode.CompletionItemKind.Function);
fromBitStringFunction.detail = `pub fn from_bit_string(bits: BitString) -> BitBuilder`;
fromBitStringFunction.documentation = `Creates a new builder from a bit string. Runs in constant time.`;
fromBitStringFunction.insertText = new vscode.SnippetString("from_bit_string(${1:bits})");

completionItems.push(fromBitStringFunction);
        

var bit_builderfromStringFunction = new vscode.CompletionItem("bit_builder.from_string", vscode.CompletionItemKind.Function);
bit_builderfromStringFunction.detail = `pub fn from_string(string: String) -> BitBuilder`;
bit_builderfromStringFunction.documentation = `Creates a new builder from a string. Runs in constant time when running on Erlang. Runs in linear time otherwise.`;
bit_builderfromStringFunction.insertText = new vscode.SnippetString("bit_builder.from_string(${1:string})");

completionItems.push(bit_builderfromStringFunction);
        

var fromStringFunction = new vscode.CompletionItem("from_string", vscode.CompletionItemKind.Function);
fromStringFunction.detail = `pub fn from_string(string: String) -> BitBuilder`;
fromStringFunction.documentation = `Creates a new builder from a string. Runs in constant time when running on Erlang. Runs in linear time otherwise.`;
fromStringFunction.insertText = new vscode.SnippetString("from_string(${1:string})");

completionItems.push(fromStringFunction);
        

var bit_builderfromStringBuilderFunction = new vscode.CompletionItem("bit_builder.from_string_builder", vscode.CompletionItemKind.Function);
bit_builderfromStringBuilderFunction.detail = `pub fn from_string_builder(builder: StringBuilder) -> BitBuilder`;
bit_builderfromStringBuilderFunction.documentation = `Creates a new builder from a string builder. Runs in constant time when running on Erlang. Runs in linear time otherwise.`;
bit_builderfromStringBuilderFunction.insertText = new vscode.SnippetString("bit_builder.from_string_builder(${1:builder})");

completionItems.push(bit_builderfromStringBuilderFunction);
        

var fromStringBuilderFunction = new vscode.CompletionItem("from_string_builder", vscode.CompletionItemKind.Function);
fromStringBuilderFunction.detail = `pub fn from_string_builder(builder: StringBuilder) -> BitBuilder`;
fromStringBuilderFunction.documentation = `Creates a new builder from a string builder. Runs in constant time when running on Erlang. Runs in linear time otherwise.`;
fromStringBuilderFunction.insertText = new vscode.SnippetString("from_string_builder(${1:builder})");

completionItems.push(fromStringBuilderFunction);
        

var bit_buildernewFunction = new vscode.CompletionItem("bit_builder.new", vscode.CompletionItemKind.Function);
bit_buildernewFunction.detail = `pub fn new() -> BitBuilder`;
bit_buildernewFunction.documentation = `Create an empty BitBuilder. Useful as the start of a pipe chaning many builders together.`;
bit_buildernewFunction.insertText = new vscode.SnippetString("bit_builder.new(${1:})");

completionItems.push(bit_buildernewFunction);
        

var newFunction = new vscode.CompletionItem("new", vscode.CompletionItemKind.Function);
newFunction.detail = `pub fn new() -> BitBuilder`;
newFunction.documentation = `Create an empty BitBuilder. Useful as the start of a pipe chaning many builders together.`;
newFunction.insertText = new vscode.SnippetString("new(${1:})");

completionItems.push(newFunction);
        

var bit_builderprependFunction = new vscode.CompletionItem("bit_builder.prepend", vscode.CompletionItemKind.Function);
bit_builderprependFunction.detail = `pub fn prepend(to: BitBuilder, prefix: BitString) -> BitBuilder`;
bit_builderprependFunction.documentation = `Prepends a bit string to the start of a builder. Runs in constant time.`;
bit_builderprependFunction.insertText = new vscode.SnippetString("bit_builder.prepend(${1:to}, ${2:prefix})");

completionItems.push(bit_builderprependFunction);
        

var prependFunction = new vscode.CompletionItem("prepend", vscode.CompletionItemKind.Function);
prependFunction.detail = `pub fn prepend(to: BitBuilder, prefix: BitString) -> BitBuilder`;
prependFunction.documentation = `Prepends a bit string to the start of a builder. Runs in constant time.`;
prependFunction.insertText = new vscode.SnippetString("prepend(${1:to}, ${2:prefix})");

completionItems.push(prependFunction);
        

var bit_builderprependBuilderFunction = new vscode.CompletionItem("bit_builder.prepend_builder", vscode.CompletionItemKind.Function);
bit_builderprependBuilderFunction.detail = `pub fn prepend_builder(to: BitBuilder, prefix: BitBuilder) -> BitBuilder`;
bit_builderprependBuilderFunction.documentation = `Prepends a builder onto the start of another. Runs in constant time.`;
bit_builderprependBuilderFunction.insertText = new vscode.SnippetString("bit_builder.prepend_builder(${1:to}, ${2:prefix})");

completionItems.push(bit_builderprependBuilderFunction);
        

var prependBuilderFunction = new vscode.CompletionItem("prepend_builder", vscode.CompletionItemKind.Function);
prependBuilderFunction.detail = `pub fn prepend_builder(to: BitBuilder, prefix: BitBuilder) -> BitBuilder`;
prependBuilderFunction.documentation = `Prepends a builder onto the start of another. Runs in constant time.`;
prependBuilderFunction.insertText = new vscode.SnippetString("prepend_builder(${1:to}, ${2:prefix})");

completionItems.push(prependBuilderFunction);
        

var bit_builderprependStringFunction = new vscode.CompletionItem("bit_builder.prepend_string", vscode.CompletionItemKind.Function);
bit_builderprependStringFunction.detail = `pub fn prepend_string(to: BitBuilder, prefix: String) -> BitBuilder`;
bit_builderprependStringFunction.documentation = `Prepends a string onto the start of a builder. Runs in constant time when running on Erlang. Runs in linear time with the length of the string otherwise.`;
bit_builderprependStringFunction.insertText = new vscode.SnippetString("bit_builder.prepend_string(${1:to}, ${2:prefix})");

completionItems.push(bit_builderprependStringFunction);
        

var prependStringFunction = new vscode.CompletionItem("prepend_string", vscode.CompletionItemKind.Function);
prependStringFunction.detail = `pub fn prepend_string(to: BitBuilder, prefix: String) -> BitBuilder`;
prependStringFunction.documentation = `Prepends a string onto the start of a builder. Runs in constant time when running on Erlang. Runs in linear time with the length of the string otherwise.`;
prependStringFunction.insertText = new vscode.SnippetString("prepend_string(${1:to}, ${2:prefix})");

completionItems.push(prependStringFunction);
        

var bit_buildertoBitStringFunction = new vscode.CompletionItem("bit_builder.to_bit_string", vscode.CompletionItemKind.Function);
bit_buildertoBitStringFunction.detail = `pub fn to_bit_string(builder: BitBuilder) -> BitString`;
bit_buildertoBitStringFunction.documentation = `Turns an builder into a bit string. Runs in linear time. When running on Erlang this function is implemented natively by the virtual machine and is highly optimised.`;
bit_buildertoBitStringFunction.insertText = new vscode.SnippetString("bit_builder.to_bit_string(${1:builder})");

completionItems.push(bit_buildertoBitStringFunction);
        

var toBitStringFunction = new vscode.CompletionItem("to_bit_string", vscode.CompletionItemKind.Function);
toBitStringFunction.detail = `pub fn to_bit_string(builder: BitBuilder) -> BitString`;
toBitStringFunction.documentation = `Turns an builder into a bit string. Runs in linear time. When running on Erlang this function is implemented natively by the virtual machine and is highly optimised.`;
toBitStringFunction.insertText = new vscode.SnippetString("to_bit_string(${1:builder})");

completionItems.push(toBitStringFunction);
        

var bit_stringappendFunction = new vscode.CompletionItem("bit_string.append", vscode.CompletionItemKind.Function);
bit_stringappendFunction.detail = `pub fn append(to first: BitString, suffix second: BitString) -> BitString`;
bit_stringappendFunction.documentation = `Creates a new bit string by joining two binaries. Examples > append(to: from_string("butter"), suffix: from_string("fly")) from_string("butterfly")`;
bit_stringappendFunction.insertText = new vscode.SnippetString("bit_string.append(${1:to first}, ${2:suffix second})");

completionItems.push(bit_stringappendFunction);
        

var appendFunction = new vscode.CompletionItem("append", vscode.CompletionItemKind.Function);
appendFunction.detail = `pub fn append(to first: BitString, suffix second: BitString) -> BitString`;
appendFunction.documentation = `Creates a new bit string by joining two binaries. Examples > append(to: from_string("butter"), suffix: from_string("fly")) from_string("butterfly")`;
appendFunction.insertText = new vscode.SnippetString("append(${1:to first}, ${2:suffix second})");

completionItems.push(appendFunction);
        

var bit_stringbyteSizeFunction = new vscode.CompletionItem("bit_string.byte_size", vscode.CompletionItemKind.Function);
bit_stringbyteSizeFunction.detail = `pub fn byte_size(x: BitString) -> Int`;
bit_stringbyteSizeFunction.documentation = `Returns an integer which is the number of bytes in the bit string.`;
bit_stringbyteSizeFunction.insertText = new vscode.SnippetString("bit_string.byte_size(${1:x})");

completionItems.push(bit_stringbyteSizeFunction);
        

var byteSizeFunction = new vscode.CompletionItem("byte_size", vscode.CompletionItemKind.Function);
byteSizeFunction.detail = `pub fn byte_size(x: BitString) -> Int`;
byteSizeFunction.documentation = `Returns an integer which is the number of bytes in the bit string.`;
byteSizeFunction.insertText = new vscode.SnippetString("byte_size(${1:x})");

completionItems.push(byteSizeFunction);
        

var bit_stringconcatFunction = new vscode.CompletionItem("bit_string.concat", vscode.CompletionItemKind.Function);
bit_stringconcatFunction.detail = `pub fn concat(bit_strings: List(BitString)) -> BitString`;
bit_stringconcatFunction.documentation = `Creates a new bit string by joining multiple binaries. Examples > concat([from_string("butter"), from_string("fly")]) from_string("butterfly")`;
bit_stringconcatFunction.insertText = new vscode.SnippetString("bit_string.concat(${1:bit_strings})");

completionItems.push(bit_stringconcatFunction);
        

var concatFunction = new vscode.CompletionItem("concat", vscode.CompletionItemKind.Function);
concatFunction.detail = `pub fn concat(bit_strings: List(BitString)) -> BitString`;
concatFunction.documentation = `Creates a new bit string by joining multiple binaries. Examples > concat([from_string("butter"), from_string("fly")]) from_string("butterfly")`;
concatFunction.insertText = new vscode.SnippetString("concat(${1:bit_strings})");

completionItems.push(concatFunction);
        

var bit_stringfromStringFunction = new vscode.CompletionItem("bit_string.from_string", vscode.CompletionItemKind.Function);
bit_stringfromStringFunction.detail = `pub fn from_string(x: String) -> BitString`;
bit_stringfromStringFunction.documentation = `Converts a UTF-8 String type into a raw BitString type.`;
bit_stringfromStringFunction.insertText = new vscode.SnippetString("bit_string.from_string(${1:x})");

completionItems.push(bit_stringfromStringFunction);
        

var fromStringFunction = new vscode.CompletionItem("from_string", vscode.CompletionItemKind.Function);
fromStringFunction.detail = `pub fn from_string(x: String) -> BitString`;
fromStringFunction.documentation = `Converts a UTF-8 String type into a raw BitString type.`;
fromStringFunction.insertText = new vscode.SnippetString("from_string(${1:x})");

completionItems.push(fromStringFunction);
        

var bit_stringisUtf8Function = new vscode.CompletionItem("bit_string.is_utf8", vscode.CompletionItemKind.Function);
bit_stringisUtf8Function.detail = `pub fn is_utf8(bits: BitString) -> Bool`;
bit_stringisUtf8Function.documentation = `Tests to see whether a bit string is valid UTF-8.`;
bit_stringisUtf8Function.insertText = new vscode.SnippetString("bit_string.is_utf8(${1:bits})");

completionItems.push(bit_stringisUtf8Function);
        

var isUtf8Function = new vscode.CompletionItem("is_utf8", vscode.CompletionItemKind.Function);
isUtf8Function.detail = `pub fn is_utf8(bits: BitString) -> Bool`;
isUtf8Function.documentation = `Tests to see whether a bit string is valid UTF-8.`;
isUtf8Function.insertText = new vscode.SnippetString("is_utf8(${1:bits})");

completionItems.push(isUtf8Function);
        

var bit_stringsliceFunction = new vscode.CompletionItem("bit_string.slice", vscode.CompletionItemKind.Function);
bit_stringsliceFunction.detail = `pub fn slice(from string: BitString, at position: Int, take length: Int) -> Result(   BitString,   Nil, )`;
bit_stringsliceFunction.documentation = `Extracts a sub-section of a bit string. The slice will start at given position and continue up to specified length. A negative length can be used to extract bytes at the end of a bit string. This function runs in constant time.`;
bit_stringsliceFunction.insertText = new vscode.SnippetString("bit_string.slice(${1:from string}, ${2:at position}, ${3:take length})");

completionItems.push(bit_stringsliceFunction);
        

var sliceFunction = new vscode.CompletionItem("slice", vscode.CompletionItemKind.Function);
sliceFunction.detail = `pub fn slice(from string: BitString, at position: Int, take length: Int) -> Result(   BitString,   Nil, )`;
sliceFunction.documentation = `Extracts a sub-section of a bit string. The slice will start at given position and continue up to specified length. A negative length can be used to extract bytes at the end of a bit string. This function runs in constant time.`;
sliceFunction.insertText = new vscode.SnippetString("slice(${1:from string}, ${2:at position}, ${3:take length})");

completionItems.push(sliceFunction);
        

var bit_stringtoStringFunction = new vscode.CompletionItem("bit_string.to_string", vscode.CompletionItemKind.Function);
bit_stringtoStringFunction.detail = `pub fn to_string(bits: BitString) -> Result(String, Nil)`;
bit_stringtoStringFunction.documentation = `Converts a bit string to a string. Returns an error if the bit string is invalid UTF-8 data.`;
bit_stringtoStringFunction.insertText = new vscode.SnippetString("bit_string.to_string(${1:bits})");

completionItems.push(bit_stringtoStringFunction);
        

var toStringFunction = new vscode.CompletionItem("to_string", vscode.CompletionItemKind.Function);
toStringFunction.detail = `pub fn to_string(bits: BitString) -> Result(String, Nil)`;
toStringFunction.documentation = `Converts a bit string to a string. Returns an error if the bit string is invalid UTF-8 data.`;
toStringFunction.insertText = new vscode.SnippetString("to_string(${1:bits})");

completionItems.push(toStringFunction);
        

var boolandFunction = new vscode.CompletionItem("bool.and", vscode.CompletionItemKind.Function);
boolandFunction.detail = `pub fn and(a: Bool, b: Bool) -> Bool`;
boolandFunction.documentation = `Returns the and of two bools, but it evaluates both arguments. It’s the function equivalent of the && operator. This function is useful in higher order functions or pipes. Examples > and(True, True) True  > and(False, True) False  > False |> and(True) False`;
boolandFunction.insertText = new vscode.SnippetString("bool.and(${1:a}, ${2:b})");

completionItems.push(boolandFunction);
        

var andFunction = new vscode.CompletionItem("and", vscode.CompletionItemKind.Function);
andFunction.detail = `pub fn and(a: Bool, b: Bool) -> Bool`;
andFunction.documentation = `Returns the and of two bools, but it evaluates both arguments. It’s the function equivalent of the && operator. This function is useful in higher order functions or pipes. Examples > and(True, True) True  > and(False, True) False  > False |> and(True) False`;
andFunction.insertText = new vscode.SnippetString("and(${1:a}, ${2:b})");

completionItems.push(andFunction);
        

var boolcompareFunction = new vscode.CompletionItem("bool.compare", vscode.CompletionItemKind.Function);
boolcompareFunction.detail = `pub fn compare(a: Bool, with b: Bool) -> Order`;
boolcompareFunction.documentation = `Compares two bools and returns the first value’s Order to the second. Examples > import gleam/order > compare(True, False) order.Gt`;
boolcompareFunction.insertText = new vscode.SnippetString("bool.compare(${1:a}, ${2:with b})");

completionItems.push(boolcompareFunction);
        

var compareFunction = new vscode.CompletionItem("compare", vscode.CompletionItemKind.Function);
compareFunction.detail = `pub fn compare(a: Bool, with b: Bool) -> Order`;
compareFunction.documentation = `Compares two bools and returns the first value’s Order to the second. Examples > import gleam/order > compare(True, False) order.Gt`;
compareFunction.insertText = new vscode.SnippetString("compare(${1:a}, ${2:with b})");

completionItems.push(compareFunction);
        

var boolexclusiveNorFunction = new vscode.CompletionItem("bool.exclusive_nor", vscode.CompletionItemKind.Function);
boolexclusiveNorFunction.detail = `pub fn exclusive_nor(a: Bool, b: Bool) -> Bool`;
boolexclusiveNorFunction.documentation = `Returns the exclusive nor of two bools. Examples > exclusive_nor(False, False) True  > exclusive_nor(False, True) False  > exclusive_nor(True, False) False  > exclusive_nor(True, True) True`;
boolexclusiveNorFunction.insertText = new vscode.SnippetString("bool.exclusive_nor(${1:a}, ${2:b})");

completionItems.push(boolexclusiveNorFunction);
        

var exclusiveNorFunction = new vscode.CompletionItem("exclusive_nor", vscode.CompletionItemKind.Function);
exclusiveNorFunction.detail = `pub fn exclusive_nor(a: Bool, b: Bool) -> Bool`;
exclusiveNorFunction.documentation = `Returns the exclusive nor of two bools. Examples > exclusive_nor(False, False) True  > exclusive_nor(False, True) False  > exclusive_nor(True, False) False  > exclusive_nor(True, True) True`;
exclusiveNorFunction.insertText = new vscode.SnippetString("exclusive_nor(${1:a}, ${2:b})");

completionItems.push(exclusiveNorFunction);
        

var boolexclusiveOrFunction = new vscode.CompletionItem("bool.exclusive_or", vscode.CompletionItemKind.Function);
boolexclusiveOrFunction.detail = `pub fn exclusive_or(a: Bool, b: Bool) -> Bool`;
boolexclusiveOrFunction.documentation = `Returns the exclusive or of two bools. Examples > exclusive_or(False, False) False  > exclusive_or(False, True) True  > exclusive_or(True, False) True  > exclusive_or(True, True) False`;
boolexclusiveOrFunction.insertText = new vscode.SnippetString("bool.exclusive_or(${1:a}, ${2:b})");

completionItems.push(boolexclusiveOrFunction);
        

var exclusiveOrFunction = new vscode.CompletionItem("exclusive_or", vscode.CompletionItemKind.Function);
exclusiveOrFunction.detail = `pub fn exclusive_or(a: Bool, b: Bool) -> Bool`;
exclusiveOrFunction.documentation = `Returns the exclusive or of two bools. Examples > exclusive_or(False, False) False  > exclusive_or(False, True) True  > exclusive_or(True, False) True  > exclusive_or(True, True) False`;
exclusiveOrFunction.insertText = new vscode.SnippetString("exclusive_or(${1:a}, ${2:b})");

completionItems.push(exclusiveOrFunction);
        

var boolguardFunction = new vscode.CompletionItem("bool.guard", vscode.CompletionItemKind.Function);
boolguardFunction.detail = `pub fn guard(when requirement: Bool, return consequence: a, otherwise alternative: fn() ->     a) -> a`;
boolguardFunction.documentation = `Run a callback function if the given bool is True, otherwise return a default value. With a use expression this function can simulate the early-return pattern found in some other programming languages. In a procedural language: if (predicate) return value; // ...  In Gleam with a use expression: use <- guard(when: predicate, return: value) // ...  Like everything in Gleam use is an expression, so it short circuits the current block, not the entire function. As a result you can assign the value to a variable: let x = {   use <- guard(when: predicate, return: value)   // ... }  Note that unlike in procedural languages the return value is evaluated even when the predicate is False, so it is advisable not to perform expensive computation there. Examples > let name = "" > use <- guard(when: name == "", return: "Welcome!") > "Hello, " <> name "Welcome!"  > let name = "Kamaka" > use <- guard(when: name == "", return: "Welcome!") > "Hello, " <> name "Hello, Kamaka"`;
boolguardFunction.insertText = new vscode.SnippetString("bool.guard(${1:when requirement}, ${2:return consequence}, ${3:otherwise alternative})");

completionItems.push(boolguardFunction);
        

var guardFunction = new vscode.CompletionItem("guard", vscode.CompletionItemKind.Function);
guardFunction.detail = `pub fn guard(when requirement: Bool, return consequence: a, otherwise alternative: fn() ->     a) -> a`;
guardFunction.documentation = `Run a callback function if the given bool is True, otherwise return a default value. With a use expression this function can simulate the early-return pattern found in some other programming languages. In a procedural language: if (predicate) return value; // ...  In Gleam with a use expression: use <- guard(when: predicate, return: value) // ...  Like everything in Gleam use is an expression, so it short circuits the current block, not the entire function. As a result you can assign the value to a variable: let x = {   use <- guard(when: predicate, return: value)   // ... }  Note that unlike in procedural languages the return value is evaluated even when the predicate is False, so it is advisable not to perform expensive computation there. Examples > let name = "" > use <- guard(when: name == "", return: "Welcome!") > "Hello, " <> name "Welcome!"  > let name = "Kamaka" > use <- guard(when: name == "", return: "Welcome!") > "Hello, " <> name "Hello, Kamaka"`;
guardFunction.insertText = new vscode.SnippetString("guard(${1:when requirement}, ${2:return consequence}, ${3:otherwise alternative})");

completionItems.push(guardFunction);
        

var boolmaxFunction = new vscode.CompletionItem("bool.max", vscode.CompletionItemKind.Function);
boolmaxFunction.detail = `pub fn max(a: Bool, b: Bool) -> Bool`;
boolmaxFunction.documentation = `Returns True if either argument’s value is True. Examples > max(True, False) True  > max(False, True) True  > max(False, False) False`;
boolmaxFunction.insertText = new vscode.SnippetString("bool.max(${1:a}, ${2:b})");

completionItems.push(boolmaxFunction);
        

var maxFunction = new vscode.CompletionItem("max", vscode.CompletionItemKind.Function);
maxFunction.detail = `pub fn max(a: Bool, b: Bool) -> Bool`;
maxFunction.documentation = `Returns True if either argument’s value is True. Examples > max(True, False) True  > max(False, True) True  > max(False, False) False`;
maxFunction.insertText = new vscode.SnippetString("max(${1:a}, ${2:b})");

completionItems.push(maxFunction);
        

var boolminFunction = new vscode.CompletionItem("bool.min", vscode.CompletionItemKind.Function);
boolminFunction.detail = `pub fn min(a: Bool, b: Bool) -> Bool`;
boolminFunction.documentation = `Returns False if either bool value is False. Examples > min(True, False) False  > min(False, True) False  > min(False, False) False`;
boolminFunction.insertText = new vscode.SnippetString("bool.min(${1:a}, ${2:b})");

completionItems.push(boolminFunction);
        

var minFunction = new vscode.CompletionItem("min", vscode.CompletionItemKind.Function);
minFunction.detail = `pub fn min(a: Bool, b: Bool) -> Bool`;
minFunction.documentation = `Returns False if either bool value is False. Examples > min(True, False) False  > min(False, True) False  > min(False, False) False`;
minFunction.insertText = new vscode.SnippetString("min(${1:a}, ${2:b})");

completionItems.push(minFunction);
        

var boolnandFunction = new vscode.CompletionItem("bool.nand", vscode.CompletionItemKind.Function);
boolnandFunction.detail = `pub fn nand(a: Bool, b: Bool) -> Bool`;
boolnandFunction.documentation = `Returns the nand of two bools. Examples > nand(False, False) True  > nand(False, True) True  > nand(True, False) True  > nand(True, True) False`;
boolnandFunction.insertText = new vscode.SnippetString("bool.nand(${1:a}, ${2:b})");

completionItems.push(boolnandFunction);
        

var nandFunction = new vscode.CompletionItem("nand", vscode.CompletionItemKind.Function);
nandFunction.detail = `pub fn nand(a: Bool, b: Bool) -> Bool`;
nandFunction.documentation = `Returns the nand of two bools. Examples > nand(False, False) True  > nand(False, True) True  > nand(True, False) True  > nand(True, True) False`;
nandFunction.insertText = new vscode.SnippetString("nand(${1:a}, ${2:b})");

completionItems.push(nandFunction);
        

var boolnegateFunction = new vscode.CompletionItem("bool.negate", vscode.CompletionItemKind.Function);
boolnegateFunction.detail = `pub fn negate(bool: Bool) -> Bool`;
boolnegateFunction.documentation = `Returns the opposite bool value. This is the same as the ! or not operators in some other languages. Examples > negate(True) False  > negate(False) True`;
boolnegateFunction.insertText = new vscode.SnippetString("bool.negate(${1:bool})");

completionItems.push(boolnegateFunction);
        

var negateFunction = new vscode.CompletionItem("negate", vscode.CompletionItemKind.Function);
negateFunction.detail = `pub fn negate(bool: Bool) -> Bool`;
negateFunction.documentation = `Returns the opposite bool value. This is the same as the ! or not operators in some other languages. Examples > negate(True) False  > negate(False) True`;
negateFunction.insertText = new vscode.SnippetString("negate(${1:bool})");

completionItems.push(negateFunction);
        

var boolnorFunction = new vscode.CompletionItem("bool.nor", vscode.CompletionItemKind.Function);
boolnorFunction.detail = `pub fn nor(a: Bool, b: Bool) -> Bool`;
boolnorFunction.documentation = `Returns the nor of two bools. Examples > nor(False, False) True  > nor(False, True) False  > nor(True, False) False  > nor(True, True) False`;
boolnorFunction.insertText = new vscode.SnippetString("bool.nor(${1:a}, ${2:b})");

completionItems.push(boolnorFunction);
        

var norFunction = new vscode.CompletionItem("nor", vscode.CompletionItemKind.Function);
norFunction.detail = `pub fn nor(a: Bool, b: Bool) -> Bool`;
norFunction.documentation = `Returns the nor of two bools. Examples > nor(False, False) True  > nor(False, True) False  > nor(True, False) False  > nor(True, True) False`;
norFunction.insertText = new vscode.SnippetString("nor(${1:a}, ${2:b})");

completionItems.push(norFunction);
        

var boolorFunction = new vscode.CompletionItem("bool.or", vscode.CompletionItemKind.Function);
boolorFunction.detail = `pub fn or(a: Bool, b: Bool) -> Bool`;
boolorFunction.documentation = `Returns the or of two bools, but it evaluates both arguments. It’s the function equivalent of the || operator. This function is useful in higher order functions or pipes. Examples > or(True, True) True  > or(False, True) True  > False |> or(True) True`;
boolorFunction.insertText = new vscode.SnippetString("bool.or(${1:a}, ${2:b})");

completionItems.push(boolorFunction);
        

var orFunction = new vscode.CompletionItem("or", vscode.CompletionItemKind.Function);
orFunction.detail = `pub fn or(a: Bool, b: Bool) -> Bool`;
orFunction.documentation = `Returns the or of two bools, but it evaluates both arguments. It’s the function equivalent of the || operator. This function is useful in higher order functions or pipes. Examples > or(True, True) True  > or(False, True) True  > False |> or(True) True`;
orFunction.insertText = new vscode.SnippetString("or(${1:a}, ${2:b})");

completionItems.push(orFunction);
        

var booltoIntFunction = new vscode.CompletionItem("bool.to_int", vscode.CompletionItemKind.Function);
booltoIntFunction.detail = `pub fn to_int(bool: Bool) -> Int`;
booltoIntFunction.documentation = `Returns a numeric representation of the given bool. Examples > to_int(True) 1  > to_int(False) 0`;
booltoIntFunction.insertText = new vscode.SnippetString("bool.to_int(${1:bool})");

completionItems.push(booltoIntFunction);
        

var toIntFunction = new vscode.CompletionItem("to_int", vscode.CompletionItemKind.Function);
toIntFunction.detail = `pub fn to_int(bool: Bool) -> Int`;
toIntFunction.documentation = `Returns a numeric representation of the given bool. Examples > to_int(True) 1  > to_int(False) 0`;
toIntFunction.insertText = new vscode.SnippetString("to_int(${1:bool})");

completionItems.push(toIntFunction);
        

var booltoStringFunction = new vscode.CompletionItem("bool.to_string", vscode.CompletionItemKind.Function);
booltoStringFunction.detail = `pub fn to_string(bool: Bool) -> String`;
booltoStringFunction.documentation = `Returns a string representation of the given bool. Examples > to_string(True) "True"  > to_string(False) "False"`;
booltoStringFunction.insertText = new vscode.SnippetString("bool.to_string(${1:bool})");

completionItems.push(booltoStringFunction);
        

var toStringFunction = new vscode.CompletionItem("to_string", vscode.CompletionItemKind.Function);
toStringFunction.detail = `pub fn to_string(bool: Bool) -> String`;
toStringFunction.documentation = `Returns a string representation of the given bool. Examples > to_string(True) "True"  > to_string(False) "False"`;
toStringFunction.insertText = new vscode.SnippetString("to_string(${1:bool})");

completionItems.push(toStringFunction);
        

var dynamicanyFunction = new vscode.CompletionItem("dynamic.any", vscode.CompletionItemKind.Function);
dynamicanyFunction.detail = `pub fn any(of decoders: List(     fn(Dynamic) -> Result(a, List(DecodeError)),   )) -> fn(Dynamic) -> Result(a, List(DecodeError))`;
dynamicanyFunction.documentation = `Joins multiple decoders into one. When run they will each be tried in turn until one succeeds, or they all fail. Examples > import gleam/result > let bool_or_string = any(of: [ >   string, >   fn(x) { result.map(bool(x), fn(_) { "a bool" }) } > ]) > bool_or_string(from("ok")) Ok("ok")  > bool_or_string(from(True)) Ok("a bool")  > bool_or_string(from(1)) Error(DecodeError(expected: "unknown", found: "unknown", path: []))`;
dynamicanyFunction.insertText = new vscode.SnippetString("dynamic.any(${1:of decoders})");

completionItems.push(dynamicanyFunction);
        

var anyFunction = new vscode.CompletionItem("any", vscode.CompletionItemKind.Function);
anyFunction.detail = `pub fn any(of decoders: List(     fn(Dynamic) -> Result(a, List(DecodeError)),   )) -> fn(Dynamic) -> Result(a, List(DecodeError))`;
anyFunction.documentation = `Joins multiple decoders into one. When run they will each be tried in turn until one succeeds, or they all fail. Examples > import gleam/result > let bool_or_string = any(of: [ >   string, >   fn(x) { result.map(bool(x), fn(_) { "a bool" }) } > ]) > bool_or_string(from("ok")) Ok("ok")  > bool_or_string(from(True)) Ok("a bool")  > bool_or_string(from(1)) Error(DecodeError(expected: "unknown", found: "unknown", path: []))`;
anyFunction.insertText = new vscode.SnippetString("any(${1:of decoders})");

completionItems.push(anyFunction);
        

var dynamicbitStringFunction = new vscode.CompletionItem("dynamic.bit_string", vscode.CompletionItemKind.Function);
dynamicbitStringFunction.detail = `pub fn bit_string(from data: Dynamic) -> Result(   BitString,   List(DecodeError), )`;
dynamicbitStringFunction.documentation = `Checks to see whether a Dynamic value is a bit_string, and returns that bit string if it is. Examples > bit_string(from("Hello")) == bit_string.from_string("Hello") True  > bit_string(from(123)) Error([DecodeError(expected: "BitString", found: "Int", path: [])])`;
dynamicbitStringFunction.insertText = new vscode.SnippetString("dynamic.bit_string(${1:from data})");

completionItems.push(dynamicbitStringFunction);
        

var bitStringFunction = new vscode.CompletionItem("bit_string", vscode.CompletionItemKind.Function);
bitStringFunction.detail = `pub fn bit_string(from data: Dynamic) -> Result(   BitString,   List(DecodeError), )`;
bitStringFunction.documentation = `Checks to see whether a Dynamic value is a bit_string, and returns that bit string if it is. Examples > bit_string(from("Hello")) == bit_string.from_string("Hello") True  > bit_string(from(123)) Error([DecodeError(expected: "BitString", found: "Int", path: [])])`;
bitStringFunction.insertText = new vscode.SnippetString("bit_string(${1:from data})");

completionItems.push(bitStringFunction);
        

var dynamicboolFunction = new vscode.CompletionItem("dynamic.bool", vscode.CompletionItemKind.Function);
dynamicboolFunction.detail = `pub fn bool(from data: Dynamic) -> Result(Bool, List(DecodeError))`;
dynamicboolFunction.documentation = `Checks to see whether a Dynamic value is a bool, and returns that bool if it is. Examples > bool(from(True)) Ok(True)  > bool(from(123)) Error([DecodeError(expected: "bool", found: "Int", path: [])])`;
dynamicboolFunction.insertText = new vscode.SnippetString("dynamic.bool(${1:from data})");

completionItems.push(dynamicboolFunction);
        

var boolFunction = new vscode.CompletionItem("bool", vscode.CompletionItemKind.Function);
boolFunction.detail = `pub fn bool(from data: Dynamic) -> Result(Bool, List(DecodeError))`;
boolFunction.documentation = `Checks to see whether a Dynamic value is a bool, and returns that bool if it is. Examples > bool(from(True)) Ok(True)  > bool(from(123)) Error([DecodeError(expected: "bool", found: "Int", path: [])])`;
boolFunction.insertText = new vscode.SnippetString("bool(${1:from data})");

completionItems.push(boolFunction);
        

var dynamicclassifyFunction = new vscode.CompletionItem("dynamic.classify", vscode.CompletionItemKind.Function);
dynamicclassifyFunction.detail = `pub fn classify(data: Dynamic) -> String`;
dynamicclassifyFunction.documentation = `Return a string indicating the type of the dynamic value. > classify(from("Hello")) "String"`;
dynamicclassifyFunction.insertText = new vscode.SnippetString("dynamic.classify(${1:data})");

completionItems.push(dynamicclassifyFunction);
        

var classifyFunction = new vscode.CompletionItem("classify", vscode.CompletionItemKind.Function);
classifyFunction.detail = `pub fn classify(data: Dynamic) -> String`;
classifyFunction.documentation = `Return a string indicating the type of the dynamic value. > classify(from("Hello")) "String"`;
classifyFunction.insertText = new vscode.SnippetString("classify(${1:data})");

completionItems.push(classifyFunction);
        

var dynamicdecode1Function = new vscode.CompletionItem("dynamic.decode1", vscode.CompletionItemKind.Function);
dynamicdecode1Function.detail = `pub fn decode1(constructor: fn(a) -> b, t1: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(b, List(DecodeError))`;
dynamicdecode1Function.documentation = `Decode 1 values from a Dynamic value. Examples > from(#(1, 2.0, "3")) > |> decode1(MyRecord, element(0, int)) Ok(MyRecord(1))  > from(#("", "", "")) > |> decode1(MyRecord, element(0, int)) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]), ])`;
dynamicdecode1Function.insertText = new vscode.SnippetString("dynamic.decode1(${1:constructor})");

completionItems.push(dynamicdecode1Function);
        

var decode1Function = new vscode.CompletionItem("decode1", vscode.CompletionItemKind.Function);
decode1Function.detail = `pub fn decode1(constructor: fn(a) -> b, t1: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(b, List(DecodeError))`;
decode1Function.documentation = `Decode 1 values from a Dynamic value. Examples > from(#(1, 2.0, "3")) > |> decode1(MyRecord, element(0, int)) Ok(MyRecord(1))  > from(#("", "", "")) > |> decode1(MyRecord, element(0, int)) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]), ])`;
decode1Function.insertText = new vscode.SnippetString("decode1(${1:constructor})");

completionItems.push(decode1Function);
        

var dynamicdecode2Function = new vscode.CompletionItem("dynamic.decode2", vscode.CompletionItemKind.Function);
dynamicdecode2Function.detail = `pub fn decode2(constructor: fn(a, b) -> c, t1: fn(Dynamic) ->     Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(c, List(DecodeError))`;
dynamicdecode2Function.documentation = `Decode 2 values from a Dynamic value. Examples > from(#(1, 2.0, "3")) > |> decode2(MyRecord, element(0, int), element(1, float)) Ok(MyRecord(1, 2.0))  > from(#("", "", "")) > |> decode2(MyRecord, element(0, int), element(1, float)) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode2Function.insertText = new vscode.SnippetString("dynamic.decode2(${1:constructor}, ${2:b})");

completionItems.push(dynamicdecode2Function);
        

var decode2Function = new vscode.CompletionItem("decode2", vscode.CompletionItemKind.Function);
decode2Function.detail = `pub fn decode2(constructor: fn(a, b) -> c, t1: fn(Dynamic) ->     Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(c, List(DecodeError))`;
decode2Function.documentation = `Decode 2 values from a Dynamic value. Examples > from(#(1, 2.0, "3")) > |> decode2(MyRecord, element(0, int), element(1, float)) Ok(MyRecord(1, 2.0))  > from(#("", "", "")) > |> decode2(MyRecord, element(0, int), element(1, float)) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode2Function.insertText = new vscode.SnippetString("decode2(${1:constructor}, ${2:b})");

completionItems.push(decode2Function);
        

var dynamicdecode3Function = new vscode.CompletionItem("dynamic.decode3", vscode.CompletionItemKind.Function);
dynamicdecode3Function.detail = `pub fn decode3(constructor: fn(a, b, c) -> d, t1: fn(Dynamic) ->     Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError))) -> fn(Dynamic) ->   Result(d, List(DecodeError))`;
dynamicdecode3Function.documentation = `Decode 3 values from a Dynamic value. Examples > from(#(1, 2.0, "3")) > |> decode3(MyRecord, element(0, int), element(1, float), element(2, string)) Ok(MyRecord(1, 2.0, "3"))  > from(#("", "", "")) > |> decode3(MyRecord, element(0, int), element(1, float), element(2, string)) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode3Function.insertText = new vscode.SnippetString("dynamic.decode3(${1:constructor}, ${2:b}, ${3:c})");

completionItems.push(dynamicdecode3Function);
        

var decode3Function = new vscode.CompletionItem("decode3", vscode.CompletionItemKind.Function);
decode3Function.detail = `pub fn decode3(constructor: fn(a, b, c) -> d, t1: fn(Dynamic) ->     Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError))) -> fn(Dynamic) ->   Result(d, List(DecodeError))`;
decode3Function.documentation = `Decode 3 values from a Dynamic value. Examples > from(#(1, 2.0, "3")) > |> decode3(MyRecord, element(0, int), element(1, float), element(2, string)) Ok(MyRecord(1, 2.0, "3"))  > from(#("", "", "")) > |> decode3(MyRecord, element(0, int), element(1, float), element(2, string)) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode3Function.insertText = new vscode.SnippetString("decode3(${1:constructor}, ${2:b}, ${3:c})");

completionItems.push(decode3Function);
        

var dynamicdecode4Function = new vscode.CompletionItem("dynamic.decode4", vscode.CompletionItemKind.Function);
dynamicdecode4Function.detail = `pub fn decode4(constructor: fn(a, b, c, d) -> e, t1: fn(Dynamic) ->     Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError))) -> fn(Dynamic) ->   Result(e, List(DecodeError))`;
dynamicdecode4Function.documentation = `Decode 4 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4")) > |> decode4( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), > ) Ok(MyRecord(1, 2.1, "3", "4"))  > from(#("", "", "", "")) > |> decode4( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode4Function.insertText = new vscode.SnippetString("dynamic.decode4(${1:constructor}, ${2:b}, ${3:c}, ${4:d})");

completionItems.push(dynamicdecode4Function);
        

var decode4Function = new vscode.CompletionItem("decode4", vscode.CompletionItemKind.Function);
decode4Function.detail = `pub fn decode4(constructor: fn(a, b, c, d) -> e, t1: fn(Dynamic) ->     Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError))) -> fn(Dynamic) ->   Result(e, List(DecodeError))`;
decode4Function.documentation = `Decode 4 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4")) > |> decode4( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), > ) Ok(MyRecord(1, 2.1, "3", "4"))  > from(#("", "", "", "")) > |> decode4( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode4Function.insertText = new vscode.SnippetString("decode4(${1:constructor}, ${2:b}, ${3:c}, ${4:d})");

completionItems.push(decode4Function);
        

var dynamicdecode5Function = new vscode.CompletionItem("dynamic.decode5", vscode.CompletionItemKind.Function);
dynamicdecode5Function.detail = `pub fn decode5(constructor: fn(a, b, c, d, e) -> f, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError))) -> fn(Dynamic) ->   Result(f, List(DecodeError))`;
dynamicdecode5Function.documentation = `Decode 5 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5")) > |> decode5( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5"))  > from(#("", "", "", "", "")) > |> decode5( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode5Function.insertText = new vscode.SnippetString("dynamic.decode5(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e})");

completionItems.push(dynamicdecode5Function);
        

var decode5Function = new vscode.CompletionItem("decode5", vscode.CompletionItemKind.Function);
decode5Function.detail = `pub fn decode5(constructor: fn(a, b, c, d, e) -> f, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError))) -> fn(Dynamic) ->   Result(f, List(DecodeError))`;
decode5Function.documentation = `Decode 5 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5")) > |> decode5( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5"))  > from(#("", "", "", "", "")) > |> decode5( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode5Function.insertText = new vscode.SnippetString("decode5(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e})");

completionItems.push(decode5Function);
        

var dynamicdecode6Function = new vscode.CompletionItem("dynamic.decode6", vscode.CompletionItemKind.Function);
dynamicdecode6Function.detail = `pub fn decode6(constructor: fn(a, b, c, d, e, f) -> g, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError))) -> fn(Dynamic) ->   Result(g, List(DecodeError))`;
dynamicdecode6Function.documentation = `Decode 6 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6")) > |> decode6( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6"))  > from(#("", "", "", "", "", "")) > |> decode6( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode6Function.insertText = new vscode.SnippetString("dynamic.decode6(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f})");

completionItems.push(dynamicdecode6Function);
        

var decode6Function = new vscode.CompletionItem("decode6", vscode.CompletionItemKind.Function);
decode6Function.detail = `pub fn decode6(constructor: fn(a, b, c, d, e, f) -> g, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError))) -> fn(Dynamic) ->   Result(g, List(DecodeError))`;
decode6Function.documentation = `Decode 6 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6")) > |> decode6( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6"))  > from(#("", "", "", "", "", "")) > |> decode6( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode6Function.insertText = new vscode.SnippetString("decode6(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f})");

completionItems.push(decode6Function);
        

var dynamicdecode7Function = new vscode.CompletionItem("dynamic.decode7", vscode.CompletionItemKind.Function);
dynamicdecode7Function.detail = `pub fn decode7(constructor: fn(a, b, c, d, e, f, g) -> h, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError)), t7: fn(Dynamic) ->     Result(g, List(DecodeError))) -> fn(Dynamic) ->   Result(h, List(DecodeError))`;
dynamicdecode7Function.documentation = `Decode 7 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6")) > |> decode7( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6", "7"))  > from(#("", "", "", "", "", "", "")) > |> decode7( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode7Function.insertText = new vscode.SnippetString("dynamic.decode7(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f}, ${7:g})");

completionItems.push(dynamicdecode7Function);
        

var decode7Function = new vscode.CompletionItem("decode7", vscode.CompletionItemKind.Function);
decode7Function.detail = `pub fn decode7(constructor: fn(a, b, c, d, e, f, g) -> h, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError)), t7: fn(Dynamic) ->     Result(g, List(DecodeError))) -> fn(Dynamic) ->   Result(h, List(DecodeError))`;
decode7Function.documentation = `Decode 7 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6")) > |> decode7( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6", "7"))  > from(#("", "", "", "", "", "", "")) > |> decode7( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode7Function.insertText = new vscode.SnippetString("decode7(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f}, ${7:g})");

completionItems.push(decode7Function);
        

var dynamicdecode8Function = new vscode.CompletionItem("dynamic.decode8", vscode.CompletionItemKind.Function);
dynamicdecode8Function.detail = `pub fn decode8(constructor: fn(a, b, c, d, e, f, g, h) -> i, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError)), t7: fn(Dynamic) ->     Result(g, List(DecodeError)), t8: fn(Dynamic) ->     Result(h, List(DecodeError))) -> fn(Dynamic) ->   Result(i, List(DecodeError))`;
dynamicdecode8Function.documentation = `Decode 8 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6", "7", "8")) > |> decode8( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6", "7", "8"))  > from(#("", "", "", "", "", "", "", "")) > |> decode8( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode8Function.insertText = new vscode.SnippetString("dynamic.decode8(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f}, ${7:g}, ${8:h})");

completionItems.push(dynamicdecode8Function);
        

var decode8Function = new vscode.CompletionItem("decode8", vscode.CompletionItemKind.Function);
decode8Function.detail = `pub fn decode8(constructor: fn(a, b, c, d, e, f, g, h) -> i, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError)), t7: fn(Dynamic) ->     Result(g, List(DecodeError)), t8: fn(Dynamic) ->     Result(h, List(DecodeError))) -> fn(Dynamic) ->   Result(i, List(DecodeError))`;
decode8Function.documentation = `Decode 8 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6", "7", "8")) > |> decode8( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6", "7", "8"))  > from(#("", "", "", "", "", "", "", "")) > |> decode8( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode8Function.insertText = new vscode.SnippetString("decode8(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f}, ${7:g}, ${8:h})");

completionItems.push(decode8Function);
        

var dynamicdecode9Function = new vscode.CompletionItem("dynamic.decode9", vscode.CompletionItemKind.Function);
dynamicdecode9Function.detail = `pub fn decode9(constructor: fn(a, b, c, d, e, f, g, h, i) -> j, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError)), t7: fn(Dynamic) ->     Result(g, List(DecodeError)), t8: fn(Dynamic) ->     Result(h, List(DecodeError)), t9: fn(Dynamic) ->     Result(i, List(DecodeError))) -> fn(Dynamic) ->   Result(j, List(DecodeError))`;
dynamicdecode9Function.documentation = `Decode 9 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6", "7", "8", "9")) > |> decode9( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), >   element(8, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6", "7", "8", "9"))  > from(#("", "", "", "", "", "", "", "", "")) > |> decode9( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), >   element(8, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
dynamicdecode9Function.insertText = new vscode.SnippetString("dynamic.decode9(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f}, ${7:g}, ${8:h}, ${9:i})");

completionItems.push(dynamicdecode9Function);
        

var decode9Function = new vscode.CompletionItem("decode9", vscode.CompletionItemKind.Function);
decode9Function.detail = `pub fn decode9(constructor: fn(a, b, c, d, e, f, g, h, i) -> j, t1: fn(     Dynamic,   ) -> Result(a, List(DecodeError)), t2: fn(Dynamic) ->     Result(b, List(DecodeError)), t3: fn(Dynamic) ->     Result(c, List(DecodeError)), t4: fn(Dynamic) ->     Result(d, List(DecodeError)), t5: fn(Dynamic) ->     Result(e, List(DecodeError)), t6: fn(Dynamic) ->     Result(f, List(DecodeError)), t7: fn(Dynamic) ->     Result(g, List(DecodeError)), t8: fn(Dynamic) ->     Result(h, List(DecodeError)), t9: fn(Dynamic) ->     Result(i, List(DecodeError))) -> fn(Dynamic) ->   Result(j, List(DecodeError))`;
decode9Function.documentation = `Decode 9 values from a Dynamic value. Examples > from(#(1, 2.1, "3", "4", "5", "6", "7", "8", "9")) > |> decode9( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), >   element(8, string), > ) Ok(MyRecord(1, 2.1, "3", "4", "5", "6", "7", "8", "9"))  > from(#("", "", "", "", "", "", "", "", "")) > |> decode9( >   MyRecord, >   element(0, int), >   element(1, float), >   element(2, string), >   element(3, string), >   element(4, string), >   element(5, string), >   element(6, string), >   element(7, string), >   element(8, string), > ) Error([   DecodeError(expected: "Int", found: "String", path: ["0"]),   DecodeError(expected: "Float", found: "String", path: ["1"]), ])`;
decode9Function.insertText = new vscode.SnippetString("decode9(${1:constructor}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f}, ${7:g}, ${8:h}, ${9:i})");

completionItems.push(decode9Function);
        

var dynamicdynamicFunction = new vscode.CompletionItem("dynamic.dynamic", vscode.CompletionItemKind.Function);
dynamicdynamicFunction.detail = `pub fn dynamic(value: Dynamic) -> Result(   Dynamic,   List(DecodeError), )`;
dynamicdynamicFunction.documentation = `Decodes a Dynamic value from a Dynamic value. This function doesn’t seem very useful at first, but it can be convenient when you need to give a decoder function but you don’t actually care what the to-decode value is.`;
dynamicdynamicFunction.insertText = new vscode.SnippetString("dynamic.dynamic(${1:value})");

completionItems.push(dynamicdynamicFunction);
        

var dynamicFunction = new vscode.CompletionItem("dynamic", vscode.CompletionItemKind.Function);
dynamicFunction.detail = `pub fn dynamic(value: Dynamic) -> Result(   Dynamic,   List(DecodeError), )`;
dynamicFunction.documentation = `Decodes a Dynamic value from a Dynamic value. This function doesn’t seem very useful at first, but it can be convenient when you need to give a decoder function but you don’t actually care what the to-decode value is.`;
dynamicFunction.insertText = new vscode.SnippetString("dynamic(${1:value})");

completionItems.push(dynamicFunction);
        

var dynamicelementFunction = new vscode.CompletionItem("dynamic.element", vscode.CompletionItemKind.Function);
dynamicelementFunction.detail = `pub fn element(at index: Int, of inner_type: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(a, List(DecodeError))`;
dynamicelementFunction.documentation = `Checks to see if a Dynamic value is a tuple large enough to have a certain index, and returns the value of that index if it is. Examples > from(#(1, 2)) > |> element(0, int) Ok(from(1))  > from(#(1, 2)) > |> element(2, int) Error([   DecodeError(     expected: "Tuple of at least 3 elements",     found: "Tuple of 2 elements",     path: [],   ), ])`;
dynamicelementFunction.insertText = new vscode.SnippetString("dynamic.element(${1:at index}, ${2:of inner_type})");

completionItems.push(dynamicelementFunction);
        

var elementFunction = new vscode.CompletionItem("element", vscode.CompletionItemKind.Function);
elementFunction.detail = `pub fn element(at index: Int, of inner_type: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(a, List(DecodeError))`;
elementFunction.documentation = `Checks to see if a Dynamic value is a tuple large enough to have a certain index, and returns the value of that index if it is. Examples > from(#(1, 2)) > |> element(0, int) Ok(from(1))  > from(#(1, 2)) > |> element(2, int) Error([   DecodeError(     expected: "Tuple of at least 3 elements",     found: "Tuple of 2 elements",     path: [],   ), ])`;
elementFunction.insertText = new vscode.SnippetString("element(${1:at index}, ${2:of inner_type})");

completionItems.push(elementFunction);
        

var dynamicfieldFunction = new vscode.CompletionItem("dynamic.field", vscode.CompletionItemKind.Function);
dynamicfieldFunction.detail = `pub fn field(named name: a, of inner_type: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(b, List(DecodeError))`;
dynamicfieldFunction.documentation = `Checks to see if a Dynamic value is a map with a specific field, and returns the value of that field if it is. This will not succeed on a record. Examples > import gleam/map > from(map.new("Hello", "World")) > |> field(named: "Hello", of: string) Ok("World")  > from(123) > |> field("Hello", string) Error([DecodeError(expected: "Map", found: "Int", path: [])])`;
dynamicfieldFunction.insertText = new vscode.SnippetString("dynamic.field(${1:named name}, ${2:of inner_type})");

completionItems.push(dynamicfieldFunction);
        

var fieldFunction = new vscode.CompletionItem("field", vscode.CompletionItemKind.Function);
fieldFunction.detail = `pub fn field(named name: a, of inner_type: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(b, List(DecodeError))`;
fieldFunction.documentation = `Checks to see if a Dynamic value is a map with a specific field, and returns the value of that field if it is. This will not succeed on a record. Examples > import gleam/map > from(map.new("Hello", "World")) > |> field(named: "Hello", of: string) Ok("World")  > from(123) > |> field("Hello", string) Error([DecodeError(expected: "Map", found: "Int", path: [])])`;
fieldFunction.insertText = new vscode.SnippetString("field(${1:named name}, ${2:of inner_type})");

completionItems.push(fieldFunction);
        

var dynamicfloatFunction = new vscode.CompletionItem("dynamic.float", vscode.CompletionItemKind.Function);
dynamicfloatFunction.detail = `pub fn float(from data: Dynamic) -> Result(   Float,   List(DecodeError), )`;
dynamicfloatFunction.documentation = `Checks to see whether a Dynamic value is a float, and returns that float if it is. Examples > float(from(2.0)) Ok(2.0)  > float(from(123)) Error([DecodeError(expected: "Float", found: "Int", path: [])])`;
dynamicfloatFunction.insertText = new vscode.SnippetString("dynamic.float(${1:from data})");

completionItems.push(dynamicfloatFunction);
        

var floatFunction = new vscode.CompletionItem("float", vscode.CompletionItemKind.Function);
floatFunction.detail = `pub fn float(from data: Dynamic) -> Result(   Float,   List(DecodeError), )`;
floatFunction.documentation = `Checks to see whether a Dynamic value is a float, and returns that float if it is. Examples > float(from(2.0)) Ok(2.0)  > float(from(123)) Error([DecodeError(expected: "Float", found: "Int", path: [])])`;
floatFunction.insertText = new vscode.SnippetString("float(${1:from data})");

completionItems.push(floatFunction);
        

var dynamicfromFunction = new vscode.CompletionItem("dynamic.from", vscode.CompletionItemKind.Function);
dynamicfromFunction.detail = `pub fn from(a: a) -> Dynamic`;
dynamicfromFunction.documentation = `Converts any Gleam data into Dynamic data.`;
dynamicfromFunction.insertText = new vscode.SnippetString("dynamic.from(${1:a})");

completionItems.push(dynamicfromFunction);
        

var fromFunction = new vscode.CompletionItem("from", vscode.CompletionItemKind.Function);
fromFunction.detail = `pub fn from(a: a) -> Dynamic`;
fromFunction.documentation = `Converts any Gleam data into Dynamic data.`;
fromFunction.insertText = new vscode.SnippetString("from(${1:a})");

completionItems.push(fromFunction);
        

var dynamicintFunction = new vscode.CompletionItem("dynamic.int", vscode.CompletionItemKind.Function);
dynamicintFunction.detail = `pub fn int(from data: Dynamic) -> Result(Int, List(DecodeError))`;
dynamicintFunction.documentation = `Checks to see whether a Dynamic value is an int, and returns that int if it is. Examples > int(from(123)) Ok(123)  > int(from("Hello")) Error([DecodeError(expected: "Int", found: "String", path: [])])`;
dynamicintFunction.insertText = new vscode.SnippetString("dynamic.int(${1:from data})");

completionItems.push(dynamicintFunction);
        

var intFunction = new vscode.CompletionItem("int", vscode.CompletionItemKind.Function);
intFunction.detail = `pub fn int(from data: Dynamic) -> Result(Int, List(DecodeError))`;
intFunction.documentation = `Checks to see whether a Dynamic value is an int, and returns that int if it is. Examples > int(from(123)) Ok(123)  > int(from("Hello")) Error([DecodeError(expected: "Int", found: "String", path: [])])`;
intFunction.insertText = new vscode.SnippetString("int(${1:from data})");

completionItems.push(intFunction);
        

var dynamiclistFunction = new vscode.CompletionItem("dynamic.list", vscode.CompletionItemKind.Function);
dynamiclistFunction.detail = `pub fn list(of decoder_type: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(List(a), List(DecodeError))`;
dynamiclistFunction.documentation = `Checks to see whether a Dynamic value is a list of a particular type, and returns that list if it is. The second argument is a decoder function used to decode the elements of the list. The list is only decoded if all elements in the list can be successfully decoded using this function. If you do not wish to decode all the elements in the list use the shallow_list function instead. Examples > from(["a", "b", "c"]) > |> list(of: string) Ok(["a", "b", "c"])  > from([1, 2, 3]) > |> list(of: string) Error([DecodeError(expected: "String", found: "Int", path: [])])  > from("ok") > |> list(of: string) Error([DecodeError(expected: "List", found: "String", path: [])])`;
dynamiclistFunction.insertText = new vscode.SnippetString("dynamic.list(${1:of decoder_type})");

completionItems.push(dynamiclistFunction);
        

var listFunction = new vscode.CompletionItem("list", vscode.CompletionItemKind.Function);
listFunction.detail = `pub fn list(of decoder_type: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(List(a), List(DecodeError))`;
listFunction.documentation = `Checks to see whether a Dynamic value is a list of a particular type, and returns that list if it is. The second argument is a decoder function used to decode the elements of the list. The list is only decoded if all elements in the list can be successfully decoded using this function. If you do not wish to decode all the elements in the list use the shallow_list function instead. Examples > from(["a", "b", "c"]) > |> list(of: string) Ok(["a", "b", "c"])  > from([1, 2, 3]) > |> list(of: string) Error([DecodeError(expected: "String", found: "Int", path: [])])  > from("ok") > |> list(of: string) Error([DecodeError(expected: "List", found: "String", path: [])])`;
listFunction.insertText = new vscode.SnippetString("list(${1:of decoder_type})");

completionItems.push(listFunction);
        

var dynamicmapFunction = new vscode.CompletionItem("dynamic.map", vscode.CompletionItemKind.Function);
dynamicmapFunction.detail = `pub fn map(of key_type: fn(Dynamic) ->     Result(a, List(DecodeError)), to value_type: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(Map(a, b), List(DecodeError))`;
dynamicmapFunction.documentation = `Checks to see if a Dynamic value is a map. Examples > import gleam/map > map.new() |> from |> map(string, int) Ok(map.new())  > from(1) |> map(string, int) Error(DecodeError(expected: "Map", found: "Int", path: []))  > from("") |> map(string, int) Error(DecodeError(expected: "Map", found: "String", path: []))`;
dynamicmapFunction.insertText = new vscode.SnippetString("dynamic.map(${1:of key_type})");

completionItems.push(dynamicmapFunction);
        

var mapFunction = new vscode.CompletionItem("map", vscode.CompletionItemKind.Function);
mapFunction.detail = `pub fn map(of key_type: fn(Dynamic) ->     Result(a, List(DecodeError)), to value_type: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(Map(a, b), List(DecodeError))`;
mapFunction.documentation = `Checks to see if a Dynamic value is a map. Examples > import gleam/map > map.new() |> from |> map(string, int) Ok(map.new())  > from(1) |> map(string, int) Error(DecodeError(expected: "Map", found: "Int", path: []))  > from("") |> map(string, int) Error(DecodeError(expected: "Map", found: "String", path: []))`;
mapFunction.insertText = new vscode.SnippetString("map(${1:of key_type})");

completionItems.push(mapFunction);
        

var dynamicoptionalFunction = new vscode.CompletionItem("dynamic.optional", vscode.CompletionItemKind.Function);
dynamicoptionalFunction.detail = `pub fn optional(of decode: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(Option(a), List(DecodeError))`;
dynamicoptionalFunction.documentation = `Checks to see if a Dynamic value is a nullable version of a particular type, and returns a corresponding Option if it is. Examples > from("Hello") > |> optional(string) Ok(Some("Hello"))  > from("Hello") > |> optional(string) Ok(Some("Hello"))  > from(atom.from_string("null")) > |> optional(string) Ok(None)  > from(atom.from_string("nil")) > |> optional(string) Ok(None)  > from(atom.from_string("undefined")) > |> optional(string) Ok(None)  > from(123) > |> optional(string) Error([DecodeError(expected: "BitString", found: "Int", path: [])])`;
dynamicoptionalFunction.insertText = new vscode.SnippetString("dynamic.optional(${1:of decode})");

completionItems.push(dynamicoptionalFunction);
        

var optionalFunction = new vscode.CompletionItem("optional", vscode.CompletionItemKind.Function);
optionalFunction.detail = `pub fn optional(of decode: fn(Dynamic) ->     Result(a, List(DecodeError))) -> fn(Dynamic) ->   Result(Option(a), List(DecodeError))`;
optionalFunction.documentation = `Checks to see if a Dynamic value is a nullable version of a particular type, and returns a corresponding Option if it is. Examples > from("Hello") > |> optional(string) Ok(Some("Hello"))  > from("Hello") > |> optional(string) Ok(Some("Hello"))  > from(atom.from_string("null")) > |> optional(string) Ok(None)  > from(atom.from_string("nil")) > |> optional(string) Ok(None)  > from(atom.from_string("undefined")) > |> optional(string) Ok(None)  > from(123) > |> optional(string) Error([DecodeError(expected: "BitString", found: "Int", path: [])])`;
optionalFunction.insertText = new vscode.SnippetString("optional(${1:of decode})");

completionItems.push(optionalFunction);
        

var dynamicresultFunction = new vscode.CompletionItem("dynamic.result", vscode.CompletionItemKind.Function);
dynamicresultFunction.detail = `pub fn result(ok decode_ok: fn(Dynamic) ->     Result(a, List(DecodeError)), error decode_error: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(Result(a, b), List(DecodeError))`;
dynamicresultFunction.documentation = `Checks to see whether a Dynamic value is a result of a particular type, and returns that result if it is. The ok and error arguments are decoders for decoding the Ok and Error values of the result. Examples > from(Ok(1)) > |> result(ok: int, error: string) Ok(Ok(1))  > from(Error("boom")) > |> result(ok: int, error: string) Ok(Error("boom"))  > from(123) > |> result(ok: int, error: string) Error([DecodeError(expected: "2 element tuple", found: "Int", path: [])])`;
dynamicresultFunction.insertText = new vscode.SnippetString("dynamic.result(${1:ok decode_ok})");

completionItems.push(dynamicresultFunction);
        

var resultFunction = new vscode.CompletionItem("result", vscode.CompletionItemKind.Function);
resultFunction.detail = `pub fn result(ok decode_ok: fn(Dynamic) ->     Result(a, List(DecodeError)), error decode_error: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(Result(a, b), List(DecodeError))`;
resultFunction.documentation = `Checks to see whether a Dynamic value is a result of a particular type, and returns that result if it is. The ok and error arguments are decoders for decoding the Ok and Error values of the result. Examples > from(Ok(1)) > |> result(ok: int, error: string) Ok(Ok(1))  > from(Error("boom")) > |> result(ok: int, error: string) Ok(Error("boom"))  > from(123) > |> result(ok: int, error: string) Error([DecodeError(expected: "2 element tuple", found: "Int", path: [])])`;
resultFunction.insertText = new vscode.SnippetString("result(${1:ok decode_ok})");

completionItems.push(resultFunction);
        

var dynamicshallowListFunction = new vscode.CompletionItem("dynamic.shallow_list", vscode.CompletionItemKind.Function);
dynamicshallowListFunction.detail = `pub fn shallow_list(from value: Dynamic) -> Result(   List(Dynamic),   List(DecodeError), )`;
dynamicshallowListFunction.documentation = `Checks to see whether a Dynamic value is a list, and returns that list if it is. The types of the elements are not checked. If you wish to decode all the elements in the list use the list function instead. Examples > shallow_list(from(["a", "b", "c"])) Ok([from("a"), from("b"), from("c")])  > shallow_list(1) Error([DecodeError(expected: "Int", found: "Int", path: [])])`;
dynamicshallowListFunction.insertText = new vscode.SnippetString("dynamic.shallow_list(${1:from value})");

completionItems.push(dynamicshallowListFunction);
        

var shallowListFunction = new vscode.CompletionItem("shallow_list", vscode.CompletionItemKind.Function);
shallowListFunction.detail = `pub fn shallow_list(from value: Dynamic) -> Result(   List(Dynamic),   List(DecodeError), )`;
shallowListFunction.documentation = `Checks to see whether a Dynamic value is a list, and returns that list if it is. The types of the elements are not checked. If you wish to decode all the elements in the list use the list function instead. Examples > shallow_list(from(["a", "b", "c"])) Ok([from("a"), from("b"), from("c")])  > shallow_list(1) Error([DecodeError(expected: "Int", found: "Int", path: [])])`;
shallowListFunction.insertText = new vscode.SnippetString("shallow_list(${1:from value})");

completionItems.push(shallowListFunction);
        

var dynamicstringFunction = new vscode.CompletionItem("dynamic.string", vscode.CompletionItemKind.Function);
dynamicstringFunction.detail = `pub fn string(from data: Dynamic) -> Result(   String,   List(DecodeError), )`;
dynamicstringFunction.documentation = `Checks to see whether a Dynamic value is a string, and returns that string if it is. Examples > string(from("Hello")) Ok("Hello")  > string(from(123)) Error([DecodeError(expected: "String", found: "Int", path: [])])`;
dynamicstringFunction.insertText = new vscode.SnippetString("dynamic.string(${1:from data})");

completionItems.push(dynamicstringFunction);
        

var stringFunction = new vscode.CompletionItem("string", vscode.CompletionItemKind.Function);
stringFunction.detail = `pub fn string(from data: Dynamic) -> Result(   String,   List(DecodeError), )`;
stringFunction.documentation = `Checks to see whether a Dynamic value is a string, and returns that string if it is. Examples > string(from("Hello")) Ok("Hello")  > string(from(123)) Error([DecodeError(expected: "String", found: "Int", path: [])])`;
stringFunction.insertText = new vscode.SnippetString("string(${1:from data})");

completionItems.push(stringFunction);
        

var dynamictuple2Function = new vscode.CompletionItem("dynamic.tuple2", vscode.CompletionItemKind.Function);
dynamictuple2Function.detail = `pub fn tuple2(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b), List(DecodeError))`;
dynamictuple2Function.documentation = `Checks to see if a Dynamic value is a 2 element tuple containing specifically typed elements. Examples > from(#(1, 2)) > |> tuple2(int, int) Ok(#(1, 2))  > from(#(1, 2.0)) > |> tuple2(int, float) Ok(#(1, 2.0))  > from(#(1, 2, 3)) > |> tuple2(int, float) Error([   DecodeError(expected: "2 element tuple", found: "3 element tuple", path: []), ])  > from("") > |> tuple2(int, float) Error([DecodeError(expected: "2 element tuple", found: "String", path: [])])`;
dynamictuple2Function.insertText = new vscode.SnippetString("dynamic.tuple2(${1:first decode1})");

completionItems.push(dynamictuple2Function);
        

var tuple2Function = new vscode.CompletionItem("tuple2", vscode.CompletionItemKind.Function);
tuple2Function.detail = `pub fn tuple2(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b), List(DecodeError))`;
tuple2Function.documentation = `Checks to see if a Dynamic value is a 2 element tuple containing specifically typed elements. Examples > from(#(1, 2)) > |> tuple2(int, int) Ok(#(1, 2))  > from(#(1, 2.0)) > |> tuple2(int, float) Ok(#(1, 2.0))  > from(#(1, 2, 3)) > |> tuple2(int, float) Error([   DecodeError(expected: "2 element tuple", found: "3 element tuple", path: []), ])  > from("") > |> tuple2(int, float) Error([DecodeError(expected: "2 element tuple", found: "String", path: [])])`;
tuple2Function.insertText = new vscode.SnippetString("tuple2(${1:first decode1})");

completionItems.push(tuple2Function);
        

var dynamictuple3Function = new vscode.CompletionItem("dynamic.tuple3", vscode.CompletionItemKind.Function);
dynamictuple3Function.detail = `pub fn tuple3(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c), List(DecodeError))`;
dynamictuple3Function.documentation = `Checks to see if a Dynamic value is a 3-element tuple containing specifically typed elements. Examples > from(#(1, 2, 3)) > |> tuple3(int, int, int) Ok(#(1, 2, 3))  > from(#(1, 2.0, "3")) > |> tuple3(int, float, string) Ok(#(1, 2.0, "3"))  > from(#(1, 2)) > |> tuple3(int, float, string) Error([   DecodeError(expected: "3 element tuple", found: "2 element tuple", path: [])), ])  > from("") > |> tuple3(int, float, string) Error([   DecodeError(expected: "3 element tuple", found: "String", path: []), ])`;
dynamictuple3Function.insertText = new vscode.SnippetString("dynamic.tuple3(${1:first decode1})");

completionItems.push(dynamictuple3Function);
        

var tuple3Function = new vscode.CompletionItem("tuple3", vscode.CompletionItemKind.Function);
tuple3Function.detail = `pub fn tuple3(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c), List(DecodeError))`;
tuple3Function.documentation = `Checks to see if a Dynamic value is a 3-element tuple containing specifically typed elements. Examples > from(#(1, 2, 3)) > |> tuple3(int, int, int) Ok(#(1, 2, 3))  > from(#(1, 2.0, "3")) > |> tuple3(int, float, string) Ok(#(1, 2.0, "3"))  > from(#(1, 2)) > |> tuple3(int, float, string) Error([   DecodeError(expected: "3 element tuple", found: "2 element tuple", path: [])), ])  > from("") > |> tuple3(int, float, string) Error([   DecodeError(expected: "3 element tuple", found: "String", path: []), ])`;
tuple3Function.insertText = new vscode.SnippetString("tuple3(${1:first decode1})");

completionItems.push(tuple3Function);
        

var dynamictuple4Function = new vscode.CompletionItem("dynamic.tuple4", vscode.CompletionItemKind.Function);
dynamictuple4Function.detail = `pub fn tuple4(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError)), fourth decode4: fn(Dynamic) ->     Result(d, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c, d), List(DecodeError))`;
dynamictuple4Function.documentation = `Checks to see if a Dynamic value is a 4 element tuple containing specifically typed elements. Examples > from(#(1, 2, 3, 4)) > |> tuple4(int, int, int, int) Ok(#(1, 2, 3, 4))  > from(#(1, 2.0, "3", 4)) > |> tuple4(int, float, string, int) Ok(#(1, 2.0, "3", 4))  > from(#(1, 2)) > |> tuple4(int, float, string, int) Error([   DecodeError(expected: "4 element tuple", found: "2 element tuple", path: []), ])  > from("") > |> tuple4(int, float, string, int) Error([   DecodeError(expected: "4 element tuple", found: "String", path: []), ])`;
dynamictuple4Function.insertText = new vscode.SnippetString("dynamic.tuple4(${1:first decode1})");

completionItems.push(dynamictuple4Function);
        

var tuple4Function = new vscode.CompletionItem("tuple4", vscode.CompletionItemKind.Function);
tuple4Function.detail = `pub fn tuple4(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError)), fourth decode4: fn(Dynamic) ->     Result(d, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c, d), List(DecodeError))`;
tuple4Function.documentation = `Checks to see if a Dynamic value is a 4 element tuple containing specifically typed elements. Examples > from(#(1, 2, 3, 4)) > |> tuple4(int, int, int, int) Ok(#(1, 2, 3, 4))  > from(#(1, 2.0, "3", 4)) > |> tuple4(int, float, string, int) Ok(#(1, 2.0, "3", 4))  > from(#(1, 2)) > |> tuple4(int, float, string, int) Error([   DecodeError(expected: "4 element tuple", found: "2 element tuple", path: []), ])  > from("") > |> tuple4(int, float, string, int) Error([   DecodeError(expected: "4 element tuple", found: "String", path: []), ])`;
tuple4Function.insertText = new vscode.SnippetString("tuple4(${1:first decode1})");

completionItems.push(tuple4Function);
        

var dynamictuple5Function = new vscode.CompletionItem("dynamic.tuple5", vscode.CompletionItemKind.Function);
dynamictuple5Function.detail = `pub fn tuple5(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError)), fourth decode4: fn(Dynamic) ->     Result(d, List(DecodeError)), fifth decode5: fn(Dynamic) ->     Result(e, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c, d, e), List(DecodeError))`;
dynamictuple5Function.documentation = `Checks to see if a Dynamic value is a 5-element tuple containing specifically typed elements. Examples > from(#(1, 2, 3, 4, 5)) > |> tuple5(int, int, int, int, int) Ok(#(1, 2, 3, 4, 5))  > from(#(1, 2.0, "3", 4, 5)) > |> tuple5(int, float, string, int, int) Ok(#(1, 2.0, "3", 4, 5))  > from(#(1, 2)) > |> tuple5(int, float, string, int, int) Error([   DecodeError(expected: "5 element tuple", found: "2 element tuple", path: [])), ])  > from("") > |> tuple5(int, float, string, int, int) Error([DecodeError(expected: "5 element tuple", found: "String", path: [])])`;
dynamictuple5Function.insertText = new vscode.SnippetString("dynamic.tuple5(${1:first decode1})");

completionItems.push(dynamictuple5Function);
        

var tuple5Function = new vscode.CompletionItem("tuple5", vscode.CompletionItemKind.Function);
tuple5Function.detail = `pub fn tuple5(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError)), fourth decode4: fn(Dynamic) ->     Result(d, List(DecodeError)), fifth decode5: fn(Dynamic) ->     Result(e, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c, d, e), List(DecodeError))`;
tuple5Function.documentation = `Checks to see if a Dynamic value is a 5-element tuple containing specifically typed elements. Examples > from(#(1, 2, 3, 4, 5)) > |> tuple5(int, int, int, int, int) Ok(#(1, 2, 3, 4, 5))  > from(#(1, 2.0, "3", 4, 5)) > |> tuple5(int, float, string, int, int) Ok(#(1, 2.0, "3", 4, 5))  > from(#(1, 2)) > |> tuple5(int, float, string, int, int) Error([   DecodeError(expected: "5 element tuple", found: "2 element tuple", path: [])), ])  > from("") > |> tuple5(int, float, string, int, int) Error([DecodeError(expected: "5 element tuple", found: "String", path: [])])`;
tuple5Function.insertText = new vscode.SnippetString("tuple5(${1:first decode1})");

completionItems.push(tuple5Function);
        

var dynamictuple6Function = new vscode.CompletionItem("dynamic.tuple6", vscode.CompletionItemKind.Function);
dynamictuple6Function.detail = `pub fn tuple6(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError)), fourth decode4: fn(Dynamic) ->     Result(d, List(DecodeError)), fifth decode5: fn(Dynamic) ->     Result(e, List(DecodeError)), sixth decode6: fn(Dynamic) ->     Result(f, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c, d, e, f), List(DecodeError))`;
dynamictuple6Function.documentation = `Checks to see if a Dynamic value is a 6-element tuple containing specifically typed elements. Examples > from(#(1, 2, 3, 4, 5, 6)) > |> tuple6(int, int, int, int, int, int) Ok(#(1, 2, 3, 4, 5, 6))  > from(#(1, 2.0, "3", 4, 5, 6)) > |> tuple6(int, float, string, int, int) Ok(#(1, 2.0, "3", 4, 5, 6))  > from(#(1, 2)) > |> tuple6(int, float, string, int, int, int) Error([   DecodeError(expected: "6 element tuple", found: "2 element tuple", path: []), ])`;
dynamictuple6Function.insertText = new vscode.SnippetString("dynamic.tuple6(${1:first decode1})");

completionItems.push(dynamictuple6Function);
        

var tuple6Function = new vscode.CompletionItem("tuple6", vscode.CompletionItemKind.Function);
tuple6Function.detail = `pub fn tuple6(first decode1: fn(Dynamic) ->     Result(a, List(DecodeError)), second decode2: fn(Dynamic) ->     Result(b, List(DecodeError)), third decode3: fn(Dynamic) ->     Result(c, List(DecodeError)), fourth decode4: fn(Dynamic) ->     Result(d, List(DecodeError)), fifth decode5: fn(Dynamic) ->     Result(e, List(DecodeError)), sixth decode6: fn(Dynamic) ->     Result(f, List(DecodeError))) -> fn(Dynamic) ->   Result(#(a, b, c, d, e, f), List(DecodeError))`;
tuple6Function.documentation = `Checks to see if a Dynamic value is a 6-element tuple containing specifically typed elements. Examples > from(#(1, 2, 3, 4, 5, 6)) > |> tuple6(int, int, int, int, int, int) Ok(#(1, 2, 3, 4, 5, 6))  > from(#(1, 2.0, "3", 4, 5, 6)) > |> tuple6(int, float, string, int, int) Ok(#(1, 2.0, "3", 4, 5, 6))  > from(#(1, 2)) > |> tuple6(int, float, string, int, int, int) Error([   DecodeError(expected: "6 element tuple", found: "2 element tuple", path: []), ])`;
tuple6Function.insertText = new vscode.SnippetString("tuple6(${1:first decode1})");

completionItems.push(tuple6Function);
        

var dynamicunsafeCoerceFunction = new vscode.CompletionItem("dynamic.unsafe_coerce", vscode.CompletionItemKind.Function);
dynamicunsafeCoerceFunction.detail = `pub fn unsafe_coerce(a: Dynamic) -> a`;
dynamicunsafeCoerceFunction.documentation = `Unsafely casts a Dynamic value into any other type. This is an escape hatch for the type system that may be useful when wrapping native Erlang APIs. It is to be used as a last measure only! If you can avoid using this function, do!`;
dynamicunsafeCoerceFunction.insertText = new vscode.SnippetString("dynamic.unsafe_coerce(${1:a})");

completionItems.push(dynamicunsafeCoerceFunction);
        

var unsafeCoerceFunction = new vscode.CompletionItem("unsafe_coerce", vscode.CompletionItemKind.Function);
unsafeCoerceFunction.detail = `pub fn unsafe_coerce(a: Dynamic) -> a`;
unsafeCoerceFunction.documentation = `Unsafely casts a Dynamic value into any other type. This is an escape hatch for the type system that may be useful when wrapping native Erlang APIs. It is to be used as a last measure only! If you can avoid using this function, do!`;
unsafeCoerceFunction.insertText = new vscode.SnippetString("unsafe_coerce(${1:a})");

completionItems.push(unsafeCoerceFunction);
        

var floatabsoluteValueFunction = new vscode.CompletionItem("float.absolute_value", vscode.CompletionItemKind.Function);
floatabsoluteValueFunction.detail = `pub fn absolute_value(x: Float) -> Float`;
floatabsoluteValueFunction.documentation = `Returns the absolute value of the input as a Float. Examples > absolute_value(-12.5) 12.5  > absolute_value(10.2) 10.2`;
floatabsoluteValueFunction.insertText = new vscode.SnippetString("float.absolute_value(${1:x})");

completionItems.push(floatabsoluteValueFunction);
        

var absoluteValueFunction = new vscode.CompletionItem("absolute_value", vscode.CompletionItemKind.Function);
absoluteValueFunction.detail = `pub fn absolute_value(x: Float) -> Float`;
absoluteValueFunction.documentation = `Returns the absolute value of the input as a Float. Examples > absolute_value(-12.5) 12.5  > absolute_value(10.2) 10.2`;
absoluteValueFunction.insertText = new vscode.SnippetString("absolute_value(${1:x})");

completionItems.push(absoluteValueFunction);
        

var floataddFunction = new vscode.CompletionItem("float.add", vscode.CompletionItemKind.Function);
floataddFunction.detail = `pub fn add(a: Float, b: Float) -> Float`;
floataddFunction.documentation = `Adds two floats together. It’s the function equivalent of the +. operator. This function is useful in higher order functions or pipes. Examples > add(1.0, 2.0) 3.0  > import gleam/list > list.fold([1.0, 2.0, 3.0], 0.0, add) 6.0  > 3.0 |> add(2.0) 5.0`;
floataddFunction.insertText = new vscode.SnippetString("float.add(${1:a}, ${2:b})");

completionItems.push(floataddFunction);
        

var addFunction = new vscode.CompletionItem("add", vscode.CompletionItemKind.Function);
addFunction.detail = `pub fn add(a: Float, b: Float) -> Float`;
addFunction.documentation = `Adds two floats together. It’s the function equivalent of the +. operator. This function is useful in higher order functions or pipes. Examples > add(1.0, 2.0) 3.0  > import gleam/list > list.fold([1.0, 2.0, 3.0], 0.0, add) 6.0  > 3.0 |> add(2.0) 5.0`;
addFunction.insertText = new vscode.SnippetString("add(${1:a}, ${2:b})");

completionItems.push(addFunction);
        

var floatceilingFunction = new vscode.CompletionItem("float.ceiling", vscode.CompletionItemKind.Function);
floatceilingFunction.detail = `pub fn ceiling(x: Float) -> Float`;
floatceilingFunction.documentation = `Rounds the value to the next highest whole number as a Float. Examples > ceiling(2.3) 3.0`;
floatceilingFunction.insertText = new vscode.SnippetString("float.ceiling(${1:x})");

completionItems.push(floatceilingFunction);
        

var ceilingFunction = new vscode.CompletionItem("ceiling", vscode.CompletionItemKind.Function);
ceilingFunction.detail = `pub fn ceiling(x: Float) -> Float`;
ceilingFunction.documentation = `Rounds the value to the next highest whole number as a Float. Examples > ceiling(2.3) 3.0`;
ceilingFunction.insertText = new vscode.SnippetString("ceiling(${1:x})");

completionItems.push(ceilingFunction);
        

var floatclampFunction = new vscode.CompletionItem("float.clamp", vscode.CompletionItemKind.Function);
floatclampFunction.detail = `pub fn clamp(x: Float, min min_bound: Float, max max_bound: Float) -> Float`;
floatclampFunction.documentation = `Restricts a Float between a lower and upper bound. Examples > clamp(1.2, min: 1.4, max: 1.6) 1.4`;
floatclampFunction.insertText = new vscode.SnippetString("float.clamp(${1:x}, ${2:min min_bound}, ${3:max max_bound})");

completionItems.push(floatclampFunction);
        

var clampFunction = new vscode.CompletionItem("clamp", vscode.CompletionItemKind.Function);
clampFunction.detail = `pub fn clamp(x: Float, min min_bound: Float, max max_bound: Float) -> Float`;
clampFunction.documentation = `Restricts a Float between a lower and upper bound. Examples > clamp(1.2, min: 1.4, max: 1.6) 1.4`;
clampFunction.insertText = new vscode.SnippetString("clamp(${1:x}, ${2:min min_bound}, ${3:max max_bound})");

completionItems.push(clampFunction);
        

var floatcompareFunction = new vscode.CompletionItem("float.compare", vscode.CompletionItemKind.Function);
floatcompareFunction.detail = `pub fn compare(a: Float, with b: Float) -> Order`;
floatcompareFunction.documentation = `Compares two Floats, returning an Order: Lt for lower than, Eq for equals, or Gt for greater than. Examples > compare(2.0, 2.3) Lt  To handle Floating Point Imprecision you may use loosely_compare instead.`;
floatcompareFunction.insertText = new vscode.SnippetString("float.compare(${1:a}, ${2:with b})");

completionItems.push(floatcompareFunction);
        

var compareFunction = new vscode.CompletionItem("compare", vscode.CompletionItemKind.Function);
compareFunction.detail = `pub fn compare(a: Float, with b: Float) -> Order`;
compareFunction.documentation = `Compares two Floats, returning an Order: Lt for lower than, Eq for equals, or Gt for greater than. Examples > compare(2.0, 2.3) Lt  To handle Floating Point Imprecision you may use loosely_compare instead.`;
compareFunction.insertText = new vscode.SnippetString("compare(${1:a}, ${2:with b})");

completionItems.push(compareFunction);
        

var floatdivideFunction = new vscode.CompletionItem("float.divide", vscode.CompletionItemKind.Function);
floatdivideFunction.detail = `pub fn divide(a: Float, by b: Float) -> Result(Float, Nil)`;
floatdivideFunction.documentation = `Returns division of the inputs as a Result. Examples > divide(0.0, 1.0) Ok(1.0)  > divide(1.0, 0.0) Error(Nil)`;
floatdivideFunction.insertText = new vscode.SnippetString("float.divide(${1:a}, ${2:by b})");

completionItems.push(floatdivideFunction);
        

var divideFunction = new vscode.CompletionItem("divide", vscode.CompletionItemKind.Function);
divideFunction.detail = `pub fn divide(a: Float, by b: Float) -> Result(Float, Nil)`;
divideFunction.documentation = `Returns division of the inputs as a Result. Examples > divide(0.0, 1.0) Ok(1.0)  > divide(1.0, 0.0) Error(Nil)`;
divideFunction.insertText = new vscode.SnippetString("divide(${1:a}, ${2:by b})");

completionItems.push(divideFunction);
        

var floatfloorFunction = new vscode.CompletionItem("float.floor", vscode.CompletionItemKind.Function);
floatfloorFunction.detail = `pub fn floor(x: Float) -> Float`;
floatfloorFunction.documentation = `Rounds the value to the next lowest whole number as a Float. Examples > floor(2.3) 2.0`;
floatfloorFunction.insertText = new vscode.SnippetString("float.floor(${1:x})");

completionItems.push(floatfloorFunction);
        

var floorFunction = new vscode.CompletionItem("floor", vscode.CompletionItemKind.Function);
floorFunction.detail = `pub fn floor(x: Float) -> Float`;
floorFunction.documentation = `Rounds the value to the next lowest whole number as a Float. Examples > floor(2.3) 2.0`;
floorFunction.insertText = new vscode.SnippetString("floor(${1:x})");

completionItems.push(floorFunction);
        

var floatlooselyCompareFunction = new vscode.CompletionItem("float.loosely_compare", vscode.CompletionItemKind.Function);
floatlooselyCompareFunction.detail = `pub fn loosely_compare(a: Float, with b: Float, tolerating tolerance: Float) -> Order`;
floatlooselyCompareFunction.documentation = `Compares two Floats within a tolerance, returning an Order: Lt for lower than, Eq for equals, or Gt for greater than. This function allows Float comparison while handling Floating Point Imprecision. Notice: For Floats the tolerance won’t be exact: 5.3 - 5.0 is not exactly 0.3. Examples > loosely_compare(5.0, with: 5.3, tolerating: 0.5) Eq  If you want to check only for equality you may use loosely_equals instead.`;
floatlooselyCompareFunction.insertText = new vscode.SnippetString("float.loosely_compare(${1:a}, ${2:with b}, ${3:tolerating tolerance})");

completionItems.push(floatlooselyCompareFunction);
        

var looselyCompareFunction = new vscode.CompletionItem("loosely_compare", vscode.CompletionItemKind.Function);
looselyCompareFunction.detail = `pub fn loosely_compare(a: Float, with b: Float, tolerating tolerance: Float) -> Order`;
looselyCompareFunction.documentation = `Compares two Floats within a tolerance, returning an Order: Lt for lower than, Eq for equals, or Gt for greater than. This function allows Float comparison while handling Floating Point Imprecision. Notice: For Floats the tolerance won’t be exact: 5.3 - 5.0 is not exactly 0.3. Examples > loosely_compare(5.0, with: 5.3, tolerating: 0.5) Eq  If you want to check only for equality you may use loosely_equals instead.`;
looselyCompareFunction.insertText = new vscode.SnippetString("loosely_compare(${1:a}, ${2:with b}, ${3:tolerating tolerance})");

completionItems.push(looselyCompareFunction);
        

var floatlooselyEqualsFunction = new vscode.CompletionItem("float.loosely_equals", vscode.CompletionItemKind.Function);
floatlooselyEqualsFunction.detail = `pub fn loosely_equals(a: Float, with b: Float, tolerating tolerance: Float) -> Bool`;
floatlooselyEqualsFunction.documentation = `Checks for equality of two Floats within a tolerance, returning an Bool. This function allows Float comparison while handling Floating Point Imprecision. Notice: For Floats the tolerance won’t be exact: 5.3 - 5.0 is not exactly 0.3. Examples > loosely_equals(5.0, with: 5.3, tolerating: 0.5) True  > loosely_equals(5.0, with: 5.1, tolerating: 0.1) False`;
floatlooselyEqualsFunction.insertText = new vscode.SnippetString("float.loosely_equals(${1:a}, ${2:with b}, ${3:tolerating tolerance})");

completionItems.push(floatlooselyEqualsFunction);
        

var looselyEqualsFunction = new vscode.CompletionItem("loosely_equals", vscode.CompletionItemKind.Function);
looselyEqualsFunction.detail = `pub fn loosely_equals(a: Float, with b: Float, tolerating tolerance: Float) -> Bool`;
looselyEqualsFunction.documentation = `Checks for equality of two Floats within a tolerance, returning an Bool. This function allows Float comparison while handling Floating Point Imprecision. Notice: For Floats the tolerance won’t be exact: 5.3 - 5.0 is not exactly 0.3. Examples > loosely_equals(5.0, with: 5.3, tolerating: 0.5) True  > loosely_equals(5.0, with: 5.1, tolerating: 0.1) False`;
looselyEqualsFunction.insertText = new vscode.SnippetString("loosely_equals(${1:a}, ${2:with b}, ${3:tolerating tolerance})");

completionItems.push(looselyEqualsFunction);
        

var floatmaxFunction = new vscode.CompletionItem("float.max", vscode.CompletionItemKind.Function);
floatmaxFunction.detail = `pub fn max(a: Float, b: Float) -> Float`;
floatmaxFunction.documentation = `Compares two Floats, returning the larger of the two. Examples > max(2.0, 2.3) 2.3`;
floatmaxFunction.insertText = new vscode.SnippetString("float.max(${1:a}, ${2:b})");

completionItems.push(floatmaxFunction);
        

var maxFunction = new vscode.CompletionItem("max", vscode.CompletionItemKind.Function);
maxFunction.detail = `pub fn max(a: Float, b: Float) -> Float`;
maxFunction.documentation = `Compares two Floats, returning the larger of the two. Examples > max(2.0, 2.3) 2.3`;
maxFunction.insertText = new vscode.SnippetString("max(${1:a}, ${2:b})");

completionItems.push(maxFunction);
        

var floatminFunction = new vscode.CompletionItem("float.min", vscode.CompletionItemKind.Function);
floatminFunction.detail = `pub fn min(a: Float, b: Float) -> Float`;
floatminFunction.documentation = `Compares two Floats, returning the smaller of the two. Examples > min(2.0, 2.3) 2.0`;
floatminFunction.insertText = new vscode.SnippetString("float.min(${1:a}, ${2:b})");

completionItems.push(floatminFunction);
        

var minFunction = new vscode.CompletionItem("min", vscode.CompletionItemKind.Function);
minFunction.detail = `pub fn min(a: Float, b: Float) -> Float`;
minFunction.documentation = `Compares two Floats, returning the smaller of the two. Examples > min(2.0, 2.3) 2.0`;
minFunction.insertText = new vscode.SnippetString("min(${1:a}, ${2:b})");

completionItems.push(minFunction);
        

var floatmultiplyFunction = new vscode.CompletionItem("float.multiply", vscode.CompletionItemKind.Function);
floatmultiplyFunction.detail = `pub fn multiply(a: Float, b: Float) -> Float`;
floatmultiplyFunction.documentation = `Multiplies two floats together. It’s the function equivalent of the *. operator. This function is useful in higher order functions or pipes. Examples > multiply(2.0, 4.0) 8.0  import gleam/list > list.fold([2.0, 3.0, 4.0], 1.0, multiply) 24.0  > 3.0 |> multiply(2.0) 6.0`;
floatmultiplyFunction.insertText = new vscode.SnippetString("float.multiply(${1:a}, ${2:b})");

completionItems.push(floatmultiplyFunction);
        

var multiplyFunction = new vscode.CompletionItem("multiply", vscode.CompletionItemKind.Function);
multiplyFunction.detail = `pub fn multiply(a: Float, b: Float) -> Float`;
multiplyFunction.documentation = `Multiplies two floats together. It’s the function equivalent of the *. operator. This function is useful in higher order functions or pipes. Examples > multiply(2.0, 4.0) 8.0  import gleam/list > list.fold([2.0, 3.0, 4.0], 1.0, multiply) 24.0  > 3.0 |> multiply(2.0) 6.0`;
multiplyFunction.insertText = new vscode.SnippetString("multiply(${1:a}, ${2:b})");

completionItems.push(multiplyFunction);
        

var floatnegateFunction = new vscode.CompletionItem("float.negate", vscode.CompletionItemKind.Function);
floatnegateFunction.detail = `pub fn negate(x: Float) -> Float`;
floatnegateFunction.documentation = `Returns the negative of the value provided. Examples > negate(1.0) -1.0`;
floatnegateFunction.insertText = new vscode.SnippetString("float.negate(${1:x})");

completionItems.push(floatnegateFunction);
        

var negateFunction = new vscode.CompletionItem("negate", vscode.CompletionItemKind.Function);
negateFunction.detail = `pub fn negate(x: Float) -> Float`;
negateFunction.documentation = `Returns the negative of the value provided. Examples > negate(1.0) -1.0`;
negateFunction.insertText = new vscode.SnippetString("negate(${1:x})");

completionItems.push(negateFunction);
        

var floatparseFunction = new vscode.CompletionItem("float.parse", vscode.CompletionItemKind.Function);
floatparseFunction.detail = `pub fn parse(string: String) -> Result(Float, Nil)`;
floatparseFunction.documentation = `Attempts to parse a string as a Float, returning Error(Nil) if it was not possible. Examples > parse("2.3") Ok(2.3)  > parse("ABC") Error(Nil)`;
floatparseFunction.insertText = new vscode.SnippetString("float.parse(${1:string})");

completionItems.push(floatparseFunction);
        

var parseFunction = new vscode.CompletionItem("parse", vscode.CompletionItemKind.Function);
parseFunction.detail = `pub fn parse(string: String) -> Result(Float, Nil)`;
parseFunction.documentation = `Attempts to parse a string as a Float, returning Error(Nil) if it was not possible. Examples > parse("2.3") Ok(2.3)  > parse("ABC") Error(Nil)`;
parseFunction.insertText = new vscode.SnippetString("parse(${1:string})");

completionItems.push(parseFunction);
        

var floatpowerFunction = new vscode.CompletionItem("float.power", vscode.CompletionItemKind.Function);
floatpowerFunction.detail = `pub fn power(base: Float, of exponent: Float) -> Result(   Float,   Nil, )`;
floatpowerFunction.documentation = `Returns the results of the base being raised to the power of the exponent, as a Float. Examples > power(2.0, -1.0) Ok(0.5)  > power(2.0, 2.0) Ok(4.0)  > power(8.0, 1.5) Ok(22.627416997969522)  > 4.0 |> power(of: 2.0) Ok(16.0)  > power(-1.0, 0.5) Error(Nil)`;
floatpowerFunction.insertText = new vscode.SnippetString("float.power(${1:base}, ${2:of exponent})");

completionItems.push(floatpowerFunction);
        

var powerFunction = new vscode.CompletionItem("power", vscode.CompletionItemKind.Function);
powerFunction.detail = `pub fn power(base: Float, of exponent: Float) -> Result(   Float,   Nil, )`;
powerFunction.documentation = `Returns the results of the base being raised to the power of the exponent, as a Float. Examples > power(2.0, -1.0) Ok(0.5)  > power(2.0, 2.0) Ok(4.0)  > power(8.0, 1.5) Ok(22.627416997969522)  > 4.0 |> power(of: 2.0) Ok(16.0)  > power(-1.0, 0.5) Error(Nil)`;
powerFunction.insertText = new vscode.SnippetString("power(${1:base}, ${2:of exponent})");

completionItems.push(powerFunction);
        

var floatproductFunction = new vscode.CompletionItem("float.product", vscode.CompletionItemKind.Function);
floatproductFunction.detail = `pub fn product(numbers: List(Float)) -> Float`;
floatproductFunction.documentation = `Multiplies a list of Floats and returns the product. Example > product([2.5, 3.2, 4.2]) 33.6`;
floatproductFunction.insertText = new vscode.SnippetString("float.product(${1:numbers})");

completionItems.push(floatproductFunction);
        

var productFunction = new vscode.CompletionItem("product", vscode.CompletionItemKind.Function);
productFunction.detail = `pub fn product(numbers: List(Float)) -> Float`;
productFunction.documentation = `Multiplies a list of Floats and returns the product. Example > product([2.5, 3.2, 4.2]) 33.6`;
productFunction.insertText = new vscode.SnippetString("product(${1:numbers})");

completionItems.push(productFunction);
        

var floatrandomFunction = new vscode.CompletionItem("float.random", vscode.CompletionItemKind.Function);
floatrandomFunction.detail = `pub fn random(boundary_a: Float, boundary_b: Float) -> Float`;
floatrandomFunction.documentation = `Returns 0.0 if boundary_a and boundary_b are equal, otherwise returns a Float x where lower_boundary =< x < upper_boundary. Examples > random(1.0, 5.0) 2.646355926896028`;
floatrandomFunction.insertText = new vscode.SnippetString("float.random(${1:boundary_a}, ${2:boundary_b})");

completionItems.push(floatrandomFunction);
        

var randomFunction = new vscode.CompletionItem("random", vscode.CompletionItemKind.Function);
randomFunction.detail = `pub fn random(boundary_a: Float, boundary_b: Float) -> Float`;
randomFunction.documentation = `Returns 0.0 if boundary_a and boundary_b are equal, otherwise returns a Float x where lower_boundary =< x < upper_boundary. Examples > random(1.0, 5.0) 2.646355926896028`;
randomFunction.insertText = new vscode.SnippetString("random(${1:boundary_a}, ${2:boundary_b})");

completionItems.push(randomFunction);
        

var floatroundFunction = new vscode.CompletionItem("float.round", vscode.CompletionItemKind.Function);
floatroundFunction.detail = `pub fn round(x: Float) -> Int`;
floatroundFunction.documentation = `Rounds the value to the nearest whole number as an Int. Examples > round(2.3) 2  > round(2.5) 3`;
floatroundFunction.insertText = new vscode.SnippetString("float.round(${1:x})");

completionItems.push(floatroundFunction);
        

var roundFunction = new vscode.CompletionItem("round", vscode.CompletionItemKind.Function);
roundFunction.detail = `pub fn round(x: Float) -> Int`;
roundFunction.documentation = `Rounds the value to the nearest whole number as an Int. Examples > round(2.3) 2  > round(2.5) 3`;
roundFunction.insertText = new vscode.SnippetString("round(${1:x})");

completionItems.push(roundFunction);
        

var floatsquareRootFunction = new vscode.CompletionItem("float.square_root", vscode.CompletionItemKind.Function);
floatsquareRootFunction.detail = `pub fn square_root(x: Float) -> Result(Float, Nil)`;
floatsquareRootFunction.documentation = `Returns the square root of the input as a Float. Examples > square_root(4.0) Ok(2.0)  > square_root(-16.0) Error(Nil)`;
floatsquareRootFunction.insertText = new vscode.SnippetString("float.square_root(${1:x})");

completionItems.push(floatsquareRootFunction);
        

var squareRootFunction = new vscode.CompletionItem("square_root", vscode.CompletionItemKind.Function);
squareRootFunction.detail = `pub fn square_root(x: Float) -> Result(Float, Nil)`;
squareRootFunction.documentation = `Returns the square root of the input as a Float. Examples > square_root(4.0) Ok(2.0)  > square_root(-16.0) Error(Nil)`;
squareRootFunction.insertText = new vscode.SnippetString("square_root(${1:x})");

completionItems.push(squareRootFunction);
        

var floatsubtractFunction = new vscode.CompletionItem("float.subtract", vscode.CompletionItemKind.Function);
floatsubtractFunction.detail = `pub fn subtract(a: Float, b: Float) -> Float`;
floatsubtractFunction.documentation = `Subtracts one float from another. It’s the function equivalent of the -. operator. This function is useful in higher order functions or pipes. Examples > subtract(3.0, 1.0) 2.0  > import gleam/list > list.fold([1.0, 2.0, 3.0], 10.0, subtract) 4.0  > 3.0 |> subtract(_, 2.0) 1.0  > 3.0 |> subtract(2.0, _) -1.0`;
floatsubtractFunction.insertText = new vscode.SnippetString("float.subtract(${1:a}, ${2:b})");

completionItems.push(floatsubtractFunction);
        

var subtractFunction = new vscode.CompletionItem("subtract", vscode.CompletionItemKind.Function);
subtractFunction.detail = `pub fn subtract(a: Float, b: Float) -> Float`;
subtractFunction.documentation = `Subtracts one float from another. It’s the function equivalent of the -. operator. This function is useful in higher order functions or pipes. Examples > subtract(3.0, 1.0) 2.0  > import gleam/list > list.fold([1.0, 2.0, 3.0], 10.0, subtract) 4.0  > 3.0 |> subtract(_, 2.0) 1.0  > 3.0 |> subtract(2.0, _) -1.0`;
subtractFunction.insertText = new vscode.SnippetString("subtract(${1:a}, ${2:b})");

completionItems.push(subtractFunction);
        

var floatsumFunction = new vscode.CompletionItem("float.sum", vscode.CompletionItemKind.Function);
floatsumFunction.detail = `pub fn sum(numbers: List(Float)) -> Float`;
floatsumFunction.documentation = `Sums a list of Floats. Example > sum([1.0, 2.2, 3.3]) 6.5`;
floatsumFunction.insertText = new vscode.SnippetString("float.sum(${1:numbers})");

completionItems.push(floatsumFunction);
        

var sumFunction = new vscode.CompletionItem("sum", vscode.CompletionItemKind.Function);
sumFunction.detail = `pub fn sum(numbers: List(Float)) -> Float`;
sumFunction.documentation = `Sums a list of Floats. Example > sum([1.0, 2.2, 3.3]) 6.5`;
sumFunction.insertText = new vscode.SnippetString("sum(${1:numbers})");

completionItems.push(sumFunction);
        

var floattoStringFunction = new vscode.CompletionItem("float.to_string", vscode.CompletionItemKind.Function);
floattoStringFunction.detail = `pub fn to_string(x: Float) -> String`;
floattoStringFunction.documentation = `Returns the string representation of the provided Float. Examples > to_string(2.3) "2.3"`;
floattoStringFunction.insertText = new vscode.SnippetString("float.to_string(${1:x})");

completionItems.push(floattoStringFunction);
        

var toStringFunction = new vscode.CompletionItem("to_string", vscode.CompletionItemKind.Function);
toStringFunction.detail = `pub fn to_string(x: Float) -> String`;
toStringFunction.documentation = `Returns the string representation of the provided Float. Examples > to_string(2.3) "2.3"`;
toStringFunction.insertText = new vscode.SnippetString("to_string(${1:x})");

completionItems.push(toStringFunction);
        

var floattruncateFunction = new vscode.CompletionItem("float.truncate", vscode.CompletionItemKind.Function);
floattruncateFunction.detail = `pub fn truncate(x: Float) -> Int`;
floattruncateFunction.documentation = `Returns the value as an Int, truncating all decimal digits. Examples > truncate(2.4343434847383438) 2`;
floattruncateFunction.insertText = new vscode.SnippetString("float.truncate(${1:x})");

completionItems.push(floattruncateFunction);
        

var truncateFunction = new vscode.CompletionItem("truncate", vscode.CompletionItemKind.Function);
truncateFunction.detail = `pub fn truncate(x: Float) -> Int`;
truncateFunction.documentation = `Returns the value as an Int, truncating all decimal digits. Examples > truncate(2.4343434847383438) 2`;
truncateFunction.insertText = new vscode.SnippetString("truncate(${1:x})");

completionItems.push(truncateFunction);
        

var functionapply1Function = new vscode.CompletionItem("function.apply1", vscode.CompletionItemKind.Function);
functionapply1Function.detail = `pub fn apply1(fun: fn(a) -> b, arg1: a) -> b`;
functionapply1Function.documentation = `Takes a function with arity one and an argument, calls that function with the argument and returns the function return value. Useful for concisely calling functions returned as a part of a pipeline. Example > let doubler = fn() { >  fn(x: Int) { x * 2 } > } > > doubler() > |> apply1(2) 4`;
functionapply1Function.insertText = new vscode.SnippetString("function.apply1(${1:fun})");

completionItems.push(functionapply1Function);
        

var apply1Function = new vscode.CompletionItem("apply1", vscode.CompletionItemKind.Function);
apply1Function.detail = `pub fn apply1(fun: fn(a) -> b, arg1: a) -> b`;
apply1Function.documentation = `Takes a function with arity one and an argument, calls that function with the argument and returns the function return value. Useful for concisely calling functions returned as a part of a pipeline. Example > let doubler = fn() { >  fn(x: Int) { x * 2 } > } > > doubler() > |> apply1(2) 4`;
apply1Function.insertText = new vscode.SnippetString("apply1(${1:fun})");

completionItems.push(apply1Function);
        

var functionapply2Function = new vscode.CompletionItem("function.apply2", vscode.CompletionItemKind.Function);
functionapply2Function.detail = `pub fn apply2(fun: fn(a, b) -> c, arg1: a, arg2: b) -> c`;
functionapply2Function.documentation = `Takes a function with arity two and two arguments, calls that function with the arguments and returns the function return value. See apply1 for more details.`;
functionapply2Function.insertText = new vscode.SnippetString("function.apply2(${1:fun}, ${2:b})");

completionItems.push(functionapply2Function);
        

var apply2Function = new vscode.CompletionItem("apply2", vscode.CompletionItemKind.Function);
apply2Function.detail = `pub fn apply2(fun: fn(a, b) -> c, arg1: a, arg2: b) -> c`;
apply2Function.documentation = `Takes a function with arity two and two arguments, calls that function with the arguments and returns the function return value. See apply1 for more details.`;
apply2Function.insertText = new vscode.SnippetString("apply2(${1:fun}, ${2:b})");

completionItems.push(apply2Function);
        

var functionapply3Function = new vscode.CompletionItem("function.apply3", vscode.CompletionItemKind.Function);
functionapply3Function.detail = `pub fn apply3(fun: fn(a, b, c) -> d, arg1: a, arg2: b, arg3: c) -> d`;
functionapply3Function.documentation = `Takes a function with arity three and three arguments, calls that function with the arguments and returns the function return value. See apply1 for more details.`;
functionapply3Function.insertText = new vscode.SnippetString("function.apply3(${1:fun}, ${2:b}, ${3:c})");

completionItems.push(functionapply3Function);
        

var apply3Function = new vscode.CompletionItem("apply3", vscode.CompletionItemKind.Function);
apply3Function.detail = `pub fn apply3(fun: fn(a, b, c) -> d, arg1: a, arg2: b, arg3: c) -> d`;
apply3Function.documentation = `Takes a function with arity three and three arguments, calls that function with the arguments and returns the function return value. See apply1 for more details.`;
apply3Function.insertText = new vscode.SnippetString("apply3(${1:fun}, ${2:b}, ${3:c})");

completionItems.push(apply3Function);
        

var functioncomposeFunction = new vscode.CompletionItem("function.compose", vscode.CompletionItemKind.Function);
functioncomposeFunction.detail = `pub fn compose(fun1: fn(a) -> b, fun2: fn(b) -> c) -> fn(a) -> c`;
functioncomposeFunction.documentation = `Takes two functions and chains them together to form one function that takes the input from the first and returns the output of the second.`;
functioncomposeFunction.insertText = new vscode.SnippetString("function.compose(${1:fun1})");

completionItems.push(functioncomposeFunction);
        

var composeFunction = new vscode.CompletionItem("compose", vscode.CompletionItemKind.Function);
composeFunction.detail = `pub fn compose(fun1: fn(a) -> b, fun2: fn(b) -> c) -> fn(a) -> c`;
composeFunction.documentation = `Takes two functions and chains them together to form one function that takes the input from the first and returns the output of the second.`;
composeFunction.insertText = new vscode.SnippetString("compose(${1:fun1})");

completionItems.push(composeFunction);
        

var functionconstantFunction = new vscode.CompletionItem("function.constant", vscode.CompletionItemKind.Function);
functionconstantFunction.detail = `pub fn constant(value: a) -> fn(b) -> a`;
functionconstantFunction.documentation = `Takes a single argument and returns a new function that ignores its argument and always returns the input value.`;
functionconstantFunction.insertText = new vscode.SnippetString("function.constant(${1:value})");

completionItems.push(functionconstantFunction);
        

var constantFunction = new vscode.CompletionItem("constant", vscode.CompletionItemKind.Function);
constantFunction.detail = `pub fn constant(value: a) -> fn(b) -> a`;
constantFunction.documentation = `Takes a single argument and returns a new function that ignores its argument and always returns the input value.`;
constantFunction.insertText = new vscode.SnippetString("constant(${1:value})");

completionItems.push(constantFunction);
        

var functioncurry2Function = new vscode.CompletionItem("function.curry2", vscode.CompletionItemKind.Function);
functioncurry2Function.detail = `pub fn curry2(fun: fn(a, b) -> c) -> fn(a) -> fn(b) -> c`;
functioncurry2Function.documentation = `Takes a function with 2 arguments (an arity of 2), and returns the curried equivalent. fn(a, b) -> c becomes fn(a) -> fn(b) -> c. Examples Currying creates a new function that is identical to the given function except that arguments must now be supplied one by one over several function calls. It thus is the process of taking a function with n arguments and producing a sequence of n single-argument functions. Given: > fn my_fun(i: Int, s: String) -> String { ... }  …calling curry2(my_fun) would return the curried equivalent, like so: > curry2(my_fun) fn(Int) -> fn(String) -> String  Currying is useful when you want to partially apply a function with some arguments and then pass it somewhere else, for example: > import gleam/list > let multiply = curry2(fn(x, y) { x * y }) > let doubles = list.map([1, 2, 3], multiply(2)) [2, 4, 6]`;
functioncurry2Function.insertText = new vscode.SnippetString("function.curry2(${1:fun}, ${2:b})");

completionItems.push(functioncurry2Function);
        

var curry2Function = new vscode.CompletionItem("curry2", vscode.CompletionItemKind.Function);
curry2Function.detail = `pub fn curry2(fun: fn(a, b) -> c) -> fn(a) -> fn(b) -> c`;
curry2Function.documentation = `Takes a function with 2 arguments (an arity of 2), and returns the curried equivalent. fn(a, b) -> c becomes fn(a) -> fn(b) -> c. Examples Currying creates a new function that is identical to the given function except that arguments must now be supplied one by one over several function calls. It thus is the process of taking a function with n arguments and producing a sequence of n single-argument functions. Given: > fn my_fun(i: Int, s: String) -> String { ... }  …calling curry2(my_fun) would return the curried equivalent, like so: > curry2(my_fun) fn(Int) -> fn(String) -> String  Currying is useful when you want to partially apply a function with some arguments and then pass it somewhere else, for example: > import gleam/list > let multiply = curry2(fn(x, y) { x * y }) > let doubles = list.map([1, 2, 3], multiply(2)) [2, 4, 6]`;
curry2Function.insertText = new vscode.SnippetString("curry2(${1:fun}, ${2:b})");

completionItems.push(curry2Function);
        

var functioncurry3Function = new vscode.CompletionItem("function.curry3", vscode.CompletionItemKind.Function);
functioncurry3Function.detail = `pub fn curry3(fun: fn(a, b, c) -> d) -> fn(a) ->   fn(b) -> fn(c) -> d`;
functioncurry3Function.documentation = `Takes a function with 3 arguments (an arity of 3), and returns the curried equivalent. fn(a, b, c) -> d becomes fn(a) -> fn(b) -> fn(c) -> d. See curry2 for a detailed explanation.`;
functioncurry3Function.insertText = new vscode.SnippetString("function.curry3(${1:fun}, ${2:b}, ${3:c})");

completionItems.push(functioncurry3Function);
        

var curry3Function = new vscode.CompletionItem("curry3", vscode.CompletionItemKind.Function);
curry3Function.detail = `pub fn curry3(fun: fn(a, b, c) -> d) -> fn(a) ->   fn(b) -> fn(c) -> d`;
curry3Function.documentation = `Takes a function with 3 arguments (an arity of 3), and returns the curried equivalent. fn(a, b, c) -> d becomes fn(a) -> fn(b) -> fn(c) -> d. See curry2 for a detailed explanation.`;
curry3Function.insertText = new vscode.SnippetString("curry3(${1:fun}, ${2:b}, ${3:c})");

completionItems.push(curry3Function);
        

var functioncurry4Function = new vscode.CompletionItem("function.curry4", vscode.CompletionItemKind.Function);
functioncurry4Function.detail = `pub fn curry4(fun: fn(a, b, c, d) -> e) -> fn(a) ->   fn(b) -> fn(c) -> fn(d) -> e`;
functioncurry4Function.documentation = `Takes a function with 4 arguments (an arity of 4), and returns the curried equivalent. fn(a, b, c, d) -> e becomes fn(a) -> fn(b) -> fn(c) -> fn(d) -> e. See curry2 for a detailed explanation.`;
functioncurry4Function.insertText = new vscode.SnippetString("function.curry4(${1:fun}, ${2:b}, ${3:c}, ${4:d})");

completionItems.push(functioncurry4Function);
        

var curry4Function = new vscode.CompletionItem("curry4", vscode.CompletionItemKind.Function);
curry4Function.detail = `pub fn curry4(fun: fn(a, b, c, d) -> e) -> fn(a) ->   fn(b) -> fn(c) -> fn(d) -> e`;
curry4Function.documentation = `Takes a function with 4 arguments (an arity of 4), and returns the curried equivalent. fn(a, b, c, d) -> e becomes fn(a) -> fn(b) -> fn(c) -> fn(d) -> e. See curry2 for a detailed explanation.`;
curry4Function.insertText = new vscode.SnippetString("curry4(${1:fun}, ${2:b}, ${3:c}, ${4:d})");

completionItems.push(curry4Function);
        

var functioncurry5Function = new vscode.CompletionItem("function.curry5", vscode.CompletionItemKind.Function);
functioncurry5Function.detail = `pub fn curry5(fun: fn(a, b, c, d, e) -> f) -> fn(a) ->   fn(b) -> fn(c) -> fn(d) -> fn(e) -> f`;
functioncurry5Function.documentation = `Takes a function with 5 arguments (an arity of 5), and returns the curried equivalent. fn(a, b, c, d, e) -> f becomes fn(a) -> fn(b) -> fn(c) -> fn(d) -> fn(e) -> f. See curry2 for a detailed explanation.`;
functioncurry5Function.insertText = new vscode.SnippetString("function.curry5(${1:fun}, ${2:b}, ${3:c}, ${4:d}, ${5:e})");

completionItems.push(functioncurry5Function);
        

var curry5Function = new vscode.CompletionItem("curry5", vscode.CompletionItemKind.Function);
curry5Function.detail = `pub fn curry5(fun: fn(a, b, c, d, e) -> f) -> fn(a) ->   fn(b) -> fn(c) -> fn(d) -> fn(e) -> f`;
curry5Function.documentation = `Takes a function with 5 arguments (an arity of 5), and returns the curried equivalent. fn(a, b, c, d, e) -> f becomes fn(a) -> fn(b) -> fn(c) -> fn(d) -> fn(e) -> f. See curry2 for a detailed explanation.`;
curry5Function.insertText = new vscode.SnippetString("curry5(${1:fun}, ${2:b}, ${3:c}, ${4:d}, ${5:e})");

completionItems.push(curry5Function);
        

var functioncurry6Function = new vscode.CompletionItem("function.curry6", vscode.CompletionItemKind.Function);
functioncurry6Function.detail = `pub fn curry6(fun: fn(a, b, c, d, e, f) -> g) -> fn(a) ->   fn(b) -> fn(c) -> fn(d) -> fn(e) -> fn(f) -> g`;
functioncurry6Function.documentation = `Takes a function with 6 arguments (an arity of 6), and returns the curried equivalent. fn(a, b, c, d, e, f) -> g becomes fn(a) -> fn(b) -> fn(c) -> fn(d) -> fn(e) -> fn(f) -> g. See curry2 for a detailed explanation.`;
functioncurry6Function.insertText = new vscode.SnippetString("function.curry6(${1:fun}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f})");

completionItems.push(functioncurry6Function);
        

var curry6Function = new vscode.CompletionItem("curry6", vscode.CompletionItemKind.Function);
curry6Function.detail = `pub fn curry6(fun: fn(a, b, c, d, e, f) -> g) -> fn(a) ->   fn(b) -> fn(c) -> fn(d) -> fn(e) -> fn(f) -> g`;
curry6Function.documentation = `Takes a function with 6 arguments (an arity of 6), and returns the curried equivalent. fn(a, b, c, d, e, f) -> g becomes fn(a) -> fn(b) -> fn(c) -> fn(d) -> fn(e) -> fn(f) -> g. See curry2 for a detailed explanation.`;
curry6Function.insertText = new vscode.SnippetString("curry6(${1:fun}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f})");

completionItems.push(curry6Function);
        

var functionflipFunction = new vscode.CompletionItem("function.flip", vscode.CompletionItemKind.Function);
functionflipFunction.detail = `pub fn flip(fun: fn(a, b) -> c) -> fn(b, a) -> c`;
functionflipFunction.documentation = `Takes a function that takes two arguments and returns a new function that takes the same two arguments, but in reverse order.`;
functionflipFunction.insertText = new vscode.SnippetString("function.flip(${1:fun}, ${2:b})");

completionItems.push(functionflipFunction);
        

var flipFunction = new vscode.CompletionItem("flip", vscode.CompletionItemKind.Function);
flipFunction.detail = `pub fn flip(fun: fn(a, b) -> c) -> fn(b, a) -> c`;
flipFunction.documentation = `Takes a function that takes two arguments and returns a new function that takes the same two arguments, but in reverse order.`;
flipFunction.insertText = new vscode.SnippetString("flip(${1:fun}, ${2:b})");

completionItems.push(flipFunction);
        

var functionidentityFunction = new vscode.CompletionItem("function.identity", vscode.CompletionItemKind.Function);
functionidentityFunction.detail = `pub fn identity(x: a) -> a`;
functionidentityFunction.documentation = `Takes a single argument and always returns its input value.`;
functionidentityFunction.insertText = new vscode.SnippetString("function.identity(${1:x})");

completionItems.push(functionidentityFunction);
        

var identityFunction = new vscode.CompletionItem("identity", vscode.CompletionItemKind.Function);
identityFunction.detail = `pub fn identity(x: a) -> a`;
identityFunction.documentation = `Takes a single argument and always returns its input value.`;
identityFunction.insertText = new vscode.SnippetString("identity(${1:x})");

completionItems.push(identityFunction);
        

var functiontapFunction = new vscode.CompletionItem("function.tap", vscode.CompletionItemKind.Function);
functiontapFunction.detail = `pub fn tap(arg: a, effect: fn(a) -> b) -> a`;
functiontapFunction.documentation = `Takes an argument and a single function, calls that function with that argument and returns that argument instead of the function return value. Useful for running synchronous side effects in a pipeline.`;
functiontapFunction.insertText = new vscode.SnippetString("function.tap(${1:arg}, ${2:effect})");

completionItems.push(functiontapFunction);
        

var tapFunction = new vscode.CompletionItem("tap", vscode.CompletionItemKind.Function);
tapFunction.detail = `pub fn tap(arg: a, effect: fn(a) -> b) -> a`;
tapFunction.documentation = `Takes an argument and a single function, calls that function with that argument and returns that argument instead of the function return value. Useful for running synchronous side effects in a pipeline.`;
tapFunction.insertText = new vscode.SnippetString("tap(${1:arg}, ${2:effect})");

completionItems.push(tapFunction);
        

var intabsoluteValueFunction = new vscode.CompletionItem("int.absolute_value", vscode.CompletionItemKind.Function);
intabsoluteValueFunction.detail = `pub fn absolute_value(x: Int) -> Int`;
intabsoluteValueFunction.documentation = `Returns the absolute value of the input. Examples > absolute_value(-12) 12  > absolute_value(10) 10`;
intabsoluteValueFunction.insertText = new vscode.SnippetString("int.absolute_value(${1:x})");

completionItems.push(intabsoluteValueFunction);
        

var absoluteValueFunction = new vscode.CompletionItem("absolute_value", vscode.CompletionItemKind.Function);
absoluteValueFunction.detail = `pub fn absolute_value(x: Int) -> Int`;
absoluteValueFunction.documentation = `Returns the absolute value of the input. Examples > absolute_value(-12) 12  > absolute_value(10) 10`;
absoluteValueFunction.insertText = new vscode.SnippetString("absolute_value(${1:x})");

completionItems.push(absoluteValueFunction);
        

var intaddFunction = new vscode.CompletionItem("int.add", vscode.CompletionItemKind.Function);
intaddFunction.detail = `pub fn add(a: Int, b: Int) -> Int`;
intaddFunction.documentation = `Adds two integers together. It’s the function equivalent of the + operator. This function is useful in higher order functions or pipes. Examples > add(1, 2) 3  import gleam/list > list.fold([1, 2, 3], 0, add) 6  > 3 |> add(2) 5`;
intaddFunction.insertText = new vscode.SnippetString("int.add(${1:a}, ${2:b})");

completionItems.push(intaddFunction);
        

var addFunction = new vscode.CompletionItem("add", vscode.CompletionItemKind.Function);
addFunction.detail = `pub fn add(a: Int, b: Int) -> Int`;
addFunction.documentation = `Adds two integers together. It’s the function equivalent of the + operator. This function is useful in higher order functions or pipes. Examples > add(1, 2) 3  import gleam/list > list.fold([1, 2, 3], 0, add) 6  > 3 |> add(2) 5`;
addFunction.insertText = new vscode.SnippetString("add(${1:a}, ${2:b})");

completionItems.push(addFunction);
        

var intbaseParseFunction = new vscode.CompletionItem("int.base_parse", vscode.CompletionItemKind.Function);
intbaseParseFunction.detail = `pub fn base_parse(string: String, base: Int) -> Result(Int, Nil)`;
intbaseParseFunction.documentation = `Parses a given string as an int in a given base if possible. Supports only bases 2 to 36, for values outside of which this function returns an Error(Nil). Examples > base_parse("10", 2) Ok(2)  > base_parse("30", 16) Ok(48)  > base_parse("1C", 36) Ok(48)  > base_parse("48", 1) Error(Nil)  > base_parse("48", 37) Error(Nil)`;
intbaseParseFunction.insertText = new vscode.SnippetString("int.base_parse(${1:string}, ${2:base})");

completionItems.push(intbaseParseFunction);
        

var baseParseFunction = new vscode.CompletionItem("base_parse", vscode.CompletionItemKind.Function);
baseParseFunction.detail = `pub fn base_parse(string: String, base: Int) -> Result(Int, Nil)`;
baseParseFunction.documentation = `Parses a given string as an int in a given base if possible. Supports only bases 2 to 36, for values outside of which this function returns an Error(Nil). Examples > base_parse("10", 2) Ok(2)  > base_parse("30", 16) Ok(48)  > base_parse("1C", 36) Ok(48)  > base_parse("48", 1) Error(Nil)  > base_parse("48", 37) Error(Nil)`;
baseParseFunction.insertText = new vscode.SnippetString("base_parse(${1:string}, ${2:base})");

completionItems.push(baseParseFunction);
        

var intclampFunction = new vscode.CompletionItem("int.clamp", vscode.CompletionItemKind.Function);
intclampFunction.detail = `pub fn clamp(x: Int, min min_bound: Int, max max_bound: Int) -> Int`;
intclampFunction.documentation = `Restricts an int between a lower and upper bound. Examples > clamp(40, min: 50, max: 60) 50`;
intclampFunction.insertText = new vscode.SnippetString("int.clamp(${1:x}, ${2:min min_bound}, ${3:max max_bound})");

completionItems.push(intclampFunction);
        

var clampFunction = new vscode.CompletionItem("clamp", vscode.CompletionItemKind.Function);
clampFunction.detail = `pub fn clamp(x: Int, min min_bound: Int, max max_bound: Int) -> Int`;
clampFunction.documentation = `Restricts an int between a lower and upper bound. Examples > clamp(40, min: 50, max: 60) 50`;
clampFunction.insertText = new vscode.SnippetString("clamp(${1:x}, ${2:min min_bound}, ${3:max max_bound})");

completionItems.push(clampFunction);
        

var intcompareFunction = new vscode.CompletionItem("int.compare", vscode.CompletionItemKind.Function);
intcompareFunction.detail = `pub fn compare(a: Int, with b: Int) -> Order`;
intcompareFunction.documentation = `Compares two ints, returning an order. Examples > compare(2, 3) Lt  > compare(4, 3) Gt  > compare(3, 3) Eq`;
intcompareFunction.insertText = new vscode.SnippetString("int.compare(${1:a}, ${2:with b})");

completionItems.push(intcompareFunction);
        

var compareFunction = new vscode.CompletionItem("compare", vscode.CompletionItemKind.Function);
compareFunction.detail = `pub fn compare(a: Int, with b: Int) -> Order`;
compareFunction.documentation = `Compares two ints, returning an order. Examples > compare(2, 3) Lt  > compare(4, 3) Gt  > compare(3, 3) Eq`;
compareFunction.insertText = new vscode.SnippetString("compare(${1:a}, ${2:with b})");

completionItems.push(compareFunction);
        

var intdigitsFunction = new vscode.CompletionItem("int.digits", vscode.CompletionItemKind.Function);
intdigitsFunction.detail = `pub fn digits(x: Int, base: Int) -> Result(List(Int), InvalidBase)`;
intdigitsFunction.documentation = `Splits an integer into its digit representation in the specified base Examples > digits(234, 10) Ok([2,3,4])  > digits(234, 1) Error(InvalidBase)`;
intdigitsFunction.insertText = new vscode.SnippetString("int.digits(${1:x}, ${2:base})");

completionItems.push(intdigitsFunction);
        

var digitsFunction = new vscode.CompletionItem("digits", vscode.CompletionItemKind.Function);
digitsFunction.detail = `pub fn digits(x: Int, base: Int) -> Result(List(Int), InvalidBase)`;
digitsFunction.documentation = `Splits an integer into its digit representation in the specified base Examples > digits(234, 10) Ok([2,3,4])  > digits(234, 1) Error(InvalidBase)`;
digitsFunction.insertText = new vscode.SnippetString("digits(${1:x}, ${2:base})");

completionItems.push(digitsFunction);
        

var intdivideFunction = new vscode.CompletionItem("int.divide", vscode.CompletionItemKind.Function);
intdivideFunction.detail = `pub fn divide(dividend: Int, by divisor: Int) -> Result(Int, Nil)`;
intdivideFunction.documentation = `Performs a truncated integer division. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Examples > divide(0, 1) Ok(1)  > divide(1, 0) Error(Nil)  > divide(5, 2) Ok(2)  > divide(-99, 2) Ok(-49)`;
intdivideFunction.insertText = new vscode.SnippetString("int.divide(${1:dividend}, ${2:by divisor})");

completionItems.push(intdivideFunction);
        

var divideFunction = new vscode.CompletionItem("divide", vscode.CompletionItemKind.Function);
divideFunction.detail = `pub fn divide(dividend: Int, by divisor: Int) -> Result(Int, Nil)`;
divideFunction.documentation = `Performs a truncated integer division. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Examples > divide(0, 1) Ok(1)  > divide(1, 0) Error(Nil)  > divide(5, 2) Ok(2)  > divide(-99, 2) Ok(-49)`;
divideFunction.insertText = new vscode.SnippetString("divide(${1:dividend}, ${2:by divisor})");

completionItems.push(divideFunction);
        

var intfloorDivideFunction = new vscode.CompletionItem("int.floor_divide", vscode.CompletionItemKind.Function);
intfloorDivideFunction.detail = `pub fn floor_divide(dividend: Int, by divisor: Int) -> Result(   Int,   Nil, )`;
intfloorDivideFunction.documentation = `Performs a floored integer division, which means that the result will always be rounded towards negative infinity. If you want to perform truncated integer division (rounding towards zero), use int.divide() or the / operator instead. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Examples > floor_divide(1, 0) Error(Nil)  > floor_divide(5, 2) Ok(2)  > floor_divide(6, -4) Ok(-2)  > floor_divide(-99, 2) Ok(-50)`;
intfloorDivideFunction.insertText = new vscode.SnippetString("int.floor_divide(${1:dividend}, ${2:by divisor})");

completionItems.push(intfloorDivideFunction);
        

var floorDivideFunction = new vscode.CompletionItem("floor_divide", vscode.CompletionItemKind.Function);
floorDivideFunction.detail = `pub fn floor_divide(dividend: Int, by divisor: Int) -> Result(   Int,   Nil, )`;
floorDivideFunction.documentation = `Performs a floored integer division, which means that the result will always be rounded towards negative infinity. If you want to perform truncated integer division (rounding towards zero), use int.divide() or the / operator instead. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Examples > floor_divide(1, 0) Error(Nil)  > floor_divide(5, 2) Ok(2)  > floor_divide(6, -4) Ok(-2)  > floor_divide(-99, 2) Ok(-50)`;
floorDivideFunction.insertText = new vscode.SnippetString("floor_divide(${1:dividend}, ${2:by divisor})");

completionItems.push(floorDivideFunction);
        

var intisEvenFunction = new vscode.CompletionItem("int.is_even", vscode.CompletionItemKind.Function);
intisEvenFunction.detail = `pub fn is_even(x: Int) -> Bool`;
intisEvenFunction.documentation = `Returns whether the value provided is even. Examples > is_even(2) True  > is_even(3) False`;
intisEvenFunction.insertText = new vscode.SnippetString("int.is_even(${1:x})");

completionItems.push(intisEvenFunction);
        

var isEvenFunction = new vscode.CompletionItem("is_even", vscode.CompletionItemKind.Function);
isEvenFunction.detail = `pub fn is_even(x: Int) -> Bool`;
isEvenFunction.documentation = `Returns whether the value provided is even. Examples > is_even(2) True  > is_even(3) False`;
isEvenFunction.insertText = new vscode.SnippetString("is_even(${1:x})");

completionItems.push(isEvenFunction);
        

var intisOddFunction = new vscode.CompletionItem("int.is_odd", vscode.CompletionItemKind.Function);
intisOddFunction.detail = `pub fn is_odd(x: Int) -> Bool`;
intisOddFunction.documentation = `Returns whether the value provided is odd. Examples > is_odd(3) True  > is_odd(2) False`;
intisOddFunction.insertText = new vscode.SnippetString("int.is_odd(${1:x})");

completionItems.push(intisOddFunction);
        

var isOddFunction = new vscode.CompletionItem("is_odd", vscode.CompletionItemKind.Function);
isOddFunction.detail = `pub fn is_odd(x: Int) -> Bool`;
isOddFunction.documentation = `Returns whether the value provided is odd. Examples > is_odd(3) True  > is_odd(2) False`;
isOddFunction.insertText = new vscode.SnippetString("is_odd(${1:x})");

completionItems.push(isOddFunction);
        

var intmaxFunction = new vscode.CompletionItem("int.max", vscode.CompletionItemKind.Function);
intmaxFunction.detail = `pub fn max(a: Int, b: Int) -> Int`;
intmaxFunction.documentation = `Compares two ints, returning the larger of the two. Examples > max(2, 3) 3`;
intmaxFunction.insertText = new vscode.SnippetString("int.max(${1:a}, ${2:b})");

completionItems.push(intmaxFunction);
        

var maxFunction = new vscode.CompletionItem("max", vscode.CompletionItemKind.Function);
maxFunction.detail = `pub fn max(a: Int, b: Int) -> Int`;
maxFunction.documentation = `Compares two ints, returning the larger of the two. Examples > max(2, 3) 3`;
maxFunction.insertText = new vscode.SnippetString("max(${1:a}, ${2:b})");

completionItems.push(maxFunction);
        

var intminFunction = new vscode.CompletionItem("int.min", vscode.CompletionItemKind.Function);
intminFunction.detail = `pub fn min(a: Int, b: Int) -> Int`;
intminFunction.documentation = `Compares two ints, returning the smaller of the two. Examples > min(2, 3) 2`;
intminFunction.insertText = new vscode.SnippetString("int.min(${1:a}, ${2:b})");

completionItems.push(intminFunction);
        

var minFunction = new vscode.CompletionItem("min", vscode.CompletionItemKind.Function);
minFunction.detail = `pub fn min(a: Int, b: Int) -> Int`;
minFunction.documentation = `Compares two ints, returning the smaller of the two. Examples > min(2, 3) 2`;
minFunction.insertText = new vscode.SnippetString("min(${1:a}, ${2:b})");

completionItems.push(minFunction);
        

var intmoduloFunction = new vscode.CompletionItem("int.modulo", vscode.CompletionItemKind.Function);
intmoduloFunction.detail = `pub fn modulo(dividend: Int, by divisor: Int) -> Result(Int, Nil)`;
intmoduloFunction.documentation = `Computes the modulo of an integer division of inputs as a Result. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Most the time you will want to use the % operator instead of this function. Examples > modulo(3, 2) Ok(1)  > modulo(1, 0) Error(Nil)  > modulo(10, -1) Ok(0)  > modulo(13, by: 3) Ok(1)  > modulo(-13, by: 3) Ok(2)  > modulo(13, by: -3) Ok(-2)  > modulo(-13, by: -3) Ok(-1)`;
intmoduloFunction.insertText = new vscode.SnippetString("int.modulo(${1:dividend}, ${2:by divisor})");

completionItems.push(intmoduloFunction);
        

var moduloFunction = new vscode.CompletionItem("modulo", vscode.CompletionItemKind.Function);
moduloFunction.detail = `pub fn modulo(dividend: Int, by divisor: Int) -> Result(Int, Nil)`;
moduloFunction.documentation = `Computes the modulo of an integer division of inputs as a Result. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Most the time you will want to use the % operator instead of this function. Examples > modulo(3, 2) Ok(1)  > modulo(1, 0) Error(Nil)  > modulo(10, -1) Ok(0)  > modulo(13, by: 3) Ok(1)  > modulo(-13, by: 3) Ok(2)  > modulo(13, by: -3) Ok(-2)  > modulo(-13, by: -3) Ok(-1)`;
moduloFunction.insertText = new vscode.SnippetString("modulo(${1:dividend}, ${2:by divisor})");

completionItems.push(moduloFunction);
        

var intmultiplyFunction = new vscode.CompletionItem("int.multiply", vscode.CompletionItemKind.Function);
intmultiplyFunction.detail = `pub fn multiply(a: Int, b: Int) -> Int`;
intmultiplyFunction.documentation = `Multiplies two integers together. It’s the function equivalent of the * operator. This function is useful in higher order functions or pipes. Examples > multiply(2, 4) 8  import gleam/list > list.fold([2, 3, 4], 1, multiply) 24  > 3 |> multiply(2) 6`;
intmultiplyFunction.insertText = new vscode.SnippetString("int.multiply(${1:a}, ${2:b})");

completionItems.push(intmultiplyFunction);
        

var multiplyFunction = new vscode.CompletionItem("multiply", vscode.CompletionItemKind.Function);
multiplyFunction.detail = `pub fn multiply(a: Int, b: Int) -> Int`;
multiplyFunction.documentation = `Multiplies two integers together. It’s the function equivalent of the * operator. This function is useful in higher order functions or pipes. Examples > multiply(2, 4) 8  import gleam/list > list.fold([2, 3, 4], 1, multiply) 24  > 3 |> multiply(2) 6`;
multiplyFunction.insertText = new vscode.SnippetString("multiply(${1:a}, ${2:b})");

completionItems.push(multiplyFunction);
        

var intnegateFunction = new vscode.CompletionItem("int.negate", vscode.CompletionItemKind.Function);
intnegateFunction.detail = `pub fn negate(x: Int) -> Int`;
intnegateFunction.documentation = `Returns the negative of the value provided. Examples > negate(1) -1`;
intnegateFunction.insertText = new vscode.SnippetString("int.negate(${1:x})");

completionItems.push(intnegateFunction);
        

var negateFunction = new vscode.CompletionItem("negate", vscode.CompletionItemKind.Function);
negateFunction.detail = `pub fn negate(x: Int) -> Int`;
negateFunction.documentation = `Returns the negative of the value provided. Examples > negate(1) -1`;
negateFunction.insertText = new vscode.SnippetString("negate(${1:x})");

completionItems.push(negateFunction);
        

var intparseFunction = new vscode.CompletionItem("int.parse", vscode.CompletionItemKind.Function);
intparseFunction.detail = `pub fn parse(string: String) -> Result(Int, Nil)`;
intparseFunction.documentation = `Parses a given string as an int if possible. Examples > parse("2") Ok(2)  > parse("ABC") Error(Nil)`;
intparseFunction.insertText = new vscode.SnippetString("int.parse(${1:string})");

completionItems.push(intparseFunction);
        

var parseFunction = new vscode.CompletionItem("parse", vscode.CompletionItemKind.Function);
parseFunction.detail = `pub fn parse(string: String) -> Result(Int, Nil)`;
parseFunction.documentation = `Parses a given string as an int if possible. Examples > parse("2") Ok(2)  > parse("ABC") Error(Nil)`;
parseFunction.insertText = new vscode.SnippetString("parse(${1:string})");

completionItems.push(parseFunction);
        

var intpowerFunction = new vscode.CompletionItem("int.power", vscode.CompletionItemKind.Function);
intpowerFunction.detail = `pub fn power(base: Int, of exponent: Float) -> Result(Float, Nil)`;
intpowerFunction.documentation = `Returns the results of the base being raised to the power of the exponent, as a Float. Examples > power(2, -1.0) Ok(0.5)  > power(2, 2.0) Ok(4.0)  > power(8, 1.5) Ok(22.627416997969522)  > 4 |> power(of: 2.0) Ok(16.0)  > power(-1, 0.5) Error(Nil)`;
intpowerFunction.insertText = new vscode.SnippetString("int.power(${1:base}, ${2:of exponent})");

completionItems.push(intpowerFunction);
        

var powerFunction = new vscode.CompletionItem("power", vscode.CompletionItemKind.Function);
powerFunction.detail = `pub fn power(base: Int, of exponent: Float) -> Result(Float, Nil)`;
powerFunction.documentation = `Returns the results of the base being raised to the power of the exponent, as a Float. Examples > power(2, -1.0) Ok(0.5)  > power(2, 2.0) Ok(4.0)  > power(8, 1.5) Ok(22.627416997969522)  > 4 |> power(of: 2.0) Ok(16.0)  > power(-1, 0.5) Error(Nil)`;
powerFunction.insertText = new vscode.SnippetString("power(${1:base}, ${2:of exponent})");

completionItems.push(powerFunction);
        

var intproductFunction = new vscode.CompletionItem("int.product", vscode.CompletionItemKind.Function);
intproductFunction.detail = `pub fn product(numbers: List(Int)) -> Int`;
intproductFunction.documentation = `Multiplies a list of ints and returns the product. Example > product([2, 3, 4]) 24`;
intproductFunction.insertText = new vscode.SnippetString("int.product(${1:numbers})");

completionItems.push(intproductFunction);
        

var productFunction = new vscode.CompletionItem("product", vscode.CompletionItemKind.Function);
productFunction.detail = `pub fn product(numbers: List(Int)) -> Int`;
productFunction.documentation = `Multiplies a list of ints and returns the product. Example > product([2, 3, 4]) 24`;
productFunction.insertText = new vscode.SnippetString("product(${1:numbers})");

completionItems.push(productFunction);
        

var intrandomFunction = new vscode.CompletionItem("int.random", vscode.CompletionItemKind.Function);
intrandomFunction.detail = `pub fn random(boundary_a: Int, boundary_b: Int) -> Int`;
intrandomFunction.documentation = `Returns 0 if boundary_a and boundary_b are equal, otherwise returns an Int x where lower_boundary =< x < upper_boundary. Examples > random(1, 5) 2`;
intrandomFunction.insertText = new vscode.SnippetString("int.random(${1:boundary_a}, ${2:boundary_b})");

completionItems.push(intrandomFunction);
        

var randomFunction = new vscode.CompletionItem("random", vscode.CompletionItemKind.Function);
randomFunction.detail = `pub fn random(boundary_a: Int, boundary_b: Int) -> Int`;
randomFunction.documentation = `Returns 0 if boundary_a and boundary_b are equal, otherwise returns an Int x where lower_boundary =< x < upper_boundary. Examples > random(1, 5) 2`;
randomFunction.insertText = new vscode.SnippetString("random(${1:boundary_a}, ${2:boundary_b})");

completionItems.push(randomFunction);
        

var intremainderFunction = new vscode.CompletionItem("int.remainder", vscode.CompletionItemKind.Function);
intremainderFunction.detail = `pub fn remainder(dividend: Int, by divisor: Int) -> Result(   Int,   Nil, )`;
intremainderFunction.documentation = `Computes the remainder of an integer division of inputs as a Result. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Most the time you will want to use the % operator instead of this function. Examples > remainder(3, 2) Ok(1)  > remainder(1, 0) Error(Nil)  > remainder(10, -1) Ok(0)  > remainder(13, by: 3) Ok(1)  > remainder(-13, by: 3) Ok(-1)  > remainder(13, by: -3) Ok(1)  > remainder(-13, by: -3) Ok(-1)`;
intremainderFunction.insertText = new vscode.SnippetString("int.remainder(${1:dividend}, ${2:by divisor})");

completionItems.push(intremainderFunction);
        

var remainderFunction = new vscode.CompletionItem("remainder", vscode.CompletionItemKind.Function);
remainderFunction.detail = `pub fn remainder(dividend: Int, by divisor: Int) -> Result(   Int,   Nil, )`;
remainderFunction.documentation = `Computes the remainder of an integer division of inputs as a Result. Returns division of the inputs as a Result: If the given divisor equals 0, this function returns an Error. Most the time you will want to use the % operator instead of this function. Examples > remainder(3, 2) Ok(1)  > remainder(1, 0) Error(Nil)  > remainder(10, -1) Ok(0)  > remainder(13, by: 3) Ok(1)  > remainder(-13, by: 3) Ok(-1)  > remainder(13, by: -3) Ok(1)  > remainder(-13, by: -3) Ok(-1)`;
remainderFunction.insertText = new vscode.SnippetString("remainder(${1:dividend}, ${2:by divisor})");

completionItems.push(remainderFunction);
        

var intsquareRootFunction = new vscode.CompletionItem("int.square_root", vscode.CompletionItemKind.Function);
intsquareRootFunction.detail = `pub fn square_root(x: Int) -> Result(Float, Nil)`;
intsquareRootFunction.documentation = `Returns the square root of the input as a Float. Examples > square_root(4) Ok(2.0)  > square_root(-16) Error(Nil)`;
intsquareRootFunction.insertText = new vscode.SnippetString("int.square_root(${1:x})");

completionItems.push(intsquareRootFunction);
        

var squareRootFunction = new vscode.CompletionItem("square_root", vscode.CompletionItemKind.Function);
squareRootFunction.detail = `pub fn square_root(x: Int) -> Result(Float, Nil)`;
squareRootFunction.documentation = `Returns the square root of the input as a Float. Examples > square_root(4) Ok(2.0)  > square_root(-16) Error(Nil)`;
squareRootFunction.insertText = new vscode.SnippetString("square_root(${1:x})");

completionItems.push(squareRootFunction);
        

var intsubtractFunction = new vscode.CompletionItem("int.subtract", vscode.CompletionItemKind.Function);
intsubtractFunction.detail = `pub fn subtract(a: Int, b: Int) -> Int`;
intsubtractFunction.documentation = `Subtracts one int from another. It’s the function equivalent of the - operator. This function is useful in higher order functions or pipes. Examples > subtract(3, 1) 2.0  import gleam/list > list.fold([1, 2, 3], 10, subtract) 4  > 3 |> subtract(2) 1  > 3 |> subtract(2, _) -1`;
intsubtractFunction.insertText = new vscode.SnippetString("int.subtract(${1:a}, ${2:b})");

completionItems.push(intsubtractFunction);
        

var subtractFunction = new vscode.CompletionItem("subtract", vscode.CompletionItemKind.Function);
subtractFunction.detail = `pub fn subtract(a: Int, b: Int) -> Int`;
subtractFunction.documentation = `Subtracts one int from another. It’s the function equivalent of the - operator. This function is useful in higher order functions or pipes. Examples > subtract(3, 1) 2.0  import gleam/list > list.fold([1, 2, 3], 10, subtract) 4  > 3 |> subtract(2) 1  > 3 |> subtract(2, _) -1`;
subtractFunction.insertText = new vscode.SnippetString("subtract(${1:a}, ${2:b})");

completionItems.push(subtractFunction);
        

var intsumFunction = new vscode.CompletionItem("int.sum", vscode.CompletionItemKind.Function);
intsumFunction.detail = `pub fn sum(numbers: List(Int)) -> Int`;
intsumFunction.documentation = `Sums a list of ints. Example > sum([1, 2, 3]) 6`;
intsumFunction.insertText = new vscode.SnippetString("int.sum(${1:numbers})");

completionItems.push(intsumFunction);
        

var sumFunction = new vscode.CompletionItem("sum", vscode.CompletionItemKind.Function);
sumFunction.detail = `pub fn sum(numbers: List(Int)) -> Int`;
sumFunction.documentation = `Sums a list of ints. Example > sum([1, 2, 3]) 6`;
sumFunction.insertText = new vscode.SnippetString("sum(${1:numbers})");

completionItems.push(sumFunction);
        

var inttoBase16Function = new vscode.CompletionItem("int.to_base16", vscode.CompletionItemKind.Function);
inttoBase16Function.detail = `pub fn to_base16(x: Int) -> String`;
inttoBase16Function.documentation = `Prints a given int to a string using base-16. Examples > to_base16(48) "30"`;
inttoBase16Function.insertText = new vscode.SnippetString("int.to_base16(${1:x})");

completionItems.push(inttoBase16Function);
        

var toBase16Function = new vscode.CompletionItem("to_base16", vscode.CompletionItemKind.Function);
toBase16Function.detail = `pub fn to_base16(x: Int) -> String`;
toBase16Function.documentation = `Prints a given int to a string using base-16. Examples > to_base16(48) "30"`;
toBase16Function.insertText = new vscode.SnippetString("to_base16(${1:x})");

completionItems.push(toBase16Function);
        

var inttoBase2Function = new vscode.CompletionItem("int.to_base2", vscode.CompletionItemKind.Function);
inttoBase2Function.detail = `pub fn to_base2(x: Int) -> String`;
inttoBase2Function.documentation = `Prints a given int to a string using base-2. Examples > to_base2(2) "10"`;
inttoBase2Function.insertText = new vscode.SnippetString("int.to_base2(${1:x})");

completionItems.push(inttoBase2Function);
        

var toBase2Function = new vscode.CompletionItem("to_base2", vscode.CompletionItemKind.Function);
toBase2Function.detail = `pub fn to_base2(x: Int) -> String`;
toBase2Function.documentation = `Prints a given int to a string using base-2. Examples > to_base2(2) "10"`;
toBase2Function.insertText = new vscode.SnippetString("to_base2(${1:x})");

completionItems.push(toBase2Function);
        

var inttoBase36Function = new vscode.CompletionItem("int.to_base36", vscode.CompletionItemKind.Function);
inttoBase36Function.detail = `pub fn to_base36(x: Int) -> String`;
inttoBase36Function.documentation = `Prints a given int to a string using base-36. Examples > to_base36(48) "1C"`;
inttoBase36Function.insertText = new vscode.SnippetString("int.to_base36(${1:x})");

completionItems.push(inttoBase36Function);
        

var toBase36Function = new vscode.CompletionItem("to_base36", vscode.CompletionItemKind.Function);
toBase36Function.detail = `pub fn to_base36(x: Int) -> String`;
toBase36Function.documentation = `Prints a given int to a string using base-36. Examples > to_base36(48) "1C"`;
toBase36Function.insertText = new vscode.SnippetString("to_base36(${1:x})");

completionItems.push(toBase36Function);
        

var inttoBase8Function = new vscode.CompletionItem("int.to_base8", vscode.CompletionItemKind.Function);
inttoBase8Function.detail = `pub fn to_base8(x: Int) -> String`;
inttoBase8Function.documentation = `Prints a given int to a string using base-8. Examples > to_base8(15) "17"`;
inttoBase8Function.insertText = new vscode.SnippetString("int.to_base8(${1:x})");

completionItems.push(inttoBase8Function);
        

var toBase8Function = new vscode.CompletionItem("to_base8", vscode.CompletionItemKind.Function);
toBase8Function.detail = `pub fn to_base8(x: Int) -> String`;
toBase8Function.documentation = `Prints a given int to a string using base-8. Examples > to_base8(15) "17"`;
toBase8Function.insertText = new vscode.SnippetString("to_base8(${1:x})");

completionItems.push(toBase8Function);
        

var inttoBaseStringFunction = new vscode.CompletionItem("int.to_base_string", vscode.CompletionItemKind.Function);
inttoBaseStringFunction.detail = `pub fn to_base_string(x: Int, base: Int) -> Result(   String,   InvalidBase, )`;
inttoBaseStringFunction.documentation = `Prints a given int to a string using the base number provided. Supports only bases 2 to 36, for values outside of which this function returns an Error(InvalidBase). For common bases (2, 8, 16, 36), use the to_baseN functions. Examples > to_base_string(2, 2) Ok("10")  > to_base_string(48, 16) Ok("30")  > to_base_string(48, 36) Ok("1C")  > to_base_string(48, 1) Error(InvalidBase)  > to_base_string(48, 37) Error(InvalidBase)`;
inttoBaseStringFunction.insertText = new vscode.SnippetString("int.to_base_string(${1:x}, ${2:base})");

completionItems.push(inttoBaseStringFunction);
        

var toBaseStringFunction = new vscode.CompletionItem("to_base_string", vscode.CompletionItemKind.Function);
toBaseStringFunction.detail = `pub fn to_base_string(x: Int, base: Int) -> Result(   String,   InvalidBase, )`;
toBaseStringFunction.documentation = `Prints a given int to a string using the base number provided. Supports only bases 2 to 36, for values outside of which this function returns an Error(InvalidBase). For common bases (2, 8, 16, 36), use the to_baseN functions. Examples > to_base_string(2, 2) Ok("10")  > to_base_string(48, 16) Ok("30")  > to_base_string(48, 36) Ok("1C")  > to_base_string(48, 1) Error(InvalidBase)  > to_base_string(48, 37) Error(InvalidBase)`;
toBaseStringFunction.insertText = new vscode.SnippetString("to_base_string(${1:x}, ${2:base})");

completionItems.push(toBaseStringFunction);
        

var inttoFloatFunction = new vscode.CompletionItem("int.to_float", vscode.CompletionItemKind.Function);
inttoFloatFunction.detail = `pub fn to_float(x: Int) -> Float`;
inttoFloatFunction.documentation = `Takes an int and returns its value as a float. Examples > to_float(5) 5.0  > to_float(0) 0.0  > to_float(-3) -3.0`;
inttoFloatFunction.insertText = new vscode.SnippetString("int.to_float(${1:x})");

completionItems.push(inttoFloatFunction);
        

var toFloatFunction = new vscode.CompletionItem("to_float", vscode.CompletionItemKind.Function);
toFloatFunction.detail = `pub fn to_float(x: Int) -> Float`;
toFloatFunction.documentation = `Takes an int and returns its value as a float. Examples > to_float(5) 5.0  > to_float(0) 0.0  > to_float(-3) -3.0`;
toFloatFunction.insertText = new vscode.SnippetString("to_float(${1:x})");

completionItems.push(toFloatFunction);
        

var inttoStringFunction = new vscode.CompletionItem("int.to_string", vscode.CompletionItemKind.Function);
inttoStringFunction.detail = `pub fn to_string(x: Int) -> String`;
inttoStringFunction.documentation = `Prints a given int to a string. Examples > to_string(2) "2"`;
inttoStringFunction.insertText = new vscode.SnippetString("int.to_string(${1:x})");

completionItems.push(inttoStringFunction);
        

var toStringFunction = new vscode.CompletionItem("to_string", vscode.CompletionItemKind.Function);
toStringFunction.detail = `pub fn to_string(x: Int) -> String`;
toStringFunction.documentation = `Prints a given int to a string. Examples > to_string(2) "2"`;
toStringFunction.insertText = new vscode.SnippetString("to_string(${1:x})");

completionItems.push(toStringFunction);
        

var intundigitsFunction = new vscode.CompletionItem("int.undigits", vscode.CompletionItemKind.Function);
intundigitsFunction.detail = `pub fn undigits(numbers: List(Int), base: Int) -> Result(   Int,   InvalidBase, )`;
intundigitsFunction.documentation = `Joins a list of digits into a single value. Returns an error if the base is less than 2 or if the list contains a digit greater than or equal to the specified base. Examples > undigits([2,3,4], 10) Ok(234)  > undigits([2,3,4], 1) Error(InvalidBase)  > undigits([2,3,4], 2) Error(InvalidBase)`;
intundigitsFunction.insertText = new vscode.SnippetString("int.undigits(${1:numbers})");

completionItems.push(intundigitsFunction);
        

var undigitsFunction = new vscode.CompletionItem("undigits", vscode.CompletionItemKind.Function);
undigitsFunction.detail = `pub fn undigits(numbers: List(Int), base: Int) -> Result(   Int,   InvalidBase, )`;
undigitsFunction.documentation = `Joins a list of digits into a single value. Returns an error if the base is less than 2 or if the list contains a digit greater than or equal to the specified base. Examples > undigits([2,3,4], 10) Ok(234)  > undigits([2,3,4], 1) Error(InvalidBase)  > undigits([2,3,4], 2) Error(InvalidBase)`;
undigitsFunction.insertText = new vscode.SnippetString("undigits(${1:numbers})");

completionItems.push(undigitsFunction);
        

var iodebugFunction = new vscode.CompletionItem("io.debug", vscode.CompletionItemKind.Function);
iodebugFunction.detail = `pub fn debug(term: a) -> a`;
iodebugFunction.documentation = `Prints a value to standard error (stderr) yielding Gleam syntax. The value is returned after being printed so it can be used in pipelines. Example > debug("Hi mum") // -> <<"Hi mum">> "Hi mum"  > debug(Ok(1)) // -> {ok, 1} Ok(1)  > import list > [1, 2] > |> list.map(fn(x) { x + 1 }) > |> debug > |> list.map(fn(x) { x * 2 }) // -> [2, 3] [4, 6]`;
iodebugFunction.insertText = new vscode.SnippetString("io.debug(${1:term})");

completionItems.push(iodebugFunction);
        

var debugFunction = new vscode.CompletionItem("debug", vscode.CompletionItemKind.Function);
debugFunction.detail = `pub fn debug(term: a) -> a`;
debugFunction.documentation = `Prints a value to standard error (stderr) yielding Gleam syntax. The value is returned after being printed so it can be used in pipelines. Example > debug("Hi mum") // -> <<"Hi mum">> "Hi mum"  > debug(Ok(1)) // -> {ok, 1} Ok(1)  > import list > [1, 2] > |> list.map(fn(x) { x + 1 }) > |> debug > |> list.map(fn(x) { x * 2 }) // -> [2, 3] [4, 6]`;
debugFunction.insertText = new vscode.SnippetString("debug(${1:term})");

completionItems.push(debugFunction);
        

var ioprintFunction = new vscode.CompletionItem("io.print", vscode.CompletionItemKind.Function);
ioprintFunction.detail = `pub fn print(string: String) -> Nil`;
ioprintFunction.documentation = `Writes a string to standard output. If you want your output to be printed on its own line see println. Example > io.print("Hi mum") // -> Hi mum Nil`;
ioprintFunction.insertText = new vscode.SnippetString("io.print(${1:string})");

completionItems.push(ioprintFunction);
        

var printFunction = new vscode.CompletionItem("print", vscode.CompletionItemKind.Function);
printFunction.detail = `pub fn print(string: String) -> Nil`;
printFunction.documentation = `Writes a string to standard output. If you want your output to be printed on its own line see println. Example > io.print("Hi mum") // -> Hi mum Nil`;
printFunction.insertText = new vscode.SnippetString("print(${1:string})");

completionItems.push(printFunction);
        

var ioprintErrorFunction = new vscode.CompletionItem("io.print_error", vscode.CompletionItemKind.Function);
ioprintErrorFunction.detail = `pub fn print_error(string: String) -> Nil`;
ioprintErrorFunction.documentation = `Writes a string to standard error. If you want your output to be printed on its own line see eprintln. Example > io.print_error("Hi pop") // -> Hi pop Nil`;
ioprintErrorFunction.insertText = new vscode.SnippetString("io.print_error(${1:string})");

completionItems.push(ioprintErrorFunction);
        

var printErrorFunction = new vscode.CompletionItem("print_error", vscode.CompletionItemKind.Function);
printErrorFunction.detail = `pub fn print_error(string: String) -> Nil`;
printErrorFunction.documentation = `Writes a string to standard error. If you want your output to be printed on its own line see eprintln. Example > io.print_error("Hi pop") // -> Hi pop Nil`;
printErrorFunction.insertText = new vscode.SnippetString("print_error(${1:string})");

completionItems.push(printErrorFunction);
        

var ioprintlnFunction = new vscode.CompletionItem("io.println", vscode.CompletionItemKind.Function);
ioprintlnFunction.detail = `pub fn println(string: String) -> Nil`;
ioprintlnFunction.documentation = `Writes a string to standard output, appending a newline to the end. Example > io.println("Hi mum") // -> Hi mum Nil`;
ioprintlnFunction.insertText = new vscode.SnippetString("io.println(${1:string})");

completionItems.push(ioprintlnFunction);
        

var printlnFunction = new vscode.CompletionItem("println", vscode.CompletionItemKind.Function);
printlnFunction.detail = `pub fn println(string: String) -> Nil`;
printlnFunction.documentation = `Writes a string to standard output, appending a newline to the end. Example > io.println("Hi mum") // -> Hi mum Nil`;
printlnFunction.insertText = new vscode.SnippetString("println(${1:string})");

completionItems.push(printlnFunction);
        

var ioprintlnErrorFunction = new vscode.CompletionItem("io.println_error", vscode.CompletionItemKind.Function);
ioprintlnErrorFunction.detail = `pub fn println_error(string: String) -> Nil`;
ioprintlnErrorFunction.documentation = `Writes a string to standard error, appending a newline to the end. Example > io.println_error("Hi pop") // -> Hi mum Nil`;
ioprintlnErrorFunction.insertText = new vscode.SnippetString("io.println_error(${1:string})");

completionItems.push(ioprintlnErrorFunction);
        

var printlnErrorFunction = new vscode.CompletionItem("println_error", vscode.CompletionItemKind.Function);
printlnErrorFunction.detail = `pub fn println_error(string: String) -> Nil`;
printlnErrorFunction.documentation = `Writes a string to standard error, appending a newline to the end. Example > io.println_error("Hi pop") // -> Hi mum Nil`;
printlnErrorFunction.insertText = new vscode.SnippetString("println_error(${1:string})");

completionItems.push(printlnErrorFunction);
        

var iteratorallFunction = new vscode.CompletionItem("iterator.all", vscode.CompletionItemKind.Function);
iteratorallFunction.detail = `pub fn all(in iterator: Iterator(a), satisfying predicate: fn(a) ->     Bool) -> Bool`;
iteratorallFunction.documentation = `Returns True if all elements emitted by the iterator satisfy the given predicate, False otherwise. This function short-circuits once it finds a non-satisfying element. An empty iterator results in True. Examples > empty() |> all(fn(n) { n % 2 == 0 }) True  > from_list([2, 4, 6, 8]) |> all(fn(n) { n % 2 == 0 }) True  > from_list([2, 4, 5, 8]) |> all(fn(n) { n % 2 == 0 }) False`;
iteratorallFunction.insertText = new vscode.SnippetString("iterator.all(${1:in iterator})");

completionItems.push(iteratorallFunction);
        

var allFunction = new vscode.CompletionItem("all", vscode.CompletionItemKind.Function);
allFunction.detail = `pub fn all(in iterator: Iterator(a), satisfying predicate: fn(a) ->     Bool) -> Bool`;
allFunction.documentation = `Returns True if all elements emitted by the iterator satisfy the given predicate, False otherwise. This function short-circuits once it finds a non-satisfying element. An empty iterator results in True. Examples > empty() |> all(fn(n) { n % 2 == 0 }) True  > from_list([2, 4, 6, 8]) |> all(fn(n) { n % 2 == 0 }) True  > from_list([2, 4, 5, 8]) |> all(fn(n) { n % 2 == 0 }) False`;
allFunction.insertText = new vscode.SnippetString("all(${1:in iterator})");

completionItems.push(allFunction);
        

var iteratoranyFunction = new vscode.CompletionItem("iterator.any", vscode.CompletionItemKind.Function);
iteratoranyFunction.detail = `pub fn any(in iterator: Iterator(a), satisfying predicate: fn(a) ->     Bool) -> Bool`;
iteratoranyFunction.documentation = `Returns True if any element emitted by the iterator satisfies the given predicate, False otherwise. This function short-circuits once it finds a satisfying element. An empty iterator results in False. Examples > empty() |> any(fn(n) { n % 2 == 0 }) False  > from_list([1, 2, 5, 7, 9]) |> any(fn(n) { n % 2 == 0 }) True  > from_list([1, 3, 5, 7, 9]) |> any(fn(n) { n % 2 == 0 }) False`;
iteratoranyFunction.insertText = new vscode.SnippetString("iterator.any(${1:in iterator})");

completionItems.push(iteratoranyFunction);
        

var anyFunction = new vscode.CompletionItem("any", vscode.CompletionItemKind.Function);
anyFunction.detail = `pub fn any(in iterator: Iterator(a), satisfying predicate: fn(a) ->     Bool) -> Bool`;
anyFunction.documentation = `Returns True if any element emitted by the iterator satisfies the given predicate, False otherwise. This function short-circuits once it finds a satisfying element. An empty iterator results in False. Examples > empty() |> any(fn(n) { n % 2 == 0 }) False  > from_list([1, 2, 5, 7, 9]) |> any(fn(n) { n % 2 == 0 }) True  > from_list([1, 3, 5, 7, 9]) |> any(fn(n) { n % 2 == 0 }) False`;
anyFunction.insertText = new vscode.SnippetString("any(${1:in iterator})");

completionItems.push(anyFunction);
        

var iteratorappendFunction = new vscode.CompletionItem("iterator.append", vscode.CompletionItemKind.Function);
iteratorappendFunction.detail = `pub fn append(to first: Iterator(a), suffix second: Iterator(a)) -> Iterator(   a, )`;
iteratorappendFunction.documentation = `Appends two iterators, producing a new iterator. This function does not evaluate the elements of the iterators, the computation is performed when the resulting iterator is later run. Examples > [1, 2] > |> from_list > |> append([3, 4] |> from_list) > |> to_list [1, 2, 3, 4]`;
iteratorappendFunction.insertText = new vscode.SnippetString("iterator.append(${1:to first})");

completionItems.push(iteratorappendFunction);
        

var appendFunction = new vscode.CompletionItem("append", vscode.CompletionItemKind.Function);
appendFunction.detail = `pub fn append(to first: Iterator(a), suffix second: Iterator(a)) -> Iterator(   a, )`;
appendFunction.documentation = `Appends two iterators, producing a new iterator. This function does not evaluate the elements of the iterators, the computation is performed when the resulting iterator is later run. Examples > [1, 2] > |> from_list > |> append([3, 4] |> from_list) > |> to_list [1, 2, 3, 4]`;
appendFunction.insertText = new vscode.SnippetString("append(${1:to first})");

completionItems.push(appendFunction);
        

var iteratoratFunction = new vscode.CompletionItem("iterator.at", vscode.CompletionItemKind.Function);
iteratoratFunction.detail = `pub fn at(in iterator: Iterator(a), get index: Int) -> Result(   a,   Nil, )`;
iteratoratFunction.documentation = `Returns nth element yielded by the given iterator, where 0 means the first element. If there are not enough elements in the iterator, Error(Nil) is returned. For any index less than 0 this function behaves as if it was set to 0. Examples > from_list([1, 2, 3, 4]) |> at(2) Ok(3)  > from_list([1, 2, 3, 4]) |> at(4) Error(Nil)  > empty() |> at(0) Error(Nil)`;
iteratoratFunction.insertText = new vscode.SnippetString("iterator.at(${1:in iterator})");

completionItems.push(iteratoratFunction);
        

var atFunction = new vscode.CompletionItem("at", vscode.CompletionItemKind.Function);
atFunction.detail = `pub fn at(in iterator: Iterator(a), get index: Int) -> Result(   a,   Nil, )`;
atFunction.documentation = `Returns nth element yielded by the given iterator, where 0 means the first element. If there are not enough elements in the iterator, Error(Nil) is returned. For any index less than 0 this function behaves as if it was set to 0. Examples > from_list([1, 2, 3, 4]) |> at(2) Ok(3)  > from_list([1, 2, 3, 4]) |> at(4) Error(Nil)  > empty() |> at(0) Error(Nil)`;
atFunction.insertText = new vscode.SnippetString("at(${1:in iterator})");

completionItems.push(atFunction);
        

var iteratorchunkFunction = new vscode.CompletionItem("iterator.chunk", vscode.CompletionItemKind.Function);
iteratorchunkFunction.detail = `pub fn chunk(over iterator: Iterator(a), by f: fn(a) -> b) -> Iterator(   List(a), )`;
iteratorchunkFunction.documentation = `Creates an iterator that emits chunks of elements for which f returns the same value. Examples > from_list([1, 2, 2, 3, 4, 4, 6, 7, 7]) > |> chunk(by: fn(n) { n % 2 }) > |> to_list [[1], [2, 2], [3], [4, 4, 6], [7, 7]]`;
iteratorchunkFunction.insertText = new vscode.SnippetString("iterator.chunk(${1:over iterator})");

completionItems.push(iteratorchunkFunction);
        

var chunkFunction = new vscode.CompletionItem("chunk", vscode.CompletionItemKind.Function);
chunkFunction.detail = `pub fn chunk(over iterator: Iterator(a), by f: fn(a) -> b) -> Iterator(   List(a), )`;
chunkFunction.documentation = `Creates an iterator that emits chunks of elements for which f returns the same value. Examples > from_list([1, 2, 2, 3, 4, 4, 6, 7, 7]) > |> chunk(by: fn(n) { n % 2 }) > |> to_list [[1], [2, 2], [3], [4, 4, 6], [7, 7]]`;
chunkFunction.insertText = new vscode.SnippetString("chunk(${1:over iterator})");

completionItems.push(chunkFunction);
        

var iteratorcycleFunction = new vscode.CompletionItem("iterator.cycle", vscode.CompletionItemKind.Function);
iteratorcycleFunction.detail = `pub fn cycle(iterator: Iterator(a)) -> Iterator(a)`;
iteratorcycleFunction.documentation = `Creates an iterator that repeats a given iterator infinitely. Examples > [1, 2] > |> from_list > |> cycle > |> take(6) > |> to_list [1, 2, 1, 2, 1, 2]`;
iteratorcycleFunction.insertText = new vscode.SnippetString("iterator.cycle(${1:iterator})");

completionItems.push(iteratorcycleFunction);
        

var cycleFunction = new vscode.CompletionItem("cycle", vscode.CompletionItemKind.Function);
cycleFunction.detail = `pub fn cycle(iterator: Iterator(a)) -> Iterator(a)`;
cycleFunction.documentation = `Creates an iterator that repeats a given iterator infinitely. Examples > [1, 2] > |> from_list > |> cycle > |> take(6) > |> to_list [1, 2, 1, 2, 1, 2]`;
cycleFunction.insertText = new vscode.SnippetString("cycle(${1:iterator})");

completionItems.push(cycleFunction);
        

var iteratordropFunction = new vscode.CompletionItem("iterator.drop", vscode.CompletionItemKind.Function);
iteratordropFunction.detail = `pub fn drop(from iterator: Iterator(a), up_to desired: Int) -> Iterator(   a, )`;
iteratordropFunction.documentation = `Evaluates and discards the first N elements in an iterator, returning a new iterator. If the iterator does not have enough elements an empty iterator is returned. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > [1, 2, 3, 4, 5] > |> from_list > |> drop(up_to: 3) > |> to_list [4, 5]  > [1, 2] > |> from_list > |> drop(up_to: 3) > |> to_list []`;
iteratordropFunction.insertText = new vscode.SnippetString("iterator.drop(${1:from iterator})");

completionItems.push(iteratordropFunction);
        

var dropFunction = new vscode.CompletionItem("drop", vscode.CompletionItemKind.Function);
dropFunction.detail = `pub fn drop(from iterator: Iterator(a), up_to desired: Int) -> Iterator(   a, )`;
dropFunction.documentation = `Evaluates and discards the first N elements in an iterator, returning a new iterator. If the iterator does not have enough elements an empty iterator is returned. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > [1, 2, 3, 4, 5] > |> from_list > |> drop(up_to: 3) > |> to_list [4, 5]  > [1, 2] > |> from_list > |> drop(up_to: 3) > |> to_list []`;
dropFunction.insertText = new vscode.SnippetString("drop(${1:from iterator})");

completionItems.push(dropFunction);
        

var iteratordropWhileFunction = new vscode.CompletionItem("iterator.drop_while", vscode.CompletionItemKind.Function);
iteratordropWhileFunction.detail = `pub fn drop_while(in iterator: Iterator(a), satisfying predicate: fn(     a,   ) -> Bool) -> Iterator(a)`;
iteratordropWhileFunction.documentation = `Creates an iterator that drops elements while the predicate returns True, and then yields the remaining elements. Examples > from_list([1, 2, 3, 4, 2, 5]) > |> drop_while(satisfying: fn(x) { x < 4 }) > |> to_list [4, 2, 5]`;
iteratordropWhileFunction.insertText = new vscode.SnippetString("iterator.drop_while(${1:in iterator})");

completionItems.push(iteratordropWhileFunction);
        

var dropWhileFunction = new vscode.CompletionItem("drop_while", vscode.CompletionItemKind.Function);
dropWhileFunction.detail = `pub fn drop_while(in iterator: Iterator(a), satisfying predicate: fn(     a,   ) -> Bool) -> Iterator(a)`;
dropWhileFunction.documentation = `Creates an iterator that drops elements while the predicate returns True, and then yields the remaining elements. Examples > from_list([1, 2, 3, 4, 2, 5]) > |> drop_while(satisfying: fn(x) { x < 4 }) > |> to_list [4, 2, 5]`;
dropWhileFunction.insertText = new vscode.SnippetString("drop_while(${1:in iterator})");

completionItems.push(dropWhileFunction);
        

var iteratoreachFunction = new vscode.CompletionItem("iterator.each", vscode.CompletionItemKind.Function);
iteratoreachFunction.detail = `pub fn each(over iterator: Iterator(a), with f: fn(a) -> b) -> Nil`;
iteratoreachFunction.documentation = `Traverse an iterator, calling a function on each element. Examples > empty() |> each(io.println) Nil  > from_list(["Tom", "Malory", "Louis"]) |> each(io.println) // -> Tom // -> Malory // -> Louis Nil`;
iteratoreachFunction.insertText = new vscode.SnippetString("iterator.each(${1:over iterator})");

completionItems.push(iteratoreachFunction);
        

var eachFunction = new vscode.CompletionItem("each", vscode.CompletionItemKind.Function);
eachFunction.detail = `pub fn each(over iterator: Iterator(a), with f: fn(a) -> b) -> Nil`;
eachFunction.documentation = `Traverse an iterator, calling a function on each element. Examples > empty() |> each(io.println) Nil  > from_list(["Tom", "Malory", "Louis"]) |> each(io.println) // -> Tom // -> Malory // -> Louis Nil`;
eachFunction.insertText = new vscode.SnippetString("each(${1:over iterator})");

completionItems.push(eachFunction);
        

var iteratoremptyFunction = new vscode.CompletionItem("iterator.empty", vscode.CompletionItemKind.Function);
iteratoremptyFunction.detail = `pub fn empty() -> Iterator(a)`;
iteratoremptyFunction.documentation = `Creates an iterator that yields no elements. Examples > empty() |> to_list []`;
iteratoremptyFunction.insertText = new vscode.SnippetString("iterator.empty(${1:})");

completionItems.push(iteratoremptyFunction);
        

var emptyFunction = new vscode.CompletionItem("empty", vscode.CompletionItemKind.Function);
emptyFunction.detail = `pub fn empty() -> Iterator(a)`;
emptyFunction.documentation = `Creates an iterator that yields no elements. Examples > empty() |> to_list []`;
emptyFunction.insertText = new vscode.SnippetString("empty(${1:})");

completionItems.push(emptyFunction);
        

var iteratorfilterFunction = new vscode.CompletionItem("iterator.filter", vscode.CompletionItemKind.Function);
iteratorfilterFunction.detail = `pub fn filter(iterator: Iterator(a), for predicate: fn(a) -> Bool) -> Iterator(   a, )`;
iteratorfilterFunction.documentation = `Creates an iterator from an existing iterator and a predicate function. The new iterator will contain elements from the first iterator for which the given function returns True. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > import gleam/int > [1, 2, 3, 4] > |> from_list > |> filter(int.is_even) > |> to_list [2, 4]`;
iteratorfilterFunction.insertText = new vscode.SnippetString("iterator.filter(${1:iterator})");

completionItems.push(iteratorfilterFunction);
        

var filterFunction = new vscode.CompletionItem("filter", vscode.CompletionItemKind.Function);
filterFunction.detail = `pub fn filter(iterator: Iterator(a), for predicate: fn(a) -> Bool) -> Iterator(   a, )`;
filterFunction.documentation = `Creates an iterator from an existing iterator and a predicate function. The new iterator will contain elements from the first iterator for which the given function returns True. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > import gleam/int > [1, 2, 3, 4] > |> from_list > |> filter(int.is_even) > |> to_list [2, 4]`;
filterFunction.insertText = new vscode.SnippetString("filter(${1:iterator})");

completionItems.push(filterFunction);
        

var iteratorfindFunction = new vscode.CompletionItem("iterator.find", vscode.CompletionItemKind.Function);
iteratorfindFunction.detail = `pub fn find(in haystack: Iterator(a), one_that is_desired: fn(a) ->     Bool) -> Result(a, Nil)`;
iteratorfindFunction.documentation = `Finds the first element in a given iterator for which the given function returns True. Returns Error(Nil) if the function does not return True for any of the elements. Examples > find(from_list([1, 2, 3]), fn(x) { x > 2 }) Ok(3)  > find(from_list([1, 2, 3]), fn(x) { x > 4 }) Error(Nil)  > find(empty(), fn(_) { True }) Error(Nil)`;
iteratorfindFunction.insertText = new vscode.SnippetString("iterator.find(${1:in haystack})");

completionItems.push(iteratorfindFunction);
        

var findFunction = new vscode.CompletionItem("find", vscode.CompletionItemKind.Function);
findFunction.detail = `pub fn find(in haystack: Iterator(a), one_that is_desired: fn(a) ->     Bool) -> Result(a, Nil)`;
findFunction.documentation = `Finds the first element in a given iterator for which the given function returns True. Returns Error(Nil) if the function does not return True for any of the elements. Examples > find(from_list([1, 2, 3]), fn(x) { x > 2 }) Ok(3)  > find(from_list([1, 2, 3]), fn(x) { x > 4 }) Error(Nil)  > find(empty(), fn(_) { True }) Error(Nil)`;
findFunction.insertText = new vscode.SnippetString("find(${1:in haystack})");

completionItems.push(findFunction);
        

var iteratorfirstFunction = new vscode.CompletionItem("iterator.first", vscode.CompletionItemKind.Function);
iteratorfirstFunction.detail = `pub fn first(from iterator: Iterator(a)) -> Result(a, Nil)`;
iteratorfirstFunction.documentation = `Returns the first element yielded by the given iterator, if it exists, or Error(Nil) otherwise. Examples > from_list([1, 2, 3]) |> first Ok(1)  > empty() |> first Error(Nil)`;
iteratorfirstFunction.insertText = new vscode.SnippetString("iterator.first(${1:from iterator})");

completionItems.push(iteratorfirstFunction);
        

var firstFunction = new vscode.CompletionItem("first", vscode.CompletionItemKind.Function);
firstFunction.detail = `pub fn first(from iterator: Iterator(a)) -> Result(a, Nil)`;
firstFunction.documentation = `Returns the first element yielded by the given iterator, if it exists, or Error(Nil) otherwise. Examples > from_list([1, 2, 3]) |> first Ok(1)  > empty() |> first Error(Nil)`;
firstFunction.insertText = new vscode.SnippetString("first(${1:from iterator})");

completionItems.push(firstFunction);
        

var iteratorflatMapFunction = new vscode.CompletionItem("iterator.flat_map", vscode.CompletionItemKind.Function);
iteratorflatMapFunction.detail = `pub fn flat_map(over iterator: Iterator(a), with f: fn(a) ->     Iterator(b)) -> Iterator(b)`;
iteratorflatMapFunction.documentation = `Creates an iterator from an existing iterator and a transformation function. Each element in the new iterator will be the result of calling the given function on the elements in the given iterator and then flattening the results. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > [1, 2] > |> from_list > |> flat_map(fn(x) { from_list([x, x + 1]) }) > |> to_list [1, 2, 2, 3]`;
iteratorflatMapFunction.insertText = new vscode.SnippetString("iterator.flat_map(${1:over iterator})");

completionItems.push(iteratorflatMapFunction);
        

var flatMapFunction = new vscode.CompletionItem("flat_map", vscode.CompletionItemKind.Function);
flatMapFunction.detail = `pub fn flat_map(over iterator: Iterator(a), with f: fn(a) ->     Iterator(b)) -> Iterator(b)`;
flatMapFunction.documentation = `Creates an iterator from an existing iterator and a transformation function. Each element in the new iterator will be the result of calling the given function on the elements in the given iterator and then flattening the results. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > [1, 2] > |> from_list > |> flat_map(fn(x) { from_list([x, x + 1]) }) > |> to_list [1, 2, 2, 3]`;
flatMapFunction.insertText = new vscode.SnippetString("flat_map(${1:over iterator})");

completionItems.push(flatMapFunction);
        

var iteratorflattenFunction = new vscode.CompletionItem("iterator.flatten", vscode.CompletionItemKind.Function);
iteratorflattenFunction.detail = `pub fn flatten(iterator: Iterator(Iterator(a))) -> Iterator(a)`;
iteratorflattenFunction.documentation = `Flattens an iterator of iterators, creating a new iterator. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > from_list([[1, 2], [3, 4]]) > |> map(from_list) > |> flatten > |> to_list [1, 2, 3, 4]`;
iteratorflattenFunction.insertText = new vscode.SnippetString("iterator.flatten(${1:iterator})");

completionItems.push(iteratorflattenFunction);
        

var flattenFunction = new vscode.CompletionItem("flatten", vscode.CompletionItemKind.Function);
flattenFunction.detail = `pub fn flatten(iterator: Iterator(Iterator(a))) -> Iterator(a)`;
flattenFunction.documentation = `Flattens an iterator of iterators, creating a new iterator. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > from_list([[1, 2], [3, 4]]) > |> map(from_list) > |> flatten > |> to_list [1, 2, 3, 4]`;
flattenFunction.insertText = new vscode.SnippetString("flatten(${1:iterator})");

completionItems.push(flattenFunction);
        

var iteratorfoldFunction = new vscode.CompletionItem("iterator.fold", vscode.CompletionItemKind.Function);
iteratorfoldFunction.detail = `pub fn fold(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> b) -> b`;
iteratorfoldFunction.documentation = `Reduces an iterator of elements into a single value by calling a given function on each element in turn. If called on an iterator of infinite length then this function will never return. If you do not care about the end value and only wish to evaluate the iterator for side effects consider using the run function instead. Examples > [1, 2, 3, 4] > |> from_list > |> fold(from: 0, with: fn(acc, element) { element + acc }) 10`;
iteratorfoldFunction.insertText = new vscode.SnippetString("iterator.fold(${1:over iterator})");

completionItems.push(iteratorfoldFunction);
        

var foldFunction = new vscode.CompletionItem("fold", vscode.CompletionItemKind.Function);
foldFunction.detail = `pub fn fold(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> b) -> b`;
foldFunction.documentation = `Reduces an iterator of elements into a single value by calling a given function on each element in turn. If called on an iterator of infinite length then this function will never return. If you do not care about the end value and only wish to evaluate the iterator for side effects consider using the run function instead. Examples > [1, 2, 3, 4] > |> from_list > |> fold(from: 0, with: fn(acc, element) { element + acc }) 10`;
foldFunction.insertText = new vscode.SnippetString("fold(${1:over iterator})");

completionItems.push(foldFunction);
        

var iteratorfoldUntilFunction = new vscode.CompletionItem("iterator.fold_until", vscode.CompletionItemKind.Function);
iteratorfoldUntilFunction.detail = `pub fn fold_until(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> ContinueOrStop(b)) -> b`;
iteratorfoldUntilFunction.documentation = `Like fold, fold_until reduces an iterator of elements into a single value by calling a given function on each element in turn, but uses list.ContinueOrStop to determine whether or not to keep iterating. If called on an iterator of infinite length then this function will only ever return if the function returns list.Stop. Examples > import gleam/list > let f = fn(acc, e) { >   case e { >     _ if e < 4 -> list.Continue(e + acc) >     _ -> list.Stop(acc) >   } > } > > [1, 2, 3, 4] > |> from_list > |> fold_until(from: acc, with: f) 6`;
iteratorfoldUntilFunction.insertText = new vscode.SnippetString("iterator.fold_until(${1:over iterator})");

completionItems.push(iteratorfoldUntilFunction);
        

var foldUntilFunction = new vscode.CompletionItem("fold_until", vscode.CompletionItemKind.Function);
foldUntilFunction.detail = `pub fn fold_until(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> ContinueOrStop(b)) -> b`;
foldUntilFunction.documentation = `Like fold, fold_until reduces an iterator of elements into a single value by calling a given function on each element in turn, but uses list.ContinueOrStop to determine whether or not to keep iterating. If called on an iterator of infinite length then this function will only ever return if the function returns list.Stop. Examples > import gleam/list > let f = fn(acc, e) { >   case e { >     _ if e < 4 -> list.Continue(e + acc) >     _ -> list.Stop(acc) >   } > } > > [1, 2, 3, 4] > |> from_list > |> fold_until(from: acc, with: f) 6`;
foldUntilFunction.insertText = new vscode.SnippetString("fold_until(${1:over iterator})");

completionItems.push(foldUntilFunction);
        

var iteratorfromListFunction = new vscode.CompletionItem("iterator.from_list", vscode.CompletionItemKind.Function);
iteratorfromListFunction.detail = `pub fn from_list(list: List(a)) -> Iterator(a)`;
iteratorfromListFunction.documentation = `Creates an iterator that yields each element from the given list. Examples > from_list([1, 2, 3, 4]) > |> to_list [1, 2, 3, 4]`;
iteratorfromListFunction.insertText = new vscode.SnippetString("iterator.from_list(${1:list})");

completionItems.push(iteratorfromListFunction);
        

var fromListFunction = new vscode.CompletionItem("from_list", vscode.CompletionItemKind.Function);
fromListFunction.detail = `pub fn from_list(list: List(a)) -> Iterator(a)`;
fromListFunction.documentation = `Creates an iterator that yields each element from the given list. Examples > from_list([1, 2, 3, 4]) > |> to_list [1, 2, 3, 4]`;
fromListFunction.insertText = new vscode.SnippetString("from_list(${1:list})");

completionItems.push(fromListFunction);
        

var iteratorgroupFunction = new vscode.CompletionItem("iterator.group", vscode.CompletionItemKind.Function);
iteratorgroupFunction.detail = `pub fn group(in iterator: Iterator(a), by key: fn(a) -> b) -> Map(   b,   List(a), )`;
iteratorgroupFunction.documentation = `Returns a Map(k, List(element)) of elements from the given iterator grouped with the given key function. The order within each group is preserved from the iterator. Examples > from_list([1, 2, 3, 4, 5, 6]) |> group(by: fn(n) { n % 3 }) map.from_list([#(0, [3, 6]), #(1, [1, 4]), #(2, [2, 5])])`;
iteratorgroupFunction.insertText = new vscode.SnippetString("iterator.group(${1:in iterator})");

completionItems.push(iteratorgroupFunction);
        

var groupFunction = new vscode.CompletionItem("group", vscode.CompletionItemKind.Function);
groupFunction.detail = `pub fn group(in iterator: Iterator(a), by key: fn(a) -> b) -> Map(   b,   List(a), )`;
groupFunction.documentation = `Returns a Map(k, List(element)) of elements from the given iterator grouped with the given key function. The order within each group is preserved from the iterator. Examples > from_list([1, 2, 3, 4, 5, 6]) |> group(by: fn(n) { n % 3 }) map.from_list([#(0, [3, 6]), #(1, [1, 4]), #(2, [2, 5])])`;
groupFunction.insertText = new vscode.SnippetString("group(${1:in iterator})");

completionItems.push(groupFunction);
        

var iteratorindexFunction = new vscode.CompletionItem("iterator.index", vscode.CompletionItemKind.Function);
iteratorindexFunction.detail = `pub fn index(over iterator: Iterator(a)) -> Iterator(#(Int, a))`;
iteratorindexFunction.documentation = `Wraps values yielded from an iterator with indices, starting from 0. Examples > from_list(["a", "b", "c"]) |> index |> to_list [#(0, "a"), #(1, "b"), #(2, "c")]`;
iteratorindexFunction.insertText = new vscode.SnippetString("iterator.index(${1:over iterator})");

completionItems.push(iteratorindexFunction);
        

var indexFunction = new vscode.CompletionItem("index", vscode.CompletionItemKind.Function);
indexFunction.detail = `pub fn index(over iterator: Iterator(a)) -> Iterator(#(Int, a))`;
indexFunction.documentation = `Wraps values yielded from an iterator with indices, starting from 0. Examples > from_list(["a", "b", "c"]) |> index |> to_list [#(0, "a"), #(1, "b"), #(2, "c")]`;
indexFunction.insertText = new vscode.SnippetString("index(${1:over iterator})");

completionItems.push(indexFunction);
        

var iteratorinterleaveFunction = new vscode.CompletionItem("iterator.interleave", vscode.CompletionItemKind.Function);
iteratorinterleaveFunction.detail = `pub fn interleave(left: Iterator(a), with right: Iterator(a)) -> Iterator(   a, )`;
iteratorinterleaveFunction.documentation = `Creates an iterator that alternates between the two given iterators until both have run out. Examples > from_list([1, 2, 3, 4]) |> interleave(from_list([11, 12, 13, 14])) |> to_list [1, 11, 2, 12, 3, 13, 4, 14]  > from_list([1, 2, 3, 4]) |> interleave(from_list([100])) |> to_list [1, 100, 2, 3, 4]`;
iteratorinterleaveFunction.insertText = new vscode.SnippetString("iterator.interleave(${1:left})");

completionItems.push(iteratorinterleaveFunction);
        

var interleaveFunction = new vscode.CompletionItem("interleave", vscode.CompletionItemKind.Function);
interleaveFunction.detail = `pub fn interleave(left: Iterator(a), with right: Iterator(a)) -> Iterator(   a, )`;
interleaveFunction.documentation = `Creates an iterator that alternates between the two given iterators until both have run out. Examples > from_list([1, 2, 3, 4]) |> interleave(from_list([11, 12, 13, 14])) |> to_list [1, 11, 2, 12, 3, 13, 4, 14]  > from_list([1, 2, 3, 4]) |> interleave(from_list([100])) |> to_list [1, 100, 2, 3, 4]`;
interleaveFunction.insertText = new vscode.SnippetString("interleave(${1:left})");

completionItems.push(interleaveFunction);
        

var iteratorintersperseFunction = new vscode.CompletionItem("iterator.intersperse", vscode.CompletionItemKind.Function);
iteratorintersperseFunction.detail = `pub fn intersperse(over iterator: Iterator(a), with elem: a) -> Iterator(   a, )`;
iteratorintersperseFunction.documentation = `Creates an iterator that yields the given elem element between elements emitted by the underlying iterator. Examples > empty() > |> intersperse(with: 0) > |> to_list []  > from_list([1]) > |> intersperse(with: 0) > |> to_list [1]  > from_list([1, 2, 3, 4, 5]) > |> intersperse(with: 0) > |> to_list [1, 0, 2, 0, 3, 0, 4, 0, 5]`;
iteratorintersperseFunction.insertText = new vscode.SnippetString("iterator.intersperse(${1:over iterator})");

completionItems.push(iteratorintersperseFunction);
        

var intersperseFunction = new vscode.CompletionItem("intersperse", vscode.CompletionItemKind.Function);
intersperseFunction.detail = `pub fn intersperse(over iterator: Iterator(a), with elem: a) -> Iterator(   a, )`;
intersperseFunction.documentation = `Creates an iterator that yields the given elem element between elements emitted by the underlying iterator. Examples > empty() > |> intersperse(with: 0) > |> to_list []  > from_list([1]) > |> intersperse(with: 0) > |> to_list [1]  > from_list([1, 2, 3, 4, 5]) > |> intersperse(with: 0) > |> to_list [1, 0, 2, 0, 3, 0, 4, 0, 5]`;
intersperseFunction.insertText = new vscode.SnippetString("intersperse(${1:over iterator})");

completionItems.push(intersperseFunction);
        

var iteratoriterateFunction = new vscode.CompletionItem("iterator.iterate", vscode.CompletionItemKind.Function);
iteratoriterateFunction.detail = `pub fn iterate(from initial: a, with f: fn(a) -> a) -> Iterator(a)`;
iteratoriterateFunction.documentation = `Creates an iterator that inifinitely applies a function to a value. Examples > iterate(1, fn(n) { n * 3 }) |> take(5) |> to_list [1, 3, 9, 27, 81]`;
iteratoriterateFunction.insertText = new vscode.SnippetString("iterator.iterate(${1:from initial}, ${2:with f})");

completionItems.push(iteratoriterateFunction);
        

var iterateFunction = new vscode.CompletionItem("iterate", vscode.CompletionItemKind.Function);
iterateFunction.detail = `pub fn iterate(from initial: a, with f: fn(a) -> a) -> Iterator(a)`;
iterateFunction.documentation = `Creates an iterator that inifinitely applies a function to a value. Examples > iterate(1, fn(n) { n * 3 }) |> take(5) |> to_list [1, 3, 9, 27, 81]`;
iterateFunction.insertText = new vscode.SnippetString("iterate(${1:from initial}, ${2:with f})");

completionItems.push(iterateFunction);
        

var iteratorlastFunction = new vscode.CompletionItem("iterator.last", vscode.CompletionItemKind.Function);
iteratorlastFunction.detail = `pub fn last(iterator: Iterator(a)) -> Result(a, Nil)`;
iteratorlastFunction.documentation = `Returns the last element in the given iterator. Returns Error(Nil) if the iterator is empty. This function runs in linear time. Examples > empty() |> last Error(Nil)  > range(1, 10) |> last Ok(9)`;
iteratorlastFunction.insertText = new vscode.SnippetString("iterator.last(${1:iterator})");

completionItems.push(iteratorlastFunction);
        

var lastFunction = new vscode.CompletionItem("last", vscode.CompletionItemKind.Function);
lastFunction.detail = `pub fn last(iterator: Iterator(a)) -> Result(a, Nil)`;
lastFunction.documentation = `Returns the last element in the given iterator. Returns Error(Nil) if the iterator is empty. This function runs in linear time. Examples > empty() |> last Error(Nil)  > range(1, 10) |> last Ok(9)`;
lastFunction.insertText = new vscode.SnippetString("last(${1:iterator})");

completionItems.push(lastFunction);
        

var iteratorlengthFunction = new vscode.CompletionItem("iterator.length", vscode.CompletionItemKind.Function);
iteratorlengthFunction.detail = `pub fn length(over iterator: Iterator(a)) -> Int`;
iteratorlengthFunction.documentation = `Counts the number of elements in the given iterator. This function has to traverse the entire iterator to count its elements, so it runs in linear time. Examples > empty() |> length 0  > from_list([1, 2, 3, 4]) |> length 4`;
iteratorlengthFunction.insertText = new vscode.SnippetString("iterator.length(${1:over iterator})");

completionItems.push(iteratorlengthFunction);
        

var lengthFunction = new vscode.CompletionItem("length", vscode.CompletionItemKind.Function);
lengthFunction.detail = `pub fn length(over iterator: Iterator(a)) -> Int`;
lengthFunction.documentation = `Counts the number of elements in the given iterator. This function has to traverse the entire iterator to count its elements, so it runs in linear time. Examples > empty() |> length 0  > from_list([1, 2, 3, 4]) |> length 4`;
lengthFunction.insertText = new vscode.SnippetString("length(${1:over iterator})");

completionItems.push(lengthFunction);
        

var iteratormapFunction = new vscode.CompletionItem("iterator.map", vscode.CompletionItemKind.Function);
iteratormapFunction.detail = `pub fn map(over iterator: Iterator(a), with f: fn(a) -> b) -> Iterator(   b, )`;
iteratormapFunction.documentation = `Creates an iterator from an existing iterator and a transformation function. Each element in the new iterator will be the result of calling the given function on the elements in the given iterator. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > [1, 2, 3] > |> from_list > |> map(fn(x) { x * 2 }) > |> to_list [2, 4, 6]`;
iteratormapFunction.insertText = new vscode.SnippetString("iterator.map(${1:over iterator})");

completionItems.push(iteratormapFunction);
        

var mapFunction = new vscode.CompletionItem("map", vscode.CompletionItemKind.Function);
mapFunction.detail = `pub fn map(over iterator: Iterator(a), with f: fn(a) -> b) -> Iterator(   b, )`;
mapFunction.documentation = `Creates an iterator from an existing iterator and a transformation function. Each element in the new iterator will be the result of calling the given function on the elements in the given iterator. This function does not evaluate the elements of the iterator, the computation is performed when the iterator is later run. Examples > [1, 2, 3] > |> from_list > |> map(fn(x) { x * 2 }) > |> to_list [2, 4, 6]`;
mapFunction.insertText = new vscode.SnippetString("map(${1:over iterator})");

completionItems.push(mapFunction);
        

var iteratoronceFunction = new vscode.CompletionItem("iterator.once", vscode.CompletionItemKind.Function);
iteratoronceFunction.detail = `pub fn once(f: fn() -> a) -> Iterator(a)`;
iteratoronceFunction.documentation = `Creates an iterator that yields exactly one element provided by calling the given function. Examples > once(fn() { 1 }) |> to_list [1]`;
iteratoronceFunction.insertText = new vscode.SnippetString("iterator.once(${1:f})");

completionItems.push(iteratoronceFunction);
        

var onceFunction = new vscode.CompletionItem("once", vscode.CompletionItemKind.Function);
onceFunction.detail = `pub fn once(f: fn() -> a) -> Iterator(a)`;
onceFunction.documentation = `Creates an iterator that yields exactly one element provided by calling the given function. Examples > once(fn() { 1 }) |> to_list [1]`;
onceFunction.insertText = new vscode.SnippetString("once(${1:f})");

completionItems.push(onceFunction);
        

var iteratorrangeFunction = new vscode.CompletionItem("iterator.range", vscode.CompletionItemKind.Function);
iteratorrangeFunction.detail = `pub fn range(from start: Int, to stop: Int) -> Iterator(Int)`;
iteratorrangeFunction.documentation = `Creates an iterator of ints, starting at a given start int and stepping by one to a given end int. Examples > range(from: 1, to: 5) |> to_list [1, 2, 3, 4, 5]  > range(from: 1, to: -2) |> to_list [1, 0, -1, -2]  > range(from: 0, to: 0) |> to_list [0]`;
iteratorrangeFunction.insertText = new vscode.SnippetString("iterator.range(${1:from start}, ${2:to stop})");

completionItems.push(iteratorrangeFunction);
        

var rangeFunction = new vscode.CompletionItem("range", vscode.CompletionItemKind.Function);
rangeFunction.detail = `pub fn range(from start: Int, to stop: Int) -> Iterator(Int)`;
rangeFunction.documentation = `Creates an iterator of ints, starting at a given start int and stepping by one to a given end int. Examples > range(from: 1, to: 5) |> to_list [1, 2, 3, 4, 5]  > range(from: 1, to: -2) |> to_list [1, 0, -1, -2]  > range(from: 0, to: 0) |> to_list [0]`;
rangeFunction.insertText = new vscode.SnippetString("range(${1:from start}, ${2:to stop})");

completionItems.push(rangeFunction);
        

var iteratorreduceFunction = new vscode.CompletionItem("iterator.reduce", vscode.CompletionItemKind.Function);
iteratorreduceFunction.detail = `pub fn reduce(over iterator: Iterator(a), with f: fn(a, a) -> a) -> Result(   a,   Nil, )`;
iteratorreduceFunction.documentation = `This function acts similar to fold, but does not take an initial state. Instead, it starts from the first yielded element and combines it with each subsequent element in turn using the given function. The function is called as f(accumulator, current_element). Returns Ok to indicate a successful run, and Error if called on an empty iterator. Examples > from_list([]) |> reduce(fn(acc, x) { acc + x }) Error(Nil)  > from_list([1, 2, 3, 4, 5]) |> reduce(fn(acc, x) { acc + x }) Ok(15)`;
iteratorreduceFunction.insertText = new vscode.SnippetString("iterator.reduce(${1:over iterator})");

completionItems.push(iteratorreduceFunction);
        

var reduceFunction = new vscode.CompletionItem("reduce", vscode.CompletionItemKind.Function);
reduceFunction.detail = `pub fn reduce(over iterator: Iterator(a), with f: fn(a, a) -> a) -> Result(   a,   Nil, )`;
reduceFunction.documentation = `This function acts similar to fold, but does not take an initial state. Instead, it starts from the first yielded element and combines it with each subsequent element in turn using the given function. The function is called as f(accumulator, current_element). Returns Ok to indicate a successful run, and Error if called on an empty iterator. Examples > from_list([]) |> reduce(fn(acc, x) { acc + x }) Error(Nil)  > from_list([1, 2, 3, 4, 5]) |> reduce(fn(acc, x) { acc + x }) Ok(15)`;
reduceFunction.insertText = new vscode.SnippetString("reduce(${1:over iterator})");

completionItems.push(reduceFunction);
        

var iteratorrepeatFunction = new vscode.CompletionItem("iterator.repeat", vscode.CompletionItemKind.Function);
iteratorrepeatFunction.detail = `pub fn repeat(x: a) -> Iterator(a)`;
iteratorrepeatFunction.documentation = `Creates an iterator that returns the same value infinitely. Examples > repeat(10) > |> take(4) > |> to_list [10, 10, 10, 10]`;
iteratorrepeatFunction.insertText = new vscode.SnippetString("iterator.repeat(${1:x})");

completionItems.push(iteratorrepeatFunction);
        

var repeatFunction = new vscode.CompletionItem("repeat", vscode.CompletionItemKind.Function);
repeatFunction.detail = `pub fn repeat(x: a) -> Iterator(a)`;
repeatFunction.documentation = `Creates an iterator that returns the same value infinitely. Examples > repeat(10) > |> take(4) > |> to_list [10, 10, 10, 10]`;
repeatFunction.insertText = new vscode.SnippetString("repeat(${1:x})");

completionItems.push(repeatFunction);
        

var iteratorrepeatedlyFunction = new vscode.CompletionItem("iterator.repeatedly", vscode.CompletionItemKind.Function);
iteratorrepeatedlyFunction.detail = `pub fn repeatedly(f: fn() -> a) -> Iterator(a)`;
iteratorrepeatedlyFunction.documentation = `Creates an iterator that yields values created by calling a given function repeatedly.`;
iteratorrepeatedlyFunction.insertText = new vscode.SnippetString("iterator.repeatedly(${1:f})");

completionItems.push(iteratorrepeatedlyFunction);
        

var repeatedlyFunction = new vscode.CompletionItem("repeatedly", vscode.CompletionItemKind.Function);
repeatedlyFunction.detail = `pub fn repeatedly(f: fn() -> a) -> Iterator(a)`;
repeatedlyFunction.documentation = `Creates an iterator that yields values created by calling a given function repeatedly.`;
repeatedlyFunction.insertText = new vscode.SnippetString("repeatedly(${1:f})");

completionItems.push(repeatedlyFunction);
        

var iteratorrunFunction = new vscode.CompletionItem("iterator.run", vscode.CompletionItemKind.Function);
iteratorrunFunction.detail = `pub fn run(iterator: Iterator(a)) -> Nil`;
iteratorrunFunction.documentation = `Evaluates all elements emitted by the given iterator. This function is useful for when you wish to trigger any side effects that would occur when evaluating the iterator.`;
iteratorrunFunction.insertText = new vscode.SnippetString("iterator.run(${1:iterator})");

completionItems.push(iteratorrunFunction);
        

var runFunction = new vscode.CompletionItem("run", vscode.CompletionItemKind.Function);
runFunction.detail = `pub fn run(iterator: Iterator(a)) -> Nil`;
runFunction.documentation = `Evaluates all elements emitted by the given iterator. This function is useful for when you wish to trigger any side effects that would occur when evaluating the iterator.`;
runFunction.insertText = new vscode.SnippetString("run(${1:iterator})");

completionItems.push(runFunction);
        

var iteratorscanFunction = new vscode.CompletionItem("iterator.scan", vscode.CompletionItemKind.Function);
iteratorscanFunction.detail = `pub fn scan(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> b) -> Iterator(b)`;
iteratorscanFunction.documentation = `Creates an iterator from an existing iterator and a stateful function. Specifically, this behaves like fold, but yields intermediate results. Examples // Generate a sequence of partial sums > from_list([1, 2, 3, 4, 5]) > |> scan(from: 0, with: fn(acc, el) { acc + el }) > |> to_list [1, 3, 6, 10, 15]`;
iteratorscanFunction.insertText = new vscode.SnippetString("iterator.scan(${1:over iterator})");

completionItems.push(iteratorscanFunction);
        

var scanFunction = new vscode.CompletionItem("scan", vscode.CompletionItemKind.Function);
scanFunction.detail = `pub fn scan(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> b) -> Iterator(b)`;
scanFunction.documentation = `Creates an iterator from an existing iterator and a stateful function. Specifically, this behaves like fold, but yields intermediate results. Examples // Generate a sequence of partial sums > from_list([1, 2, 3, 4, 5]) > |> scan(from: 0, with: fn(acc, el) { acc + el }) > |> to_list [1, 3, 6, 10, 15]`;
scanFunction.insertText = new vscode.SnippetString("scan(${1:over iterator})");

completionItems.push(scanFunction);
        

var iteratorsingleFunction = new vscode.CompletionItem("iterator.single", vscode.CompletionItemKind.Function);
iteratorsingleFunction.detail = `pub fn single(elem: a) -> Iterator(a)`;
iteratorsingleFunction.documentation = `Creates an iterator that yields the given element exactly once. Examples > single(1) |> to_list [1]`;
iteratorsingleFunction.insertText = new vscode.SnippetString("iterator.single(${1:elem})");

completionItems.push(iteratorsingleFunction);
        

var singleFunction = new vscode.CompletionItem("single", vscode.CompletionItemKind.Function);
singleFunction.detail = `pub fn single(elem: a) -> Iterator(a)`;
singleFunction.documentation = `Creates an iterator that yields the given element exactly once. Examples > single(1) |> to_list [1]`;
singleFunction.insertText = new vscode.SnippetString("single(${1:elem})");

completionItems.push(singleFunction);
        

var iteratorsizedChunkFunction = new vscode.CompletionItem("iterator.sized_chunk", vscode.CompletionItemKind.Function);
iteratorsizedChunkFunction.detail = `pub fn sized_chunk(over iterator: Iterator(a), into count: Int) -> Iterator(   List(a), )`;
iteratorsizedChunkFunction.documentation = `Creates an iterator that emits chunks of given size. If the last chunk does not have count elements, it is yielded as a partial chunk, with less than count elements. For any count less than 1 this function behaves as if it was set to 1. Examples > from_list([1, 2, 3, 4, 5, 6]) > |> sized_chunk(into: 2) > |> to_list [[1, 2], [3, 4], [5, 6]]  > from_list([1, 2, 3, 4, 5, 6, 7, 8]) > |> sized_chunk(into: 3) > |> to_list [[1, 2, 3], [4, 5, 6], [7, 8]]`;
iteratorsizedChunkFunction.insertText = new vscode.SnippetString("iterator.sized_chunk(${1:over iterator})");

completionItems.push(iteratorsizedChunkFunction);
        

var sizedChunkFunction = new vscode.CompletionItem("sized_chunk", vscode.CompletionItemKind.Function);
sizedChunkFunction.detail = `pub fn sized_chunk(over iterator: Iterator(a), into count: Int) -> Iterator(   List(a), )`;
sizedChunkFunction.documentation = `Creates an iterator that emits chunks of given size. If the last chunk does not have count elements, it is yielded as a partial chunk, with less than count elements. For any count less than 1 this function behaves as if it was set to 1. Examples > from_list([1, 2, 3, 4, 5, 6]) > |> sized_chunk(into: 2) > |> to_list [[1, 2], [3, 4], [5, 6]]  > from_list([1, 2, 3, 4, 5, 6, 7, 8]) > |> sized_chunk(into: 3) > |> to_list [[1, 2, 3], [4, 5, 6], [7, 8]]`;
sizedChunkFunction.insertText = new vscode.SnippetString("sized_chunk(${1:over iterator})");

completionItems.push(sizedChunkFunction);
        

var iteratorstepFunction = new vscode.CompletionItem("iterator.step", vscode.CompletionItemKind.Function);
iteratorstepFunction.detail = `pub fn step(iterator: Iterator(a)) -> Step(a, Iterator(a))`;
iteratorstepFunction.documentation = `Eagerly accesses the first value of an interator, returning a Next that contains the first value and the rest of the iterator. If called on an empty iterator, Done is returned. Examples > assert Next(head, tail) = [1, 2, 3, 4] >   |> from_list >   |> step > head 1  > tail |> to_list [2, 3, 4]  > empty() |> step Done`;
iteratorstepFunction.insertText = new vscode.SnippetString("iterator.step(${1:iterator})");

completionItems.push(iteratorstepFunction);
        

var stepFunction = new vscode.CompletionItem("step", vscode.CompletionItemKind.Function);
stepFunction.detail = `pub fn step(iterator: Iterator(a)) -> Step(a, Iterator(a))`;
stepFunction.documentation = `Eagerly accesses the first value of an interator, returning a Next that contains the first value and the rest of the iterator. If called on an empty iterator, Done is returned. Examples > assert Next(head, tail) = [1, 2, 3, 4] >   |> from_list >   |> step > head 1  > tail |> to_list [2, 3, 4]  > empty() |> step Done`;
stepFunction.insertText = new vscode.SnippetString("step(${1:iterator})");

completionItems.push(stepFunction);
        

var iteratortakeFunction = new vscode.CompletionItem("iterator.take", vscode.CompletionItemKind.Function);
iteratortakeFunction.detail = `pub fn take(from iterator: Iterator(a), up_to desired: Int) -> Iterator(   a, )`;
iteratortakeFunction.documentation = `Creates an iterator that only yields the first desired elements. If the iterator does not have enough elements all of them are yielded. Examples > [1, 2, 3, 4, 5] > |> from_list > |> take(up_to: 3) > |> to_list [1, 2, 3]  > [1, 2] > |> from_list > |> take(up_to: 3) > |> to_list [1, 2]`;
iteratortakeFunction.insertText = new vscode.SnippetString("iterator.take(${1:from iterator})");

completionItems.push(iteratortakeFunction);
        

var takeFunction = new vscode.CompletionItem("take", vscode.CompletionItemKind.Function);
takeFunction.detail = `pub fn take(from iterator: Iterator(a), up_to desired: Int) -> Iterator(   a, )`;
takeFunction.documentation = `Creates an iterator that only yields the first desired elements. If the iterator does not have enough elements all of them are yielded. Examples > [1, 2, 3, 4, 5] > |> from_list > |> take(up_to: 3) > |> to_list [1, 2, 3]  > [1, 2] > |> from_list > |> take(up_to: 3) > |> to_list [1, 2]`;
takeFunction.insertText = new vscode.SnippetString("take(${1:from iterator})");

completionItems.push(takeFunction);
        

var iteratortakeWhileFunction = new vscode.CompletionItem("iterator.take_while", vscode.CompletionItemKind.Function);
iteratortakeWhileFunction.detail = `pub fn take_while(in iterator: Iterator(a), satisfying predicate: fn(     a,   ) -> Bool) -> Iterator(a)`;
iteratortakeWhileFunction.documentation = `Creates an iterator that yields elements while the predicate returns True. Examples > from_list([1, 2, 3, 2, 4]) > |> take_while(satisfying: fn(x) { x < 3 }) > |> to_list [1, 2]`;
iteratortakeWhileFunction.insertText = new vscode.SnippetString("iterator.take_while(${1:in iterator})");

completionItems.push(iteratortakeWhileFunction);
        

var takeWhileFunction = new vscode.CompletionItem("take_while", vscode.CompletionItemKind.Function);
takeWhileFunction.detail = `pub fn take_while(in iterator: Iterator(a), satisfying predicate: fn(     a,   ) -> Bool) -> Iterator(a)`;
takeWhileFunction.documentation = `Creates an iterator that yields elements while the predicate returns True. Examples > from_list([1, 2, 3, 2, 4]) > |> take_while(satisfying: fn(x) { x < 3 }) > |> to_list [1, 2]`;
takeWhileFunction.insertText = new vscode.SnippetString("take_while(${1:in iterator})");

completionItems.push(takeWhileFunction);
        

var iteratortoListFunction = new vscode.CompletionItem("iterator.to_list", vscode.CompletionItemKind.Function);
iteratortoListFunction.detail = `pub fn to_list(iterator: Iterator(a)) -> List(a)`;
iteratortoListFunction.documentation = `Evaluates an iterator and returns all the elements as a list. If called on an iterator of infinite length then this function will never return. Examples > [1, 2, 3] > |> from_list > |> map(fn(x) { x * 2 }) > |> to_list [2, 4, 6]`;
iteratortoListFunction.insertText = new vscode.SnippetString("iterator.to_list(${1:iterator})");

completionItems.push(iteratortoListFunction);
        

var toListFunction = new vscode.CompletionItem("to_list", vscode.CompletionItemKind.Function);
toListFunction.detail = `pub fn to_list(iterator: Iterator(a)) -> List(a)`;
toListFunction.documentation = `Evaluates an iterator and returns all the elements as a list. If called on an iterator of infinite length then this function will never return. Examples > [1, 2, 3] > |> from_list > |> map(fn(x) { x * 2 }) > |> to_list [2, 4, 6]`;
toListFunction.insertText = new vscode.SnippetString("to_list(${1:iterator})");

completionItems.push(toListFunction);
        

var iteratortransformFunction = new vscode.CompletionItem("iterator.transform", vscode.CompletionItemKind.Function);
iteratortransformFunction.detail = `pub fn transform(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> Step(c, b)) -> Iterator(c)`;
iteratortransformFunction.documentation = `Creates an iterator from an existing iterator and a stateful function that may short-circuit. f takes arguments acc for current state and el for current element from underlying iterator, and returns either Next with yielded element and new state value, or Done to halt the iterator. Examples Approximate implementation of index in terms of transform: > from_list(["a", "b", "c"]) > |> transform(0, fn(i, el) { Next(#(i, el), i + 1) }) > |> to_list [#(0, "a"), #(1, "b"), #(2, "c")]`;
iteratortransformFunction.insertText = new vscode.SnippetString("iterator.transform(${1:over iterator})");

completionItems.push(iteratortransformFunction);
        

var transformFunction = new vscode.CompletionItem("transform", vscode.CompletionItemKind.Function);
transformFunction.detail = `pub fn transform(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> Step(c, b)) -> Iterator(c)`;
transformFunction.documentation = `Creates an iterator from an existing iterator and a stateful function that may short-circuit. f takes arguments acc for current state and el for current element from underlying iterator, and returns either Next with yielded element and new state value, or Done to halt the iterator. Examples Approximate implementation of index in terms of transform: > from_list(["a", "b", "c"]) > |> transform(0, fn(i, el) { Next(#(i, el), i + 1) }) > |> to_list [#(0, "a"), #(1, "b"), #(2, "c")]`;
transformFunction.insertText = new vscode.SnippetString("transform(${1:over iterator})");

completionItems.push(transformFunction);
        

var iteratortryFoldFunction = new vscode.CompletionItem("iterator.try_fold", vscode.CompletionItemKind.Function);
iteratortryFoldFunction.detail = `pub fn try_fold(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> Result(b, c)) -> Result(b, c)`;
iteratortryFoldFunction.documentation = `A variant of fold that might fail. The folding function should return Result(accumulator, error). If the returned value is Ok(accumulator) try_fold will try the next value in the iterator. If the returned value is Error(error) try_fold will stop and return that error. Examples > [1, 2, 3, 4] > |> iterator.from_list() > |> try_fold(0, fn(acc, i) { >   case i < 3 { >     True -> Ok(acc + i) >     False -> Error(Nil) >   } > }) Error(Nil)`;
iteratortryFoldFunction.insertText = new vscode.SnippetString("iterator.try_fold(${1:over iterator})");

completionItems.push(iteratortryFoldFunction);
        

var tryFoldFunction = new vscode.CompletionItem("try_fold", vscode.CompletionItemKind.Function);
tryFoldFunction.detail = `pub fn try_fold(over iterator: Iterator(a), from initial: b, with f: fn(     b,     a,   ) -> Result(b, c)) -> Result(b, c)`;
tryFoldFunction.documentation = `A variant of fold that might fail. The folding function should return Result(accumulator, error). If the returned value is Ok(accumulator) try_fold will try the next value in the iterator. If the returned value is Error(error) try_fold will stop and return that error. Examples > [1, 2, 3, 4] > |> iterator.from_list() > |> try_fold(0, fn(acc, i) { >   case i < 3 { >     True -> Ok(acc + i) >     False -> Error(Nil) >   } > }) Error(Nil)`;
tryFoldFunction.insertText = new vscode.SnippetString("try_fold(${1:over iterator})");

completionItems.push(tryFoldFunction);
        

var iteratorunfoldFunction = new vscode.CompletionItem("iterator.unfold", vscode.CompletionItemKind.Function);
iteratorunfoldFunction.detail = `pub fn unfold(from initial: a, with f: fn(a) -> Step(b, a)) -> Iterator(   b, )`;
iteratorunfoldFunction.documentation = `Creates an iterator from a given function and accumulator. The function is called on the accumulator and returns either Done, indicating the iterator has no more elements, or Next which contains a new element and accumulator. The element is yielded by the iterator and the new accumulator is used with the function to compute the next element in the sequence. Examples > unfold(from: 5, with: fn(n) { >  case n { >    0 -> Done >    n -> Next(element: n, accumulator: n - 1) >  } > }) > |> to_list [5, 4, 3, 2, 1]`;
iteratorunfoldFunction.insertText = new vscode.SnippetString("iterator.unfold(${1:from initial}, ${2:with f})");

completionItems.push(iteratorunfoldFunction);
        

var unfoldFunction = new vscode.CompletionItem("unfold", vscode.CompletionItemKind.Function);
unfoldFunction.detail = `pub fn unfold(from initial: a, with f: fn(a) -> Step(b, a)) -> Iterator(   b, )`;
unfoldFunction.documentation = `Creates an iterator from a given function and accumulator. The function is called on the accumulator and returns either Done, indicating the iterator has no more elements, or Next which contains a new element and accumulator. The element is yielded by the iterator and the new accumulator is used with the function to compute the next element in the sequence. Examples > unfold(from: 5, with: fn(n) { >  case n { >    0 -> Done >    n -> Next(element: n, accumulator: n - 1) >  } > }) > |> to_list [5, 4, 3, 2, 1]`;
unfoldFunction.insertText = new vscode.SnippetString("unfold(${1:from initial}, ${2:with f})");

completionItems.push(unfoldFunction);
        

var iteratorzipFunction = new vscode.CompletionItem("iterator.zip", vscode.CompletionItemKind.Function);
iteratorzipFunction.detail = `pub fn zip(left: Iterator(a), right: Iterator(b)) -> Iterator(   #(a, b), )`;
iteratorzipFunction.documentation = `Zips two iterators together, emitting values from both until the shorter one runs out. Examples > from_list(["a", "b", "c"]) > |> zip(range(20, 30)) > |> to_list [#("a", 20), #("b", 21), #("c", 22)]`;
iteratorzipFunction.insertText = new vscode.SnippetString("iterator.zip(${1:left})");

completionItems.push(iteratorzipFunction);
        

var zipFunction = new vscode.CompletionItem("zip", vscode.CompletionItemKind.Function);
zipFunction.detail = `pub fn zip(left: Iterator(a), right: Iterator(b)) -> Iterator(   #(a, b), )`;
zipFunction.documentation = `Zips two iterators together, emitting values from both until the shorter one runs out. Examples > from_list(["a", "b", "c"]) > |> zip(range(20, 30)) > |> to_list [#("a", 20), #("b", 21), #("c", 22)]`;
zipFunction.insertText = new vscode.SnippetString("zip(${1:left})");

completionItems.push(zipFunction);
        

var listallFunction = new vscode.CompletionItem("list.all", vscode.CompletionItemKind.Function);
listallFunction.detail = `pub fn all(in list: List(a), satisfying predicate: fn(a) -> Bool) -> Bool`;
listallFunction.documentation = `Returns True if the given function returns True for all the elements in the given list. If the function returns False for any of the elements it immediately returns False without checking the rest of the list. Examples > all([], fn(x) { x > 3 }) True  > all([4, 5], fn(x) { x > 3 }) True  > all([4, 3], fn(x) { x > 3 }) False`;
listallFunction.insertText = new vscode.SnippetString("list.all(${1:in list})");

completionItems.push(listallFunction);
        

var allFunction = new vscode.CompletionItem("all", vscode.CompletionItemKind.Function);
allFunction.detail = `pub fn all(in list: List(a), satisfying predicate: fn(a) -> Bool) -> Bool`;
allFunction.documentation = `Returns True if the given function returns True for all the elements in the given list. If the function returns False for any of the elements it immediately returns False without checking the rest of the list. Examples > all([], fn(x) { x > 3 }) True  > all([4, 5], fn(x) { x > 3 }) True  > all([4, 3], fn(x) { x > 3 }) False`;
allFunction.insertText = new vscode.SnippetString("all(${1:in list})");

completionItems.push(allFunction);
        

var listanyFunction = new vscode.CompletionItem("list.any", vscode.CompletionItemKind.Function);
listanyFunction.detail = `pub fn any(in list: List(a), satisfying predicate: fn(a) -> Bool) -> Bool`;
listanyFunction.documentation = `Returns True if the given function returns True for any the elements in the given list. If the function returns True for any of the elements it immediately returns True without checking the rest of the list. Examples > any([], fn(x) { x > 3 }) False  > any([4, 5], fn(x) { x > 3 }) True  > any([4, 3], fn(x) { x > 4 }) False  > any([3, 4], fn(x) { x > 3 }) True`;
listanyFunction.insertText = new vscode.SnippetString("list.any(${1:in list})");

completionItems.push(listanyFunction);
        

var anyFunction = new vscode.CompletionItem("any", vscode.CompletionItemKind.Function);
anyFunction.detail = `pub fn any(in list: List(a), satisfying predicate: fn(a) -> Bool) -> Bool`;
anyFunction.documentation = `Returns True if the given function returns True for any the elements in the given list. If the function returns True for any of the elements it immediately returns True without checking the rest of the list. Examples > any([], fn(x) { x > 3 }) False  > any([4, 5], fn(x) { x > 3 }) True  > any([4, 3], fn(x) { x > 4 }) False  > any([3, 4], fn(x) { x > 3 }) True`;
anyFunction.insertText = new vscode.SnippetString("any(${1:in list})");

completionItems.push(anyFunction);
        

var listappendFunction = new vscode.CompletionItem("list.append", vscode.CompletionItemKind.Function);
listappendFunction.detail = `pub fn append(first: List(a), second: List(a)) -> List(a)`;
listappendFunction.documentation = `Joins one list onto the end of another. This function runs in linear time, and it traverses and copies the first list. Examples > append([1, 2], [3]) [1, 2, 3]`;
listappendFunction.insertText = new vscode.SnippetString("list.append(${1:first})");

completionItems.push(listappendFunction);
        

var appendFunction = new vscode.CompletionItem("append", vscode.CompletionItemKind.Function);
appendFunction.detail = `pub fn append(first: List(a), second: List(a)) -> List(a)`;
appendFunction.documentation = `Joins one list onto the end of another. This function runs in linear time, and it traverses and copies the first list. Examples > append([1, 2], [3]) [1, 2, 3]`;
appendFunction.insertText = new vscode.SnippetString("append(${1:first})");

completionItems.push(appendFunction);
        

var listatFunction = new vscode.CompletionItem("list.at", vscode.CompletionItemKind.Function);
listatFunction.detail = `pub fn at(in list: List(a), get index: Int) -> Result(a, Nil)`;
listatFunction.documentation = `Returns the element in the Nth position in the list, with 0 being the first position. Error(Nil) is returned if the list is not long enough for the given index or if the index is less than 0. Examples > at([1, 2, 3], 1) Ok(2)  > at([1, 2, 3], 5) Error(Nil)`;
listatFunction.insertText = new vscode.SnippetString("list.at(${1:in list})");

completionItems.push(listatFunction);
        

var atFunction = new vscode.CompletionItem("at", vscode.CompletionItemKind.Function);
atFunction.detail = `pub fn at(in list: List(a), get index: Int) -> Result(a, Nil)`;
atFunction.documentation = `Returns the element in the Nth position in the list, with 0 being the first position. Error(Nil) is returned if the list is not long enough for the given index or if the index is less than 0. Examples > at([1, 2, 3], 1) Ok(2)  > at([1, 2, 3], 5) Error(Nil)`;
atFunction.insertText = new vscode.SnippetString("at(${1:in list})");

completionItems.push(atFunction);
        

var listchunkFunction = new vscode.CompletionItem("list.chunk", vscode.CompletionItemKind.Function);
listchunkFunction.detail = `pub fn chunk(in list: List(a), by f: fn(a) -> b) -> List(List(a))`;
listchunkFunction.documentation = `Returns a list of chunks in which the return value of calling f on each element is the same. Examples > [1, 2, 2, 3, 4, 4, 6, 7, 7] |> chunk(by: fn(n) { n % 2 }) [[1], [2, 2], [3], [4, 4, 6], [7, 7]]`;
listchunkFunction.insertText = new vscode.SnippetString("list.chunk(${1:in list})");

completionItems.push(listchunkFunction);
        

var chunkFunction = new vscode.CompletionItem("chunk", vscode.CompletionItemKind.Function);
chunkFunction.detail = `pub fn chunk(in list: List(a), by f: fn(a) -> b) -> List(List(a))`;
chunkFunction.documentation = `Returns a list of chunks in which the return value of calling f on each element is the same. Examples > [1, 2, 2, 3, 4, 4, 6, 7, 7] |> chunk(by: fn(n) { n % 2 }) [[1], [2, 2], [3], [4, 4, 6], [7, 7]]`;
chunkFunction.insertText = new vscode.SnippetString("chunk(${1:in list})");

completionItems.push(chunkFunction);
        

var listcombinationPairsFunction = new vscode.CompletionItem("list.combination_pairs", vscode.CompletionItemKind.Function);
listcombinationPairsFunction.detail = `pub fn combination_pairs(items: List(a)) -> List(#(a, a))`;
listcombinationPairsFunction.documentation = `Return unique pair combinations of elements in the list Examples > combination_pairs([1, 2, 3]) [#(1, 2), #(1, 3), #(2, 3)]`;
listcombinationPairsFunction.insertText = new vscode.SnippetString("list.combination_pairs(${1:items})");

completionItems.push(listcombinationPairsFunction);
        

var combinationPairsFunction = new vscode.CompletionItem("combination_pairs", vscode.CompletionItemKind.Function);
combinationPairsFunction.detail = `pub fn combination_pairs(items: List(a)) -> List(#(a, a))`;
combinationPairsFunction.documentation = `Return unique pair combinations of elements in the list Examples > combination_pairs([1, 2, 3]) [#(1, 2), #(1, 3), #(2, 3)]`;
combinationPairsFunction.insertText = new vscode.SnippetString("combination_pairs(${1:items})");

completionItems.push(combinationPairsFunction);
        

var listcombinationsFunction = new vscode.CompletionItem("list.combinations", vscode.CompletionItemKind.Function);
listcombinationsFunction.detail = `pub fn combinations(items: List(a), by n: Int) -> List(List(a))`;
listcombinationsFunction.documentation = `Return unique combinations of elements in the list. Examples > combinations([1, 2, 3], 2) [[1, 2], [1, 3], [2, 3]]  > combinations([1, 2, 3, 4], 3) [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]`;
listcombinationsFunction.insertText = new vscode.SnippetString("list.combinations(${1:items})");

completionItems.push(listcombinationsFunction);
        

var combinationsFunction = new vscode.CompletionItem("combinations", vscode.CompletionItemKind.Function);
combinationsFunction.detail = `pub fn combinations(items: List(a), by n: Int) -> List(List(a))`;
combinationsFunction.documentation = `Return unique combinations of elements in the list. Examples > combinations([1, 2, 3], 2) [[1, 2], [1, 3], [2, 3]]  > combinations([1, 2, 3, 4], 3) [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]`;
combinationsFunction.insertText = new vscode.SnippetString("combinations(${1:items})");

completionItems.push(combinationsFunction);
        

var listcontainsFunction = new vscode.CompletionItem("list.contains", vscode.CompletionItemKind.Function);
listcontainsFunction.detail = `pub fn contains(list: List(a), any elem: a) -> Bool`;
listcontainsFunction.documentation = `Determines whether or not a given element exists within a given list. This function traverses the list to find the element, so it runs in linear time. Examples > [] |> contains(any: 0) False  > [0] |> contains(any: 0) True  > [1] |> contains(any: 0) False  > [1, 1] |> contains(any: 0) False  > [1, 0] |> contains(any: 0) True`;
listcontainsFunction.insertText = new vscode.SnippetString("list.contains(${1:list})");

completionItems.push(listcontainsFunction);
        

var containsFunction = new vscode.CompletionItem("contains", vscode.CompletionItemKind.Function);
containsFunction.detail = `pub fn contains(list: List(a), any elem: a) -> Bool`;
containsFunction.documentation = `Determines whether or not a given element exists within a given list. This function traverses the list to find the element, so it runs in linear time. Examples > [] |> contains(any: 0) False  > [0] |> contains(any: 0) True  > [1] |> contains(any: 0) False  > [1, 1] |> contains(any: 0) False  > [1, 0] |> contains(any: 0) True`;
containsFunction.insertText = new vscode.SnippetString("contains(${1:list})");

completionItems.push(containsFunction);
        

var listdropFunction = new vscode.CompletionItem("list.drop", vscode.CompletionItemKind.Function);
listdropFunction.detail = `pub fn drop(from list: List(a), up_to n: Int) -> List(a)`;
listdropFunction.documentation = `Returns a list that is the given list with up to the given number of elements removed from the front of the list. If the element has less than the number of elements an empty list is returned. This function runs in linear time but does not copy the list. Examples > drop([1, 2, 3, 4], 2) [3, 4]  > drop([1, 2, 3, 4], 9) []`;
listdropFunction.insertText = new vscode.SnippetString("list.drop(${1:from list})");

completionItems.push(listdropFunction);
        

var dropFunction = new vscode.CompletionItem("drop", vscode.CompletionItemKind.Function);
dropFunction.detail = `pub fn drop(from list: List(a), up_to n: Int) -> List(a)`;
dropFunction.documentation = `Returns a list that is the given list with up to the given number of elements removed from the front of the list. If the element has less than the number of elements an empty list is returned. This function runs in linear time but does not copy the list. Examples > drop([1, 2, 3, 4], 2) [3, 4]  > drop([1, 2, 3, 4], 9) []`;
dropFunction.insertText = new vscode.SnippetString("drop(${1:from list})");

completionItems.push(dropFunction);
        

var listdropWhileFunction = new vscode.CompletionItem("list.drop_while", vscode.CompletionItemKind.Function);
listdropWhileFunction.detail = `pub fn drop_while(in list: List(a), satisfying predicate: fn(a) ->     Bool) -> List(a)`;
listdropWhileFunction.documentation = `Drops the first elements in a given list for which the predicate funtion returns True. Examples > drop_while([1, 2, 3, 4], fn (x) { x < 3 }) [3, 4]`;
listdropWhileFunction.insertText = new vscode.SnippetString("list.drop_while(${1:in list})");

completionItems.push(listdropWhileFunction);
        

var dropWhileFunction = new vscode.CompletionItem("drop_while", vscode.CompletionItemKind.Function);
dropWhileFunction.detail = `pub fn drop_while(in list: List(a), satisfying predicate: fn(a) ->     Bool) -> List(a)`;
dropWhileFunction.documentation = `Drops the first elements in a given list for which the predicate funtion returns True. Examples > drop_while([1, 2, 3, 4], fn (x) { x < 3 }) [3, 4]`;
dropWhileFunction.insertText = new vscode.SnippetString("drop_while(${1:in list})");

completionItems.push(dropWhileFunction);
        

var listeachFunction = new vscode.CompletionItem("list.each", vscode.CompletionItemKind.Function);
listeachFunction.detail = `pub fn each(list: List(a), f: fn(a) -> b) -> Nil`;
listeachFunction.documentation = `Calls a function for each element in a list, discarding the return value. Useful for calling a side effect for every item of a list. > list.each([1, 2, 3], io.println) Nil`;
listeachFunction.insertText = new vscode.SnippetString("list.each(${1:list})");

completionItems.push(listeachFunction);
        

var eachFunction = new vscode.CompletionItem("each", vscode.CompletionItemKind.Function);
eachFunction.detail = `pub fn each(list: List(a), f: fn(a) -> b) -> Nil`;
eachFunction.documentation = `Calls a function for each element in a list, discarding the return value. Useful for calling a side effect for every item of a list. > list.each([1, 2, 3], io.println) Nil`;
eachFunction.insertText = new vscode.SnippetString("each(${1:list})");

completionItems.push(eachFunction);
        

var listfilterFunction = new vscode.CompletionItem("list.filter", vscode.CompletionItemKind.Function);
listfilterFunction.detail = `pub fn filter(list: List(a), for predicate: fn(a) -> Bool) -> List(   a, )`;
listfilterFunction.documentation = `Returns a new list containing only the elements from the first list for which the given functions returns True. Examples > filter([2, 4, 6, 1], fn(x) { x > 2 }) [4, 6]  > filter([2, 4, 6, 1], fn(x) { x > 6 }) []`;
listfilterFunction.insertText = new vscode.SnippetString("list.filter(${1:list})");

completionItems.push(listfilterFunction);
        

var filterFunction = new vscode.CompletionItem("filter", vscode.CompletionItemKind.Function);
filterFunction.detail = `pub fn filter(list: List(a), for predicate: fn(a) -> Bool) -> List(   a, )`;
filterFunction.documentation = `Returns a new list containing only the elements from the first list for which the given functions returns True. Examples > filter([2, 4, 6, 1], fn(x) { x > 2 }) [4, 6]  > filter([2, 4, 6, 1], fn(x) { x > 6 }) []`;
filterFunction.insertText = new vscode.SnippetString("filter(${1:list})");

completionItems.push(filterFunction);
        

var listfilterMapFunction = new vscode.CompletionItem("list.filter_map", vscode.CompletionItemKind.Function);
listfilterMapFunction.detail = `pub fn filter_map(list: List(a), with fun: fn(a) -> Result(b, c)) -> List(   b, )`;
listfilterMapFunction.documentation = `Returns a new list containing only the elements from the first list for which the given functions returns Ok(_). Examples > filter_map([2, 4, 6, 1], Error) []  > filter_map([2, 4, 6, 1], fn(x) { Ok(x + 1) }) [3, 5, 7, 2]`;
listfilterMapFunction.insertText = new vscode.SnippetString("list.filter_map(${1:list})");

completionItems.push(listfilterMapFunction);
        

var filterMapFunction = new vscode.CompletionItem("filter_map", vscode.CompletionItemKind.Function);
filterMapFunction.detail = `pub fn filter_map(list: List(a), with fun: fn(a) -> Result(b, c)) -> List(   b, )`;
filterMapFunction.documentation = `Returns a new list containing only the elements from the first list for which the given functions returns Ok(_). Examples > filter_map([2, 4, 6, 1], Error) []  > filter_map([2, 4, 6, 1], fn(x) { Ok(x + 1) }) [3, 5, 7, 2]`;
filterMapFunction.insertText = new vscode.SnippetString("filter_map(${1:list})");

completionItems.push(filterMapFunction);
        

var listfindFunction = new vscode.CompletionItem("list.find", vscode.CompletionItemKind.Function);
listfindFunction.detail = `pub fn find(in haystack: List(a), one_that is_desired: fn(a) ->     Bool) -> Result(a, Nil)`;
listfindFunction.documentation = `Finds the first element in a given list for which the given function returns True. Returns Error(Nil) if no such element is found. Examples > find([1, 2, 3], fn(x) { x > 2 }) Ok(3)  > find([1, 2, 3], fn(x) { x > 4 }) Error(Nil)  > find([], fn(_) { True }) Error(Nil)`;
listfindFunction.insertText = new vscode.SnippetString("list.find(${1:in haystack})");

completionItems.push(listfindFunction);
        

var findFunction = new vscode.CompletionItem("find", vscode.CompletionItemKind.Function);
findFunction.detail = `pub fn find(in haystack: List(a), one_that is_desired: fn(a) ->     Bool) -> Result(a, Nil)`;
findFunction.documentation = `Finds the first element in a given list for which the given function returns True. Returns Error(Nil) if no such element is found. Examples > find([1, 2, 3], fn(x) { x > 2 }) Ok(3)  > find([1, 2, 3], fn(x) { x > 4 }) Error(Nil)  > find([], fn(_) { True }) Error(Nil)`;
findFunction.insertText = new vscode.SnippetString("find(${1:in haystack})");

completionItems.push(findFunction);
        

var listfindMapFunction = new vscode.CompletionItem("list.find_map", vscode.CompletionItemKind.Function);
listfindMapFunction.detail = `pub fn find_map(in haystack: List(a), with fun: fn(a) ->     Result(b, c)) -> Result(b, Nil)`;
listfindMapFunction.documentation = `Finds the first element in a given list for which the given function returns Ok(new_value), then returns the wrapped new_value. Returns Error(Nil) if no such element is found. Examples > find_map([[], [2], [3]], head) Ok(2)  > find_map([[], []], head) Error(Nil)  > find_map([], head) Error(Nil)`;
listfindMapFunction.insertText = new vscode.SnippetString("list.find_map(${1:in haystack})");

completionItems.push(listfindMapFunction);
        

var findMapFunction = new vscode.CompletionItem("find_map", vscode.CompletionItemKind.Function);
findMapFunction.detail = `pub fn find_map(in haystack: List(a), with fun: fn(a) ->     Result(b, c)) -> Result(b, Nil)`;
findMapFunction.documentation = `Finds the first element in a given list for which the given function returns Ok(new_value), then returns the wrapped new_value. Returns Error(Nil) if no such element is found. Examples > find_map([[], [2], [3]], head) Ok(2)  > find_map([[], []], head) Error(Nil)  > find_map([], head) Error(Nil)`;
findMapFunction.insertText = new vscode.SnippetString("find_map(${1:in haystack})");

completionItems.push(findMapFunction);
        

var listfirstFunction = new vscode.CompletionItem("list.first", vscode.CompletionItemKind.Function);
listfirstFunction.detail = `pub fn first(list: List(a)) -> Result(a, Nil)`;
listfirstFunction.documentation = `Gets the first element from the start of the list, if there is one. Examples > first([]) Error(Nil)  > first([0]) Ok(0)  > first([1, 2]) Ok(1)`;
listfirstFunction.insertText = new vscode.SnippetString("list.first(${1:list})");

completionItems.push(listfirstFunction);
        

var firstFunction = new vscode.CompletionItem("first", vscode.CompletionItemKind.Function);
firstFunction.detail = `pub fn first(list: List(a)) -> Result(a, Nil)`;
firstFunction.documentation = `Gets the first element from the start of the list, if there is one. Examples > first([]) Error(Nil)  > first([0]) Ok(0)  > first([1, 2]) Ok(1)`;
firstFunction.insertText = new vscode.SnippetString("first(${1:list})");

completionItems.push(firstFunction);
        

var listflatMapFunction = new vscode.CompletionItem("list.flat_map", vscode.CompletionItemKind.Function);
listflatMapFunction.detail = `pub fn flat_map(over list: List(a), with fun: fn(a) -> List(b)) -> List(   b, )`;
listflatMapFunction.documentation = `Maps the list with the given function and then flattens it. Examples > flat_map([2, 4, 6], fn(x) { [x, x + 1] }) [2, 3, 4, 5, 6, 7]`;
listflatMapFunction.insertText = new vscode.SnippetString("list.flat_map(${1:over list})");

completionItems.push(listflatMapFunction);
        

var flatMapFunction = new vscode.CompletionItem("flat_map", vscode.CompletionItemKind.Function);
flatMapFunction.detail = `pub fn flat_map(over list: List(a), with fun: fn(a) -> List(b)) -> List(   b, )`;
flatMapFunction.documentation = `Maps the list with the given function and then flattens it. Examples > flat_map([2, 4, 6], fn(x) { [x, x + 1] }) [2, 3, 4, 5, 6, 7]`;
flatMapFunction.insertText = new vscode.SnippetString("flat_map(${1:over list})");

completionItems.push(flatMapFunction);
        

var listflattenFunction = new vscode.CompletionItem("list.flatten", vscode.CompletionItemKind.Function);
listflattenFunction.detail = `pub fn flatten(lists: List(List(a))) -> List(a)`;
listflattenFunction.documentation = `Flattens a list of lists into a single list. This function traverses all elements twice. Examples > flatten([[1], [2, 3], []]) [1, 2, 3]`;
listflattenFunction.insertText = new vscode.SnippetString("list.flatten(${1:lists})");

completionItems.push(listflattenFunction);
        

var flattenFunction = new vscode.CompletionItem("flatten", vscode.CompletionItemKind.Function);
flattenFunction.detail = `pub fn flatten(lists: List(List(a))) -> List(a)`;
flattenFunction.documentation = `Flattens a list of lists into a single list. This function traverses all elements twice. Examples > flatten([[1], [2, 3], []]) [1, 2, 3]`;
flattenFunction.insertText = new vscode.SnippetString("flatten(${1:lists})");

completionItems.push(flattenFunction);
        

var listfoldFunction = new vscode.CompletionItem("list.fold", vscode.CompletionItemKind.Function);
listfoldFunction.detail = `pub fn fold(over list: List(a), from initial: b, with fun: fn(     b,     a,   ) -> b) -> b`;
listfoldFunction.documentation = `Reduces a list of elements into a single value by calling a given function on each element, going from left to right. fold([1, 2, 3], 0, add) is the equivalent of add(add(add(0, 1), 2), 3). This function runs in linear time.`;
listfoldFunction.insertText = new vscode.SnippetString("list.fold(${1:over list})");

completionItems.push(listfoldFunction);
        

var foldFunction = new vscode.CompletionItem("fold", vscode.CompletionItemKind.Function);
foldFunction.detail = `pub fn fold(over list: List(a), from initial: b, with fun: fn(     b,     a,   ) -> b) -> b`;
foldFunction.documentation = `Reduces a list of elements into a single value by calling a given function on each element, going from left to right. fold([1, 2, 3], 0, add) is the equivalent of add(add(add(0, 1), 2), 3). This function runs in linear time.`;
foldFunction.insertText = new vscode.SnippetString("fold(${1:over list})");

completionItems.push(foldFunction);
        

var listfoldRightFunction = new vscode.CompletionItem("list.fold_right", vscode.CompletionItemKind.Function);
listfoldRightFunction.detail = `pub fn fold_right(over list: List(a), from initial: b, with fun: fn(     b,     a,   ) -> b) -> b`;
listfoldRightFunction.documentation = `Reduces a list of elements into a single value by calling a given function on each element, going from right to left. fold_right([1, 2, 3], 0, add) is the equivalent of add(add(add(0, 3), 2), 1). This function runs in linear time. Unlike fold this function is not tail recursive. Where possible use fold instead as it will use less memory.`;
listfoldRightFunction.insertText = new vscode.SnippetString("list.fold_right(${1:over list})");

completionItems.push(listfoldRightFunction);
        

var foldRightFunction = new vscode.CompletionItem("fold_right", vscode.CompletionItemKind.Function);
foldRightFunction.detail = `pub fn fold_right(over list: List(a), from initial: b, with fun: fn(     b,     a,   ) -> b) -> b`;
foldRightFunction.documentation = `Reduces a list of elements into a single value by calling a given function on each element, going from right to left. fold_right([1, 2, 3], 0, add) is the equivalent of add(add(add(0, 3), 2), 1). This function runs in linear time. Unlike fold this function is not tail recursive. Where possible use fold instead as it will use less memory.`;
foldRightFunction.insertText = new vscode.SnippetString("fold_right(${1:over list})");

completionItems.push(foldRightFunction);
        

var listfoldUntilFunction = new vscode.CompletionItem("list.fold_until", vscode.CompletionItemKind.Function);
listfoldUntilFunction.detail = `pub fn fold_until(over collection: List(a), from accumulator: b, with fun: fn(     b,     a,   ) -> ContinueOrStop(b)) -> b`;
listfoldUntilFunction.documentation = `A variant of fold that allows to stop folding earlier. The folding function should return ContinueOrStop(accumulator). If the returned value is Continue(accumulator) fold_until will try the next value in the list. If the returned value is Stop(accumulator) fold_until will stop and return that accumulator. Examples [1, 2, 3, 4] |> fold_until(0, fn(acc, i) {   case i < 3 {     True -> Continue(acc + i)     False -> Stop(acc)   } })`;
listfoldUntilFunction.insertText = new vscode.SnippetString("list.fold_until(${1:over collection})");

completionItems.push(listfoldUntilFunction);
        

var foldUntilFunction = new vscode.CompletionItem("fold_until", vscode.CompletionItemKind.Function);
foldUntilFunction.detail = `pub fn fold_until(over collection: List(a), from accumulator: b, with fun: fn(     b,     a,   ) -> ContinueOrStop(b)) -> b`;
foldUntilFunction.documentation = `A variant of fold that allows to stop folding earlier. The folding function should return ContinueOrStop(accumulator). If the returned value is Continue(accumulator) fold_until will try the next value in the list. If the returned value is Stop(accumulator) fold_until will stop and return that accumulator. Examples [1, 2, 3, 4] |> fold_until(0, fn(acc, i) {   case i < 3 {     True -> Continue(acc + i)     False -> Stop(acc)   } })`;
foldUntilFunction.insertText = new vscode.SnippetString("fold_until(${1:over collection})");

completionItems.push(foldUntilFunction);
        

var listgroupFunction = new vscode.CompletionItem("list.group", vscode.CompletionItemKind.Function);
listgroupFunction.detail = `pub fn group(list: List(a), by key: fn(a) -> b) -> Map(b, List(a))`;
listgroupFunction.documentation = `Takes a list and groups the values by a key which is built from a key function. Does not preserve the initial value order. Examples > [Ok(3), Error("Wrong"), Ok(200), Ok(73)]   |> group(by: fn(i) {     case i {       Ok(_) -> "Successful"       Error(_) -> "Failed"     }   })   |> map.to_list  [   #("Failed", [Error("Wrong")]),   #("Successful", [Ok(73), Ok(200), Ok(3)]) ]  > group(from: [1,2,3,4,5], with: fn(i) {fn(i) { i - i / 3 * 3 }}) |> map.to_list [#(0, [3]), #(1, [4, 1]), #(2, [5, 2])]`;
listgroupFunction.insertText = new vscode.SnippetString("list.group(${1:list})");

completionItems.push(listgroupFunction);
        

var groupFunction = new vscode.CompletionItem("group", vscode.CompletionItemKind.Function);
groupFunction.detail = `pub fn group(list: List(a), by key: fn(a) -> b) -> Map(b, List(a))`;
groupFunction.documentation = `Takes a list and groups the values by a key which is built from a key function. Does not preserve the initial value order. Examples > [Ok(3), Error("Wrong"), Ok(200), Ok(73)]   |> group(by: fn(i) {     case i {       Ok(_) -> "Successful"       Error(_) -> "Failed"     }   })   |> map.to_list  [   #("Failed", [Error("Wrong")]),   #("Successful", [Ok(73), Ok(200), Ok(3)]) ]  > group(from: [1,2,3,4,5], with: fn(i) {fn(i) { i - i / 3 * 3 }}) |> map.to_list [#(0, [3]), #(1, [4, 1]), #(2, [5, 2])]`;
groupFunction.insertText = new vscode.SnippetString("group(${1:list})");

completionItems.push(groupFunction);
        

var listindexFoldFunction = new vscode.CompletionItem("list.index_fold", vscode.CompletionItemKind.Function);
listindexFoldFunction.detail = `pub fn index_fold(over over: List(a), from initial: b, with fun: fn(     b,     a,     Int,   ) -> b) -> b`;
listindexFoldFunction.documentation = `Like fold but the folding function also receives the index of the current element. Examples ["a", "b", "c"] |> index_fold([], fn(acc, item, index) { ... })`;
listindexFoldFunction.insertText = new vscode.SnippetString("list.index_fold(${1:over over})");

completionItems.push(listindexFoldFunction);
        

var indexFoldFunction = new vscode.CompletionItem("index_fold", vscode.CompletionItemKind.Function);
indexFoldFunction.detail = `pub fn index_fold(over over: List(a), from initial: b, with fun: fn(     b,     a,     Int,   ) -> b) -> b`;
indexFoldFunction.documentation = `Like fold but the folding function also receives the index of the current element. Examples ["a", "b", "c"] |> index_fold([], fn(acc, item, index) { ... })`;
indexFoldFunction.insertText = new vscode.SnippetString("index_fold(${1:over over})");

completionItems.push(indexFoldFunction);
        

var listindexMapFunction = new vscode.CompletionItem("list.index_map", vscode.CompletionItemKind.Function);
listindexMapFunction.detail = `pub fn index_map(list: List(a), with fun: fn(Int, a) -> b) -> List(   b, )`;
listindexMapFunction.documentation = `Returns a new list containing only the elements of the first list after the function has been applied to each one and their index. The index starts at 0, so the first element is 0, the second is 1, and so on. Examples > index_map(["a", "b"], fn(i, x) { #(i, x) }) [#(0, "a"), #(1, "b")]`;
listindexMapFunction.insertText = new vscode.SnippetString("list.index_map(${1:list})");

completionItems.push(listindexMapFunction);
        

var indexMapFunction = new vscode.CompletionItem("index_map", vscode.CompletionItemKind.Function);
indexMapFunction.detail = `pub fn index_map(list: List(a), with fun: fn(Int, a) -> b) -> List(   b, )`;
indexMapFunction.documentation = `Returns a new list containing only the elements of the first list after the function has been applied to each one and their index. The index starts at 0, so the first element is 0, the second is 1, and so on. Examples > index_map(["a", "b"], fn(i, x) { #(i, x) }) [#(0, "a"), #(1, "b")]`;
indexMapFunction.insertText = new vscode.SnippetString("index_map(${1:list})");

completionItems.push(indexMapFunction);
        

var listinterleaveFunction = new vscode.CompletionItem("list.interleave", vscode.CompletionItemKind.Function);
listinterleaveFunction.detail = `pub fn interleave(list: List(List(a))) -> List(a)`;
listinterleaveFunction.documentation = `Make a list alternating the elements from the given lists Examples > list.interleave([[1, 2], [101, 102], [201, 202]]) [1, 101, 201, 2, 102, 202]`;
listinterleaveFunction.insertText = new vscode.SnippetString("list.interleave(${1:list})");

completionItems.push(listinterleaveFunction);
        

var interleaveFunction = new vscode.CompletionItem("interleave", vscode.CompletionItemKind.Function);
interleaveFunction.detail = `pub fn interleave(list: List(List(a))) -> List(a)`;
interleaveFunction.documentation = `Make a list alternating the elements from the given lists Examples > list.interleave([[1, 2], [101, 102], [201, 202]]) [1, 101, 201, 2, 102, 202]`;
interleaveFunction.insertText = new vscode.SnippetString("interleave(${1:list})");

completionItems.push(interleaveFunction);
        

var listintersperseFunction = new vscode.CompletionItem("list.intersperse", vscode.CompletionItemKind.Function);
listintersperseFunction.detail = `pub fn intersperse(list: List(a), with elem: a) -> List(a)`;
listintersperseFunction.documentation = `Inserts a given value between each existing element in a given list. This function runs in linear time and copies the list. Examples > intersperse([1, 1, 1], 2) [1, 2, 1, 2, 1]  > intersperse([], 2) []`;
listintersperseFunction.insertText = new vscode.SnippetString("list.intersperse(${1:list})");

completionItems.push(listintersperseFunction);
        

var intersperseFunction = new vscode.CompletionItem("intersperse", vscode.CompletionItemKind.Function);
intersperseFunction.detail = `pub fn intersperse(list: List(a), with elem: a) -> List(a)`;
intersperseFunction.documentation = `Inserts a given value between each existing element in a given list. This function runs in linear time and copies the list. Examples > intersperse([1, 1, 1], 2) [1, 2, 1, 2, 1]  > intersperse([], 2) []`;
intersperseFunction.insertText = new vscode.SnippetString("intersperse(${1:list})");

completionItems.push(intersperseFunction);
        

var listisEmptyFunction = new vscode.CompletionItem("list.is_empty", vscode.CompletionItemKind.Function);
listisEmptyFunction.detail = `pub fn is_empty(list: List(a)) -> Bool`;
listisEmptyFunction.documentation = `Determines whether or not the list is empty. This function runs in constant time. Examples > is_empty([]) True  > is_empty([1]) False  > is_empty([1, 1]) False`;
listisEmptyFunction.insertText = new vscode.SnippetString("list.is_empty(${1:list})");

completionItems.push(listisEmptyFunction);
        

var isEmptyFunction = new vscode.CompletionItem("is_empty", vscode.CompletionItemKind.Function);
isEmptyFunction.detail = `pub fn is_empty(list: List(a)) -> Bool`;
isEmptyFunction.documentation = `Determines whether or not the list is empty. This function runs in constant time. Examples > is_empty([]) True  > is_empty([1]) False  > is_empty([1, 1]) False`;
isEmptyFunction.insertText = new vscode.SnippetString("is_empty(${1:list})");

completionItems.push(isEmptyFunction);
        

var listkeyFindFunction = new vscode.CompletionItem("list.key_find", vscode.CompletionItemKind.Function);
listkeyFindFunction.detail = `pub fn key_find(in keyword_list: List(#(a, b)), find desired_key: a) -> Result(   b,   Nil, )`;
listkeyFindFunction.documentation = `Given a list of 2-element tuples, finds the first tuple that has a given key as the first element and returns the second element. If no tuple is found with the given key then Error(Nil) is returned. This function may be useful for interacting with Erlang code where lists of tuples are common. Examples > key_find([#("a", 0), #("b", 1)], "a") Ok(0)  > key_find([#("a", 0), #("b", 1)], "b") Ok(1)  > key_find([#("a", 0), #("b", 1)], "c") Error(Nil)`;
listkeyFindFunction.insertText = new vscode.SnippetString("list.key_find(${1:in keyword_list}, ${2:b})");

completionItems.push(listkeyFindFunction);
        

var keyFindFunction = new vscode.CompletionItem("key_find", vscode.CompletionItemKind.Function);
keyFindFunction.detail = `pub fn key_find(in keyword_list: List(#(a, b)), find desired_key: a) -> Result(   b,   Nil, )`;
keyFindFunction.documentation = `Given a list of 2-element tuples, finds the first tuple that has a given key as the first element and returns the second element. If no tuple is found with the given key then Error(Nil) is returned. This function may be useful for interacting with Erlang code where lists of tuples are common. Examples > key_find([#("a", 0), #("b", 1)], "a") Ok(0)  > key_find([#("a", 0), #("b", 1)], "b") Ok(1)  > key_find([#("a", 0), #("b", 1)], "c") Error(Nil)`;
keyFindFunction.insertText = new vscode.SnippetString("key_find(${1:in keyword_list}, ${2:b})");

completionItems.push(keyFindFunction);
        

var listkeyPopFunction = new vscode.CompletionItem("list.key_pop", vscode.CompletionItemKind.Function);
listkeyPopFunction.detail = `pub fn key_pop(haystack: List(#(a, b)), key: a) -> Result(   #(b, List(#(a, b))),   Nil, )`;
listkeyPopFunction.documentation = `Given a list of 2-element tuples, finds the first tuple that has a given key as the first element. This function will return the second element of the found tuple and list with tuple removed. If no tuple is found with the given key then Error(Nil) is returned. Examples > key_pop([#("a", 0), #("b", 1)], "a") Ok(#(0, [#("b", 1)]))  > key_pop([#("a", 0), #("b", 1)], "b") Ok(#(1, [#("a", 0)]))  > key_pop([#("a", 0), #("b", 1)], "c") Error(Nil)`;
listkeyPopFunction.insertText = new vscode.SnippetString("list.key_pop(${1:haystack}, ${2:b})");

completionItems.push(listkeyPopFunction);
        

var keyPopFunction = new vscode.CompletionItem("key_pop", vscode.CompletionItemKind.Function);
keyPopFunction.detail = `pub fn key_pop(haystack: List(#(a, b)), key: a) -> Result(   #(b, List(#(a, b))),   Nil, )`;
keyPopFunction.documentation = `Given a list of 2-element tuples, finds the first tuple that has a given key as the first element. This function will return the second element of the found tuple and list with tuple removed. If no tuple is found with the given key then Error(Nil) is returned. Examples > key_pop([#("a", 0), #("b", 1)], "a") Ok(#(0, [#("b", 1)]))  > key_pop([#("a", 0), #("b", 1)], "b") Ok(#(1, [#("a", 0)]))  > key_pop([#("a", 0), #("b", 1)], "c") Error(Nil)`;
keyPopFunction.insertText = new vscode.SnippetString("key_pop(${1:haystack}, ${2:b})");

completionItems.push(keyPopFunction);
        

var listkeySetFunction = new vscode.CompletionItem("list.key_set", vscode.CompletionItemKind.Function);
listkeySetFunction.detail = `pub fn key_set(list: List(#(a, b)), key: a, value: b) -> List(   #(a, b), )`;
listkeySetFunction.documentation = `Given a list of 2-element tuples, inserts a key and value into the list. If there was already a tuple with the key then it is replaced, otherwise it is added to the end of the list. Examples > key_set([#(5, 0), #(4, 1)], 4, 100) [#(5, 0), #(4, 100)]  > key_set([#(5, 0), #(4, 1)], 1, 100) [#(5, 0), #(4, 1), #(1, 100)]`;
listkeySetFunction.insertText = new vscode.SnippetString("list.key_set(${1:list}, ${2:b})");

completionItems.push(listkeySetFunction);
        

var keySetFunction = new vscode.CompletionItem("key_set", vscode.CompletionItemKind.Function);
keySetFunction.detail = `pub fn key_set(list: List(#(a, b)), key: a, value: b) -> List(   #(a, b), )`;
keySetFunction.documentation = `Given a list of 2-element tuples, inserts a key and value into the list. If there was already a tuple with the key then it is replaced, otherwise it is added to the end of the list. Examples > key_set([#(5, 0), #(4, 1)], 4, 100) [#(5, 0), #(4, 100)]  > key_set([#(5, 0), #(4, 1)], 1, 100) [#(5, 0), #(4, 1), #(1, 100)]`;
keySetFunction.insertText = new vscode.SnippetString("key_set(${1:list}, ${2:b})");

completionItems.push(keySetFunction);
        

var listlastFunction = new vscode.CompletionItem("list.last", vscode.CompletionItemKind.Function);
listlastFunction.detail = `pub fn last(list: List(a)) -> Result(a, Nil)`;
listlastFunction.documentation = `Returns the last element in the given list. Returns Error(Nil) if the list is empty. This function runs in linear time. For a collection oriented around performant access at either end, see gleam/queue.Queue. Examples > last([]) Error(Nil)  > last([1, 2, 3, 4, 5]) Ok(5)`;
listlastFunction.insertText = new vscode.SnippetString("list.last(${1:list})");

completionItems.push(listlastFunction);
        

var lastFunction = new vscode.CompletionItem("last", vscode.CompletionItemKind.Function);
lastFunction.detail = `pub fn last(list: List(a)) -> Result(a, Nil)`;
lastFunction.documentation = `Returns the last element in the given list. Returns Error(Nil) if the list is empty. This function runs in linear time. For a collection oriented around performant access at either end, see gleam/queue.Queue. Examples > last([]) Error(Nil)  > last([1, 2, 3, 4, 5]) Ok(5)`;
lastFunction.insertText = new vscode.SnippetString("last(${1:list})");

completionItems.push(lastFunction);
        

var listlengthFunction = new vscode.CompletionItem("list.length", vscode.CompletionItemKind.Function);
listlengthFunction.detail = `pub fn length(of list: List(a)) -> Int`;
listlengthFunction.documentation = `Counts the number of elements in a given list. This function has to traverse the list to determine the number of elements, so it runs in linear time. This function is natively implemented by the virtual machine and is highly optimised. Examples > length([]) 0  > length([1]) 1  > length([1, 2]) 2`;
listlengthFunction.insertText = new vscode.SnippetString("list.length(${1:of list})");

completionItems.push(listlengthFunction);
        

var lengthFunction = new vscode.CompletionItem("length", vscode.CompletionItemKind.Function);
lengthFunction.detail = `pub fn length(of list: List(a)) -> Int`;
lengthFunction.documentation = `Counts the number of elements in a given list. This function has to traverse the list to determine the number of elements, so it runs in linear time. This function is natively implemented by the virtual machine and is highly optimised. Examples > length([]) 0  > length([1]) 1  > length([1, 2]) 2`;
lengthFunction.insertText = new vscode.SnippetString("length(${1:of list})");

completionItems.push(lengthFunction);
        

var listmapFunction = new vscode.CompletionItem("list.map", vscode.CompletionItemKind.Function);
listmapFunction.detail = `pub fn map(list: List(a), with fun: fn(a) -> b) -> List(b)`;
listmapFunction.documentation = `Returns a new list containing only the elements of the first list after the function has been applied to each one. Examples > map([2, 4, 6], fn(x) { x * 2 }) [4, 8, 12]`;
listmapFunction.insertText = new vscode.SnippetString("list.map(${1:list})");

completionItems.push(listmapFunction);
        

var mapFunction = new vscode.CompletionItem("map", vscode.CompletionItemKind.Function);
mapFunction.detail = `pub fn map(list: List(a), with fun: fn(a) -> b) -> List(b)`;
mapFunction.documentation = `Returns a new list containing only the elements of the first list after the function has been applied to each one. Examples > map([2, 4, 6], fn(x) { x * 2 }) [4, 8, 12]`;
mapFunction.insertText = new vscode.SnippetString("map(${1:list})");

completionItems.push(mapFunction);
        

var listmapFoldFunction = new vscode.CompletionItem("list.map_fold", vscode.CompletionItemKind.Function);
listmapFoldFunction.detail = `pub fn map_fold(over list: List(a), from acc: b, with fun: fn(     b,     a,   ) -> #(b, c)) -> #(b, List(c))`;
listmapFoldFunction.documentation = `Similar to map but also lets you pass around an accumulated value. Examples > map_fold(     over: [1, 2, 3],     from: 100,     with: fn(memo, i) { #(memo + i, i * 2) }   ) #(106, [2, 4, 6])`;
listmapFoldFunction.insertText = new vscode.SnippetString("list.map_fold(${1:over list})");

completionItems.push(listmapFoldFunction);
        

var mapFoldFunction = new vscode.CompletionItem("map_fold", vscode.CompletionItemKind.Function);
mapFoldFunction.detail = `pub fn map_fold(over list: List(a), from acc: b, with fun: fn(     b,     a,   ) -> #(b, c)) -> #(b, List(c))`;
mapFoldFunction.documentation = `Similar to map but also lets you pass around an accumulated value. Examples > map_fold(     over: [1, 2, 3],     from: 100,     with: fn(memo, i) { #(memo + i, i * 2) }   ) #(106, [2, 4, 6])`;
mapFoldFunction.insertText = new vscode.SnippetString("map_fold(${1:over list})");

completionItems.push(mapFoldFunction);
        

var listnewFunction = new vscode.CompletionItem("list.new", vscode.CompletionItemKind.Function);
listnewFunction.detail = `pub fn new() -> List(a)`;
listnewFunction.documentation = `Returns a new empty list. Examples > new() []`;
listnewFunction.insertText = new vscode.SnippetString("list.new(${1:})");

completionItems.push(listnewFunction);
        

var newFunction = new vscode.CompletionItem("new", vscode.CompletionItemKind.Function);
newFunction.detail = `pub fn new() -> List(a)`;
newFunction.documentation = `Returns a new empty list. Examples > new() []`;
newFunction.insertText = new vscode.SnippetString("new(${1:})");

completionItems.push(newFunction);
        

var listpartitionFunction = new vscode.CompletionItem("list.partition", vscode.CompletionItemKind.Function);
listpartitionFunction.detail = `pub fn partition(list: List(a), with categorise: fn(a) -> Bool) -> #(   List(a),   List(a), )`;
listpartitionFunction.documentation = `Partitions a list into a tuple/pair of lists by a given categorisation function. Examples > [1, 2, 3, 4, 5] |> list.partition(int.is_odd) #([1, 3, 5], [2, 4])`;
listpartitionFunction.insertText = new vscode.SnippetString("list.partition(${1:list})");

completionItems.push(listpartitionFunction);
        

var partitionFunction = new vscode.CompletionItem("partition", vscode.CompletionItemKind.Function);
partitionFunction.detail = `pub fn partition(list: List(a), with categorise: fn(a) -> Bool) -> #(   List(a),   List(a), )`;
partitionFunction.documentation = `Partitions a list into a tuple/pair of lists by a given categorisation function. Examples > [1, 2, 3, 4, 5] |> list.partition(int.is_odd) #([1, 3, 5], [2, 4])`;
partitionFunction.insertText = new vscode.SnippetString("partition(${1:list})");

completionItems.push(partitionFunction);
        

var listpermutationsFunction = new vscode.CompletionItem("list.permutations", vscode.CompletionItemKind.Function);
listpermutationsFunction.detail = `pub fn permutations(l: List(a)) -> List(List(a))`;
listpermutationsFunction.documentation = `Returns all the permutations of a list. Examples > permutations([1, 2]) [[1, 2], [2, 1]]`;
listpermutationsFunction.insertText = new vscode.SnippetString("list.permutations(${1:l})");

completionItems.push(listpermutationsFunction);
        

var permutationsFunction = new vscode.CompletionItem("permutations", vscode.CompletionItemKind.Function);
permutationsFunction.detail = `pub fn permutations(l: List(a)) -> List(List(a))`;
permutationsFunction.documentation = `Returns all the permutations of a list. Examples > permutations([1, 2]) [[1, 2], [2, 1]]`;
permutationsFunction.insertText = new vscode.SnippetString("permutations(${1:l})");

completionItems.push(permutationsFunction);
        

var listpopFunction = new vscode.CompletionItem("list.pop", vscode.CompletionItemKind.Function);
listpopFunction.detail = `pub fn pop(in haystack: List(a), one_that is_desired: fn(a) ->     Bool) -> Result(#(a, List(a)), Nil)`;
listpopFunction.documentation = `Removes the first element in a given list for which the predicate funtion returns True. Returns Error(Nil) if no such element is found. Examples > pop([1, 2, 3], fn(x) { x > 2 }) Ok(#(3, [1, 2]))  > pop([1, 2, 3], fn(x) { x > 4 }) Error(Nil)  > pop([], fn(_) { True }) Error(Nil)`;
listpopFunction.insertText = new vscode.SnippetString("list.pop(${1:in haystack})");

completionItems.push(listpopFunction);
        

var popFunction = new vscode.CompletionItem("pop", vscode.CompletionItemKind.Function);
popFunction.detail = `pub fn pop(in haystack: List(a), one_that is_desired: fn(a) ->     Bool) -> Result(#(a, List(a)), Nil)`;
popFunction.documentation = `Removes the first element in a given list for which the predicate funtion returns True. Returns Error(Nil) if no such element is found. Examples > pop([1, 2, 3], fn(x) { x > 2 }) Ok(#(3, [1, 2]))  > pop([1, 2, 3], fn(x) { x > 4 }) Error(Nil)  > pop([], fn(_) { True }) Error(Nil)`;
popFunction.insertText = new vscode.SnippetString("pop(${1:in haystack})");

completionItems.push(popFunction);
        

var listpopMapFunction = new vscode.CompletionItem("list.pop_map", vscode.CompletionItemKind.Function);
listpopMapFunction.detail = `pub fn pop_map(in haystack: List(a), one_that is_desired: fn(a) ->     Result(b, c)) -> Result(#(b, List(a)), Nil)`;
listpopMapFunction.documentation = `Removes the first element in a given list for which the given function returns Ok(new_value), then returns the wrapped new_value as well as list with the value removed. Returns Error(Nil) if no such element is found. Examples > pop_map([[], [2], [3]], head) Ok(#(2, [[], [3]]))  > pop_map([[], []], head) Error(Nil)  > pop_map([], head) Error(Nil)`;
listpopMapFunction.insertText = new vscode.SnippetString("list.pop_map(${1:in haystack})");

completionItems.push(listpopMapFunction);
        

var popMapFunction = new vscode.CompletionItem("pop_map", vscode.CompletionItemKind.Function);
popMapFunction.detail = `pub fn pop_map(in haystack: List(a), one_that is_desired: fn(a) ->     Result(b, c)) -> Result(#(b, List(a)), Nil)`;
popMapFunction.documentation = `Removes the first element in a given list for which the given function returns Ok(new_value), then returns the wrapped new_value as well as list with the value removed. Returns Error(Nil) if no such element is found. Examples > pop_map([[], [2], [3]], head) Ok(#(2, [[], [3]]))  > pop_map([[], []], head) Error(Nil)  > pop_map([], head) Error(Nil)`;
popMapFunction.insertText = new vscode.SnippetString("pop_map(${1:in haystack})");

completionItems.push(popMapFunction);
        

var listprependFunction = new vscode.CompletionItem("list.prepend", vscode.CompletionItemKind.Function);
listprependFunction.detail = `pub fn prepend(to list: List(a), this item: a) -> List(a)`;
listprependFunction.documentation = `Prefixes an item to a list. This can also be done using the dedicated syntax instead let new_list = [1, ..existing_list]`;
listprependFunction.insertText = new vscode.SnippetString("list.prepend(${1:to list})");

completionItems.push(listprependFunction);
        

var prependFunction = new vscode.CompletionItem("prepend", vscode.CompletionItemKind.Function);
prependFunction.detail = `pub fn prepend(to list: List(a), this item: a) -> List(a)`;
prependFunction.documentation = `Prefixes an item to a list. This can also be done using the dedicated syntax instead let new_list = [1, ..existing_list]`;
prependFunction.insertText = new vscode.SnippetString("prepend(${1:to list})");

completionItems.push(prependFunction);
        

var listrangeFunction = new vscode.CompletionItem("list.range", vscode.CompletionItemKind.Function);
listrangeFunction.detail = `pub fn range(from start: Int, to stop: Int) -> List(Int)`;
listrangeFunction.documentation = `Creates a list of ints ranging from a given start and finish. Examples > range(0, 0) [0]  > range(0, 5) [0, 1, 2, 3, 4, 5]  > range(1, -5) [1, 0, -1, -2, -3, -4, -5]`;
listrangeFunction.insertText = new vscode.SnippetString("list.range(${1:from start}, ${2:to stop})");

completionItems.push(listrangeFunction);
        

var rangeFunction = new vscode.CompletionItem("range", vscode.CompletionItemKind.Function);
rangeFunction.detail = `pub fn range(from start: Int, to stop: Int) -> List(Int)`;
rangeFunction.documentation = `Creates a list of ints ranging from a given start and finish. Examples > range(0, 0) [0]  > range(0, 5) [0, 1, 2, 3, 4, 5]  > range(1, -5) [1, 0, -1, -2, -3, -4, -5]`;
rangeFunction.insertText = new vscode.SnippetString("range(${1:from start}, ${2:to stop})");

completionItems.push(rangeFunction);
        

var listreduceFunction = new vscode.CompletionItem("list.reduce", vscode.CompletionItemKind.Function);
listreduceFunction.detail = `pub fn reduce(over list: List(a), with fun: fn(a, a) -> a) -> Result(   a,   Nil, )`;
listreduceFunction.documentation = `This function acts similar to fold, but does not take an initial state. Instead, it starts from the first element in the list and combines it with each subsequent element in turn using the given function. The function is called as fun(accumulator, current_element). Returns Ok to indicate a successful run, and Error if called on an empty list. Examples > [] |> reduce(fn(acc, x) { acc + x }) Error(Nil)  > [1, 2, 3, 4, 5] |> reduce(fn(acc, x) { acc + x }) Ok(15)`;
listreduceFunction.insertText = new vscode.SnippetString("list.reduce(${1:over list})");

completionItems.push(listreduceFunction);
        

var reduceFunction = new vscode.CompletionItem("reduce", vscode.CompletionItemKind.Function);
reduceFunction.detail = `pub fn reduce(over list: List(a), with fun: fn(a, a) -> a) -> Result(   a,   Nil, )`;
reduceFunction.documentation = `This function acts similar to fold, but does not take an initial state. Instead, it starts from the first element in the list and combines it with each subsequent element in turn using the given function. The function is called as fun(accumulator, current_element). Returns Ok to indicate a successful run, and Error if called on an empty list. Examples > [] |> reduce(fn(acc, x) { acc + x }) Error(Nil)  > [1, 2, 3, 4, 5] |> reduce(fn(acc, x) { acc + x }) Ok(15)`;
reduceFunction.insertText = new vscode.SnippetString("reduce(${1:over list})");

completionItems.push(reduceFunction);
        

var listrepeatFunction = new vscode.CompletionItem("list.repeat", vscode.CompletionItemKind.Function);
listrepeatFunction.detail = `pub fn repeat(item a: a, times times: Int) -> List(a)`;
listrepeatFunction.documentation = `Builds a list of a given value a given number of times. Examples > repeat("a", times: 0) []  > repeat("a", times: 5) ["a", "a", "a", "a", "a"]`;
listrepeatFunction.insertText = new vscode.SnippetString("list.repeat(${1:item a}, ${2:times times})");

completionItems.push(listrepeatFunction);
        

var repeatFunction = new vscode.CompletionItem("repeat", vscode.CompletionItemKind.Function);
repeatFunction.detail = `pub fn repeat(item a: a, times times: Int) -> List(a)`;
repeatFunction.documentation = `Builds a list of a given value a given number of times. Examples > repeat("a", times: 0) []  > repeat("a", times: 5) ["a", "a", "a", "a", "a"]`;
repeatFunction.insertText = new vscode.SnippetString("repeat(${1:item a}, ${2:times times})");

completionItems.push(repeatFunction);
        

var listrestFunction = new vscode.CompletionItem("list.rest", vscode.CompletionItemKind.Function);
listrestFunction.detail = `pub fn rest(list: List(a)) -> Result(List(a), Nil)`;
listrestFunction.documentation = `Returns the list minus the first element. If the list is empty, Error(Nil) is returned. This function runs in constant time and does not make a copy of the list. Examples > rest([]) Error(Nil)  > rest([0]) Ok([])  > rest([1, 2]) Ok([2])`;
listrestFunction.insertText = new vscode.SnippetString("list.rest(${1:list})");

completionItems.push(listrestFunction);
        

var restFunction = new vscode.CompletionItem("rest", vscode.CompletionItemKind.Function);
restFunction.detail = `pub fn rest(list: List(a)) -> Result(List(a), Nil)`;
restFunction.documentation = `Returns the list minus the first element. If the list is empty, Error(Nil) is returned. This function runs in constant time and does not make a copy of the list. Examples > rest([]) Error(Nil)  > rest([0]) Ok([])  > rest([1, 2]) Ok([2])`;
restFunction.insertText = new vscode.SnippetString("rest(${1:list})");

completionItems.push(restFunction);
        

var listreverseFunction = new vscode.CompletionItem("list.reverse", vscode.CompletionItemKind.Function);
listreverseFunction.detail = `pub fn reverse(xs: List(a)) -> List(a)`;
listreverseFunction.documentation = `Creates a new list from a given list containing the same elements but in the opposite order. This function has to traverse the list to create the new reversed list, so it runs in linear time. This function is natively implemented by the virtual machine and is highly optimised. Examples > reverse([]) []  > reverse([1]) [1]  > reverse([1, 2]) [2, 1]`;
listreverseFunction.insertText = new vscode.SnippetString("list.reverse(${1:xs})");

completionItems.push(listreverseFunction);
        

var reverseFunction = new vscode.CompletionItem("reverse", vscode.CompletionItemKind.Function);
reverseFunction.detail = `pub fn reverse(xs: List(a)) -> List(a)`;
reverseFunction.documentation = `Creates a new list from a given list containing the same elements but in the opposite order. This function has to traverse the list to create the new reversed list, so it runs in linear time. This function is natively implemented by the virtual machine and is highly optimised. Examples > reverse([]) []  > reverse([1]) [1]  > reverse([1, 2]) [2, 1]`;
reverseFunction.insertText = new vscode.SnippetString("reverse(${1:xs})");

completionItems.push(reverseFunction);
        

var listscanFunction = new vscode.CompletionItem("list.scan", vscode.CompletionItemKind.Function);
listscanFunction.detail = `pub fn scan(over list: List(a), from initial: b, with fun: fn(     b,     a,   ) -> b) -> List(b)`;
listscanFunction.documentation = `Similar to fold, but yields the state of the accumulator at each stage. Examples > scan(over: [1, 2, 3], from: 100, with: fn(acc, i) { acc + i }) [101, 103, 106]`;
listscanFunction.insertText = new vscode.SnippetString("list.scan(${1:over list})");

completionItems.push(listscanFunction);
        

var scanFunction = new vscode.CompletionItem("scan", vscode.CompletionItemKind.Function);
scanFunction.detail = `pub fn scan(over list: List(a), from initial: b, with fun: fn(     b,     a,   ) -> b) -> List(b)`;
scanFunction.documentation = `Similar to fold, but yields the state of the accumulator at each stage. Examples > scan(over: [1, 2, 3], from: 100, with: fn(acc, i) { acc + i }) [101, 103, 106]`;
scanFunction.insertText = new vscode.SnippetString("scan(${1:over list})");

completionItems.push(scanFunction);
        

var listshuffleFunction = new vscode.CompletionItem("list.shuffle", vscode.CompletionItemKind.Function);
listshuffleFunction.detail = `pub fn shuffle(list: List(a)) -> List(a)`;
listshuffleFunction.documentation = `Takes a list, randomly sorts all items and returns the shuffled list. This function uses Erlang’s :rand module or Javascript’s Math.random() to calcuate the index shuffling. Example list.range(1, 10) |> list.shuffle() > [1, 6, 9, 10, 3, 8, 4, 2, 7, 5]`;
listshuffleFunction.insertText = new vscode.SnippetString("list.shuffle(${1:list})");

completionItems.push(listshuffleFunction);
        

var shuffleFunction = new vscode.CompletionItem("shuffle", vscode.CompletionItemKind.Function);
shuffleFunction.detail = `pub fn shuffle(list: List(a)) -> List(a)`;
shuffleFunction.documentation = `Takes a list, randomly sorts all items and returns the shuffled list. This function uses Erlang’s :rand module or Javascript’s Math.random() to calcuate the index shuffling. Example list.range(1, 10) |> list.shuffle() > [1, 6, 9, 10, 3, 8, 4, 2, 7, 5]`;
shuffleFunction.insertText = new vscode.SnippetString("shuffle(${1:list})");

completionItems.push(shuffleFunction);
        

var listsizedChunkFunction = new vscode.CompletionItem("list.sized_chunk", vscode.CompletionItemKind.Function);
listsizedChunkFunction.detail = `pub fn sized_chunk(in list: List(a), into count: Int) -> List(   List(a), )`;
listsizedChunkFunction.documentation = `Returns a list of chunks containing count elements each. If the last chunk does not have count elements, it is instead a partial chunk, with less than count elements. For any count less than 1 this function behaves as if it was set to 1. Examples > [1, 2, 3, 4, 5, 6] |> sized_chunk(into: 2) [[1, 2], [3, 4], [5, 6]]  > [1, 2, 3, 4, 5, 6, 7, 8] |> sized_chunk(into: 3) [[1, 2, 3], [4, 5, 6], [7, 8]]`;
listsizedChunkFunction.insertText = new vscode.SnippetString("list.sized_chunk(${1:in list})");

completionItems.push(listsizedChunkFunction);
        

var sizedChunkFunction = new vscode.CompletionItem("sized_chunk", vscode.CompletionItemKind.Function);
sizedChunkFunction.detail = `pub fn sized_chunk(in list: List(a), into count: Int) -> List(   List(a), )`;
sizedChunkFunction.documentation = `Returns a list of chunks containing count elements each. If the last chunk does not have count elements, it is instead a partial chunk, with less than count elements. For any count less than 1 this function behaves as if it was set to 1. Examples > [1, 2, 3, 4, 5, 6] |> sized_chunk(into: 2) [[1, 2], [3, 4], [5, 6]]  > [1, 2, 3, 4, 5, 6, 7, 8] |> sized_chunk(into: 3) [[1, 2, 3], [4, 5, 6], [7, 8]]`;
sizedChunkFunction.insertText = new vscode.SnippetString("sized_chunk(${1:in list})");

completionItems.push(sizedChunkFunction);
        

var listsortFunction = new vscode.CompletionItem("list.sort", vscode.CompletionItemKind.Function);
listsortFunction.detail = `pub fn sort(list: List(a), by compare: fn(a, a) -> Order) -> List(   a, )`;
listsortFunction.documentation = `Sorts from smallest to largest based upon the ordering specified by a given function. Examples > import gleam/int > list.sort([4, 3, 6, 5, 4, 1, 2], by: int.compare) [1, 2, 3, 4, 4, 5, 6]`;
listsortFunction.insertText = new vscode.SnippetString("list.sort(${1:list})");

completionItems.push(listsortFunction);
        

var sortFunction = new vscode.CompletionItem("sort", vscode.CompletionItemKind.Function);
sortFunction.detail = `pub fn sort(list: List(a), by compare: fn(a, a) -> Order) -> List(   a, )`;
sortFunction.documentation = `Sorts from smallest to largest based upon the ordering specified by a given function. Examples > import gleam/int > list.sort([4, 3, 6, 5, 4, 1, 2], by: int.compare) [1, 2, 3, 4, 4, 5, 6]`;
sortFunction.insertText = new vscode.SnippetString("sort(${1:list})");

completionItems.push(sortFunction);
        

var listsplitFunction = new vscode.CompletionItem("list.split", vscode.CompletionItemKind.Function);
listsplitFunction.detail = `pub fn split(list list: List(a), at index: Int) -> #(   List(a),   List(a), )`;
listsplitFunction.documentation = `Splits a list in two before the given index. If the list is not long enough to have the given index the before list will be the input list, and the after list will be empty. Examples > split([6, 7, 8, 9], 0) #([], [6, 7, 8, 9])  > split([6, 7, 8, 9], 2) #([6, 7], [8, 9])  > split([6, 7, 8, 9], 4) #([6, 7, 8, 9], [])`;
listsplitFunction.insertText = new vscode.SnippetString("list.split(${1:list list})");

completionItems.push(listsplitFunction);
        

var splitFunction = new vscode.CompletionItem("split", vscode.CompletionItemKind.Function);
splitFunction.detail = `pub fn split(list list: List(a), at index: Int) -> #(   List(a),   List(a), )`;
splitFunction.documentation = `Splits a list in two before the given index. If the list is not long enough to have the given index the before list will be the input list, and the after list will be empty. Examples > split([6, 7, 8, 9], 0) #([], [6, 7, 8, 9])  > split([6, 7, 8, 9], 2) #([6, 7], [8, 9])  > split([6, 7, 8, 9], 4) #([6, 7, 8, 9], [])`;
splitFunction.insertText = new vscode.SnippetString("split(${1:list list})");

completionItems.push(splitFunction);
        

var listsplitWhileFunction = new vscode.CompletionItem("list.split_while", vscode.CompletionItemKind.Function);
listsplitWhileFunction.detail = `pub fn split_while(list list: List(a), satisfying predicate: fn(a) ->     Bool) -> #(List(a), List(a))`;
listsplitWhileFunction.documentation = `Splits a list in two before the first element that a given function returns False for. If the function returns True for all elements the first list will be the input list, and the second list will be empty. Examples > split_while([1, 2, 3, 4, 5], fn(x) { x <= 3 }) #([1, 2, 3], [4, 5])  > split_while([1, 2, 3, 4, 5], fn(x) { x <= 5 }) #([1, 2, 3, 4, 5], [])`;
listsplitWhileFunction.insertText = new vscode.SnippetString("list.split_while(${1:list list})");

completionItems.push(listsplitWhileFunction);
        

var splitWhileFunction = new vscode.CompletionItem("split_while", vscode.CompletionItemKind.Function);
splitWhileFunction.detail = `pub fn split_while(list list: List(a), satisfying predicate: fn(a) ->     Bool) -> #(List(a), List(a))`;
splitWhileFunction.documentation = `Splits a list in two before the first element that a given function returns False for. If the function returns True for all elements the first list will be the input list, and the second list will be empty. Examples > split_while([1, 2, 3, 4, 5], fn(x) { x <= 3 }) #([1, 2, 3], [4, 5])  > split_while([1, 2, 3, 4, 5], fn(x) { x <= 5 }) #([1, 2, 3, 4, 5], [])`;
splitWhileFunction.insertText = new vscode.SnippetString("split_while(${1:list list})");

completionItems.push(splitWhileFunction);
        

var liststrictZipFunction = new vscode.CompletionItem("list.strict_zip", vscode.CompletionItemKind.Function);
liststrictZipFunction.detail = `pub fn strict_zip(l1: List(a), l2: List(b)) -> Result(   List(#(a, b)),   LengthMismatch, )`;
liststrictZipFunction.documentation = `Takes two lists and returns a single list of 2-element tuples. If one of the lists is longer than the other, an Error is returned. Examples > strict_zip([], []) Ok([])  > strict_zip([1, 2], [3]) Error(LengthMismatch)  > strict_zip([1], [3, 4]) Error(LengthMismatch)  > strict_zip([1, 2], [3, 4]) Ok([#(1, 3), #(2, 4)])`;
liststrictZipFunction.insertText = new vscode.SnippetString("list.strict_zip(${1:l1})");

completionItems.push(liststrictZipFunction);
        

var strictZipFunction = new vscode.CompletionItem("strict_zip", vscode.CompletionItemKind.Function);
strictZipFunction.detail = `pub fn strict_zip(l1: List(a), l2: List(b)) -> Result(   List(#(a, b)),   LengthMismatch, )`;
strictZipFunction.documentation = `Takes two lists and returns a single list of 2-element tuples. If one of the lists is longer than the other, an Error is returned. Examples > strict_zip([], []) Ok([])  > strict_zip([1, 2], [3]) Error(LengthMismatch)  > strict_zip([1], [3, 4]) Error(LengthMismatch)  > strict_zip([1, 2], [3, 4]) Ok([#(1, 3), #(2, 4)])`;
strictZipFunction.insertText = new vscode.SnippetString("strict_zip(${1:l1})");

completionItems.push(strictZipFunction);
        

var listtakeFunction = new vscode.CompletionItem("list.take", vscode.CompletionItemKind.Function);
listtakeFunction.detail = `pub fn take(from list: List(a), up_to n: Int) -> List(a)`;
listtakeFunction.documentation = `Returns a list containing the first given number of elements from the given list. If the element has less than the number of elements then the full list is returned. This function runs in linear time but does not copy the list. Examples > take([1, 2, 3, 4], 2) [1, 2]  > take([1, 2, 3, 4], 9) [1, 2, 3, 4]`;
listtakeFunction.insertText = new vscode.SnippetString("list.take(${1:from list})");

completionItems.push(listtakeFunction);
        

var takeFunction = new vscode.CompletionItem("take", vscode.CompletionItemKind.Function);
takeFunction.detail = `pub fn take(from list: List(a), up_to n: Int) -> List(a)`;
takeFunction.documentation = `Returns a list containing the first given number of elements from the given list. If the element has less than the number of elements then the full list is returned. This function runs in linear time but does not copy the list. Examples > take([1, 2, 3, 4], 2) [1, 2]  > take([1, 2, 3, 4], 9) [1, 2, 3, 4]`;
takeFunction.insertText = new vscode.SnippetString("take(${1:from list})");

completionItems.push(takeFunction);
        

var listtakeWhileFunction = new vscode.CompletionItem("list.take_while", vscode.CompletionItemKind.Function);
listtakeWhileFunction.detail = `pub fn take_while(in list: List(a), satisfying predicate: fn(a) ->     Bool) -> List(a)`;
listtakeWhileFunction.documentation = `Takes the first elements in a given list for which the predicate funtion returns True. Examples > take_while([1, 2, 3, 2, 4], fn (x) { x < 3 }) [1, 2]`;
listtakeWhileFunction.insertText = new vscode.SnippetString("list.take_while(${1:in list})");

completionItems.push(listtakeWhileFunction);
        

var takeWhileFunction = new vscode.CompletionItem("take_while", vscode.CompletionItemKind.Function);
takeWhileFunction.detail = `pub fn take_while(in list: List(a), satisfying predicate: fn(a) ->     Bool) -> List(a)`;
takeWhileFunction.documentation = `Takes the first elements in a given list for which the predicate funtion returns True. Examples > take_while([1, 2, 3, 2, 4], fn (x) { x < 3 }) [1, 2]`;
takeWhileFunction.insertText = new vscode.SnippetString("take_while(${1:in list})");

completionItems.push(takeWhileFunction);
        

var listtransposeFunction = new vscode.CompletionItem("list.transpose", vscode.CompletionItemKind.Function);
listtransposeFunction.detail = `pub fn transpose(list_of_list: List(List(a))) -> List(List(a))`;
listtransposeFunction.documentation = `Transpose rows and columns of the list of lists. Notice: This function is not tail recursive, and thus may exceed stack size if called, with large lists (on target JavaScript). Examples > transpose([[1, 2, 3], [101, 102, 103]]) [[1, 101], [2, 102], [3, 103]]`;
listtransposeFunction.insertText = new vscode.SnippetString("list.transpose(${1:list_of_list})");

completionItems.push(listtransposeFunction);
        

var transposeFunction = new vscode.CompletionItem("transpose", vscode.CompletionItemKind.Function);
transposeFunction.detail = `pub fn transpose(list_of_list: List(List(a))) -> List(List(a))`;
transposeFunction.documentation = `Transpose rows and columns of the list of lists. Notice: This function is not tail recursive, and thus may exceed stack size if called, with large lists (on target JavaScript). Examples > transpose([[1, 2, 3], [101, 102, 103]]) [[1, 101], [2, 102], [3, 103]]`;
transposeFunction.insertText = new vscode.SnippetString("transpose(${1:list_of_list})");

completionItems.push(transposeFunction);
        

var listtryFoldFunction = new vscode.CompletionItem("list.try_fold", vscode.CompletionItemKind.Function);
listtryFoldFunction.detail = `pub fn try_fold(over collection: List(a), from accumulator: b, with fun: fn(     b,     a,   ) -> Result(b, c)) -> Result(b, c)`;
listtryFoldFunction.documentation = `A variant of fold that might fail. The folding function should return Result(accumulator, error). If the returned value is Ok(accumulator) try_fold will try the next value in the list. If the returned value is Error(error) try_fold will stop and return that error. Examples [1, 2, 3, 4] |> try_fold(0, fn(acc, i) {   case i < 3 {     True -> Ok(acc + i)     False -> Error(Nil)   } })`;
listtryFoldFunction.insertText = new vscode.SnippetString("list.try_fold(${1:over collection})");

completionItems.push(listtryFoldFunction);
        

var tryFoldFunction = new vscode.CompletionItem("try_fold", vscode.CompletionItemKind.Function);
tryFoldFunction.detail = `pub fn try_fold(over collection: List(a), from accumulator: b, with fun: fn(     b,     a,   ) -> Result(b, c)) -> Result(b, c)`;
tryFoldFunction.documentation = `A variant of fold that might fail. The folding function should return Result(accumulator, error). If the returned value is Ok(accumulator) try_fold will try the next value in the list. If the returned value is Error(error) try_fold will stop and return that error. Examples [1, 2, 3, 4] |> try_fold(0, fn(acc, i) {   case i < 3 {     True -> Ok(acc + i)     False -> Error(Nil)   } })`;
tryFoldFunction.insertText = new vscode.SnippetString("try_fold(${1:over collection})");

completionItems.push(tryFoldFunction);
        

var listtryMapFunction = new vscode.CompletionItem("list.try_map", vscode.CompletionItemKind.Function);
listtryMapFunction.detail = `pub fn try_map(over list: List(a), with fun: fn(a) ->     Result(b, c)) -> Result(List(b), c)`;
listtryMapFunction.documentation = `Takes a function that returns a Result and applies it to each element in a given list in turn. If the function returns Ok(new_value) for all elements in the list then a list of the new values is returned. If the function returns Error(reason) for any of the elements then it is returned immediately. None of the elements in the list are processed after one returns an Error. Examples > try_map([1, 2, 3], fn(x) { Ok(x + 2) }) Ok([3, 4, 5])  > try_map([1, 2, 3], fn(_) { Error(0) }) Error(0)  > try_map([[1], [2, 3]], head) Ok([1, 2])  > try_map([[1], [], [2]], head) Error(Nil)`;
listtryMapFunction.insertText = new vscode.SnippetString("list.try_map(${1:over list})");

completionItems.push(listtryMapFunction);
        

var tryMapFunction = new vscode.CompletionItem("try_map", vscode.CompletionItemKind.Function);
tryMapFunction.detail = `pub fn try_map(over list: List(a), with fun: fn(a) ->     Result(b, c)) -> Result(List(b), c)`;
tryMapFunction.documentation = `Takes a function that returns a Result and applies it to each element in a given list in turn. If the function returns Ok(new_value) for all elements in the list then a list of the new values is returned. If the function returns Error(reason) for any of the elements then it is returned immediately. None of the elements in the list are processed after one returns an Error. Examples > try_map([1, 2, 3], fn(x) { Ok(x + 2) }) Ok([3, 4, 5])  > try_map([1, 2, 3], fn(_) { Error(0) }) Error(0)  > try_map([[1], [2, 3]], head) Ok([1, 2])  > try_map([[1], [], [2]], head) Error(Nil)`;
tryMapFunction.insertText = new vscode.SnippetString("try_map(${1:over list})");

completionItems.push(tryMapFunction);
        

var listuniqueFunction = new vscode.CompletionItem("list.unique", vscode.CompletionItemKind.Function);
listuniqueFunction.detail = `pub fn unique(list: List(a)) -> List(a)`;
listuniqueFunction.documentation = `Removes any duplicate elements from a given list. This function returns in loglinear time. Examples > unique([1, 1, 1, 4, 7, 3, 3, 4]) [1, 4, 7, 3]`;
listuniqueFunction.insertText = new vscode.SnippetString("list.unique(${1:list})");

completionItems.push(listuniqueFunction);
        

var uniqueFunction = new vscode.CompletionItem("unique", vscode.CompletionItemKind.Function);
uniqueFunction.detail = `pub fn unique(list: List(a)) -> List(a)`;
uniqueFunction.documentation = `Removes any duplicate elements from a given list. This function returns in loglinear time. Examples > unique([1, 1, 1, 4, 7, 3, 3, 4]) [1, 4, 7, 3]`;
uniqueFunction.insertText = new vscode.SnippetString("unique(${1:list})");

completionItems.push(uniqueFunction);
        

var listunzipFunction = new vscode.CompletionItem("list.unzip", vscode.CompletionItemKind.Function);
listunzipFunction.detail = `pub fn unzip(input: List(#(a, b))) -> #(List(a), List(b))`;
listunzipFunction.documentation = `Takes a single list of 2-element tuples and returns two lists. Examples > unzip([#(1, 2), #(3, 4)]) #([1, 3], [2, 4])  > unzip([]) #([], [])`;
listunzipFunction.insertText = new vscode.SnippetString("list.unzip(${1:input}, ${2:b})");

completionItems.push(listunzipFunction);
        

var unzipFunction = new vscode.CompletionItem("unzip", vscode.CompletionItemKind.Function);
unzipFunction.detail = `pub fn unzip(input: List(#(a, b))) -> #(List(a), List(b))`;
unzipFunction.documentation = `Takes a single list of 2-element tuples and returns two lists. Examples > unzip([#(1, 2), #(3, 4)]) #([1, 3], [2, 4])  > unzip([]) #([], [])`;
unzipFunction.insertText = new vscode.SnippetString("unzip(${1:input}, ${2:b})");

completionItems.push(unzipFunction);
        

var listwindowFunction = new vscode.CompletionItem("list.window", vscode.CompletionItemKind.Function);
listwindowFunction.detail = `pub fn window(l: List(a), by n: Int) -> List(List(a))`;
listwindowFunction.documentation = `Returns a list of sliding windows. Examples > window([1,2,3,4,5], 3) [[1, 2, 3], [2, 3, 4], [3, 4, 5]]  > window([1, 2], 4) []`;
listwindowFunction.insertText = new vscode.SnippetString("list.window(${1:l})");

completionItems.push(listwindowFunction);
        

var windowFunction = new vscode.CompletionItem("window", vscode.CompletionItemKind.Function);
windowFunction.detail = `pub fn window(l: List(a), by n: Int) -> List(List(a))`;
windowFunction.documentation = `Returns a list of sliding windows. Examples > window([1,2,3,4,5], 3) [[1, 2, 3], [2, 3, 4], [3, 4, 5]]  > window([1, 2], 4) []`;
windowFunction.insertText = new vscode.SnippetString("window(${1:l})");

completionItems.push(windowFunction);
        

var listwindowBy2Function = new vscode.CompletionItem("list.window_by_2", vscode.CompletionItemKind.Function);
listwindowBy2Function.detail = `pub fn window_by_2(l: List(a)) -> List(#(a, a))`;
listwindowBy2Function.documentation = `Returns a list of tuples containing two contiguous elements. Examples > window_by_2([1,2,3,4]) [#(1, 2), #(2, 3), #(3, 4)]  > window_by_2([1]) []`;
listwindowBy2Function.insertText = new vscode.SnippetString("list.window_by_2(${1:l})");

completionItems.push(listwindowBy2Function);
        

var windowBy2Function = new vscode.CompletionItem("window_by_2", vscode.CompletionItemKind.Function);
windowBy2Function.detail = `pub fn window_by_2(l: List(a)) -> List(#(a, a))`;
windowBy2Function.documentation = `Returns a list of tuples containing two contiguous elements. Examples > window_by_2([1,2,3,4]) [#(1, 2), #(2, 3), #(3, 4)]  > window_by_2([1]) []`;
windowBy2Function.insertText = new vscode.SnippetString("window_by_2(${1:l})");

completionItems.push(windowBy2Function);
        

var listzipFunction = new vscode.CompletionItem("list.zip", vscode.CompletionItemKind.Function);
listzipFunction.detail = `pub fn zip(xs: List(a), ys: List(b)) -> List(#(a, b))`;
listzipFunction.documentation = `Takes two lists and returns a single list of 2-element tuples. If one of the lists is longer than the other, the remaining elements from the longer list are not used. Examples > zip([], []) []  > zip([1, 2], [3]) [#(1, 3)]  > zip([1], [3, 4]) [#(1, 3)]  > zip([1, 2], [3, 4]) [#(1, 3), #(2, 4)]`;
listzipFunction.insertText = new vscode.SnippetString("list.zip(${1:xs})");

completionItems.push(listzipFunction);
        

var zipFunction = new vscode.CompletionItem("zip", vscode.CompletionItemKind.Function);
zipFunction.detail = `pub fn zip(xs: List(a), ys: List(b)) -> List(#(a, b))`;
zipFunction.documentation = `Takes two lists and returns a single list of 2-element tuples. If one of the lists is longer than the other, the remaining elements from the longer list are not used. Examples > zip([], []) []  > zip([1, 2], [3]) [#(1, 3)]  > zip([1], [3, 4]) [#(1, 3)]  > zip([1, 2], [3, 4]) [#(1, 3), #(2, 4)]`;
zipFunction.insertText = new vscode.SnippetString("zip(${1:xs})");

completionItems.push(zipFunction);
        

var mapdeleteFunction = new vscode.CompletionItem("map.delete", vscode.CompletionItemKind.Function);
mapdeleteFunction.detail = `pub fn delete(from map: Map(a, b), delete key: a) -> Map(a, b)`;
mapdeleteFunction.documentation = `Creates a new map from a given map with all the same entries except for the one with a given key, if it exists. Examples > delete([#("a", 0), #("b", 1)], "a") from_list([#("b", 1)])  > delete([#("a", 0), #("b", 1)], "c") from_list([#("a", 0), #("b", 1)])`;
mapdeleteFunction.insertText = new vscode.SnippetString("map.delete(${1:from map}, ${2:b})");

completionItems.push(mapdeleteFunction);
        

var deleteFunction = new vscode.CompletionItem("delete", vscode.CompletionItemKind.Function);
deleteFunction.detail = `pub fn delete(from map: Map(a, b), delete key: a) -> Map(a, b)`;
deleteFunction.documentation = `Creates a new map from a given map with all the same entries except for the one with a given key, if it exists. Examples > delete([#("a", 0), #("b", 1)], "a") from_list([#("b", 1)])  > delete([#("a", 0), #("b", 1)], "c") from_list([#("a", 0), #("b", 1)])`;
deleteFunction.insertText = new vscode.SnippetString("delete(${1:from map}, ${2:b})");

completionItems.push(deleteFunction);
        

var mapdropFunction = new vscode.CompletionItem("map.drop", vscode.CompletionItemKind.Function);
mapdropFunction.detail = `pub fn drop(from map: Map(a, b), drop disallowed_keys: List(a)) -> Map(   a,   b, )`;
mapdropFunction.documentation = `Creates a new map from a given map with all the same entries except any with keys found in a given list. Examples > drop([#("a", 0), #("b", 1)], ["a"]) from_list([#("b", 2)])  > delete([#("a", 0), #("b", 1)], ["c"]) from_list([#("a", 0), #("b", 1)])  > drop([#("a", 0), #("b", 1)], ["a", "b", "c"]) from_list([])`;
mapdropFunction.insertText = new vscode.SnippetString("map.drop(${1:from map}, ${2:b})");

completionItems.push(mapdropFunction);
        

var dropFunction = new vscode.CompletionItem("drop", vscode.CompletionItemKind.Function);
dropFunction.detail = `pub fn drop(from map: Map(a, b), drop disallowed_keys: List(a)) -> Map(   a,   b, )`;
dropFunction.documentation = `Creates a new map from a given map with all the same entries except any with keys found in a given list. Examples > drop([#("a", 0), #("b", 1)], ["a"]) from_list([#("b", 2)])  > delete([#("a", 0), #("b", 1)], ["c"]) from_list([#("a", 0), #("b", 1)])  > drop([#("a", 0), #("b", 1)], ["a", "b", "c"]) from_list([])`;
dropFunction.insertText = new vscode.SnippetString("drop(${1:from map}, ${2:b})");

completionItems.push(dropFunction);
        

var mapfilterFunction = new vscode.CompletionItem("map.filter", vscode.CompletionItemKind.Function);
mapfilterFunction.detail = `pub fn filter(in map: Map(a, b), for property: fn(a, b) -> Bool) -> Map(   a,   b, )`;
mapfilterFunction.documentation = `Creates a new map from a given map, minus any entries that a given function returns False for. Examples > from_list([#("a", 0), #("b", 1)]) > |> filter(fn(key, value) { value != 0 }) from_list([#("b", 1)])  > from_list([#("a", 0), #("b", 1)]) > |> filter(fn(key, value) { True }) from_list([#("a", 0), #("b", 1)])`;
mapfilterFunction.insertText = new vscode.SnippetString("map.filter(${1:in map}, ${2:b})");

completionItems.push(mapfilterFunction);
        

var filterFunction = new vscode.CompletionItem("filter", vscode.CompletionItemKind.Function);
filterFunction.detail = `pub fn filter(in map: Map(a, b), for property: fn(a, b) -> Bool) -> Map(   a,   b, )`;
filterFunction.documentation = `Creates a new map from a given map, minus any entries that a given function returns False for. Examples > from_list([#("a", 0), #("b", 1)]) > |> filter(fn(key, value) { value != 0 }) from_list([#("b", 1)])  > from_list([#("a", 0), #("b", 1)]) > |> filter(fn(key, value) { True }) from_list([#("a", 0), #("b", 1)])`;
filterFunction.insertText = new vscode.SnippetString("filter(${1:in map}, ${2:b})");

completionItems.push(filterFunction);
        

var mapfoldFunction = new vscode.CompletionItem("map.fold", vscode.CompletionItemKind.Function);
mapfoldFunction.detail = `pub fn fold(over map: Map(a, b), from initial: c, with fun: fn(     c,     a,     b,   ) -> c) -> c`;
mapfoldFunction.documentation = `Combines all entries into a single value by calling a given function on each one. Maps are not ordered so the values are not returned in any specific order. Do not write code that relies on the order entries are used by this function as it may change in later versions of Gleam or Erlang. Examples > let map = from_list([#("a", 1), #("b", 3), #("c", 9)]) > fold(map, 0, fn(accumulator, key, value) { accumulator + value }) 13  > import gleam/string.{append} > fold(map, "", fn(accumulator, key, value) { append(accumulator, key) }) "abc"`;
mapfoldFunction.insertText = new vscode.SnippetString("map.fold(${1:over map}, ${2:b})");

completionItems.push(mapfoldFunction);
        

var foldFunction = new vscode.CompletionItem("fold", vscode.CompletionItemKind.Function);
foldFunction.detail = `pub fn fold(over map: Map(a, b), from initial: c, with fun: fn(     c,     a,     b,   ) -> c) -> c`;
foldFunction.documentation = `Combines all entries into a single value by calling a given function on each one. Maps are not ordered so the values are not returned in any specific order. Do not write code that relies on the order entries are used by this function as it may change in later versions of Gleam or Erlang. Examples > let map = from_list([#("a", 1), #("b", 3), #("c", 9)]) > fold(map, 0, fn(accumulator, key, value) { accumulator + value }) 13  > import gleam/string.{append} > fold(map, "", fn(accumulator, key, value) { append(accumulator, key) }) "abc"`;
foldFunction.insertText = new vscode.SnippetString("fold(${1:over map}, ${2:b})");

completionItems.push(foldFunction);
        

var mapfromListFunction = new vscode.CompletionItem("map.from_list", vscode.CompletionItemKind.Function);
mapfromListFunction.detail = `pub fn from_list(list: List(#(a, b))) -> Map(a, b)`;
mapfromListFunction.documentation = `Converts a list of 2-element tuples #(key, value) to a map. If two tuples have the same key the last one in the list will be the one that is present in the map.`;
mapfromListFunction.insertText = new vscode.SnippetString("map.from_list(${1:list}, ${2:b})");

completionItems.push(mapfromListFunction);
        

var fromListFunction = new vscode.CompletionItem("from_list", vscode.CompletionItemKind.Function);
fromListFunction.detail = `pub fn from_list(list: List(#(a, b))) -> Map(a, b)`;
fromListFunction.documentation = `Converts a list of 2-element tuples #(key, value) to a map. If two tuples have the same key the last one in the list will be the one that is present in the map.`;
fromListFunction.insertText = new vscode.SnippetString("from_list(${1:list}, ${2:b})");

completionItems.push(fromListFunction);
        

var mapgetFunction = new vscode.CompletionItem("map.get", vscode.CompletionItemKind.Function);
mapgetFunction.detail = `pub fn get(from: Map(a, b), get: a) -> Result(b, Nil)`;
mapgetFunction.documentation = `Fetches a value from a map for a given key. The map may not have a value for the key, so the value is wrapped in a Result. Examples > new() |> insert("a", 0) |> get("a") Ok(0)  > new() |> insert("a", 0) |> get("b") Error(Nil)`;
mapgetFunction.insertText = new vscode.SnippetString("map.get(${1:from}, ${2:b})");

completionItems.push(mapgetFunction);
        

var getFunction = new vscode.CompletionItem("get", vscode.CompletionItemKind.Function);
getFunction.detail = `pub fn get(from: Map(a, b), get: a) -> Result(b, Nil)`;
getFunction.documentation = `Fetches a value from a map for a given key. The map may not have a value for the key, so the value is wrapped in a Result. Examples > new() |> insert("a", 0) |> get("a") Ok(0)  > new() |> insert("a", 0) |> get("b") Error(Nil)`;
getFunction.insertText = new vscode.SnippetString("get(${1:from}, ${2:b})");

completionItems.push(getFunction);
        

var maphasKeyFunction = new vscode.CompletionItem("map.has_key", vscode.CompletionItemKind.Function);
maphasKeyFunction.detail = `pub fn has_key(map: Map(a, b), key: a) -> Bool`;
maphasKeyFunction.documentation = `Determines whether or not a value present in the map for a given key. Examples > new() |> insert("a", 0) |> has_key("a") True  > new() |> insert("a", 0) |> has_key("b") False`;
maphasKeyFunction.insertText = new vscode.SnippetString("map.has_key(${1:map}, ${2:b})");

completionItems.push(maphasKeyFunction);
        

var hasKeyFunction = new vscode.CompletionItem("has_key", vscode.CompletionItemKind.Function);
hasKeyFunction.detail = `pub fn has_key(map: Map(a, b), key: a) -> Bool`;
hasKeyFunction.documentation = `Determines whether or not a value present in the map for a given key. Examples > new() |> insert("a", 0) |> has_key("a") True  > new() |> insert("a", 0) |> has_key("b") False`;
hasKeyFunction.insertText = new vscode.SnippetString("has_key(${1:map}, ${2:b})");

completionItems.push(hasKeyFunction);
        

var mapinsertFunction = new vscode.CompletionItem("map.insert", vscode.CompletionItemKind.Function);
mapinsertFunction.detail = `pub fn insert(into map: Map(a, b), for key: a, insert value: b) -> Map(   a,   b, )`;
mapinsertFunction.documentation = `Inserts a value into the map with the given key. If the map already has a value for the given key then the value is replaced with the new value. Examples > new() |> insert("a", 0) |> to_list [#("a", 0)]  > new() |> insert("a", 0) |> insert("a", 5) |> to_list [#("a", 5)]`;
mapinsertFunction.insertText = new vscode.SnippetString("map.insert(${1:into map}, ${2:b})");

completionItems.push(mapinsertFunction);
        

var insertFunction = new vscode.CompletionItem("insert", vscode.CompletionItemKind.Function);
insertFunction.detail = `pub fn insert(into map: Map(a, b), for key: a, insert value: b) -> Map(   a,   b, )`;
insertFunction.documentation = `Inserts a value into the map with the given key. If the map already has a value for the given key then the value is replaced with the new value. Examples > new() |> insert("a", 0) |> to_list [#("a", 0)]  > new() |> insert("a", 0) |> insert("a", 5) |> to_list [#("a", 5)]`;
insertFunction.insertText = new vscode.SnippetString("insert(${1:into map}, ${2:b})");

completionItems.push(insertFunction);
        

var mapkeysFunction = new vscode.CompletionItem("map.keys", vscode.CompletionItemKind.Function);
mapkeysFunction.detail = `pub fn keys(map: Map(a, b)) -> List(a)`;
mapkeysFunction.documentation = `Gets a list of all keys in a given map. Maps are not ordered so the keys are not returned in any specific order. Do not write code that relies on the order keys are returned by this function as it may change in later versions of Gleam or Erlang. Examples > keys([#("a", 0), #("b", 1)]) ["a", "b"]`;
mapkeysFunction.insertText = new vscode.SnippetString("map.keys(${1:map}, ${2:b})");

completionItems.push(mapkeysFunction);
        

var keysFunction = new vscode.CompletionItem("keys", vscode.CompletionItemKind.Function);
keysFunction.detail = `pub fn keys(map: Map(a, b)) -> List(a)`;
keysFunction.documentation = `Gets a list of all keys in a given map. Maps are not ordered so the keys are not returned in any specific order. Do not write code that relies on the order keys are returned by this function as it may change in later versions of Gleam or Erlang. Examples > keys([#("a", 0), #("b", 1)]) ["a", "b"]`;
keysFunction.insertText = new vscode.SnippetString("keys(${1:map}, ${2:b})");

completionItems.push(keysFunction);
        

var mapmapValuesFunction = new vscode.CompletionItem("map.map_values", vscode.CompletionItemKind.Function);
mapmapValuesFunction.detail = `pub fn map_values(in map: Map(a, b), with fun: fn(a, b) -> c) -> Map(   a,   c, )`;
mapmapValuesFunction.documentation = `Updates all values in a given map by calling a given function on each key and value. Examples > [#(3, 3), #(2, 4)] > |> from_list > |> map_values(fn(key, value) { key * value }) [#(3, 9), #(2, 8)]`;
mapmapValuesFunction.insertText = new vscode.SnippetString("map.map_values(${1:in map}, ${2:b})");

completionItems.push(mapmapValuesFunction);
        

var mapValuesFunction = new vscode.CompletionItem("map_values", vscode.CompletionItemKind.Function);
mapValuesFunction.detail = `pub fn map_values(in map: Map(a, b), with fun: fn(a, b) -> c) -> Map(   a,   c, )`;
mapValuesFunction.documentation = `Updates all values in a given map by calling a given function on each key and value. Examples > [#(3, 3), #(2, 4)] > |> from_list > |> map_values(fn(key, value) { key * value }) [#(3, 9), #(2, 8)]`;
mapValuesFunction.insertText = new vscode.SnippetString("map_values(${1:in map}, ${2:b})");

completionItems.push(mapValuesFunction);
        

var mapmergeFunction = new vscode.CompletionItem("map.merge", vscode.CompletionItemKind.Function);
mapmergeFunction.detail = `pub fn merge(into map: Map(a, b), from new_entries: Map(a, b)) -> Map(   a,   b, )`;
mapmergeFunction.documentation = `Creates a new map from a pair of given maps by combining their entries. If there are entries with the same keys in both maps the entry from the second map takes precedence. Examples > let a = from_list([#("a", 0), #("b", 1)]) > let b = from_list([#("b", 2), #("c", 3)]) > merge(a, b) from_list([#("a", 0), #("b", 2), #("c", 3)])`;
mapmergeFunction.insertText = new vscode.SnippetString("map.merge(${1:into map}, ${2:b})");

completionItems.push(mapmergeFunction);
        

var mergeFunction = new vscode.CompletionItem("merge", vscode.CompletionItemKind.Function);
mergeFunction.detail = `pub fn merge(into map: Map(a, b), from new_entries: Map(a, b)) -> Map(   a,   b, )`;
mergeFunction.documentation = `Creates a new map from a pair of given maps by combining their entries. If there are entries with the same keys in both maps the entry from the second map takes precedence. Examples > let a = from_list([#("a", 0), #("b", 1)]) > let b = from_list([#("b", 2), #("c", 3)]) > merge(a, b) from_list([#("a", 0), #("b", 2), #("c", 3)])`;
mergeFunction.insertText = new vscode.SnippetString("merge(${1:into map}, ${2:b})");

completionItems.push(mergeFunction);
        

var mapnewFunction = new vscode.CompletionItem("map.new", vscode.CompletionItemKind.Function);
mapnewFunction.detail = `pub fn new() -> Map(a, b)`;
mapnewFunction.documentation = `Creates a fresh map that contains no values.`;
mapnewFunction.insertText = new vscode.SnippetString("map.new(${1:})");

completionItems.push(mapnewFunction);
        

var newFunction = new vscode.CompletionItem("new", vscode.CompletionItemKind.Function);
newFunction.detail = `pub fn new() -> Map(a, b)`;
newFunction.documentation = `Creates a fresh map that contains no values.`;
newFunction.insertText = new vscode.SnippetString("new(${1:})");

completionItems.push(newFunction);
        

var mapsizeFunction = new vscode.CompletionItem("map.size", vscode.CompletionItemKind.Function);
mapsizeFunction.detail = `pub fn size(map: Map(a, b)) -> Int`;
mapsizeFunction.documentation = `Determines the number of key-value pairs in the map. This function runs in constant time and does not need to iterate the map. Examples > new() |> size() 0  > new() |> insert("key", "value") |> size() 1`;
mapsizeFunction.insertText = new vscode.SnippetString("map.size(${1:map}, ${2:b})");

completionItems.push(mapsizeFunction);
        

var sizeFunction = new vscode.CompletionItem("size", vscode.CompletionItemKind.Function);
sizeFunction.detail = `pub fn size(map: Map(a, b)) -> Int`;
sizeFunction.documentation = `Determines the number of key-value pairs in the map. This function runs in constant time and does not need to iterate the map. Examples > new() |> size() 0  > new() |> insert("key", "value") |> size() 1`;
sizeFunction.insertText = new vscode.SnippetString("size(${1:map}, ${2:b})");

completionItems.push(sizeFunction);
        

var maptakeFunction = new vscode.CompletionItem("map.take", vscode.CompletionItemKind.Function);
maptakeFunction.detail = `pub fn take(from map: Map(a, b), keeping desired_keys: List(a)) -> Map(   a,   b, )`;
maptakeFunction.documentation = `Creates a new map from a given map, only including any entries for which the keys are in a given list. Examples > from_list([#("a", 0), #("b", 1)]) > |> take(["b"]) from_list([#("b", 1)])  > from_list([#("a", 0), #("b", 1)]) > |> take(["a", "b", "c"]) from_list([#("a", 0), #("b", 1)])`;
maptakeFunction.insertText = new vscode.SnippetString("map.take(${1:from map}, ${2:b})");

completionItems.push(maptakeFunction);
        

var takeFunction = new vscode.CompletionItem("take", vscode.CompletionItemKind.Function);
takeFunction.detail = `pub fn take(from map: Map(a, b), keeping desired_keys: List(a)) -> Map(   a,   b, )`;
takeFunction.documentation = `Creates a new map from a given map, only including any entries for which the keys are in a given list. Examples > from_list([#("a", 0), #("b", 1)]) > |> take(["b"]) from_list([#("b", 1)])  > from_list([#("a", 0), #("b", 1)]) > |> take(["a", "b", "c"]) from_list([#("a", 0), #("b", 1)])`;
takeFunction.insertText = new vscode.SnippetString("take(${1:from map}, ${2:b})");

completionItems.push(takeFunction);
        

var maptoListFunction = new vscode.CompletionItem("map.to_list", vscode.CompletionItemKind.Function);
maptoListFunction.detail = `pub fn to_list(map: Map(a, b)) -> List(#(a, b))`;
maptoListFunction.documentation = `Converts the map to a list of 2-element tuples #(key, value), one for each key-value pair in the map. The tuples in the list have no specific order. Examples > new() |> to_list() []  > new() |> insert("key", 0) |> to_list() [#("key", 0)]`;
maptoListFunction.insertText = new vscode.SnippetString("map.to_list(${1:map}, ${2:b})");

completionItems.push(maptoListFunction);
        

var toListFunction = new vscode.CompletionItem("to_list", vscode.CompletionItemKind.Function);
toListFunction.detail = `pub fn to_list(map: Map(a, b)) -> List(#(a, b))`;
toListFunction.documentation = `Converts the map to a list of 2-element tuples #(key, value), one for each key-value pair in the map. The tuples in the list have no specific order. Examples > new() |> to_list() []  > new() |> insert("key", 0) |> to_list() [#("key", 0)]`;
toListFunction.insertText = new vscode.SnippetString("to_list(${1:map}, ${2:b})");

completionItems.push(toListFunction);
        

var mapupdateFunction = new vscode.CompletionItem("map.update", vscode.CompletionItemKind.Function);
mapupdateFunction.detail = `pub fn update(in map: Map(a, b), update key: a, with fun: fn(     Option(b),   ) -> b) -> Map(a, b)`;
mapupdateFunction.documentation = `Creates a new map with one entry updated using a given function. If there was not an entry in the map for the given key then the function gets None as its argument, otherwise it gets Some(value). Example > let increment = fn(x) { >   case x { >     Some(i) -> i + 1 >     None -> 0 >   } > } > let map = from_list([#("a", 0)]) > > update(map, "a", increment) from_list([#("a", 1)])  > update(map, "b", increment) from_list([#("a", 0), #("b", 0)])`;
mapupdateFunction.insertText = new vscode.SnippetString("map.update(${1:in map}, ${2:b})");

completionItems.push(mapupdateFunction);
        

var updateFunction = new vscode.CompletionItem("update", vscode.CompletionItemKind.Function);
updateFunction.detail = `pub fn update(in map: Map(a, b), update key: a, with fun: fn(     Option(b),   ) -> b) -> Map(a, b)`;
updateFunction.documentation = `Creates a new map with one entry updated using a given function. If there was not an entry in the map for the given key then the function gets None as its argument, otherwise it gets Some(value). Example > let increment = fn(x) { >   case x { >     Some(i) -> i + 1 >     None -> 0 >   } > } > let map = from_list([#("a", 0)]) > > update(map, "a", increment) from_list([#("a", 1)])  > update(map, "b", increment) from_list([#("a", 0), #("b", 0)])`;
updateFunction.insertText = new vscode.SnippetString("update(${1:in map}, ${2:b})");

completionItems.push(updateFunction);
        

var mapvaluesFunction = new vscode.CompletionItem("map.values", vscode.CompletionItemKind.Function);
mapvaluesFunction.detail = `pub fn values(map: Map(a, b)) -> List(b)`;
mapvaluesFunction.documentation = `Gets a list of all values in a given map. Maps are not ordered so the values are not returned in any specific order. Do not write code that relies on the order values are returned by this function as it may change in later versions of Gleam or Erlang. Examples > values(from_list([#("a", 0), #("b", 1)])) [0, 1]`;
mapvaluesFunction.insertText = new vscode.SnippetString("map.values(${1:map}, ${2:b})");

completionItems.push(mapvaluesFunction);
        

var valuesFunction = new vscode.CompletionItem("values", vscode.CompletionItemKind.Function);
valuesFunction.detail = `pub fn values(map: Map(a, b)) -> List(b)`;
valuesFunction.documentation = `Gets a list of all values in a given map. Maps are not ordered so the values are not returned in any specific order. Do not write code that relies on the order values are returned by this function as it may change in later versions of Gleam or Erlang. Examples > values(from_list([#("a", 0), #("b", 1)])) [0, 1]`;
valuesFunction.insertText = new vscode.SnippetString("values(${1:map}, ${2:b})");

completionItems.push(valuesFunction);
        

var optionallFunction = new vscode.CompletionItem("option.all", vscode.CompletionItemKind.Function);
optionallFunction.detail = `pub fn all(list: List(Option(a))) -> Option(List(a))`;
optionallFunction.documentation = `Combines a list of Options into a single Option. If all elements in the list are Some then returns a Some holding the list of values. If any element is None then returnsNone. Examples > all([Some(1), Some(2)]) Some([1, 2])  > all([Some(1), None]) None`;
optionallFunction.insertText = new vscode.SnippetString("option.all(${1:list})");

completionItems.push(optionallFunction);
        

var allFunction = new vscode.CompletionItem("all", vscode.CompletionItemKind.Function);
allFunction.detail = `pub fn all(list: List(Option(a))) -> Option(List(a))`;
allFunction.documentation = `Combines a list of Options into a single Option. If all elements in the list are Some then returns a Some holding the list of values. If any element is None then returnsNone. Examples > all([Some(1), Some(2)]) Some([1, 2])  > all([Some(1), None]) None`;
allFunction.insertText = new vscode.SnippetString("all(${1:list})");

completionItems.push(allFunction);
        

var optionflattenFunction = new vscode.CompletionItem("option.flatten", vscode.CompletionItemKind.Function);
optionflattenFunction.detail = `pub fn flatten(option: Option(Option(a))) -> Option(a)`;
optionflattenFunction.documentation = `Merges a nested Option into a single layer. Examples > flatten(Some(Some(1))) Some(1)  > flatten(Some(None)) None  > flatten(None) None`;
optionflattenFunction.insertText = new vscode.SnippetString("option.flatten(${1:option})");

completionItems.push(optionflattenFunction);
        

var flattenFunction = new vscode.CompletionItem("flatten", vscode.CompletionItemKind.Function);
flattenFunction.detail = `pub fn flatten(option: Option(Option(a))) -> Option(a)`;
flattenFunction.documentation = `Merges a nested Option into a single layer. Examples > flatten(Some(Some(1))) Some(1)  > flatten(Some(None)) None  > flatten(None) None`;
flattenFunction.insertText = new vscode.SnippetString("flatten(${1:option})");

completionItems.push(flattenFunction);
        

var optionfromResultFunction = new vscode.CompletionItem("option.from_result", vscode.CompletionItemKind.Function);
optionfromResultFunction.detail = `pub fn from_result(result: Result(a, b)) -> Option(a)`;
optionfromResultFunction.documentation = `Converts a Result type to an Option type. Examples > from_result(Ok(1)) Some(1)  > from_result(Error("some_error")) None`;
optionfromResultFunction.insertText = new vscode.SnippetString("option.from_result(${1:result}, ${2:b})");

completionItems.push(optionfromResultFunction);
        

var fromResultFunction = new vscode.CompletionItem("from_result", vscode.CompletionItemKind.Function);
fromResultFunction.detail = `pub fn from_result(result: Result(a, b)) -> Option(a)`;
fromResultFunction.documentation = `Converts a Result type to an Option type. Examples > from_result(Ok(1)) Some(1)  > from_result(Error("some_error")) None`;
fromResultFunction.insertText = new vscode.SnippetString("from_result(${1:result}, ${2:b})");

completionItems.push(fromResultFunction);
        

var optionisNoneFunction = new vscode.CompletionItem("option.is_none", vscode.CompletionItemKind.Function);
optionisNoneFunction.detail = `pub fn is_none(option: Option(a)) -> Bool`;
optionisNoneFunction.documentation = `Checks whether the Option is a None value. Examples > is_none(Some(1)) False  > is_none(None) True`;
optionisNoneFunction.insertText = new vscode.SnippetString("option.is_none(${1:option})");

completionItems.push(optionisNoneFunction);
        

var isNoneFunction = new vscode.CompletionItem("is_none", vscode.CompletionItemKind.Function);
isNoneFunction.detail = `pub fn is_none(option: Option(a)) -> Bool`;
isNoneFunction.documentation = `Checks whether the Option is a None value. Examples > is_none(Some(1)) False  > is_none(None) True`;
isNoneFunction.insertText = new vscode.SnippetString("is_none(${1:option})");

completionItems.push(isNoneFunction);
        

var optionisSomeFunction = new vscode.CompletionItem("option.is_some", vscode.CompletionItemKind.Function);
optionisSomeFunction.detail = `pub fn is_some(option: Option(a)) -> Bool`;
optionisSomeFunction.documentation = `Checks whether the Option is a Some value. Examples > is_some(Some(1)) True  > is_some(None) False`;
optionisSomeFunction.insertText = new vscode.SnippetString("option.is_some(${1:option})");

completionItems.push(optionisSomeFunction);
        

var isSomeFunction = new vscode.CompletionItem("is_some", vscode.CompletionItemKind.Function);
isSomeFunction.detail = `pub fn is_some(option: Option(a)) -> Bool`;
isSomeFunction.documentation = `Checks whether the Option is a Some value. Examples > is_some(Some(1)) True  > is_some(None) False`;
isSomeFunction.insertText = new vscode.SnippetString("is_some(${1:option})");

completionItems.push(isSomeFunction);
        

var optionlazyOrFunction = new vscode.CompletionItem("option.lazy_or", vscode.CompletionItemKind.Function);
optionlazyOrFunction.detail = `pub fn lazy_or(first: Option(a), second: fn() -> Option(a)) -> Option(   a, )`;
optionlazyOrFunction.documentation = `Returns the first value if it is Some, otherwise evaluates the given function for a fallback value. Examples > lazy_or(Some(1), fn() { Some(2) }) Some(1)  > lazy_or(Some(1), fn() { None }) Some(1)  > lazy_or(None, fn() { Some(2) }) Some(2)  > lazy_or(None, fn() { None }) None`;
optionlazyOrFunction.insertText = new vscode.SnippetString("option.lazy_or(${1:first})");

completionItems.push(optionlazyOrFunction);
        

var lazyOrFunction = new vscode.CompletionItem("lazy_or", vscode.CompletionItemKind.Function);
lazyOrFunction.detail = `pub fn lazy_or(first: Option(a), second: fn() -> Option(a)) -> Option(   a, )`;
lazyOrFunction.documentation = `Returns the first value if it is Some, otherwise evaluates the given function for a fallback value. Examples > lazy_or(Some(1), fn() { Some(2) }) Some(1)  > lazy_or(Some(1), fn() { None }) Some(1)  > lazy_or(None, fn() { Some(2) }) Some(2)  > lazy_or(None, fn() { None }) None`;
lazyOrFunction.insertText = new vscode.SnippetString("lazy_or(${1:first})");

completionItems.push(lazyOrFunction);
        

var optionlazyUnwrapFunction = new vscode.CompletionItem("option.lazy_unwrap", vscode.CompletionItemKind.Function);
optionlazyUnwrapFunction.detail = `pub fn lazy_unwrap(option: Option(a), or default: fn() -> a) -> a`;
optionlazyUnwrapFunction.documentation = `Extracts the value from an Option, evaluating the default function if the option is None. Examples > lazy_unwrap(Some(1), fn() { 0 }) 1  > lazy_unwrap(None, fn() { 0 }) 0`;
optionlazyUnwrapFunction.insertText = new vscode.SnippetString("option.lazy_unwrap(${1:option})");

completionItems.push(optionlazyUnwrapFunction);
        

var lazyUnwrapFunction = new vscode.CompletionItem("lazy_unwrap", vscode.CompletionItemKind.Function);
lazyUnwrapFunction.detail = `pub fn lazy_unwrap(option: Option(a), or default: fn() -> a) -> a`;
lazyUnwrapFunction.documentation = `Extracts the value from an Option, evaluating the default function if the option is None. Examples > lazy_unwrap(Some(1), fn() { 0 }) 1  > lazy_unwrap(None, fn() { 0 }) 0`;
lazyUnwrapFunction.insertText = new vscode.SnippetString("lazy_unwrap(${1:option})");

completionItems.push(lazyUnwrapFunction);
        

var optionmapFunction = new vscode.CompletionItem("option.map", vscode.CompletionItemKind.Function);
optionmapFunction.detail = `pub fn map(over option: Option(a), with fun: fn(a) -> b) -> Option(   b, )`;
optionmapFunction.documentation = `Updates a value held within the Some of an Option by calling a given function on it. If the Option is a None rather than Some, the function is not called and the Option stays the same. Examples > map(over: Some(1), with: fn(x) { x + 1 }) Some(2)  > map(over: None, with: fn(x) { x + 1 }) None`;
optionmapFunction.insertText = new vscode.SnippetString("option.map(${1:over option})");

completionItems.push(optionmapFunction);
        

var mapFunction = new vscode.CompletionItem("map", vscode.CompletionItemKind.Function);
mapFunction.detail = `pub fn map(over option: Option(a), with fun: fn(a) -> b) -> Option(   b, )`;
mapFunction.documentation = `Updates a value held within the Some of an Option by calling a given function on it. If the Option is a None rather than Some, the function is not called and the Option stays the same. Examples > map(over: Some(1), with: fn(x) { x + 1 }) Some(2)  > map(over: None, with: fn(x) { x + 1 }) None`;
mapFunction.insertText = new vscode.SnippetString("map(${1:over option})");

completionItems.push(mapFunction);
        

var optionorFunction = new vscode.CompletionItem("option.or", vscode.CompletionItemKind.Function);
optionorFunction.detail = `pub fn or(first: Option(a), second: Option(a)) -> Option(a)`;
optionorFunction.documentation = `Returns the first value if it is Some, otherwise returns the second value. Examples > or(Some(1), Some(2)) Some(1)  > or(Some(1), None) Some(1)  > or(None, Some(2)) Some(2)  > or(None, None) None`;
optionorFunction.insertText = new vscode.SnippetString("option.or(${1:first})");

completionItems.push(optionorFunction);
        

var orFunction = new vscode.CompletionItem("or", vscode.CompletionItemKind.Function);
orFunction.detail = `pub fn or(first: Option(a), second: Option(a)) -> Option(a)`;
orFunction.documentation = `Returns the first value if it is Some, otherwise returns the second value. Examples > or(Some(1), Some(2)) Some(1)  > or(Some(1), None) Some(1)  > or(None, Some(2)) Some(2)  > or(None, None) None`;
orFunction.insertText = new vscode.SnippetString("or(${1:first})");

completionItems.push(orFunction);
        

var optionthenFunction = new vscode.CompletionItem("option.then", vscode.CompletionItemKind.Function);
optionthenFunction.detail = `pub fn then(option: Option(a), apply fun: fn(a) -> Option(b)) -> Option(   b, )`;
optionthenFunction.documentation = `Updates a value held within the Some of an Option by calling a given function on it, where the given function also returns an Option. The two options are then merged together into one Option. If the Option is a None rather than Some the function is not called and the option stays the same. This function is the equivalent of calling map followed by flatten, and it is useful for chaining together multiple functions that return Option. Examples > then(Some(1), fn(x) { Some(x + 1) }) Some(2)  > then(Some(1), fn(x) { Some(#("a", x)) }) Some(#("a", 1))  > then(Some(1), fn(_) { None }) None  > then(None, fn(x) { Some(x + 1) }) None`;
optionthenFunction.insertText = new vscode.SnippetString("option.then(${1:option})");

completionItems.push(optionthenFunction);
        

var thenFunction = new vscode.CompletionItem("then", vscode.CompletionItemKind.Function);
thenFunction.detail = `pub fn then(option: Option(a), apply fun: fn(a) -> Option(b)) -> Option(   b, )`;
thenFunction.documentation = `Updates a value held within the Some of an Option by calling a given function on it, where the given function also returns an Option. The two options are then merged together into one Option. If the Option is a None rather than Some the function is not called and the option stays the same. This function is the equivalent of calling map followed by flatten, and it is useful for chaining together multiple functions that return Option. Examples > then(Some(1), fn(x) { Some(x + 1) }) Some(2)  > then(Some(1), fn(x) { Some(#("a", x)) }) Some(#("a", 1))  > then(Some(1), fn(_) { None }) None  > then(None, fn(x) { Some(x + 1) }) None`;
thenFunction.insertText = new vscode.SnippetString("then(${1:option})");

completionItems.push(thenFunction);
        

var optiontoResultFunction = new vscode.CompletionItem("option.to_result", vscode.CompletionItemKind.Function);
optiontoResultFunction.detail = `pub fn to_result(option: Option(a), e: b) -> Result(a, b)`;
optiontoResultFunction.documentation = `Converts an Option type to a Result type. Examples > to_result(Some(1), "some_error") Ok(1)  > to_result(None, "some_error") Error("some_error")`;
optiontoResultFunction.insertText = new vscode.SnippetString("option.to_result(${1:option})");

completionItems.push(optiontoResultFunction);
        

var toResultFunction = new vscode.CompletionItem("to_result", vscode.CompletionItemKind.Function);
toResultFunction.detail = `pub fn to_result(option: Option(a), e: b) -> Result(a, b)`;
toResultFunction.documentation = `Converts an Option type to a Result type. Examples > to_result(Some(1), "some_error") Ok(1)  > to_result(None, "some_error") Error("some_error")`;
toResultFunction.insertText = new vscode.SnippetString("to_result(${1:option})");

completionItems.push(toResultFunction);
        

var optionunwrapFunction = new vscode.CompletionItem("option.unwrap", vscode.CompletionItemKind.Function);
optionunwrapFunction.detail = `pub fn unwrap(option: Option(a), or default: a) -> a`;
optionunwrapFunction.documentation = `Extracts the value from an Option, returning a default value if there is none. Examples > unwrap(Some(1), 0) 1  > unwrap(None, 0) 0`;
optionunwrapFunction.insertText = new vscode.SnippetString("option.unwrap(${1:option})");

completionItems.push(optionunwrapFunction);
        

var unwrapFunction = new vscode.CompletionItem("unwrap", vscode.CompletionItemKind.Function);
unwrapFunction.detail = `pub fn unwrap(option: Option(a), or default: a) -> a`;
unwrapFunction.documentation = `Extracts the value from an Option, returning a default value if there is none. Examples > unwrap(Some(1), 0) 1  > unwrap(None, 0) 0`;
unwrapFunction.insertText = new vscode.SnippetString("unwrap(${1:option})");

completionItems.push(unwrapFunction);
        

var optionvaluesFunction = new vscode.CompletionItem("option.values", vscode.CompletionItemKind.Function);
optionvaluesFunction.detail = `pub fn values(options: List(Option(a))) -> List(a)`;
optionvaluesFunction.documentation = `Given a list of Options, returns only the values inside Some. Examples > values([Some(1), None, Some(3)]) [1, 3]`;
optionvaluesFunction.insertText = new vscode.SnippetString("option.values(${1:options})");

completionItems.push(optionvaluesFunction);
        

var valuesFunction = new vscode.CompletionItem("values", vscode.CompletionItemKind.Function);
valuesFunction.detail = `pub fn values(options: List(Option(a))) -> List(a)`;
valuesFunction.documentation = `Given a list of Options, returns only the values inside Some. Examples > values([Some(1), None, Some(3)]) [1, 3]`;
valuesFunction.insertText = new vscode.SnippetString("values(${1:options})");

completionItems.push(valuesFunction);
        

var ordercompareFunction = new vscode.CompletionItem("order.compare", vscode.CompletionItemKind.Function);
ordercompareFunction.detail = `pub fn compare(a: Order, with b: Order) -> Order`;
ordercompareFunction.documentation = `Compares two Order values to one another, producing a new Order. Examples > compare(Eq, with: Lt) Gt`;
ordercompareFunction.insertText = new vscode.SnippetString("order.compare(${1:a}, ${2:with b})");

completionItems.push(ordercompareFunction);
        

var compareFunction = new vscode.CompletionItem("compare", vscode.CompletionItemKind.Function);
compareFunction.detail = `pub fn compare(a: Order, with b: Order) -> Order`;
compareFunction.documentation = `Compares two Order values to one another, producing a new Order. Examples > compare(Eq, with: Lt) Gt`;
compareFunction.insertText = new vscode.SnippetString("compare(${1:a}, ${2:with b})");

completionItems.push(compareFunction);
        

var ordermaxFunction = new vscode.CompletionItem("order.max", vscode.CompletionItemKind.Function);
ordermaxFunction.detail = `pub fn max(a: Order, b: Order) -> Order`;
ordermaxFunction.documentation = `Returns the largest of two orders. Examples > max(Eq, Lt) Eq`;
ordermaxFunction.insertText = new vscode.SnippetString("order.max(${1:a}, ${2:b})");

completionItems.push(ordermaxFunction);
        

var maxFunction = new vscode.CompletionItem("max", vscode.CompletionItemKind.Function);
maxFunction.detail = `pub fn max(a: Order, b: Order) -> Order`;
maxFunction.documentation = `Returns the largest of two orders. Examples > max(Eq, Lt) Eq`;
maxFunction.insertText = new vscode.SnippetString("max(${1:a}, ${2:b})");

completionItems.push(maxFunction);
        

var orderminFunction = new vscode.CompletionItem("order.min", vscode.CompletionItemKind.Function);
orderminFunction.detail = `pub fn min(a: Order, b: Order) -> Order`;
orderminFunction.documentation = `Returns the smallest of two orders. Examples > min(Eq, Lt) Lt`;
orderminFunction.insertText = new vscode.SnippetString("order.min(${1:a}, ${2:b})");

completionItems.push(orderminFunction);
        

var minFunction = new vscode.CompletionItem("min", vscode.CompletionItemKind.Function);
minFunction.detail = `pub fn min(a: Order, b: Order) -> Order`;
minFunction.documentation = `Returns the smallest of two orders. Examples > min(Eq, Lt) Lt`;
minFunction.insertText = new vscode.SnippetString("min(${1:a}, ${2:b})");

completionItems.push(minFunction);
        

var orderreverseFunction = new vscode.CompletionItem("order.reverse", vscode.CompletionItemKind.Function);
orderreverseFunction.detail = `pub fn reverse(order: Order) -> Order`;
orderreverseFunction.documentation = `Inverts an order, so less-than becomes greater-than and greater-than becomes less-than. Examples > reverse(Lt) Gt  > reverse(Eq) Eq  > reverse(Lt) Gt`;
orderreverseFunction.insertText = new vscode.SnippetString("order.reverse(${1:order})");

completionItems.push(orderreverseFunction);
        

var reverseFunction = new vscode.CompletionItem("reverse", vscode.CompletionItemKind.Function);
reverseFunction.detail = `pub fn reverse(order: Order) -> Order`;
reverseFunction.documentation = `Inverts an order, so less-than becomes greater-than and greater-than becomes less-than. Examples > reverse(Lt) Gt  > reverse(Eq) Eq  > reverse(Lt) Gt`;
reverseFunction.insertText = new vscode.SnippetString("reverse(${1:order})");

completionItems.push(reverseFunction);
        

var ordertoIntFunction = new vscode.CompletionItem("order.to_int", vscode.CompletionItemKind.Function);
ordertoIntFunction.detail = `pub fn to_int(order: Order) -> Int`;
ordertoIntFunction.documentation = `Produces a numeric representation of the order. Examples > to_int(Lt) -1  > to_int(Eq) 0  > to_int(Gt) 1`;
ordertoIntFunction.insertText = new vscode.SnippetString("order.to_int(${1:order})");

completionItems.push(ordertoIntFunction);
        

var toIntFunction = new vscode.CompletionItem("to_int", vscode.CompletionItemKind.Function);
toIntFunction.detail = `pub fn to_int(order: Order) -> Int`;
toIntFunction.documentation = `Produces a numeric representation of the order. Examples > to_int(Lt) -1  > to_int(Eq) 0  > to_int(Gt) 1`;
toIntFunction.insertText = new vscode.SnippetString("to_int(${1:order})");

completionItems.push(toIntFunction);
        

var pairfirstFunction = new vscode.CompletionItem("pair.first", vscode.CompletionItemKind.Function);
pairfirstFunction.detail = `pub fn first(pair: #(a, b)) -> a`;
pairfirstFunction.documentation = `Returns the first element in a pair. Examples > first(#(1, 2)) 1`;
pairfirstFunction.insertText = new vscode.SnippetString("pair.first(${1:pair}, ${2:b})");

completionItems.push(pairfirstFunction);
        

var firstFunction = new vscode.CompletionItem("first", vscode.CompletionItemKind.Function);
firstFunction.detail = `pub fn first(pair: #(a, b)) -> a`;
firstFunction.documentation = `Returns the first element in a pair. Examples > first(#(1, 2)) 1`;
firstFunction.insertText = new vscode.SnippetString("first(${1:pair}, ${2:b})");

completionItems.push(firstFunction);
        

var pairmapFirstFunction = new vscode.CompletionItem("pair.map_first", vscode.CompletionItemKind.Function);
pairmapFirstFunction.detail = `pub fn map_first(of pair: #(a, b), with fun: fn(a) -> c) -> #(   c,   b, )`;
pairmapFirstFunction.documentation = `Returns a new pair with the first element having had with applied to it. Examples > #(1, 2) |> map_first(fn(n) { n * 2 }) #(2, 2)`;
pairmapFirstFunction.insertText = new vscode.SnippetString("pair.map_first(${1:of pair}, ${2:b})");

completionItems.push(pairmapFirstFunction);
        

var mapFirstFunction = new vscode.CompletionItem("map_first", vscode.CompletionItemKind.Function);
mapFirstFunction.detail = `pub fn map_first(of pair: #(a, b), with fun: fn(a) -> c) -> #(   c,   b, )`;
mapFirstFunction.documentation = `Returns a new pair with the first element having had with applied to it. Examples > #(1, 2) |> map_first(fn(n) { n * 2 }) #(2, 2)`;
mapFirstFunction.insertText = new vscode.SnippetString("map_first(${1:of pair}, ${2:b})");

completionItems.push(mapFirstFunction);
        

var pairmapSecondFunction = new vscode.CompletionItem("pair.map_second", vscode.CompletionItemKind.Function);
pairmapSecondFunction.detail = `pub fn map_second(of pair: #(a, b), with fun: fn(b) -> c) -> #(   a,   c, )`;
pairmapSecondFunction.documentation = `Returns a new pair with the second element having had with applied to it. Examples > #(1, 2) |> map_second(fn(n) { n * 2 }) #(1, 4)`;
pairmapSecondFunction.insertText = new vscode.SnippetString("pair.map_second(${1:of pair}, ${2:b})");

completionItems.push(pairmapSecondFunction);
        

var mapSecondFunction = new vscode.CompletionItem("map_second", vscode.CompletionItemKind.Function);
mapSecondFunction.detail = `pub fn map_second(of pair: #(a, b), with fun: fn(b) -> c) -> #(   a,   c, )`;
mapSecondFunction.documentation = `Returns a new pair with the second element having had with applied to it. Examples > #(1, 2) |> map_second(fn(n) { n * 2 }) #(1, 4)`;
mapSecondFunction.insertText = new vscode.SnippetString("map_second(${1:of pair}, ${2:b})");

completionItems.push(mapSecondFunction);
        

var pairsecondFunction = new vscode.CompletionItem("pair.second", vscode.CompletionItemKind.Function);
pairsecondFunction.detail = `pub fn second(pair: #(a, b)) -> b`;
pairsecondFunction.documentation = `Returns the second element in a pair. Examples > second(#(1, 2)) 2`;
pairsecondFunction.insertText = new vscode.SnippetString("pair.second(${1:pair}, ${2:b})");

completionItems.push(pairsecondFunction);
        

var secondFunction = new vscode.CompletionItem("second", vscode.CompletionItemKind.Function);
secondFunction.detail = `pub fn second(pair: #(a, b)) -> b`;
secondFunction.documentation = `Returns the second element in a pair. Examples > second(#(1, 2)) 2`;
secondFunction.insertText = new vscode.SnippetString("second(${1:pair}, ${2:b})");

completionItems.push(secondFunction);
        

var pairswapFunction = new vscode.CompletionItem("pair.swap", vscode.CompletionItemKind.Function);
pairswapFunction.detail = `pub fn swap(pair: #(a, b)) -> #(b, a)`;
pairswapFunction.documentation = `Returns a new pair with the elements swapped. Examples > swap(#(1, 2)) #(2, 1)`;
pairswapFunction.insertText = new vscode.SnippetString("pair.swap(${1:pair}, ${2:b})");

completionItems.push(pairswapFunction);
        

var swapFunction = new vscode.CompletionItem("swap", vscode.CompletionItemKind.Function);
swapFunction.detail = `pub fn swap(pair: #(a, b)) -> #(b, a)`;
swapFunction.documentation = `Returns a new pair with the elements swapped. Examples > swap(#(1, 2)) #(2, 1)`;
swapFunction.insertText = new vscode.SnippetString("swap(${1:pair}, ${2:b})");

completionItems.push(swapFunction);
        

var queuefromListFunction = new vscode.CompletionItem("queue.from_list", vscode.CompletionItemKind.Function);
queuefromListFunction.detail = `pub fn from_list(list: List(a)) -> Queue(a)`;
queuefromListFunction.documentation = `Converts a list of elements into a queue of the same elements in the same order. The head element in the list becomes the front element in the queue. This function runs in constant time. Examples > [1, 2, 3] |> from_list |> length 3`;
queuefromListFunction.insertText = new vscode.SnippetString("queue.from_list(${1:list})");

completionItems.push(queuefromListFunction);
        

var fromListFunction = new vscode.CompletionItem("from_list", vscode.CompletionItemKind.Function);
fromListFunction.detail = `pub fn from_list(list: List(a)) -> Queue(a)`;
fromListFunction.documentation = `Converts a list of elements into a queue of the same elements in the same order. The head element in the list becomes the front element in the queue. This function runs in constant time. Examples > [1, 2, 3] |> from_list |> length 3`;
fromListFunction.insertText = new vscode.SnippetString("from_list(${1:list})");

completionItems.push(fromListFunction);
        

var queueisEmptyFunction = new vscode.CompletionItem("queue.is_empty", vscode.CompletionItemKind.Function);
queueisEmptyFunction.detail = `pub fn is_empty(queue: Queue(a)) -> Bool`;
queueisEmptyFunction.documentation = `Determines whether or not the queue is empty. This function runs in constant time. Examples > [] |> from_list |> is_empty True  > [1] |> from_list |> is_empty False  > [1, 2] |> from_list |> is_empty False`;
queueisEmptyFunction.insertText = new vscode.SnippetString("queue.is_empty(${1:queue})");

completionItems.push(queueisEmptyFunction);
        

var isEmptyFunction = new vscode.CompletionItem("is_empty", vscode.CompletionItemKind.Function);
isEmptyFunction.detail = `pub fn is_empty(queue: Queue(a)) -> Bool`;
isEmptyFunction.documentation = `Determines whether or not the queue is empty. This function runs in constant time. Examples > [] |> from_list |> is_empty True  > [1] |> from_list |> is_empty False  > [1, 2] |> from_list |> is_empty False`;
isEmptyFunction.insertText = new vscode.SnippetString("is_empty(${1:queue})");

completionItems.push(isEmptyFunction);
        

var queueisEqualFunction = new vscode.CompletionItem("queue.is_equal", vscode.CompletionItemKind.Function);
queueisEqualFunction.detail = `pub fn is_equal(a: Queue(a), to b: Queue(a)) -> Bool`;
queueisEqualFunction.documentation = `Checks whether two queues have the same elements in the same order. This function is useful as the internal representation may be different for two queues with the same elements in the same order depending on how they were constructed, so the equality operator == may return surprising results. This function runs in linear time.`;
queueisEqualFunction.insertText = new vscode.SnippetString("queue.is_equal(${1:a})");

completionItems.push(queueisEqualFunction);
        

var isEqualFunction = new vscode.CompletionItem("is_equal", vscode.CompletionItemKind.Function);
isEqualFunction.detail = `pub fn is_equal(a: Queue(a), to b: Queue(a)) -> Bool`;
isEqualFunction.documentation = `Checks whether two queues have the same elements in the same order. This function is useful as the internal representation may be different for two queues with the same elements in the same order depending on how they were constructed, so the equality operator == may return surprising results. This function runs in linear time.`;
isEqualFunction.insertText = new vscode.SnippetString("is_equal(${1:a})");

completionItems.push(isEqualFunction);
        

var queueisLogicallyEqualFunction = new vscode.CompletionItem("queue.is_logically_equal", vscode.CompletionItemKind.Function);
queueisLogicallyEqualFunction.detail = `pub fn is_logically_equal(a: Queue(a), to b: Queue(a), checking element_is_equal: fn(     a,     a,   ) -> Bool) -> Bool`;
queueisLogicallyEqualFunction.documentation = `Checks whether two queues have equal elements in the same order, where the equality of elements is determined by a given equality checking function. This function is useful as the internal representation may be different for two queues with the same elements in the same order depending on how they were constructed, so the equality operator == may return surprising results. This function runs in linear time multiplied by the time taken by the element equality checking function.`;
queueisLogicallyEqualFunction.insertText = new vscode.SnippetString("queue.is_logically_equal(${1:a})");

completionItems.push(queueisLogicallyEqualFunction);
        

var isLogicallyEqualFunction = new vscode.CompletionItem("is_logically_equal", vscode.CompletionItemKind.Function);
isLogicallyEqualFunction.detail = `pub fn is_logically_equal(a: Queue(a), to b: Queue(a), checking element_is_equal: fn(     a,     a,   ) -> Bool) -> Bool`;
isLogicallyEqualFunction.documentation = `Checks whether two queues have equal elements in the same order, where the equality of elements is determined by a given equality checking function. This function is useful as the internal representation may be different for two queues with the same elements in the same order depending on how they were constructed, so the equality operator == may return surprising results. This function runs in linear time multiplied by the time taken by the element equality checking function.`;
isLogicallyEqualFunction.insertText = new vscode.SnippetString("is_logically_equal(${1:a})");

completionItems.push(isLogicallyEqualFunction);
        

var queuelengthFunction = new vscode.CompletionItem("queue.length", vscode.CompletionItemKind.Function);
queuelengthFunction.detail = `pub fn length(queue: Queue(a)) -> Int`;
queuelengthFunction.documentation = `Counts the number of elements in a given queue. This function has to traverse the queue to determine the number of elements, so it runs in linear time. Examples > length(from_list([])) 0  > length(from_list([1])) 1  > length(from_list([1, 2])) 2`;
queuelengthFunction.insertText = new vscode.SnippetString("queue.length(${1:queue})");

completionItems.push(queuelengthFunction);
        

var lengthFunction = new vscode.CompletionItem("length", vscode.CompletionItemKind.Function);
lengthFunction.detail = `pub fn length(queue: Queue(a)) -> Int`;
lengthFunction.documentation = `Counts the number of elements in a given queue. This function has to traverse the queue to determine the number of elements, so it runs in linear time. Examples > length(from_list([])) 0  > length(from_list([1])) 1  > length(from_list([1, 2])) 2`;
lengthFunction.insertText = new vscode.SnippetString("length(${1:queue})");

completionItems.push(lengthFunction);
        

var queuenewFunction = new vscode.CompletionItem("queue.new", vscode.CompletionItemKind.Function);
queuenewFunction.detail = `pub fn new() -> Queue(a)`;
queuenewFunction.documentation = `Creates a fresh queue that contains no values.`;
queuenewFunction.insertText = new vscode.SnippetString("queue.new(${1:})");

completionItems.push(queuenewFunction);
        

var newFunction = new vscode.CompletionItem("new", vscode.CompletionItemKind.Function);
newFunction.detail = `pub fn new() -> Queue(a)`;
newFunction.documentation = `Creates a fresh queue that contains no values.`;
newFunction.insertText = new vscode.SnippetString("new(${1:})");

completionItems.push(newFunction);
        

var queuepopBackFunction = new vscode.CompletionItem("queue.pop_back", vscode.CompletionItemKind.Function);
queuepopBackFunction.detail = `pub fn pop_back(from queue: Queue(a)) -> Result(   #(a, Queue(a)),   Nil, )`;
queuepopBackFunction.documentation = `Gets the last element from the queue, returning the element and a new queue without that element. This function typically runs in constant time, but will occasionally run in linear time. Examples > new() > |> push_back(0) > |> push_back(1) > |> pop_back() Ok(#(1, push_front(new(), 0)))  > new() > |> push_front(0) > |> pop_back() Ok(#(0, new()))  > new() > |> pop_back() Error(Nil)`;
queuepopBackFunction.insertText = new vscode.SnippetString("queue.pop_back(${1:from queue})");

completionItems.push(queuepopBackFunction);
        

var popBackFunction = new vscode.CompletionItem("pop_back", vscode.CompletionItemKind.Function);
popBackFunction.detail = `pub fn pop_back(from queue: Queue(a)) -> Result(   #(a, Queue(a)),   Nil, )`;
popBackFunction.documentation = `Gets the last element from the queue, returning the element and a new queue without that element. This function typically runs in constant time, but will occasionally run in linear time. Examples > new() > |> push_back(0) > |> push_back(1) > |> pop_back() Ok(#(1, push_front(new(), 0)))  > new() > |> push_front(0) > |> pop_back() Ok(#(0, new()))  > new() > |> pop_back() Error(Nil)`;
popBackFunction.insertText = new vscode.SnippetString("pop_back(${1:from queue})");

completionItems.push(popBackFunction);
        

var queuepopFrontFunction = new vscode.CompletionItem("queue.pop_front", vscode.CompletionItemKind.Function);
queuepopFrontFunction.detail = `pub fn pop_front(from queue: Queue(a)) -> Result(   #(a, Queue(a)),   Nil, )`;
queuepopFrontFunction.documentation = `Gets the first element from the queue, returning the element and a new queue without that element. This function typically runs in constant time, but will occasionally run in linear time. Examples > queue.new() > |> queue.push_front(1) > |> queue.push_front(0) > |> queue.pop_front() Ok(#(0, queue.push_back(queue.new(), 1)))  > queue.new() > |> queue.push_back(0) > |> queue.pop_front() Ok(#(0, queue.new()))  > queue.new() > |> queue.pop_back() Error(Nil)`;
queuepopFrontFunction.insertText = new vscode.SnippetString("queue.pop_front(${1:from queue})");

completionItems.push(queuepopFrontFunction);
        

var popFrontFunction = new vscode.CompletionItem("pop_front", vscode.CompletionItemKind.Function);
popFrontFunction.detail = `pub fn pop_front(from queue: Queue(a)) -> Result(   #(a, Queue(a)),   Nil, )`;
popFrontFunction.documentation = `Gets the first element from the queue, returning the element and a new queue without that element. This function typically runs in constant time, but will occasionally run in linear time. Examples > queue.new() > |> queue.push_front(1) > |> queue.push_front(0) > |> queue.pop_front() Ok(#(0, queue.push_back(queue.new(), 1)))  > queue.new() > |> queue.push_back(0) > |> queue.pop_front() Ok(#(0, queue.new()))  > queue.new() > |> queue.pop_back() Error(Nil)`;
popFrontFunction.insertText = new vscode.SnippetString("pop_front(${1:from queue})");

completionItems.push(popFrontFunction);
        

var queuepushBackFunction = new vscode.CompletionItem("queue.push_back", vscode.CompletionItemKind.Function);
queuepushBackFunction.detail = `pub fn push_back(onto queue: Queue(a), this item: a) -> Queue(a)`;
queuepushBackFunction.documentation = `Pushes an element onto the back of the queue. Examples > [1, 2] |> from_list |> push_back(3) |> to_list [1, 2, 3]`;
queuepushBackFunction.insertText = new vscode.SnippetString("queue.push_back(${1:onto queue})");

completionItems.push(queuepushBackFunction);
        

var pushBackFunction = new vscode.CompletionItem("push_back", vscode.CompletionItemKind.Function);
pushBackFunction.detail = `pub fn push_back(onto queue: Queue(a), this item: a) -> Queue(a)`;
pushBackFunction.documentation = `Pushes an element onto the back of the queue. Examples > [1, 2] |> from_list |> push_back(3) |> to_list [1, 2, 3]`;
pushBackFunction.insertText = new vscode.SnippetString("push_back(${1:onto queue})");

completionItems.push(pushBackFunction);
        

var queuepushFrontFunction = new vscode.CompletionItem("queue.push_front", vscode.CompletionItemKind.Function);
queuepushFrontFunction.detail = `pub fn push_front(onto queue: Queue(a), this item: a) -> Queue(a)`;
queuepushFrontFunction.documentation = `Pushes an element onto the front of the queue. Examples > [0, 0] |> from_list |> push_front(1) |> to_list [1, 0, 0]`;
queuepushFrontFunction.insertText = new vscode.SnippetString("queue.push_front(${1:onto queue})");

completionItems.push(queuepushFrontFunction);
        

var pushFrontFunction = new vscode.CompletionItem("push_front", vscode.CompletionItemKind.Function);
pushFrontFunction.detail = `pub fn push_front(onto queue: Queue(a), this item: a) -> Queue(a)`;
pushFrontFunction.documentation = `Pushes an element onto the front of the queue. Examples > [0, 0] |> from_list |> push_front(1) |> to_list [1, 0, 0]`;
pushFrontFunction.insertText = new vscode.SnippetString("push_front(${1:onto queue})");

completionItems.push(pushFrontFunction);
        

var queuereverseFunction = new vscode.CompletionItem("queue.reverse", vscode.CompletionItemKind.Function);
queuereverseFunction.detail = `pub fn reverse(queue: Queue(a)) -> Queue(a)`;
queuereverseFunction.documentation = `Creates a new queue from a given queue containing the same elements, but in the opposite order. This function runs in constant time. Examples > [] |> from_list |> reverse |> to_list []  > [1] |> from_list |> reverse |> to_list [1]  > [1, 2] |> from_list |> reverse |> to_list [2, 1]`;
queuereverseFunction.insertText = new vscode.SnippetString("queue.reverse(${1:queue})");

completionItems.push(queuereverseFunction);
        

var reverseFunction = new vscode.CompletionItem("reverse", vscode.CompletionItemKind.Function);
reverseFunction.detail = `pub fn reverse(queue: Queue(a)) -> Queue(a)`;
reverseFunction.documentation = `Creates a new queue from a given queue containing the same elements, but in the opposite order. This function runs in constant time. Examples > [] |> from_list |> reverse |> to_list []  > [1] |> from_list |> reverse |> to_list [1]  > [1, 2] |> from_list |> reverse |> to_list [2, 1]`;
reverseFunction.insertText = new vscode.SnippetString("reverse(${1:queue})");

completionItems.push(reverseFunction);
        

var queuetoListFunction = new vscode.CompletionItem("queue.to_list", vscode.CompletionItemKind.Function);
queuetoListFunction.detail = `pub fn to_list(queue: Queue(a)) -> List(a)`;
queuetoListFunction.documentation = `Converts a queue of elements into a list of the same elements in the same order. The front element in the queue becomes the head element in the list. This function runs in linear time. Examples > new() |> push_back(1) |> push_back(2) |> to_list [1, 2]`;
queuetoListFunction.insertText = new vscode.SnippetString("queue.to_list(${1:queue})");

completionItems.push(queuetoListFunction);
        

var toListFunction = new vscode.CompletionItem("to_list", vscode.CompletionItemKind.Function);
toListFunction.detail = `pub fn to_list(queue: Queue(a)) -> List(a)`;
toListFunction.documentation = `Converts a queue of elements into a list of the same elements in the same order. The front element in the queue becomes the head element in the list. This function runs in linear time. Examples > new() |> push_back(1) |> push_back(2) |> to_list [1, 2]`;
toListFunction.insertText = new vscode.SnippetString("to_list(${1:queue})");

completionItems.push(toListFunction);
        

var regexcheckFunction = new vscode.CompletionItem("regex.check", vscode.CompletionItemKind.Function);
regexcheckFunction.detail = `pub fn check(with regex: Regex, content content: String) -> Bool`;
regexcheckFunction.documentation = `Returns a boolean indicating whether there was a match or not. Examples > assert Ok(re) = from_string("^f.o.?") > check(with: re, content: "foo") True  > check(with: re, content: "boo") False`;
regexcheckFunction.insertText = new vscode.SnippetString("regex.check(${1:with regex}, ${2:content content})");

completionItems.push(regexcheckFunction);
        

var checkFunction = new vscode.CompletionItem("check", vscode.CompletionItemKind.Function);
checkFunction.detail = `pub fn check(with regex: Regex, content content: String) -> Bool`;
checkFunction.documentation = `Returns a boolean indicating whether there was a match or not. Examples > assert Ok(re) = from_string("^f.o.?") > check(with: re, content: "foo") True  > check(with: re, content: "boo") False`;
checkFunction.insertText = new vscode.SnippetString("check(${1:with regex}, ${2:content content})");

completionItems.push(checkFunction);
        

var regexcompileFunction = new vscode.CompletionItem("regex.compile", vscode.CompletionItemKind.Function);
regexcompileFunction.detail = `pub fn compile(pattern: String, with options: Options) -> Result(   Regex,   CompileError, )`;
regexcompileFunction.documentation = `Creates a Regex with some additional options. Examples > let options = Options(case_insensitive: False, multi_line: True) > assert Ok(re) = compile("^[0-9]", with: options) > check(re, "abc\n123") True  > let options = Options(case_insensitive: True, multi_line: False) > assert Ok(re) = compile("[A-Z]", with: options) > check(re, "abc123") True`;
regexcompileFunction.insertText = new vscode.SnippetString("regex.compile(${1:pattern}, ${2:with options})");

completionItems.push(regexcompileFunction);
        

var compileFunction = new vscode.CompletionItem("compile", vscode.CompletionItemKind.Function);
compileFunction.detail = `pub fn compile(pattern: String, with options: Options) -> Result(   Regex,   CompileError, )`;
compileFunction.documentation = `Creates a Regex with some additional options. Examples > let options = Options(case_insensitive: False, multi_line: True) > assert Ok(re) = compile("^[0-9]", with: options) > check(re, "abc\n123") True  > let options = Options(case_insensitive: True, multi_line: False) > assert Ok(re) = compile("[A-Z]", with: options) > check(re, "abc123") True`;
compileFunction.insertText = new vscode.SnippetString("compile(${1:pattern}, ${2:with options})");

completionItems.push(compileFunction);
        

var regexfromStringFunction = new vscode.CompletionItem("regex.from_string", vscode.CompletionItemKind.Function);
regexfromStringFunction.detail = `pub fn from_string(pattern: String) -> Result(Regex, CompileError)`;
regexfromStringFunction.documentation = `Creates a new Regex. Examples > assert Ok(re) = from_string("[0-9]") > check(re, "abc123") True  > check(re, "abcxyz") False  > from_string("[0-9") Error(   CompileError(     error: "missing terminating ] for character class",     byte_index: 4   ) )`;
regexfromStringFunction.insertText = new vscode.SnippetString("regex.from_string(${1:pattern})");

completionItems.push(regexfromStringFunction);
        

var fromStringFunction = new vscode.CompletionItem("from_string", vscode.CompletionItemKind.Function);
fromStringFunction.detail = `pub fn from_string(pattern: String) -> Result(Regex, CompileError)`;
fromStringFunction.documentation = `Creates a new Regex. Examples > assert Ok(re) = from_string("[0-9]") > check(re, "abc123") True  > check(re, "abcxyz") False  > from_string("[0-9") Error(   CompileError(     error: "missing terminating ] for character class",     byte_index: 4   ) )`;
fromStringFunction.insertText = new vscode.SnippetString("from_string(${1:pattern})");

completionItems.push(fromStringFunction);
        

var regexscanFunction = new vscode.CompletionItem("regex.scan", vscode.CompletionItemKind.Function);
regexscanFunction.detail = `pub fn scan(with regex: Regex, content string: String) -> List(   Match, )`;
regexscanFunction.documentation = `Collects all matches of the regular expression. Examples > let assert Ok(re) = from_string("[oi]n a (\\w+)") > scan(with: re, content: "I am on a boat in a lake.") [   Match(     content: "on a boat",     submatches: [Some("boat")]   ),   Match(     content: "in a lake",     submatches: [Some("lake")]   ) ]  > let assert Ok(re) = regex.from_string("([+|\\-])?(\\d+)(\\w+)?") > scan(with: re, content: "-36") [   Match(     content: "-36",     submatches: [Some("-"), Some("36")]   ) ]  > scan(with: re, content: "36") [   Match(     content: "36",     submatches: [None, Some("36")]   ) ]  > let assert Ok(re) = regex.from_string("var\\s*(\\w+)\\s*(int|string)?\\s*=\\s*(.*)") > scan(with: re, content: "var age = 32") [   Match(     content: "var age = 32",     submatches: [Some("age"), None, Some("32")]   ) ]  > let assert Ok(re) = regex.from_string("let (\\w+) = (\\w+)") > scan(with: re, content: "let age = 32") [   Match(     content: "let age = 32",     submatches: [Some("age"), Some("32")]   ) ]  > scan(with: re, content: "const age = 32") []`;
regexscanFunction.insertText = new vscode.SnippetString("regex.scan(${1:with regex}, ${2:content string})");

completionItems.push(regexscanFunction);
        

var scanFunction = new vscode.CompletionItem("scan", vscode.CompletionItemKind.Function);
scanFunction.detail = `pub fn scan(with regex: Regex, content string: String) -> List(   Match, )`;
scanFunction.documentation = `Collects all matches of the regular expression. Examples > let assert Ok(re) = from_string("[oi]n a (\\w+)") > scan(with: re, content: "I am on a boat in a lake.") [   Match(     content: "on a boat",     submatches: [Some("boat")]   ),   Match(     content: "in a lake",     submatches: [Some("lake")]   ) ]  > let assert Ok(re) = regex.from_string("([+|\\-])?(\\d+)(\\w+)?") > scan(with: re, content: "-36") [   Match(     content: "-36",     submatches: [Some("-"), Some("36")]   ) ]  > scan(with: re, content: "36") [   Match(     content: "36",     submatches: [None, Some("36")]   ) ]  > let assert Ok(re) = regex.from_string("var\\s*(\\w+)\\s*(int|string)?\\s*=\\s*(.*)") > scan(with: re, content: "var age = 32") [   Match(     content: "var age = 32",     submatches: [Some("age"), None, Some("32")]   ) ]  > let assert Ok(re) = regex.from_string("let (\\w+) = (\\w+)") > scan(with: re, content: "let age = 32") [   Match(     content: "let age = 32",     submatches: [Some("age"), Some("32")]   ) ]  > scan(with: re, content: "const age = 32") []`;
scanFunction.insertText = new vscode.SnippetString("scan(${1:with regex}, ${2:content string})");

completionItems.push(scanFunction);
        

var regexsplitFunction = new vscode.CompletionItem("regex.split", vscode.CompletionItemKind.Function);
regexsplitFunction.detail = `pub fn split(with regex: Regex, content string: String) -> List(   String, )`;
regexsplitFunction.documentation = `Splits a string. Examples > assert Ok(re) = from_string(" *, *") > split(with: re, content: "foo,32, 4, 9  ,0") ["foo", "32", "4", "9", "0"]`;
regexsplitFunction.insertText = new vscode.SnippetString("regex.split(${1:with regex}, ${2:content string})");

completionItems.push(regexsplitFunction);
        

var splitFunction = new vscode.CompletionItem("split", vscode.CompletionItemKind.Function);
splitFunction.detail = `pub fn split(with regex: Regex, content string: String) -> List(   String, )`;
splitFunction.documentation = `Splits a string. Examples > assert Ok(re) = from_string(" *, *") > split(with: re, content: "foo,32, 4, 9  ,0") ["foo", "32", "4", "9", "0"]`;
splitFunction.insertText = new vscode.SnippetString("split(${1:with regex}, ${2:content string})");

completionItems.push(splitFunction);
        

var resultallFunction = new vscode.CompletionItem("result.all", vscode.CompletionItemKind.Function);
resultallFunction.detail = `pub fn all(results: List(Result(a, b))) -> Result(List(a), b)`;
resultallFunction.documentation = `Combines a list of results into a single result. If all elements in the list are Ok then returns an Ok holding the list of values. If any element is Error then returns the first error. Examples > all([Ok(1), Ok(2)]) Ok([1, 2])  > all([Ok(1), Error("e")]) Error("e")`;
resultallFunction.insertText = new vscode.SnippetString("result.all(${1:results}, ${2:b})");

completionItems.push(resultallFunction);
        

var allFunction = new vscode.CompletionItem("all", vscode.CompletionItemKind.Function);
allFunction.detail = `pub fn all(results: List(Result(a, b))) -> Result(List(a), b)`;
allFunction.documentation = `Combines a list of results into a single result. If all elements in the list are Ok then returns an Ok holding the list of values. If any element is Error then returns the first error. Examples > all([Ok(1), Ok(2)]) Ok([1, 2])  > all([Ok(1), Error("e")]) Error("e")`;
allFunction.insertText = new vscode.SnippetString("all(${1:results}, ${2:b})");

completionItems.push(allFunction);
        

var resultflattenFunction = new vscode.CompletionItem("result.flatten", vscode.CompletionItemKind.Function);
resultflattenFunction.detail = `pub fn flatten(result: Result(Result(a, b), b)) -> Result(a, b)`;
resultflattenFunction.documentation = `Merges a nested Result into a single layer. Examples > flatten(Ok(Ok(1))) Ok(1)  > flatten(Ok(Error(""))) Error("")  > flatten(Error(Nil)) Error(Nil)`;
resultflattenFunction.insertText = new vscode.SnippetString("result.flatten(${1:result}, ${2:b})");

completionItems.push(resultflattenFunction);
        

var flattenFunction = new vscode.CompletionItem("flatten", vscode.CompletionItemKind.Function);
flattenFunction.detail = `pub fn flatten(result: Result(Result(a, b), b)) -> Result(a, b)`;
flattenFunction.documentation = `Merges a nested Result into a single layer. Examples > flatten(Ok(Ok(1))) Ok(1)  > flatten(Ok(Error(""))) Error("")  > flatten(Error(Nil)) Error(Nil)`;
flattenFunction.insertText = new vscode.SnippetString("flatten(${1:result}, ${2:b})");

completionItems.push(flattenFunction);
        

var resultisErrorFunction = new vscode.CompletionItem("result.is_error", vscode.CompletionItemKind.Function);
resultisErrorFunction.detail = `pub fn is_error(result: Result(a, b)) -> Bool`;
resultisErrorFunction.documentation = `Checks whether the result is an Error value. Examples > is_error(Ok(1)) False  > is_error(Error(Nil)) True`;
resultisErrorFunction.insertText = new vscode.SnippetString("result.is_error(${1:result}, ${2:b})");

completionItems.push(resultisErrorFunction);
        

var isErrorFunction = new vscode.CompletionItem("is_error", vscode.CompletionItemKind.Function);
isErrorFunction.detail = `pub fn is_error(result: Result(a, b)) -> Bool`;
isErrorFunction.documentation = `Checks whether the result is an Error value. Examples > is_error(Ok(1)) False  > is_error(Error(Nil)) True`;
isErrorFunction.insertText = new vscode.SnippetString("is_error(${1:result}, ${2:b})");

completionItems.push(isErrorFunction);
        

var resultisOkFunction = new vscode.CompletionItem("result.is_ok", vscode.CompletionItemKind.Function);
resultisOkFunction.detail = `pub fn is_ok(result: Result(a, b)) -> Bool`;
resultisOkFunction.documentation = `Checks whether the result is an Ok value. Examples > is_ok(Ok(1)) True  > is_ok(Error(Nil)) False`;
resultisOkFunction.insertText = new vscode.SnippetString("result.is_ok(${1:result}, ${2:b})");

completionItems.push(resultisOkFunction);
        

var isOkFunction = new vscode.CompletionItem("is_ok", vscode.CompletionItemKind.Function);
isOkFunction.detail = `pub fn is_ok(result: Result(a, b)) -> Bool`;
isOkFunction.documentation = `Checks whether the result is an Ok value. Examples > is_ok(Ok(1)) True  > is_ok(Error(Nil)) False`;
isOkFunction.insertText = new vscode.SnippetString("is_ok(${1:result}, ${2:b})");

completionItems.push(isOkFunction);
        

var resultlazyOrFunction = new vscode.CompletionItem("result.lazy_or", vscode.CompletionItemKind.Function);
resultlazyOrFunction.detail = `pub fn lazy_or(first: Result(a, b), second: fn() -> Result(a, b)) -> Result(   a,   b, )`;
resultlazyOrFunction.documentation = `Returns the first value if it is Ok, otherwise evaluates the given function for a fallback value. Examples > lazy_or(Ok(1), fn() { Ok(2) }) Ok(1)  > lazy_or(Ok(1), fn() { Error("Error 2") }) Ok(1)  > lazy_or(Error("Error 1"), fn() { Ok(2) }) Ok(2)  > lazy_or(Error("Error 1"), fn() { Error("Error 2") }) Error("Error 2")`;
resultlazyOrFunction.insertText = new vscode.SnippetString("result.lazy_or(${1:first}, ${2:b})");

completionItems.push(resultlazyOrFunction);
        

var lazyOrFunction = new vscode.CompletionItem("lazy_or", vscode.CompletionItemKind.Function);
lazyOrFunction.detail = `pub fn lazy_or(first: Result(a, b), second: fn() -> Result(a, b)) -> Result(   a,   b, )`;
lazyOrFunction.documentation = `Returns the first value if it is Ok, otherwise evaluates the given function for a fallback value. Examples > lazy_or(Ok(1), fn() { Ok(2) }) Ok(1)  > lazy_or(Ok(1), fn() { Error("Error 2") }) Ok(1)  > lazy_or(Error("Error 1"), fn() { Ok(2) }) Ok(2)  > lazy_or(Error("Error 1"), fn() { Error("Error 2") }) Error("Error 2")`;
lazyOrFunction.insertText = new vscode.SnippetString("lazy_or(${1:first}, ${2:b})");

completionItems.push(lazyOrFunction);
        

var resultlazyUnwrapFunction = new vscode.CompletionItem("result.lazy_unwrap", vscode.CompletionItemKind.Function);
resultlazyUnwrapFunction.detail = `pub fn lazy_unwrap(result: Result(a, b), or default: fn() -> a) -> a`;
resultlazyUnwrapFunction.documentation = `Extracts the Ok value from a result, evaluating the default function if the result is an Error. Examples > lazy_unwrap(Ok(1), fn() { 0 }) 1  > lazy_unwrap(Error(""), fn() { 0 }) 0`;
resultlazyUnwrapFunction.insertText = new vscode.SnippetString("result.lazy_unwrap(${1:result}, ${2:b})");

completionItems.push(resultlazyUnwrapFunction);
        

var lazyUnwrapFunction = new vscode.CompletionItem("lazy_unwrap", vscode.CompletionItemKind.Function);
lazyUnwrapFunction.detail = `pub fn lazy_unwrap(result: Result(a, b), or default: fn() -> a) -> a`;
lazyUnwrapFunction.documentation = `Extracts the Ok value from a result, evaluating the default function if the result is an Error. Examples > lazy_unwrap(Ok(1), fn() { 0 }) 1  > lazy_unwrap(Error(""), fn() { 0 }) 0`;
lazyUnwrapFunction.insertText = new vscode.SnippetString("lazy_unwrap(${1:result}, ${2:b})");

completionItems.push(lazyUnwrapFunction);
        

var resultmapFunction = new vscode.CompletionItem("result.map", vscode.CompletionItemKind.Function);
resultmapFunction.detail = `pub fn map(over result: Result(a, b), with fun: fn(a) -> c) -> Result(   c,   b, )`;
resultmapFunction.documentation = `Updates a value held within the Ok of a result by calling a given function on it. If the result is an Error rather than Ok the function is not called and the result stays the same. Examples > map(over: Ok(1), with: fn(x) { x + 1 }) Ok(2)  > map(over: Error(1), with: fn(x) { x + 1 }) Error(1)`;
resultmapFunction.insertText = new vscode.SnippetString("result.map(${1:over result}, ${2:b})");

completionItems.push(resultmapFunction);
        

var mapFunction = new vscode.CompletionItem("map", vscode.CompletionItemKind.Function);
mapFunction.detail = `pub fn map(over result: Result(a, b), with fun: fn(a) -> c) -> Result(   c,   b, )`;
mapFunction.documentation = `Updates a value held within the Ok of a result by calling a given function on it. If the result is an Error rather than Ok the function is not called and the result stays the same. Examples > map(over: Ok(1), with: fn(x) { x + 1 }) Ok(2)  > map(over: Error(1), with: fn(x) { x + 1 }) Error(1)`;
mapFunction.insertText = new vscode.SnippetString("map(${1:over result}, ${2:b})");

completionItems.push(mapFunction);
        

var resultmapErrorFunction = new vscode.CompletionItem("result.map_error", vscode.CompletionItemKind.Function);
resultmapErrorFunction.detail = `pub fn map_error(over result: Result(a, b), with fun: fn(b) -> c) -> Result(   a,   c, )`;
resultmapErrorFunction.documentation = `Updates a value held within the Error of a result by calling a given function on it. If the result is Ok rather than Error the function is not called and the result stays the same. Examples > map_error(over: Error(1), with: fn(x) { x + 1 }) Error(2)  > map_error(over: Ok(1), with: fn(x) { x + 1 }) Ok(1)`;
resultmapErrorFunction.insertText = new vscode.SnippetString("result.map_error(${1:over result}, ${2:b})");

completionItems.push(resultmapErrorFunction);
        

var mapErrorFunction = new vscode.CompletionItem("map_error", vscode.CompletionItemKind.Function);
mapErrorFunction.detail = `pub fn map_error(over result: Result(a, b), with fun: fn(b) -> c) -> Result(   a,   c, )`;
mapErrorFunction.documentation = `Updates a value held within the Error of a result by calling a given function on it. If the result is Ok rather than Error the function is not called and the result stays the same. Examples > map_error(over: Error(1), with: fn(x) { x + 1 }) Error(2)  > map_error(over: Ok(1), with: fn(x) { x + 1 }) Ok(1)`;
mapErrorFunction.insertText = new vscode.SnippetString("map_error(${1:over result}, ${2:b})");

completionItems.push(mapErrorFunction);
        

var resultnilErrorFunction = new vscode.CompletionItem("result.nil_error", vscode.CompletionItemKind.Function);
resultnilErrorFunction.detail = `pub fn nil_error(result: Result(a, b)) -> Result(a, Nil)`;
resultnilErrorFunction.documentation = `Transforms any error into Error(Nil). Examples > nil_error(Error(1)) Error(Nil)  > nil_error(Ok(1)) Ok(1)`;
resultnilErrorFunction.insertText = new vscode.SnippetString("result.nil_error(${1:result}, ${2:b})");

completionItems.push(resultnilErrorFunction);
        

var nilErrorFunction = new vscode.CompletionItem("nil_error", vscode.CompletionItemKind.Function);
nilErrorFunction.detail = `pub fn nil_error(result: Result(a, b)) -> Result(a, Nil)`;
nilErrorFunction.documentation = `Transforms any error into Error(Nil). Examples > nil_error(Error(1)) Error(Nil)  > nil_error(Ok(1)) Ok(1)`;
nilErrorFunction.insertText = new vscode.SnippetString("nil_error(${1:result}, ${2:b})");

completionItems.push(nilErrorFunction);
        

var resultorFunction = new vscode.CompletionItem("result.or", vscode.CompletionItemKind.Function);
resultorFunction.detail = `pub fn or(first: Result(a, b), second: Result(a, b)) -> Result(   a,   b, )`;
resultorFunction.documentation = `Returns the first value if it is Ok, otherwise returns the second value. Examples > or(Ok(1), Ok(2)) Ok(1)  > or(Ok(1), Error("Error 2")) Ok(1)  > or(Error("Error 1"), Ok(2)) Ok(2)  > or(Error("Error 1"), Error("Error 2")) Error("Error 2")`;
resultorFunction.insertText = new vscode.SnippetString("result.or(${1:first}, ${2:b})");

completionItems.push(resultorFunction);
        

var orFunction = new vscode.CompletionItem("or", vscode.CompletionItemKind.Function);
orFunction.detail = `pub fn or(first: Result(a, b), second: Result(a, b)) -> Result(   a,   b, )`;
orFunction.documentation = `Returns the first value if it is Ok, otherwise returns the second value. Examples > or(Ok(1), Ok(2)) Ok(1)  > or(Ok(1), Error("Error 2")) Ok(1)  > or(Error("Error 1"), Ok(2)) Ok(2)  > or(Error("Error 1"), Error("Error 2")) Error("Error 2")`;
orFunction.insertText = new vscode.SnippetString("or(${1:first}, ${2:b})");

completionItems.push(orFunction);
        

var resultreplaceFunction = new vscode.CompletionItem("result.replace", vscode.CompletionItemKind.Function);
resultreplaceFunction.detail = `pub fn replace(result: Result(a, b), value: c) -> Result(c, b)`;
resultreplaceFunction.documentation = `Replace the value within a result Examples > replace(Ok(1), Nil) Ok(Nil)  > replace(Error(1), Nil) Error(1)`;
resultreplaceFunction.insertText = new vscode.SnippetString("result.replace(${1:result}, ${2:b})");

completionItems.push(resultreplaceFunction);
        

var replaceFunction = new vscode.CompletionItem("replace", vscode.CompletionItemKind.Function);
replaceFunction.detail = `pub fn replace(result: Result(a, b), value: c) -> Result(c, b)`;
replaceFunction.documentation = `Replace the value within a result Examples > replace(Ok(1), Nil) Ok(Nil)  > replace(Error(1), Nil) Error(1)`;
replaceFunction.insertText = new vscode.SnippetString("replace(${1:result}, ${2:b})");

completionItems.push(replaceFunction);
        

var resultreplaceErrorFunction = new vscode.CompletionItem("result.replace_error", vscode.CompletionItemKind.Function);
resultreplaceErrorFunction.detail = `pub fn replace_error(result: Result(a, b), error: c) -> Result(   a,   c, )`;
resultreplaceErrorFunction.documentation = `Replace the error within a result Examples > replace_error(Error(1), Nil) Error(Nil)  > replace_error(Ok(1), Nil) Ok(1)`;
resultreplaceErrorFunction.insertText = new vscode.SnippetString("result.replace_error(${1:result}, ${2:b})");

completionItems.push(resultreplaceErrorFunction);
        

var replaceErrorFunction = new vscode.CompletionItem("replace_error", vscode.CompletionItemKind.Function);
replaceErrorFunction.detail = `pub fn replace_error(result: Result(a, b), error: c) -> Result(   a,   c, )`;
replaceErrorFunction.documentation = `Replace the error within a result Examples > replace_error(Error(1), Nil) Error(Nil)  > replace_error(Ok(1), Nil) Ok(1)`;
replaceErrorFunction.insertText = new vscode.SnippetString("replace_error(${1:result}, ${2:b})");

completionItems.push(replaceErrorFunction);
        

var resultthenFunction = new vscode.CompletionItem("result.then", vscode.CompletionItemKind.Function);
resultthenFunction.detail = `pub fn then(result: Result(a, b), apply fun: fn(a) ->     Result(c, b)) -> Result(c, b)`;
resultthenFunction.documentation = `Updates a value held within the Ok of a result by calling a given function on it, where the given function also returns a result. The two results are then merged together into one result. If the result is an Error rather than Ok the function is not called and the result stays the same. This function is the equivalent of calling map followed by flatten, and it is useful for chaining together multiple functions that may fail. Examples > then(Ok(1), fn(x) { Ok(x + 1) }) Ok(2)  > then(Ok(1), fn(x) { Ok(#("a", x)) }) Ok(#("a", 1))  > then(Ok(1), fn(_) { Error("Oh no") }) Error("Oh no")  > then(Error(Nil), fn(x) { Ok(x + 1) }) Error(Nil)`;
resultthenFunction.insertText = new vscode.SnippetString("result.then(${1:result}, ${2:b})");

completionItems.push(resultthenFunction);
        

var thenFunction = new vscode.CompletionItem("then", vscode.CompletionItemKind.Function);
thenFunction.detail = `pub fn then(result: Result(a, b), apply fun: fn(a) ->     Result(c, b)) -> Result(c, b)`;
thenFunction.documentation = `Updates a value held within the Ok of a result by calling a given function on it, where the given function also returns a result. The two results are then merged together into one result. If the result is an Error rather than Ok the function is not called and the result stays the same. This function is the equivalent of calling map followed by flatten, and it is useful for chaining together multiple functions that may fail. Examples > then(Ok(1), fn(x) { Ok(x + 1) }) Ok(2)  > then(Ok(1), fn(x) { Ok(#("a", x)) }) Ok(#("a", 1))  > then(Ok(1), fn(_) { Error("Oh no") }) Error("Oh no")  > then(Error(Nil), fn(x) { Ok(x + 1) }) Error(Nil)`;
thenFunction.insertText = new vscode.SnippetString("then(${1:result}, ${2:b})");

completionItems.push(thenFunction);
        

var resultunwrapFunction = new vscode.CompletionItem("result.unwrap", vscode.CompletionItemKind.Function);
resultunwrapFunction.detail = `pub fn unwrap(result: Result(a, b), or default: a) -> a`;
resultunwrapFunction.documentation = `Extracts the Ok value from a result, returning a default value if the result is an Error. Examples > unwrap(Ok(1), 0) 1  > unwrap(Error(""), 0) 0`;
resultunwrapFunction.insertText = new vscode.SnippetString("result.unwrap(${1:result}, ${2:b})");

completionItems.push(resultunwrapFunction);
        

var unwrapFunction = new vscode.CompletionItem("unwrap", vscode.CompletionItemKind.Function);
unwrapFunction.detail = `pub fn unwrap(result: Result(a, b), or default: a) -> a`;
unwrapFunction.documentation = `Extracts the Ok value from a result, returning a default value if the result is an Error. Examples > unwrap(Ok(1), 0) 1  > unwrap(Error(""), 0) 0`;
unwrapFunction.insertText = new vscode.SnippetString("unwrap(${1:result}, ${2:b})");

completionItems.push(unwrapFunction);
        

var resultunwrapBothFunction = new vscode.CompletionItem("result.unwrap_both", vscode.CompletionItemKind.Function);
resultunwrapBothFunction.detail = `pub fn unwrap_both(result: Result(a, a)) -> a`;
resultunwrapBothFunction.documentation = `Extracts the inner value from a result. Both the value and error must be of the same type. Examples > unwrap_both(Error(1)) 1  > unwrap_both(Ok(2)) 2`;
resultunwrapBothFunction.insertText = new vscode.SnippetString("result.unwrap_both(${1:result}, ${2:a})");

completionItems.push(resultunwrapBothFunction);
        

var unwrapBothFunction = new vscode.CompletionItem("unwrap_both", vscode.CompletionItemKind.Function);
unwrapBothFunction.detail = `pub fn unwrap_both(result: Result(a, a)) -> a`;
unwrapBothFunction.documentation = `Extracts the inner value from a result. Both the value and error must be of the same type. Examples > unwrap_both(Error(1)) 1  > unwrap_both(Ok(2)) 2`;
unwrapBothFunction.insertText = new vscode.SnippetString("unwrap_both(${1:result}, ${2:a})");

completionItems.push(unwrapBothFunction);
        

var resultunwrapErrorFunction = new vscode.CompletionItem("result.unwrap_error", vscode.CompletionItemKind.Function);
resultunwrapErrorFunction.detail = `pub fn unwrap_error(result: Result(a, b), or default: b) -> b`;
resultunwrapErrorFunction.documentation = `Extracts the Error value from a result, returning a default value if the result is an Ok. Examples > unwrap_error(Error(1), 0) 1  > unwrap_error(Ok(""), 0) 0`;
resultunwrapErrorFunction.insertText = new vscode.SnippetString("result.unwrap_error(${1:result}, ${2:b})");

completionItems.push(resultunwrapErrorFunction);
        

var unwrapErrorFunction = new vscode.CompletionItem("unwrap_error", vscode.CompletionItemKind.Function);
unwrapErrorFunction.detail = `pub fn unwrap_error(result: Result(a, b), or default: b) -> b`;
unwrapErrorFunction.documentation = `Extracts the Error value from a result, returning a default value if the result is an Ok. Examples > unwrap_error(Error(1), 0) 1  > unwrap_error(Ok(""), 0) 0`;
unwrapErrorFunction.insertText = new vscode.SnippetString("unwrap_error(${1:result}, ${2:b})");

completionItems.push(unwrapErrorFunction);
        

var resultvaluesFunction = new vscode.CompletionItem("result.values", vscode.CompletionItemKind.Function);
resultvaluesFunction.detail = `pub fn values(results: List(Result(a, b))) -> List(a)`;
resultvaluesFunction.documentation = `Given a list of results, returns only the values inside Ok. Examples > values([Ok(1), None, Ok(3)]) [1, 3]`;
resultvaluesFunction.insertText = new vscode.SnippetString("result.values(${1:results}, ${2:b})");

completionItems.push(resultvaluesFunction);
        

var valuesFunction = new vscode.CompletionItem("values", vscode.CompletionItemKind.Function);
valuesFunction.detail = `pub fn values(results: List(Result(a, b))) -> List(a)`;
valuesFunction.documentation = `Given a list of results, returns only the values inside Ok. Examples > values([Ok(1), None, Ok(3)]) [1, 3]`;
valuesFunction.insertText = new vscode.SnippetString("values(${1:results}, ${2:b})");

completionItems.push(valuesFunction);
        

var setcontainsFunction = new vscode.CompletionItem("set.contains", vscode.CompletionItemKind.Function);
setcontainsFunction.detail = `pub fn contains(in set: Set(a), this member: a) -> Bool`;
setcontainsFunction.documentation = `Checks whether a set contains a given member. This function runs in logarithmic time. Examples > new() > |> insert(2) > |> contains(2) True  > new() > |> insert(2) > |> contains(1) False`;
setcontainsFunction.insertText = new vscode.SnippetString("set.contains(${1:in set})");

completionItems.push(setcontainsFunction);
        

var containsFunction = new vscode.CompletionItem("contains", vscode.CompletionItemKind.Function);
containsFunction.detail = `pub fn contains(in set: Set(a), this member: a) -> Bool`;
containsFunction.documentation = `Checks whether a set contains a given member. This function runs in logarithmic time. Examples > new() > |> insert(2) > |> contains(2) True  > new() > |> insert(2) > |> contains(1) False`;
containsFunction.insertText = new vscode.SnippetString("contains(${1:in set})");

completionItems.push(containsFunction);
        

var setdeleteFunction = new vscode.CompletionItem("set.delete", vscode.CompletionItemKind.Function);
setdeleteFunction.detail = `pub fn delete(from set: Set(a), this member: a) -> Set(a)`;
setdeleteFunction.documentation = `Removes a member from a set. If the set does not contain the member then the set is returned unchanged. This function runs in logarithmic time. Examples > new() > |> insert(2) > |> delete(2) > |> contains(1) False`;
setdeleteFunction.insertText = new vscode.SnippetString("set.delete(${1:from set})");

completionItems.push(setdeleteFunction);
        

var deleteFunction = new vscode.CompletionItem("delete", vscode.CompletionItemKind.Function);
deleteFunction.detail = `pub fn delete(from set: Set(a), this member: a) -> Set(a)`;
deleteFunction.documentation = `Removes a member from a set. If the set does not contain the member then the set is returned unchanged. This function runs in logarithmic time. Examples > new() > |> insert(2) > |> delete(2) > |> contains(1) False`;
deleteFunction.insertText = new vscode.SnippetString("delete(${1:from set})");

completionItems.push(deleteFunction);
        

var setdropFunction = new vscode.CompletionItem("set.drop", vscode.CompletionItemKind.Function);
setdropFunction.detail = `pub fn drop(from set: Set(a), drop disallowed: List(a)) -> Set(a)`;
setdropFunction.documentation = ``;
setdropFunction.insertText = new vscode.SnippetString("set.drop(${1:from set})");

completionItems.push(setdropFunction);
        

var dropFunction = new vscode.CompletionItem("drop", vscode.CompletionItemKind.Function);
dropFunction.detail = `pub fn drop(from set: Set(a), drop disallowed: List(a)) -> Set(a)`;
dropFunction.documentation = ``;
dropFunction.insertText = new vscode.SnippetString("drop(${1:from set})");

completionItems.push(dropFunction);
        

var setfilterFunction = new vscode.CompletionItem("set.filter", vscode.CompletionItemKind.Function);
setfilterFunction.detail = `pub fn filter(in set: Set(a), for property: fn(a) -> Bool) -> Set(   a, )`;
setfilterFunction.documentation = `Creates a new set from an existing set, minus any members that a given function returns False for. This function runs in loglinear time. Examples > import gleam/int > from_list([1, 4, 6, 3, 675, 44, 67]) > |> filter(for: int.is_even) > |> to_list [4, 6, 44]`;
setfilterFunction.insertText = new vscode.SnippetString("set.filter(${1:in set})");

completionItems.push(setfilterFunction);
        

var filterFunction = new vscode.CompletionItem("filter", vscode.CompletionItemKind.Function);
filterFunction.detail = `pub fn filter(in set: Set(a), for property: fn(a) -> Bool) -> Set(   a, )`;
filterFunction.documentation = `Creates a new set from an existing set, minus any members that a given function returns False for. This function runs in loglinear time. Examples > import gleam/int > from_list([1, 4, 6, 3, 675, 44, 67]) > |> filter(for: int.is_even) > |> to_list [4, 6, 44]`;
filterFunction.insertText = new vscode.SnippetString("filter(${1:in set})");

completionItems.push(filterFunction);
        

var setfoldFunction = new vscode.CompletionItem("set.fold", vscode.CompletionItemKind.Function);
setfoldFunction.detail = `pub fn fold(over set: Set(a), from initial: b, with reducer: fn(     b,     a,   ) -> b) -> b`;
setfoldFunction.documentation = `Combines all entries into a single value by calling a given function on each one. Sets are not ordered so the values are not returned in any specific order. Do not write code that relies on the order entries are used by this function as it may change in later versions of Gleam or Erlang. Examples > from_list([1, 3, 9]) > |> fold(0, fn(member, accumulator) { accumulator + member }) 13`;
setfoldFunction.insertText = new vscode.SnippetString("set.fold(${1:over set})");

completionItems.push(setfoldFunction);
        

var foldFunction = new vscode.CompletionItem("fold", vscode.CompletionItemKind.Function);
foldFunction.detail = `pub fn fold(over set: Set(a), from initial: b, with reducer: fn(     b,     a,   ) -> b) -> b`;
foldFunction.documentation = `Combines all entries into a single value by calling a given function on each one. Sets are not ordered so the values are not returned in any specific order. Do not write code that relies on the order entries are used by this function as it may change in later versions of Gleam or Erlang. Examples > from_list([1, 3, 9]) > |> fold(0, fn(member, accumulator) { accumulator + member }) 13`;
foldFunction.insertText = new vscode.SnippetString("fold(${1:over set})");

completionItems.push(foldFunction);
        

var setfromListFunction = new vscode.CompletionItem("set.from_list", vscode.CompletionItemKind.Function);
setfromListFunction.detail = `pub fn from_list(members: List(a)) -> Set(a)`;
setfromListFunction.documentation = `Creates a new set of the members in a given list. This function runs in loglinear time. Examples > import gleam/list > [1, 1, 2, 4, 3, 2] |> from_list |> to_list |> list.sort [1, 3, 3, 4]`;
setfromListFunction.insertText = new vscode.SnippetString("set.from_list(${1:members})");

completionItems.push(setfromListFunction);
        

var fromListFunction = new vscode.CompletionItem("from_list", vscode.CompletionItemKind.Function);
fromListFunction.detail = `pub fn from_list(members: List(a)) -> Set(a)`;
fromListFunction.documentation = `Creates a new set of the members in a given list. This function runs in loglinear time. Examples > import gleam/list > [1, 1, 2, 4, 3, 2] |> from_list |> to_list |> list.sort [1, 3, 3, 4]`;
fromListFunction.insertText = new vscode.SnippetString("from_list(${1:members})");

completionItems.push(fromListFunction);
        

var setinsertFunction = new vscode.CompletionItem("set.insert", vscode.CompletionItemKind.Function);
setinsertFunction.detail = `pub fn insert(into set: Set(a), this member: a) -> Set(a)`;
setinsertFunction.documentation = `Inserts an member into the set. This function runs in logarithmic time. Examples > new() > |> insert(1) > |> insert(2) > |> size 2`;
setinsertFunction.insertText = new vscode.SnippetString("set.insert(${1:into set})");

completionItems.push(setinsertFunction);
        

var insertFunction = new vscode.CompletionItem("insert", vscode.CompletionItemKind.Function);
insertFunction.detail = `pub fn insert(into set: Set(a), this member: a) -> Set(a)`;
insertFunction.documentation = `Inserts an member into the set. This function runs in logarithmic time. Examples > new() > |> insert(1) > |> insert(2) > |> size 2`;
insertFunction.insertText = new vscode.SnippetString("insert(${1:into set})");

completionItems.push(insertFunction);
        

var setintersectionFunction = new vscode.CompletionItem("set.intersection", vscode.CompletionItemKind.Function);
setintersectionFunction.detail = `pub fn intersection(of first: Set(a), and second: Set(a)) -> Set(   a, )`;
setintersectionFunction.documentation = `Creates a new set that contains members that are present in both given sets. This function runs in loglinear time. Examples > intersection(from_list([1, 2]), from_list([2, 3])) |> to_list [2]`;
setintersectionFunction.insertText = new vscode.SnippetString("set.intersection(${1:of first})");

completionItems.push(setintersectionFunction);
        

var intersectionFunction = new vscode.CompletionItem("intersection", vscode.CompletionItemKind.Function);
intersectionFunction.detail = `pub fn intersection(of first: Set(a), and second: Set(a)) -> Set(   a, )`;
intersectionFunction.documentation = `Creates a new set that contains members that are present in both given sets. This function runs in loglinear time. Examples > intersection(from_list([1, 2]), from_list([2, 3])) |> to_list [2]`;
intersectionFunction.insertText = new vscode.SnippetString("intersection(${1:of first})");

completionItems.push(intersectionFunction);
        

var setnewFunction = new vscode.CompletionItem("set.new", vscode.CompletionItemKind.Function);
setnewFunction.detail = `pub fn new() -> Set(a)`;
setnewFunction.documentation = `Creates a new empty set.`;
setnewFunction.insertText = new vscode.SnippetString("set.new(${1:})");

completionItems.push(setnewFunction);
        

var newFunction = new vscode.CompletionItem("new", vscode.CompletionItemKind.Function);
newFunction.detail = `pub fn new() -> Set(a)`;
newFunction.documentation = `Creates a new empty set.`;
newFunction.insertText = new vscode.SnippetString("new(${1:})");

completionItems.push(newFunction);
        

var setsizeFunction = new vscode.CompletionItem("set.size", vscode.CompletionItemKind.Function);
setsizeFunction.detail = `pub fn size(set: Set(a)) -> Int`;
setsizeFunction.documentation = `Gets the number of members in a set. This function runs in constant time. Examples > new() > |> insert(1) > |> insert(2) > |> size 2`;
setsizeFunction.insertText = new vscode.SnippetString("set.size(${1:set})");

completionItems.push(setsizeFunction);
        

var sizeFunction = new vscode.CompletionItem("size", vscode.CompletionItemKind.Function);
sizeFunction.detail = `pub fn size(set: Set(a)) -> Int`;
sizeFunction.documentation = `Gets the number of members in a set. This function runs in constant time. Examples > new() > |> insert(1) > |> insert(2) > |> size 2`;
sizeFunction.insertText = new vscode.SnippetString("size(${1:set})");

completionItems.push(sizeFunction);
        

var settakeFunction = new vscode.CompletionItem("set.take", vscode.CompletionItemKind.Function);
settakeFunction.detail = `pub fn take(from set: Set(a), keeping desired: List(a)) -> Set(a)`;
settakeFunction.documentation = `Creates a new map from a given map, only including any members which are in a given list. This function runs in loglinear time. Examples > from_list([1, 2, 3]) > |> take([1, 3, 5]) > |> to_list [1, 3]`;
settakeFunction.insertText = new vscode.SnippetString("set.take(${1:from set})");

completionItems.push(settakeFunction);
        

var takeFunction = new vscode.CompletionItem("take", vscode.CompletionItemKind.Function);
takeFunction.detail = `pub fn take(from set: Set(a), keeping desired: List(a)) -> Set(a)`;
takeFunction.documentation = `Creates a new map from a given map, only including any members which are in a given list. This function runs in loglinear time. Examples > from_list([1, 2, 3]) > |> take([1, 3, 5]) > |> to_list [1, 3]`;
takeFunction.insertText = new vscode.SnippetString("take(${1:from set})");

completionItems.push(takeFunction);
        

var settoListFunction = new vscode.CompletionItem("set.to_list", vscode.CompletionItemKind.Function);
settoListFunction.detail = `pub fn to_list(set: Set(a)) -> List(a)`;
settoListFunction.documentation = `Converts the set into a list of the contained members. The list has no specific ordering, any unintentional ordering may change in future versions of Gleam or Erlang. This function runs in linear time. Examples > new() |> insert(2) |> to_list [2]`;
settoListFunction.insertText = new vscode.SnippetString("set.to_list(${1:set})");

completionItems.push(settoListFunction);
        

var toListFunction = new vscode.CompletionItem("to_list", vscode.CompletionItemKind.Function);
toListFunction.detail = `pub fn to_list(set: Set(a)) -> List(a)`;
toListFunction.documentation = `Converts the set into a list of the contained members. The list has no specific ordering, any unintentional ordering may change in future versions of Gleam or Erlang. This function runs in linear time. Examples > new() |> insert(2) |> to_list [2]`;
toListFunction.insertText = new vscode.SnippetString("to_list(${1:set})");

completionItems.push(toListFunction);
        

var setunionFunction = new vscode.CompletionItem("set.union", vscode.CompletionItemKind.Function);
setunionFunction.detail = `pub fn union(of first: Set(a), and second: Set(a)) -> Set(a)`;
setunionFunction.documentation = `Creates a new set that contains all members of both given sets. This function runs in loglinear time. Examples > union(from_list([1, 2]), from_list([2, 3])) |> to_list [1, 2, 3]`;
setunionFunction.insertText = new vscode.SnippetString("set.union(${1:of first})");

completionItems.push(setunionFunction);
        

var unionFunction = new vscode.CompletionItem("union", vscode.CompletionItemKind.Function);
unionFunction.detail = `pub fn union(of first: Set(a), and second: Set(a)) -> Set(a)`;
unionFunction.documentation = `Creates a new set that contains all members of both given sets. This function runs in loglinear time. Examples > union(from_list([1, 2]), from_list([2, 3])) |> to_list [1, 2, 3]`;
unionFunction.insertText = new vscode.SnippetString("union(${1:of first})");

completionItems.push(unionFunction);
        

var stringappendFunction = new vscode.CompletionItem("string.append", vscode.CompletionItemKind.Function);
stringappendFunction.detail = `pub fn append(to first: String, suffix second: String) -> String`;
stringappendFunction.documentation = `Creates a new String by joining two Strings together. This function copies both Strings and runs in linear time. If you find yourself joining Strings frequently consider using the string_builder module as it can append Strings much faster! Examples > append(to: "butter", suffix: "fly") "butterfly"`;
stringappendFunction.insertText = new vscode.SnippetString("string.append(${1:to first}, ${2:suffix second})");

completionItems.push(stringappendFunction);
        

var appendFunction = new vscode.CompletionItem("append", vscode.CompletionItemKind.Function);
appendFunction.detail = `pub fn append(to first: String, suffix second: String) -> String`;
appendFunction.documentation = `Creates a new String by joining two Strings together. This function copies both Strings and runs in linear time. If you find yourself joining Strings frequently consider using the string_builder module as it can append Strings much faster! Examples > append(to: "butter", suffix: "fly") "butterfly"`;
appendFunction.insertText = new vscode.SnippetString("append(${1:to first}, ${2:suffix second})");

completionItems.push(appendFunction);
        

var stringcapitaliseFunction = new vscode.CompletionItem("string.capitalise", vscode.CompletionItemKind.Function);
stringcapitaliseFunction.detail = `pub fn capitalise(s: String) -> String`;
stringcapitaliseFunction.documentation = `Creates a new String with the first grapheme in the input String converted to uppercase and the remaining graphemes to lowercase. Examples > capitalise("mamouna") "Mamouna"`;
stringcapitaliseFunction.insertText = new vscode.SnippetString("string.capitalise(${1:s})");

completionItems.push(stringcapitaliseFunction);
        

var capitaliseFunction = new vscode.CompletionItem("capitalise", vscode.CompletionItemKind.Function);
capitaliseFunction.detail = `pub fn capitalise(s: String) -> String`;
capitaliseFunction.documentation = `Creates a new String with the first grapheme in the input String converted to uppercase and the remaining graphemes to lowercase. Examples > capitalise("mamouna") "Mamouna"`;
capitaliseFunction.insertText = new vscode.SnippetString("capitalise(${1:s})");

completionItems.push(capitaliseFunction);
        

var stringcompareFunction = new vscode.CompletionItem("string.compare", vscode.CompletionItemKind.Function);
stringcompareFunction.detail = `pub fn compare(a: String, b: String) -> Order`;
stringcompareFunction.documentation = `Compares two Strings to see which is “larger” by comparing their graphemes. This does not compare the size or length of the given Strings. Examples > compare("Anthony", "Anthony") order.Eq  > compare("A", "B") order.Lt`;
stringcompareFunction.insertText = new vscode.SnippetString("string.compare(${1:a}, ${2:b})");

completionItems.push(stringcompareFunction);
        

var compareFunction = new vscode.CompletionItem("compare", vscode.CompletionItemKind.Function);
compareFunction.detail = `pub fn compare(a: String, b: String) -> Order`;
compareFunction.documentation = `Compares two Strings to see which is “larger” by comparing their graphemes. This does not compare the size or length of the given Strings. Examples > compare("Anthony", "Anthony") order.Eq  > compare("A", "B") order.Lt`;
compareFunction.insertText = new vscode.SnippetString("compare(${1:a}, ${2:b})");

completionItems.push(compareFunction);
        

var stringconcatFunction = new vscode.CompletionItem("string.concat", vscode.CompletionItemKind.Function);
stringconcatFunction.detail = `pub fn concat(strings: List(String)) -> String`;
stringconcatFunction.documentation = `Creates a new String by joining many Strings together. This function copies both Strings and runs in linear time. If you find yourself joining Strings frequently consider using the string_builder module as it can append Strings much faster! Examples > concat(["never", "the", "less"]) "nevertheless"`;
stringconcatFunction.insertText = new vscode.SnippetString("string.concat(${1:strings})");

completionItems.push(stringconcatFunction);
        

var concatFunction = new vscode.CompletionItem("concat", vscode.CompletionItemKind.Function);
concatFunction.detail = `pub fn concat(strings: List(String)) -> String`;
concatFunction.documentation = `Creates a new String by joining many Strings together. This function copies both Strings and runs in linear time. If you find yourself joining Strings frequently consider using the string_builder module as it can append Strings much faster! Examples > concat(["never", "the", "less"]) "nevertheless"`;
concatFunction.insertText = new vscode.SnippetString("concat(${1:strings})");

completionItems.push(concatFunction);
        

var stringcontainsFunction = new vscode.CompletionItem("string.contains", vscode.CompletionItemKind.Function);
stringcontainsFunction.detail = `pub fn contains(does haystack: String, contain needle: String) -> Bool`;
stringcontainsFunction.documentation = `Checks if the first String contains the second. Examples > contains(does: "theory", contain: "ory") True  > contains(does: "theory", contain: "the") True  > contains(does: "theory", contain: "THE") False`;
stringcontainsFunction.insertText = new vscode.SnippetString("string.contains(${1:does haystack}, ${2:contain needle})");

completionItems.push(stringcontainsFunction);
        

var containsFunction = new vscode.CompletionItem("contains", vscode.CompletionItemKind.Function);
containsFunction.detail = `pub fn contains(does haystack: String, contain needle: String) -> Bool`;
containsFunction.documentation = `Checks if the first String contains the second. Examples > contains(does: "theory", contain: "ory") True  > contains(does: "theory", contain: "the") True  > contains(does: "theory", contain: "THE") False`;
containsFunction.insertText = new vscode.SnippetString("contains(${1:does haystack}, ${2:contain needle})");

completionItems.push(containsFunction);
        

var stringcropFunction = new vscode.CompletionItem("string.crop", vscode.CompletionItemKind.Function);
stringcropFunction.detail = `pub fn crop(from string: String, before substring: String) -> String`;
stringcropFunction.documentation = `Drops contents of the first String that occur before the second String. If the from string does not contain the before string, from is returned unchanged. Examples > crop(from: "The Lone Gunmen", before: "Lone") "Lone Gunmen"`;
stringcropFunction.insertText = new vscode.SnippetString("string.crop(${1:from string}, ${2:before substring})");

completionItems.push(stringcropFunction);
        

var cropFunction = new vscode.CompletionItem("crop", vscode.CompletionItemKind.Function);
cropFunction.detail = `pub fn crop(from string: String, before substring: String) -> String`;
cropFunction.documentation = `Drops contents of the first String that occur before the second String. If the from string does not contain the before string, from is returned unchanged. Examples > crop(from: "The Lone Gunmen", before: "Lone") "Lone Gunmen"`;
cropFunction.insertText = new vscode.SnippetString("crop(${1:from string}, ${2:before substring})");

completionItems.push(cropFunction);
        

var stringdropLeftFunction = new vscode.CompletionItem("string.drop_left", vscode.CompletionItemKind.Function);
stringdropLeftFunction.detail = `pub fn drop_left(from string: String, up_to num_graphemes: Int) -> String`;
stringdropLeftFunction.documentation = `Drops n graphemes from the left side of a String. Examples > drop_left(from: "The Lone Gunmen", up_to: 2) "e Lone Gunmen"`;
stringdropLeftFunction.insertText = new vscode.SnippetString("string.drop_left(${1:from string}, ${2:up_to num_graphemes})");

completionItems.push(stringdropLeftFunction);
        

var dropLeftFunction = new vscode.CompletionItem("drop_left", vscode.CompletionItemKind.Function);
dropLeftFunction.detail = `pub fn drop_left(from string: String, up_to num_graphemes: Int) -> String`;
dropLeftFunction.documentation = `Drops n graphemes from the left side of a String. Examples > drop_left(from: "The Lone Gunmen", up_to: 2) "e Lone Gunmen"`;
dropLeftFunction.insertText = new vscode.SnippetString("drop_left(${1:from string}, ${2:up_to num_graphemes})");

completionItems.push(dropLeftFunction);
        

var stringdropRightFunction = new vscode.CompletionItem("string.drop_right", vscode.CompletionItemKind.Function);
stringdropRightFunction.detail = `pub fn drop_right(from string: String, up_to num_graphemes: Int) -> String`;
stringdropRightFunction.documentation = `Drops n graphemes from the right side of a String. Examples > drop_right(from: "Cigarette Smoking Man", up_to: 2) "Cigarette Smoking M"`;
stringdropRightFunction.insertText = new vscode.SnippetString("string.drop_right(${1:from string}, ${2:up_to num_graphemes})");

completionItems.push(stringdropRightFunction);
        

var dropRightFunction = new vscode.CompletionItem("drop_right", vscode.CompletionItemKind.Function);
dropRightFunction.detail = `pub fn drop_right(from string: String, up_to num_graphemes: Int) -> String`;
dropRightFunction.documentation = `Drops n graphemes from the right side of a String. Examples > drop_right(from: "Cigarette Smoking Man", up_to: 2) "Cigarette Smoking M"`;
dropRightFunction.insertText = new vscode.SnippetString("drop_right(${1:from string}, ${2:up_to num_graphemes})");

completionItems.push(dropRightFunction);
        

var stringendsWithFunction = new vscode.CompletionItem("string.ends_with", vscode.CompletionItemKind.Function);
stringendsWithFunction.detail = `pub fn ends_with(string: String, suffix: String) -> Bool`;
stringendsWithFunction.documentation = `Checks whether the first String ends with the second one. Examples > ends_with("theory", "ory") True`;
stringendsWithFunction.insertText = new vscode.SnippetString("string.ends_with(${1:string}, ${2:suffix})");

completionItems.push(stringendsWithFunction);
        

var endsWithFunction = new vscode.CompletionItem("ends_with", vscode.CompletionItemKind.Function);
endsWithFunction.detail = `pub fn ends_with(string: String, suffix: String) -> Bool`;
endsWithFunction.documentation = `Checks whether the first String ends with the second one. Examples > ends_with("theory", "ory") True`;
endsWithFunction.insertText = new vscode.SnippetString("ends_with(${1:string}, ${2:suffix})");

completionItems.push(endsWithFunction);
        

var stringfirstFunction = new vscode.CompletionItem("string.first", vscode.CompletionItemKind.Function);
stringfirstFunction.detail = `pub fn first(s: String) -> Result(String, Nil)`;
stringfirstFunction.documentation = `Returns the first grapheme cluster in a given String and wraps it in a Result(String, Nil). If the String is empty, it returns Error(Nil). Otherwise, it returns Ok(String). Examples > first("") Error(Nil)  > first("icecream") Ok("i")`;
stringfirstFunction.insertText = new vscode.SnippetString("string.first(${1:s})");

completionItems.push(stringfirstFunction);
        

var firstFunction = new vscode.CompletionItem("first", vscode.CompletionItemKind.Function);
firstFunction.detail = `pub fn first(s: String) -> Result(String, Nil)`;
firstFunction.documentation = `Returns the first grapheme cluster in a given String and wraps it in a Result(String, Nil). If the String is empty, it returns Error(Nil). Otherwise, it returns Ok(String). Examples > first("") Error(Nil)  > first("icecream") Ok("i")`;
firstFunction.insertText = new vscode.SnippetString("first(${1:s})");

completionItems.push(firstFunction);
        

var stringfromUtfCodepointsFunction = new vscode.CompletionItem("string.from_utf_codepoints", vscode.CompletionItemKind.Function);
stringfromUtfCodepointsFunction.detail = `pub fn from_utf_codepoints(utf_codepoints: List(UtfCodepoint)) -> String`;
stringfromUtfCodepointsFunction.documentation = `Converts a List of UtfCodepoints to a String. See https://en.wikipedia.org/wiki/Code_point and https://en.wikipedia.org/wiki/Unicode#Codespace_and_Code_Points for an explanation on code points. Examples > { >   assert #(Ok(a), Ok(b), Ok(c)) = #( >     utf_codepoint(97), >     utf_codepoint(98), >     utf_codepoint(99), >   ) >   [a, b, c] > } > |> from_utf_codepoints "abc"`;
stringfromUtfCodepointsFunction.insertText = new vscode.SnippetString("string.from_utf_codepoints(${1:utf_codepoints})");

completionItems.push(stringfromUtfCodepointsFunction);
        

var fromUtfCodepointsFunction = new vscode.CompletionItem("from_utf_codepoints", vscode.CompletionItemKind.Function);
fromUtfCodepointsFunction.detail = `pub fn from_utf_codepoints(utf_codepoints: List(UtfCodepoint)) -> String`;
fromUtfCodepointsFunction.documentation = `Converts a List of UtfCodepoints to a String. See https://en.wikipedia.org/wiki/Code_point and https://en.wikipedia.org/wiki/Unicode#Codespace_and_Code_Points for an explanation on code points. Examples > { >   assert #(Ok(a), Ok(b), Ok(c)) = #( >     utf_codepoint(97), >     utf_codepoint(98), >     utf_codepoint(99), >   ) >   [a, b, c] > } > |> from_utf_codepoints "abc"`;
fromUtfCodepointsFunction.insertText = new vscode.SnippetString("from_utf_codepoints(${1:utf_codepoints})");

completionItems.push(fromUtfCodepointsFunction);
        

var stringinspectFunction = new vscode.CompletionItem("string.inspect", vscode.CompletionItemKind.Function);
stringinspectFunction.detail = `pub fn inspect(term: a) -> String`;
stringinspectFunction.documentation = `Returns a String representation of a term in Gleam syntax.`;
stringinspectFunction.insertText = new vscode.SnippetString("string.inspect(${1:term})");

completionItems.push(stringinspectFunction);
        

var inspectFunction = new vscode.CompletionItem("inspect", vscode.CompletionItemKind.Function);
inspectFunction.detail = `pub fn inspect(term: a) -> String`;
inspectFunction.documentation = `Returns a String representation of a term in Gleam syntax.`;
inspectFunction.insertText = new vscode.SnippetString("inspect(${1:term})");

completionItems.push(inspectFunction);
        

var stringisEmptyFunction = new vscode.CompletionItem("string.is_empty", vscode.CompletionItemKind.Function);
stringisEmptyFunction.detail = `pub fn is_empty(str: String) -> Bool`;
stringisEmptyFunction.documentation = `Determines if a String is empty. Examples > is_empty("") True  > is_empty("the world") False`;
stringisEmptyFunction.insertText = new vscode.SnippetString("string.is_empty(${1:str})");

completionItems.push(stringisEmptyFunction);
        

var isEmptyFunction = new vscode.CompletionItem("is_empty", vscode.CompletionItemKind.Function);
isEmptyFunction.detail = `pub fn is_empty(str: String) -> Bool`;
isEmptyFunction.documentation = `Determines if a String is empty. Examples > is_empty("") True  > is_empty("the world") False`;
isEmptyFunction.insertText = new vscode.SnippetString("is_empty(${1:str})");

completionItems.push(isEmptyFunction);
        

var stringjoinFunction = new vscode.CompletionItem("string.join", vscode.CompletionItemKind.Function);
stringjoinFunction.detail = `pub fn join(strings: List(String), with separator: String) -> String`;
stringjoinFunction.documentation = `Joins many Strings together with a given separator. This function runs in linear time. Examples > join(["home","evan","Desktop"], with: "/") "home/evan/Desktop"`;
stringjoinFunction.insertText = new vscode.SnippetString("string.join(${1:strings})");

completionItems.push(stringjoinFunction);
        

var joinFunction = new vscode.CompletionItem("join", vscode.CompletionItemKind.Function);
joinFunction.detail = `pub fn join(strings: List(String), with separator: String) -> String`;
joinFunction.documentation = `Joins many Strings together with a given separator. This function runs in linear time. Examples > join(["home","evan","Desktop"], with: "/") "home/evan/Desktop"`;
joinFunction.insertText = new vscode.SnippetString("join(${1:strings})");

completionItems.push(joinFunction);
        

var stringlastFunction = new vscode.CompletionItem("string.last", vscode.CompletionItemKind.Function);
stringlastFunction.detail = `pub fn last(s: String) -> Result(String, Nil)`;
stringlastFunction.documentation = `Returns the last grapheme cluster in a given String and wraps it in a Result(String, Nil). If the String is empty, it returns Error(Nil). Otherwise, it returns Ok(String). Examples > last("") Error(Nil)  > last("icecream") Ok("m")`;
stringlastFunction.insertText = new vscode.SnippetString("string.last(${1:s})");

completionItems.push(stringlastFunction);
        

var lastFunction = new vscode.CompletionItem("last", vscode.CompletionItemKind.Function);
lastFunction.detail = `pub fn last(s: String) -> Result(String, Nil)`;
lastFunction.documentation = `Returns the last grapheme cluster in a given String and wraps it in a Result(String, Nil). If the String is empty, it returns Error(Nil). Otherwise, it returns Ok(String). Examples > last("") Error(Nil)  > last("icecream") Ok("m")`;
lastFunction.insertText = new vscode.SnippetString("last(${1:s})");

completionItems.push(lastFunction);
        

var stringlengthFunction = new vscode.CompletionItem("string.length", vscode.CompletionItemKind.Function);
stringlengthFunction.detail = `pub fn length(string: String) -> Int`;
stringlengthFunction.documentation = `Gets the number of grapheme clusters in a given String. This function has to iterate across the whole string to count the number of graphemes, so it runs in linear time. Examples > length("Gleam") 5  > length("ß↑e̊") 3  > length("") 0`;
stringlengthFunction.insertText = new vscode.SnippetString("string.length(${1:string})");

completionItems.push(stringlengthFunction);
        

var lengthFunction = new vscode.CompletionItem("length", vscode.CompletionItemKind.Function);
lengthFunction.detail = `pub fn length(string: String) -> Int`;
lengthFunction.documentation = `Gets the number of grapheme clusters in a given String. This function has to iterate across the whole string to count the number of graphemes, so it runs in linear time. Examples > length("Gleam") 5  > length("ß↑e̊") 3  > length("") 0`;
lengthFunction.insertText = new vscode.SnippetString("length(${1:string})");

completionItems.push(lengthFunction);
        

var stringlowercaseFunction = new vscode.CompletionItem("string.lowercase", vscode.CompletionItemKind.Function);
stringlowercaseFunction.detail = `pub fn lowercase(string: String) -> String`;
stringlowercaseFunction.documentation = `Creates a new String with all the graphemes in the input String converted to lowercase. Useful for case-insensitive comparisons. Examples > lowercase("X-FILES") "x-files"`;
stringlowercaseFunction.insertText = new vscode.SnippetString("string.lowercase(${1:string})");

completionItems.push(stringlowercaseFunction);
        

var lowercaseFunction = new vscode.CompletionItem("lowercase", vscode.CompletionItemKind.Function);
lowercaseFunction.detail = `pub fn lowercase(string: String) -> String`;
lowercaseFunction.documentation = `Creates a new String with all the graphemes in the input String converted to lowercase. Useful for case-insensitive comparisons. Examples > lowercase("X-FILES") "x-files"`;
lowercaseFunction.insertText = new vscode.SnippetString("lowercase(${1:string})");

completionItems.push(lowercaseFunction);
        

var stringpadLeftFunction = new vscode.CompletionItem("string.pad_left", vscode.CompletionItemKind.Function);
stringpadLeftFunction.detail = `pub fn pad_left(string: String, to desired_length: Int, with pad_string: String) -> String`;
stringpadLeftFunction.documentation = `Pads a String on the left until it has at least given number of graphemes. Examples > pad_left("121", to: 5, with: ".") "..121"  > pad_left("121", to: 3, with: ".") "121"  > pad_left("121", to: 2, with: ".") "121"`;
stringpadLeftFunction.insertText = new vscode.SnippetString("string.pad_left(${1:string}, ${2:to desired_length}, ${3:with pad_string})");

completionItems.push(stringpadLeftFunction);
        

var padLeftFunction = new vscode.CompletionItem("pad_left", vscode.CompletionItemKind.Function);
padLeftFunction.detail = `pub fn pad_left(string: String, to desired_length: Int, with pad_string: String) -> String`;
padLeftFunction.documentation = `Pads a String on the left until it has at least given number of graphemes. Examples > pad_left("121", to: 5, with: ".") "..121"  > pad_left("121", to: 3, with: ".") "121"  > pad_left("121", to: 2, with: ".") "121"`;
padLeftFunction.insertText = new vscode.SnippetString("pad_left(${1:string}, ${2:to desired_length}, ${3:with pad_string})");

completionItems.push(padLeftFunction);
        

var stringpadRightFunction = new vscode.CompletionItem("string.pad_right", vscode.CompletionItemKind.Function);
stringpadRightFunction.detail = `pub fn pad_right(string: String, to desired_length: Int, with pad_string: String) -> String`;
stringpadRightFunction.documentation = `Pads a String on the right until it has a given length. Examples > pad_right("123", to: 5, with: ".") "123.."  > pad_right("123", to: 3, with: ".") "123"  > pad_right("123", to: 2, with: ".") "123"`;
stringpadRightFunction.insertText = new vscode.SnippetString("string.pad_right(${1:string}, ${2:to desired_length}, ${3:with pad_string})");

completionItems.push(stringpadRightFunction);
        

var padRightFunction = new vscode.CompletionItem("pad_right", vscode.CompletionItemKind.Function);
padRightFunction.detail = `pub fn pad_right(string: String, to desired_length: Int, with pad_string: String) -> String`;
padRightFunction.documentation = `Pads a String on the right until it has a given length. Examples > pad_right("123", to: 5, with: ".") "123.."  > pad_right("123", to: 3, with: ".") "123"  > pad_right("123", to: 2, with: ".") "123"`;
padRightFunction.insertText = new vscode.SnippetString("pad_right(${1:string}, ${2:to desired_length}, ${3:with pad_string})");

completionItems.push(padRightFunction);
        

var stringpopGraphemeFunction = new vscode.CompletionItem("string.pop_grapheme", vscode.CompletionItemKind.Function);
stringpopGraphemeFunction.detail = `pub fn pop_grapheme(string: String) -> Result(   #(String, String),   Nil, )`;
stringpopGraphemeFunction.documentation = `Splits a non-empty String into its head and tail. This lets you pattern match on Strings exactly as you would with lists. Examples > pop_grapheme("gleam") Ok(#("g", "leam"))  > pop_grapheme("") Error(Nil)`;
stringpopGraphemeFunction.insertText = new vscode.SnippetString("string.pop_grapheme(${1:string})");

completionItems.push(stringpopGraphemeFunction);
        

var popGraphemeFunction = new vscode.CompletionItem("pop_grapheme", vscode.CompletionItemKind.Function);
popGraphemeFunction.detail = `pub fn pop_grapheme(string: String) -> Result(   #(String, String),   Nil, )`;
popGraphemeFunction.documentation = `Splits a non-empty String into its head and tail. This lets you pattern match on Strings exactly as you would with lists. Examples > pop_grapheme("gleam") Ok(#("g", "leam"))  > pop_grapheme("") Error(Nil)`;
popGraphemeFunction.insertText = new vscode.SnippetString("pop_grapheme(${1:string})");

completionItems.push(popGraphemeFunction);
        

var stringrepeatFunction = new vscode.CompletionItem("string.repeat", vscode.CompletionItemKind.Function);
stringrepeatFunction.detail = `pub fn repeat(string: String, times times: Int) -> String`;
stringrepeatFunction.documentation = `Creates a new String by repeating a String a given number of times. This function runs in linear time. Examples > repeat("ha", times: 3) "hahaha"`;
stringrepeatFunction.insertText = new vscode.SnippetString("string.repeat(${1:string}, ${2:times times})");

completionItems.push(stringrepeatFunction);
        

var repeatFunction = new vscode.CompletionItem("repeat", vscode.CompletionItemKind.Function);
repeatFunction.detail = `pub fn repeat(string: String, times times: Int) -> String`;
repeatFunction.documentation = `Creates a new String by repeating a String a given number of times. This function runs in linear time. Examples > repeat("ha", times: 3) "hahaha"`;
repeatFunction.insertText = new vscode.SnippetString("repeat(${1:string}, ${2:times times})");

completionItems.push(repeatFunction);
        

var stringreplaceFunction = new vscode.CompletionItem("string.replace", vscode.CompletionItemKind.Function);
stringreplaceFunction.detail = `pub fn replace(in string: String, each pattern: String, with substitute: String) -> String`;
stringreplaceFunction.documentation = `Creates a new String by replacing all occurrences of a given substring. Examples > replace("www.example.com", each: ".", with: "-") "www-example-com"  > replace("a,b,c,d,e", each: ",", with: "/") "a/b/c/d/e"`;
stringreplaceFunction.insertText = new vscode.SnippetString("string.replace(${1:in string}, ${2:each pattern}, ${3:with substitute})");

completionItems.push(stringreplaceFunction);
        

var replaceFunction = new vscode.CompletionItem("replace", vscode.CompletionItemKind.Function);
replaceFunction.detail = `pub fn replace(in string: String, each pattern: String, with substitute: String) -> String`;
replaceFunction.documentation = `Creates a new String by replacing all occurrences of a given substring. Examples > replace("www.example.com", each: ".", with: "-") "www-example-com"  > replace("a,b,c,d,e", each: ",", with: "/") "a/b/c/d/e"`;
replaceFunction.insertText = new vscode.SnippetString("replace(${1:in string}, ${2:each pattern}, ${3:with substitute})");

completionItems.push(replaceFunction);
        

var stringreverseFunction = new vscode.CompletionItem("string.reverse", vscode.CompletionItemKind.Function);
stringreverseFunction.detail = `pub fn reverse(string: String) -> String`;
stringreverseFunction.documentation = `Reverses a String. This function has to iterate across the whole String so it runs in linear time. Examples > reverse("stressed") "desserts"`;
stringreverseFunction.insertText = new vscode.SnippetString("string.reverse(${1:string})");

completionItems.push(stringreverseFunction);
        

var reverseFunction = new vscode.CompletionItem("reverse", vscode.CompletionItemKind.Function);
reverseFunction.detail = `pub fn reverse(string: String) -> String`;
reverseFunction.documentation = `Reverses a String. This function has to iterate across the whole String so it runs in linear time. Examples > reverse("stressed") "desserts"`;
reverseFunction.insertText = new vscode.SnippetString("reverse(${1:string})");

completionItems.push(reverseFunction);
        

var stringsliceFunction = new vscode.CompletionItem("string.slice", vscode.CompletionItemKind.Function);
stringsliceFunction.detail = `pub fn slice(from string: String, at_index idx: Int, length len: Int) -> String`;
stringsliceFunction.documentation = `Takes a substring given a start and end grapheme indexes. Negative indexes are taken starting from the end of the list. Examples > slice(from: "gleam", at_index: 1, length: 2) "le"  > slice(from: "gleam", at_index: 1, length: 10) "leam"  > slice(from: "gleam", at_index: 10, length: 3) ""  > slice(from: "gleam", at_index: -2, length: 2) "am"  > slice(from: "gleam", at_index: -12, length: 2) ""`;
stringsliceFunction.insertText = new vscode.SnippetString("string.slice(${1:from string}, ${2:at_index idx}, ${3:length len})");

completionItems.push(stringsliceFunction);
        

var sliceFunction = new vscode.CompletionItem("slice", vscode.CompletionItemKind.Function);
sliceFunction.detail = `pub fn slice(from string: String, at_index idx: Int, length len: Int) -> String`;
sliceFunction.documentation = `Takes a substring given a start and end grapheme indexes. Negative indexes are taken starting from the end of the list. Examples > slice(from: "gleam", at_index: 1, length: 2) "le"  > slice(from: "gleam", at_index: 1, length: 10) "leam"  > slice(from: "gleam", at_index: 10, length: 3) ""  > slice(from: "gleam", at_index: -2, length: 2) "am"  > slice(from: "gleam", at_index: -12, length: 2) ""`;
sliceFunction.insertText = new vscode.SnippetString("slice(${1:from string}, ${2:at_index idx}, ${3:length len})");

completionItems.push(sliceFunction);
        

var stringsplitFunction = new vscode.CompletionItem("string.split", vscode.CompletionItemKind.Function);
stringsplitFunction.detail = `pub fn split(x: String, on substring: String) -> List(String)`;
stringsplitFunction.documentation = `Creates a list of Strings by splitting a given string on a given substring. Examples > split("home/gleam/desktop/", on: "/") ["home", "gleam", "desktop", ""]`;
stringsplitFunction.insertText = new vscode.SnippetString("string.split(${1:x}, ${2:on substring})");

completionItems.push(stringsplitFunction);
        

var splitFunction = new vscode.CompletionItem("split", vscode.CompletionItemKind.Function);
splitFunction.detail = `pub fn split(x: String, on substring: String) -> List(String)`;
splitFunction.documentation = `Creates a list of Strings by splitting a given string on a given substring. Examples > split("home/gleam/desktop/", on: "/") ["home", "gleam", "desktop", ""]`;
splitFunction.insertText = new vscode.SnippetString("split(${1:x}, ${2:on substring})");

completionItems.push(splitFunction);
        

var stringsplitOnceFunction = new vscode.CompletionItem("string.split_once", vscode.CompletionItemKind.Function);
stringsplitOnceFunction.detail = `pub fn split_once(x: String, on substring: String) -> Result(   #(String, String),   Nil, )`;
stringsplitOnceFunction.documentation = `Splits a String a single time on the given substring. Returns an Error if substring not present. Examples > split_once("home/gleam/desktop/", on: "/") Ok(#("home", "gleam/desktop/"))  > split_once("home/gleam/desktop/", on: "?") Error(Nil)`;
stringsplitOnceFunction.insertText = new vscode.SnippetString("string.split_once(${1:x}, ${2:on substring})");

completionItems.push(stringsplitOnceFunction);
        

var splitOnceFunction = new vscode.CompletionItem("split_once", vscode.CompletionItemKind.Function);
splitOnceFunction.detail = `pub fn split_once(x: String, on substring: String) -> Result(   #(String, String),   Nil, )`;
splitOnceFunction.documentation = `Splits a String a single time on the given substring. Returns an Error if substring not present. Examples > split_once("home/gleam/desktop/", on: "/") Ok(#("home", "gleam/desktop/"))  > split_once("home/gleam/desktop/", on: "?") Error(Nil)`;
splitOnceFunction.insertText = new vscode.SnippetString("split_once(${1:x}, ${2:on substring})");

completionItems.push(splitOnceFunction);
        

var stringstartsWithFunction = new vscode.CompletionItem("string.starts_with", vscode.CompletionItemKind.Function);
stringstartsWithFunction.detail = `pub fn starts_with(string: String, prefix: String) -> Bool`;
stringstartsWithFunction.documentation = `Checks whether the first String starts with the second one. Examples > starts_with("theory", "ory") False`;
stringstartsWithFunction.insertText = new vscode.SnippetString("string.starts_with(${1:string}, ${2:prefix})");

completionItems.push(stringstartsWithFunction);
        

var startsWithFunction = new vscode.CompletionItem("starts_with", vscode.CompletionItemKind.Function);
startsWithFunction.detail = `pub fn starts_with(string: String, prefix: String) -> Bool`;
startsWithFunction.documentation = `Checks whether the first String starts with the second one. Examples > starts_with("theory", "ory") False`;
startsWithFunction.insertText = new vscode.SnippetString("starts_with(${1:string}, ${2:prefix})");

completionItems.push(startsWithFunction);
        

var stringtoGraphemesFunction = new vscode.CompletionItem("string.to_graphemes", vscode.CompletionItemKind.Function);
stringtoGraphemesFunction.detail = `pub fn to_graphemes(string: String) -> List(String)`;
stringtoGraphemesFunction.documentation = `Converts a String to a list of graphemes. > to_graphemes("abc") ["a", "b", "c"]`;
stringtoGraphemesFunction.insertText = new vscode.SnippetString("string.to_graphemes(${1:string})");

completionItems.push(stringtoGraphemesFunction);
        

var toGraphemesFunction = new vscode.CompletionItem("to_graphemes", vscode.CompletionItemKind.Function);
toGraphemesFunction.detail = `pub fn to_graphemes(string: String) -> List(String)`;
toGraphemesFunction.documentation = `Converts a String to a list of graphemes. > to_graphemes("abc") ["a", "b", "c"]`;
toGraphemesFunction.insertText = new vscode.SnippetString("to_graphemes(${1:string})");

completionItems.push(toGraphemesFunction);
        

var stringtoOptionFunction = new vscode.CompletionItem("string.to_option", vscode.CompletionItemKind.Function);
stringtoOptionFunction.detail = `pub fn to_option(s: String) -> Option(String)`;
stringtoOptionFunction.documentation = `Converts a String into Option(String) where an empty String becomes None. Examples > to_option("") None  > to_option("hats") Some("hats")`;
stringtoOptionFunction.insertText = new vscode.SnippetString("string.to_option(${1:s})");

completionItems.push(stringtoOptionFunction);
        

var toOptionFunction = new vscode.CompletionItem("to_option", vscode.CompletionItemKind.Function);
toOptionFunction.detail = `pub fn to_option(s: String) -> Option(String)`;
toOptionFunction.documentation = `Converts a String into Option(String) where an empty String becomes None. Examples > to_option("") None  > to_option("hats") Some("hats")`;
toOptionFunction.insertText = new vscode.SnippetString("to_option(${1:s})");

completionItems.push(toOptionFunction);
        

var stringtoUtfCodepointsFunction = new vscode.CompletionItem("string.to_utf_codepoints", vscode.CompletionItemKind.Function);
stringtoUtfCodepointsFunction.detail = `pub fn to_utf_codepoints(string: String) -> List(UtfCodepoint)`;
stringtoUtfCodepointsFunction.documentation = `Converts a String to a List of UtfCodepoint. See https://en.wikipedia.org/wiki/Code_point and https://en.wikipedia.org/wiki/Unicode#Codespace_and_Code_Points for an explanation on code points. Examples > "a" |> to_utf_codepoints [UtfCodepoint(97)]  // Semantically the same as: // ["🏳", "️", "‍", "🌈"] or: // [waving_white_flag, variant_selector_16, zero_width_joiner, rainbow] > "🏳️‍🌈" |> to_utf_codepoints [UtfCodepoint(127987), UtfCodepoint(65039), UtfCodepoint(8205), UtfCodepoint(127752)]`;
stringtoUtfCodepointsFunction.insertText = new vscode.SnippetString("string.to_utf_codepoints(${1:string})");

completionItems.push(stringtoUtfCodepointsFunction);
        

var toUtfCodepointsFunction = new vscode.CompletionItem("to_utf_codepoints", vscode.CompletionItemKind.Function);
toUtfCodepointsFunction.detail = `pub fn to_utf_codepoints(string: String) -> List(UtfCodepoint)`;
toUtfCodepointsFunction.documentation = `Converts a String to a List of UtfCodepoint. See https://en.wikipedia.org/wiki/Code_point and https://en.wikipedia.org/wiki/Unicode#Codespace_and_Code_Points for an explanation on code points. Examples > "a" |> to_utf_codepoints [UtfCodepoint(97)]  // Semantically the same as: // ["🏳", "️", "‍", "🌈"] or: // [waving_white_flag, variant_selector_16, zero_width_joiner, rainbow] > "🏳️‍🌈" |> to_utf_codepoints [UtfCodepoint(127987), UtfCodepoint(65039), UtfCodepoint(8205), UtfCodepoint(127752)]`;
toUtfCodepointsFunction.insertText = new vscode.SnippetString("to_utf_codepoints(${1:string})");

completionItems.push(toUtfCodepointsFunction);
        

var stringtrimFunction = new vscode.CompletionItem("string.trim", vscode.CompletionItemKind.Function);
stringtrimFunction.detail = `pub fn trim(string: String) -> String`;
stringtrimFunction.documentation = `Removes whitespace on both sides of a String. Examples > trim("  hats  \n") "hats"`;
stringtrimFunction.insertText = new vscode.SnippetString("string.trim(${1:string})");

completionItems.push(stringtrimFunction);
        

var trimFunction = new vscode.CompletionItem("trim", vscode.CompletionItemKind.Function);
trimFunction.detail = `pub fn trim(string: String) -> String`;
trimFunction.documentation = `Removes whitespace on both sides of a String. Examples > trim("  hats  \n") "hats"`;
trimFunction.insertText = new vscode.SnippetString("trim(${1:string})");

completionItems.push(trimFunction);
        

var stringtrimLeftFunction = new vscode.CompletionItem("string.trim_left", vscode.CompletionItemKind.Function);
stringtrimLeftFunction.detail = `pub fn trim_left(string: String) -> String`;
stringtrimLeftFunction.documentation = `Removes whitespace on the left of a String. Examples > trim_left("  hats  \n") "hats  \n"`;
stringtrimLeftFunction.insertText = new vscode.SnippetString("string.trim_left(${1:string})");

completionItems.push(stringtrimLeftFunction);
        

var trimLeftFunction = new vscode.CompletionItem("trim_left", vscode.CompletionItemKind.Function);
trimLeftFunction.detail = `pub fn trim_left(string: String) -> String`;
trimLeftFunction.documentation = `Removes whitespace on the left of a String. Examples > trim_left("  hats  \n") "hats  \n"`;
trimLeftFunction.insertText = new vscode.SnippetString("trim_left(${1:string})");

completionItems.push(trimLeftFunction);
        

var stringtrimRightFunction = new vscode.CompletionItem("string.trim_right", vscode.CompletionItemKind.Function);
stringtrimRightFunction.detail = `pub fn trim_right(string: String) -> String`;
stringtrimRightFunction.documentation = `Removes whitespace on the right of a String. Examples > trim_right("  hats  \n") "  hats"`;
stringtrimRightFunction.insertText = new vscode.SnippetString("string.trim_right(${1:string})");

completionItems.push(stringtrimRightFunction);
        

var trimRightFunction = new vscode.CompletionItem("trim_right", vscode.CompletionItemKind.Function);
trimRightFunction.detail = `pub fn trim_right(string: String) -> String`;
trimRightFunction.documentation = `Removes whitespace on the right of a String. Examples > trim_right("  hats  \n") "  hats"`;
trimRightFunction.insertText = new vscode.SnippetString("trim_right(${1:string})");

completionItems.push(trimRightFunction);
        

var stringuppercaseFunction = new vscode.CompletionItem("string.uppercase", vscode.CompletionItemKind.Function);
stringuppercaseFunction.detail = `pub fn uppercase(string: String) -> String`;
stringuppercaseFunction.documentation = `Creates a new String with all the graphemes in the input String converted to uppercase. Useful for case-insensitive comparisons and VIRTUAL YELLING. Examples > uppercase("skinner") "SKINNER"`;
stringuppercaseFunction.insertText = new vscode.SnippetString("string.uppercase(${1:string})");

completionItems.push(stringuppercaseFunction);
        

var uppercaseFunction = new vscode.CompletionItem("uppercase", vscode.CompletionItemKind.Function);
uppercaseFunction.detail = `pub fn uppercase(string: String) -> String`;
uppercaseFunction.documentation = `Creates a new String with all the graphemes in the input String converted to uppercase. Useful for case-insensitive comparisons and VIRTUAL YELLING. Examples > uppercase("skinner") "SKINNER"`;
uppercaseFunction.insertText = new vscode.SnippetString("uppercase(${1:string})");

completionItems.push(uppercaseFunction);
        

var stringutfCodepointFunction = new vscode.CompletionItem("string.utf_codepoint", vscode.CompletionItemKind.Function);
stringutfCodepointFunction.detail = `pub fn utf_codepoint(value: Int) -> Result(UtfCodepoint, Nil)`;
stringutfCodepointFunction.documentation = `Converts an integer to a UtfCodepoint. Returns an Error if the integer does not represent a valid UTF codepoint.`;
stringutfCodepointFunction.insertText = new vscode.SnippetString("string.utf_codepoint(${1:value})");

completionItems.push(stringutfCodepointFunction);
        

var utfCodepointFunction = new vscode.CompletionItem("utf_codepoint", vscode.CompletionItemKind.Function);
utfCodepointFunction.detail = `pub fn utf_codepoint(value: Int) -> Result(UtfCodepoint, Nil)`;
utfCodepointFunction.documentation = `Converts an integer to a UtfCodepoint. Returns an Error if the integer does not represent a valid UTF codepoint.`;
utfCodepointFunction.insertText = new vscode.SnippetString("utf_codepoint(${1:value})");

completionItems.push(utfCodepointFunction);
        

var stringutfCodepointToIntFunction = new vscode.CompletionItem("string.utf_codepoint_to_int", vscode.CompletionItemKind.Function);
stringutfCodepointToIntFunction.detail = `pub fn utf_codepoint_to_int(cp: UtfCodepoint) -> Int`;
stringutfCodepointToIntFunction.documentation = `Converts an UtfCodepoint to its ordinal code point value. Examples > utf_codepoint_to_int(128013) |> to_utf_codepoint_int 128013`;
stringutfCodepointToIntFunction.insertText = new vscode.SnippetString("string.utf_codepoint_to_int(${1:cp})");

completionItems.push(stringutfCodepointToIntFunction);
        

var utfCodepointToIntFunction = new vscode.CompletionItem("utf_codepoint_to_int", vscode.CompletionItemKind.Function);
utfCodepointToIntFunction.detail = `pub fn utf_codepoint_to_int(cp: UtfCodepoint) -> Int`;
utfCodepointToIntFunction.documentation = `Converts an UtfCodepoint to its ordinal code point value. Examples > utf_codepoint_to_int(128013) |> to_utf_codepoint_int 128013`;
utfCodepointToIntFunction.insertText = new vscode.SnippetString("utf_codepoint_to_int(${1:cp})");

completionItems.push(utfCodepointToIntFunction);
        

var string_builderappendFunction = new vscode.CompletionItem("string_builder.append", vscode.CompletionItemKind.Function);
string_builderappendFunction.detail = `pub fn append(to builder: StringBuilder, suffix second: String) -> StringBuilder`;
string_builderappendFunction.documentation = `Appends a String onto the end of some StringBuilder. Runs in constant time.`;
string_builderappendFunction.insertText = new vscode.SnippetString("string_builder.append(${1:to builder}, ${2:suffix second})");

completionItems.push(string_builderappendFunction);
        

var appendFunction = new vscode.CompletionItem("append", vscode.CompletionItemKind.Function);
appendFunction.detail = `pub fn append(to builder: StringBuilder, suffix second: String) -> StringBuilder`;
appendFunction.documentation = `Appends a String onto the end of some StringBuilder. Runs in constant time.`;
appendFunction.insertText = new vscode.SnippetString("append(${1:to builder}, ${2:suffix second})");

completionItems.push(appendFunction);
        

var string_builderappendBuilderFunction = new vscode.CompletionItem("string_builder.append_builder", vscode.CompletionItemKind.Function);
string_builderappendBuilderFunction.detail = `pub fn append_builder(to builder: StringBuilder, suffix suffix: StringBuilder) -> StringBuilder`;
string_builderappendBuilderFunction.documentation = `Appends some StringBuilder onto the end of another. Runs in constant time.`;
string_builderappendBuilderFunction.insertText = new vscode.SnippetString("string_builder.append_builder(${1:to builder}, ${2:suffix suffix})");

completionItems.push(string_builderappendBuilderFunction);
        

var appendBuilderFunction = new vscode.CompletionItem("append_builder", vscode.CompletionItemKind.Function);
appendBuilderFunction.detail = `pub fn append_builder(to builder: StringBuilder, suffix suffix: StringBuilder) -> StringBuilder`;
appendBuilderFunction.documentation = `Appends some StringBuilder onto the end of another. Runs in constant time.`;
appendBuilderFunction.insertText = new vscode.SnippetString("append_builder(${1:to builder}, ${2:suffix suffix})");

completionItems.push(appendBuilderFunction);
        

var string_builderbyteSizeFunction = new vscode.CompletionItem("string_builder.byte_size", vscode.CompletionItemKind.Function);
string_builderbyteSizeFunction.detail = `pub fn byte_size(builder: StringBuilder) -> Int`;
string_builderbyteSizeFunction.documentation = `Returns the size of the StringBuilder in bytes.`;
string_builderbyteSizeFunction.insertText = new vscode.SnippetString("string_builder.byte_size(${1:builder})");

completionItems.push(string_builderbyteSizeFunction);
        

var byteSizeFunction = new vscode.CompletionItem("byte_size", vscode.CompletionItemKind.Function);
byteSizeFunction.detail = `pub fn byte_size(builder: StringBuilder) -> Int`;
byteSizeFunction.documentation = `Returns the size of the StringBuilder in bytes.`;
byteSizeFunction.insertText = new vscode.SnippetString("byte_size(${1:builder})");

completionItems.push(byteSizeFunction);
        

var string_builderconcatFunction = new vscode.CompletionItem("string_builder.concat", vscode.CompletionItemKind.Function);
string_builderconcatFunction.detail = `pub fn concat(builders: List(StringBuilder)) -> StringBuilder`;
string_builderconcatFunction.documentation = `Joins a list of builders into a single builder. Runs in constant time.`;
string_builderconcatFunction.insertText = new vscode.SnippetString("string_builder.concat(${1:builders})");

completionItems.push(string_builderconcatFunction);
        

var concatFunction = new vscode.CompletionItem("concat", vscode.CompletionItemKind.Function);
concatFunction.detail = `pub fn concat(builders: List(StringBuilder)) -> StringBuilder`;
concatFunction.documentation = `Joins a list of builders into a single builder. Runs in constant time.`;
concatFunction.insertText = new vscode.SnippetString("concat(${1:builders})");

completionItems.push(concatFunction);
        

var string_builderfromStringFunction = new vscode.CompletionItem("string_builder.from_string", vscode.CompletionItemKind.Function);
string_builderfromStringFunction.detail = `pub fn from_string(string: String) -> StringBuilder`;
string_builderfromStringFunction.documentation = `Converts a string into a builder. Runs in constant time.`;
string_builderfromStringFunction.insertText = new vscode.SnippetString("string_builder.from_string(${1:string})");

completionItems.push(string_builderfromStringFunction);
        

var fromStringFunction = new vscode.CompletionItem("from_string", vscode.CompletionItemKind.Function);
fromStringFunction.detail = `pub fn from_string(string: String) -> StringBuilder`;
fromStringFunction.documentation = `Converts a string into a builder. Runs in constant time.`;
fromStringFunction.insertText = new vscode.SnippetString("from_string(${1:string})");

completionItems.push(fromStringFunction);
        

var string_builderfromStringsFunction = new vscode.CompletionItem("string_builder.from_strings", vscode.CompletionItemKind.Function);
string_builderfromStringsFunction.detail = `pub fn from_strings(strings: List(String)) -> StringBuilder`;
string_builderfromStringsFunction.documentation = `Converts a list of strings into a builder. Runs in constant time.`;
string_builderfromStringsFunction.insertText = new vscode.SnippetString("string_builder.from_strings(${1:strings})");

completionItems.push(string_builderfromStringsFunction);
        

var fromStringsFunction = new vscode.CompletionItem("from_strings", vscode.CompletionItemKind.Function);
fromStringsFunction.detail = `pub fn from_strings(strings: List(String)) -> StringBuilder`;
fromStringsFunction.documentation = `Converts a list of strings into a builder. Runs in constant time.`;
fromStringsFunction.insertText = new vscode.SnippetString("from_strings(${1:strings})");

completionItems.push(fromStringsFunction);
        

var string_builderisEmptyFunction = new vscode.CompletionItem("string_builder.is_empty", vscode.CompletionItemKind.Function);
string_builderisEmptyFunction.detail = `pub fn is_empty(builder: StringBuilder) -> Bool`;
string_builderisEmptyFunction.documentation = `Inspects a builder to determine if it is equivalent to an empty string. Examples > from_string("ok") |> is_empty False  > from_string("") |> is_empty True  > from_strings([]) |> is_empty True`;
string_builderisEmptyFunction.insertText = new vscode.SnippetString("string_builder.is_empty(${1:builder})");

completionItems.push(string_builderisEmptyFunction);
        

var isEmptyFunction = new vscode.CompletionItem("is_empty", vscode.CompletionItemKind.Function);
isEmptyFunction.detail = `pub fn is_empty(builder: StringBuilder) -> Bool`;
isEmptyFunction.documentation = `Inspects a builder to determine if it is equivalent to an empty string. Examples > from_string("ok") |> is_empty False  > from_string("") |> is_empty True  > from_strings([]) |> is_empty True`;
isEmptyFunction.insertText = new vscode.SnippetString("is_empty(${1:builder})");

completionItems.push(isEmptyFunction);
        

var string_builderisEqualFunction = new vscode.CompletionItem("string_builder.is_equal", vscode.CompletionItemKind.Function);
string_builderisEqualFunction.detail = `pub fn is_equal(a: StringBuilder, b: StringBuilder) -> Bool`;
string_builderisEqualFunction.documentation = `Compares two builders to determine if they have the same textual content. Comparing two iodata using the == operator may return False even if they have the same content as they may have been build in different ways, so using this function is often preferred. Examples > from_strings(["a", "b"]) == from_string("ab") False  > is_equal(from_strings(["a", "b"]), from_string("ab")) True`;
string_builderisEqualFunction.insertText = new vscode.SnippetString("string_builder.is_equal(${1:a}, ${2:b})");

completionItems.push(string_builderisEqualFunction);
        

var isEqualFunction = new vscode.CompletionItem("is_equal", vscode.CompletionItemKind.Function);
isEqualFunction.detail = `pub fn is_equal(a: StringBuilder, b: StringBuilder) -> Bool`;
isEqualFunction.documentation = `Compares two builders to determine if they have the same textual content. Comparing two iodata using the == operator may return False even if they have the same content as they may have been build in different ways, so using this function is often preferred. Examples > from_strings(["a", "b"]) == from_string("ab") False  > is_equal(from_strings(["a", "b"]), from_string("ab")) True`;
isEqualFunction.insertText = new vscode.SnippetString("is_equal(${1:a}, ${2:b})");

completionItems.push(isEqualFunction);
        

var string_builderjoinFunction = new vscode.CompletionItem("string_builder.join", vscode.CompletionItemKind.Function);
string_builderjoinFunction.detail = `pub fn join(builders: List(StringBuilder), with sep: String) -> StringBuilder`;
string_builderjoinFunction.documentation = `Joins the given builders into a new builder separated with the given string`;
string_builderjoinFunction.insertText = new vscode.SnippetString("string_builder.join(${1:builders})");

completionItems.push(string_builderjoinFunction);
        

var joinFunction = new vscode.CompletionItem("join", vscode.CompletionItemKind.Function);
joinFunction.detail = `pub fn join(builders: List(StringBuilder), with sep: String) -> StringBuilder`;
joinFunction.documentation = `Joins the given builders into a new builder separated with the given string`;
joinFunction.insertText = new vscode.SnippetString("join(${1:builders})");

completionItems.push(joinFunction);
        

var string_builderlowercaseFunction = new vscode.CompletionItem("string_builder.lowercase", vscode.CompletionItemKind.Function);
string_builderlowercaseFunction.detail = `pub fn lowercase(builder: StringBuilder) -> StringBuilder`;
string_builderlowercaseFunction.documentation = `Converts a builder to a new builder where the contents have been lowercased.`;
string_builderlowercaseFunction.insertText = new vscode.SnippetString("string_builder.lowercase(${1:builder})");

completionItems.push(string_builderlowercaseFunction);
        

var lowercaseFunction = new vscode.CompletionItem("lowercase", vscode.CompletionItemKind.Function);
lowercaseFunction.detail = `pub fn lowercase(builder: StringBuilder) -> StringBuilder`;
lowercaseFunction.documentation = `Converts a builder to a new builder where the contents have been lowercased.`;
lowercaseFunction.insertText = new vscode.SnippetString("lowercase(${1:builder})");

completionItems.push(lowercaseFunction);
        

var string_buildernewFunction = new vscode.CompletionItem("string_builder.new", vscode.CompletionItemKind.Function);
string_buildernewFunction.detail = `pub fn new() -> StringBuilder`;
string_buildernewFunction.documentation = `Create an empty StringBuilder. Useful as the start of a pipe chaining many builders together.`;
string_buildernewFunction.insertText = new vscode.SnippetString("string_builder.new(${1:})");

completionItems.push(string_buildernewFunction);
        

var newFunction = new vscode.CompletionItem("new", vscode.CompletionItemKind.Function);
newFunction.detail = `pub fn new() -> StringBuilder`;
newFunction.documentation = `Create an empty StringBuilder. Useful as the start of a pipe chaining many builders together.`;
newFunction.insertText = new vscode.SnippetString("new(${1:})");

completionItems.push(newFunction);
        

var string_builderprependFunction = new vscode.CompletionItem("string_builder.prepend", vscode.CompletionItemKind.Function);
string_builderprependFunction.detail = `pub fn prepend(to builder: StringBuilder, prefix prefix: String) -> StringBuilder`;
string_builderprependFunction.documentation = `Prepends a String onto the start of some StringBuilder. Runs in constant time.`;
string_builderprependFunction.insertText = new vscode.SnippetString("string_builder.prepend(${1:to builder}, ${2:prefix prefix})");

completionItems.push(string_builderprependFunction);
        

var prependFunction = new vscode.CompletionItem("prepend", vscode.CompletionItemKind.Function);
prependFunction.detail = `pub fn prepend(to builder: StringBuilder, prefix prefix: String) -> StringBuilder`;
prependFunction.documentation = `Prepends a String onto the start of some StringBuilder. Runs in constant time.`;
prependFunction.insertText = new vscode.SnippetString("prepend(${1:to builder}, ${2:prefix prefix})");

completionItems.push(prependFunction);
        

var string_builderprependBuilderFunction = new vscode.CompletionItem("string_builder.prepend_builder", vscode.CompletionItemKind.Function);
string_builderprependBuilderFunction.detail = `pub fn prepend_builder(to builder: StringBuilder, prefix prefix: StringBuilder) -> StringBuilder`;
string_builderprependBuilderFunction.documentation = `Prepends some StringBuilder onto the start of another. Runs in constant time.`;
string_builderprependBuilderFunction.insertText = new vscode.SnippetString("string_builder.prepend_builder(${1:to builder}, ${2:prefix prefix})");

completionItems.push(string_builderprependBuilderFunction);
        

var prependBuilderFunction = new vscode.CompletionItem("prepend_builder", vscode.CompletionItemKind.Function);
prependBuilderFunction.detail = `pub fn prepend_builder(to builder: StringBuilder, prefix prefix: StringBuilder) -> StringBuilder`;
prependBuilderFunction.documentation = `Prepends some StringBuilder onto the start of another. Runs in constant time.`;
prependBuilderFunction.insertText = new vscode.SnippetString("prepend_builder(${1:to builder}, ${2:prefix prefix})");

completionItems.push(prependBuilderFunction);
        

var string_builderreplaceFunction = new vscode.CompletionItem("string_builder.replace", vscode.CompletionItemKind.Function);
string_builderreplaceFunction.detail = `pub fn replace(in builder: StringBuilder, each pattern: String, with substitute: String) -> StringBuilder`;
string_builderreplaceFunction.documentation = `Replaces all instances of a pattern with a given string substitute.`;
string_builderreplaceFunction.insertText = new vscode.SnippetString("string_builder.replace(${1:in builder}, ${2:each pattern}, ${3:with substitute})");

completionItems.push(string_builderreplaceFunction);
        

var replaceFunction = new vscode.CompletionItem("replace", vscode.CompletionItemKind.Function);
replaceFunction.detail = `pub fn replace(in builder: StringBuilder, each pattern: String, with substitute: String) -> StringBuilder`;
replaceFunction.documentation = `Replaces all instances of a pattern with a given string substitute.`;
replaceFunction.insertText = new vscode.SnippetString("replace(${1:in builder}, ${2:each pattern}, ${3:with substitute})");

completionItems.push(replaceFunction);
        

var string_builderreverseFunction = new vscode.CompletionItem("string_builder.reverse", vscode.CompletionItemKind.Function);
string_builderreverseFunction.detail = `pub fn reverse(builder: StringBuilder) -> StringBuilder`;
string_builderreverseFunction.documentation = `Converts a builder to a new builder with the contents reversed.`;
string_builderreverseFunction.insertText = new vscode.SnippetString("string_builder.reverse(${1:builder})");

completionItems.push(string_builderreverseFunction);
        

var reverseFunction = new vscode.CompletionItem("reverse", vscode.CompletionItemKind.Function);
reverseFunction.detail = `pub fn reverse(builder: StringBuilder) -> StringBuilder`;
reverseFunction.documentation = `Converts a builder to a new builder with the contents reversed.`;
reverseFunction.insertText = new vscode.SnippetString("reverse(${1:builder})");

completionItems.push(reverseFunction);
        

var string_buildersplitFunction = new vscode.CompletionItem("string_builder.split", vscode.CompletionItemKind.Function);
string_buildersplitFunction.detail = `pub fn split(iodata: StringBuilder, on pattern: String) -> List(   StringBuilder, )`;
string_buildersplitFunction.documentation = `Splits a builder on a given pattern into a list of builders.`;
string_buildersplitFunction.insertText = new vscode.SnippetString("string_builder.split(${1:iodata}, ${2:on pattern})");

completionItems.push(string_buildersplitFunction);
        

var splitFunction = new vscode.CompletionItem("split", vscode.CompletionItemKind.Function);
splitFunction.detail = `pub fn split(iodata: StringBuilder, on pattern: String) -> List(   StringBuilder, )`;
splitFunction.documentation = `Splits a builder on a given pattern into a list of builders.`;
splitFunction.insertText = new vscode.SnippetString("split(${1:iodata}, ${2:on pattern})");

completionItems.push(splitFunction);
        

var string_buildertoStringFunction = new vscode.CompletionItem("string_builder.to_string", vscode.CompletionItemKind.Function);
string_buildertoStringFunction.detail = `pub fn to_string(builder: StringBuilder) -> String`;
string_buildertoStringFunction.documentation = `Turns an StringBuilder into a String This function is implemented natively by the virtual machine and is highly optimised.`;
string_buildertoStringFunction.insertText = new vscode.SnippetString("string_builder.to_string(${1:builder})");

completionItems.push(string_buildertoStringFunction);
        

var toStringFunction = new vscode.CompletionItem("to_string", vscode.CompletionItemKind.Function);
toStringFunction.detail = `pub fn to_string(builder: StringBuilder) -> String`;
toStringFunction.documentation = `Turns an StringBuilder into a String This function is implemented natively by the virtual machine and is highly optimised.`;
toStringFunction.insertText = new vscode.SnippetString("to_string(${1:builder})");

completionItems.push(toStringFunction);
        

var string_builderuppercaseFunction = new vscode.CompletionItem("string_builder.uppercase", vscode.CompletionItemKind.Function);
string_builderuppercaseFunction.detail = `pub fn uppercase(builder: StringBuilder) -> StringBuilder`;
string_builderuppercaseFunction.documentation = `Converts a builder to a new builder where the contents have been uppercased.`;
string_builderuppercaseFunction.insertText = new vscode.SnippetString("string_builder.uppercase(${1:builder})");

completionItems.push(string_builderuppercaseFunction);
        

var uppercaseFunction = new vscode.CompletionItem("uppercase", vscode.CompletionItemKind.Function);
uppercaseFunction.detail = `pub fn uppercase(builder: StringBuilder) -> StringBuilder`;
uppercaseFunction.documentation = `Converts a builder to a new builder where the contents have been uppercased.`;
uppercaseFunction.insertText = new vscode.SnippetString("uppercase(${1:builder})");

completionItems.push(uppercaseFunction);
        

var urimergeFunction = new vscode.CompletionItem("uri.merge", vscode.CompletionItemKind.Function);
urimergeFunction.detail = `pub fn merge(base: Uri, relative: Uri) -> Result(Uri, Nil)`;
urimergeFunction.documentation = `Resolves a URI with respect to the given base URI. The base URI must be an absolute URI or this function will return an error. The algorithm for merging uris is described in RFC 3986.`;
urimergeFunction.insertText = new vscode.SnippetString("uri.merge(${1:base}, ${2:relative})");

completionItems.push(urimergeFunction);
        

var mergeFunction = new vscode.CompletionItem("merge", vscode.CompletionItemKind.Function);
mergeFunction.detail = `pub fn merge(base: Uri, relative: Uri) -> Result(Uri, Nil)`;
mergeFunction.documentation = `Resolves a URI with respect to the given base URI. The base URI must be an absolute URI or this function will return an error. The algorithm for merging uris is described in RFC 3986.`;
mergeFunction.insertText = new vscode.SnippetString("merge(${1:base}, ${2:relative})");

completionItems.push(mergeFunction);
        

var urioriginFunction = new vscode.CompletionItem("uri.origin", vscode.CompletionItemKind.Function);
urioriginFunction.detail = `pub fn origin(uri: Uri) -> Result(String, Nil)`;
urioriginFunction.documentation = `Fetches the origin of a URI. Returns the origin of a uri as defined in RFC 6454 The supported URI schemes are http and https. URLs without a scheme will return Error. Examples > assert Ok(uri) = parse("http://example.com/path?foo#bar") > origin(uri) Ok("http://example.com")`;
urioriginFunction.insertText = new vscode.SnippetString("uri.origin(${1:uri})");

completionItems.push(urioriginFunction);
        

var originFunction = new vscode.CompletionItem("origin", vscode.CompletionItemKind.Function);
originFunction.detail = `pub fn origin(uri: Uri) -> Result(String, Nil)`;
originFunction.documentation = `Fetches the origin of a URI. Returns the origin of a uri as defined in RFC 6454 The supported URI schemes are http and https. URLs without a scheme will return Error. Examples > assert Ok(uri) = parse("http://example.com/path?foo#bar") > origin(uri) Ok("http://example.com")`;
originFunction.insertText = new vscode.SnippetString("origin(${1:uri})");

completionItems.push(originFunction);
        

var uriparseFunction = new vscode.CompletionItem("uri.parse", vscode.CompletionItemKind.Function);
uriparseFunction.detail = `pub fn parse(uri_string: String) -> Result(Uri, Nil)`;
uriparseFunction.documentation = `Parses a compliant URI string into the Uri Type. If the string is not a valid URI string then an error is returned. The opposite operation is uri.to_string. Examples > parse("https://example.com:1234/a/b?query=true#fragment") Ok(   Uri(     scheme: Some("https"),     userinfo: None,     host: Some("example.com"),     port: Some(1234),     path: "/a/b",     query: Some("query=true"),     fragment: Some("fragment")   ) )`;
uriparseFunction.insertText = new vscode.SnippetString("uri.parse(${1:uri_string})");

completionItems.push(uriparseFunction);
        

var parseFunction = new vscode.CompletionItem("parse", vscode.CompletionItemKind.Function);
parseFunction.detail = `pub fn parse(uri_string: String) -> Result(Uri, Nil)`;
parseFunction.documentation = `Parses a compliant URI string into the Uri Type. If the string is not a valid URI string then an error is returned. The opposite operation is uri.to_string. Examples > parse("https://example.com:1234/a/b?query=true#fragment") Ok(   Uri(     scheme: Some("https"),     userinfo: None,     host: Some("example.com"),     port: Some(1234),     path: "/a/b",     query: Some("query=true"),     fragment: Some("fragment")   ) )`;
parseFunction.insertText = new vscode.SnippetString("parse(${1:uri_string})");

completionItems.push(parseFunction);
        

var uriparseQueryFunction = new vscode.CompletionItem("uri.parse_query", vscode.CompletionItemKind.Function);
uriparseQueryFunction.detail = `pub fn parse_query(query: String) -> Result(   List(#(String, String)),   Nil, )`;
uriparseQueryFunction.documentation = `Parses an urlencoded query string into a list of key value pairs. Returns an error for invalid encoding. The opposite operation is uri.query_to_string. Examples > parse_query("a=1&b=2") Ok([#("a", "1"), #("b", "2")])`;
uriparseQueryFunction.insertText = new vscode.SnippetString("uri.parse_query(${1:query})");

completionItems.push(uriparseQueryFunction);
        

var parseQueryFunction = new vscode.CompletionItem("parse_query", vscode.CompletionItemKind.Function);
parseQueryFunction.detail = `pub fn parse_query(query: String) -> Result(   List(#(String, String)),   Nil, )`;
parseQueryFunction.documentation = `Parses an urlencoded query string into a list of key value pairs. Returns an error for invalid encoding. The opposite operation is uri.query_to_string. Examples > parse_query("a=1&b=2") Ok([#("a", "1"), #("b", "2")])`;
parseQueryFunction.insertText = new vscode.SnippetString("parse_query(${1:query})");

completionItems.push(parseQueryFunction);
        

var uripathSegmentsFunction = new vscode.CompletionItem("uri.path_segments", vscode.CompletionItemKind.Function);
uripathSegmentsFunction.detail = `pub fn path_segments(path: String) -> List(String)`;
uripathSegmentsFunction.documentation = `Splits the path section of a URI into it’s constituent segments. Removes empty segments and resolves dot-segments as specified in section 5.2 of the RFC. Examples > path_segments("/users/1") ["users" ,"1"]`;
uripathSegmentsFunction.insertText = new vscode.SnippetString("uri.path_segments(${1:path})");

completionItems.push(uripathSegmentsFunction);
        

var pathSegmentsFunction = new vscode.CompletionItem("path_segments", vscode.CompletionItemKind.Function);
pathSegmentsFunction.detail = `pub fn path_segments(path: String) -> List(String)`;
pathSegmentsFunction.documentation = `Splits the path section of a URI into it’s constituent segments. Removes empty segments and resolves dot-segments as specified in section 5.2 of the RFC. Examples > path_segments("/users/1") ["users" ,"1"]`;
pathSegmentsFunction.insertText = new vscode.SnippetString("path_segments(${1:path})");

completionItems.push(pathSegmentsFunction);
        

var uripercentDecodeFunction = new vscode.CompletionItem("uri.percent_decode", vscode.CompletionItemKind.Function);
uripercentDecodeFunction.detail = `pub fn percent_decode(value: String) -> Result(String, Nil)`;
uripercentDecodeFunction.documentation = `Decodes a percent encoded string. Examples > percent_decode("100%25+great") Ok("100% great")`;
uripercentDecodeFunction.insertText = new vscode.SnippetString("uri.percent_decode(${1:value})");

completionItems.push(uripercentDecodeFunction);
        

var percentDecodeFunction = new vscode.CompletionItem("percent_decode", vscode.CompletionItemKind.Function);
percentDecodeFunction.detail = `pub fn percent_decode(value: String) -> Result(String, Nil)`;
percentDecodeFunction.documentation = `Decodes a percent encoded string. Examples > percent_decode("100%25+great") Ok("100% great")`;
percentDecodeFunction.insertText = new vscode.SnippetString("percent_decode(${1:value})");

completionItems.push(percentDecodeFunction);
        

var uripercentEncodeFunction = new vscode.CompletionItem("uri.percent_encode", vscode.CompletionItemKind.Function);
uripercentEncodeFunction.detail = `pub fn percent_encode(value: String) -> String`;
uripercentEncodeFunction.documentation = `Encodes a string into a percent encoded representation. Examples > percent_encode("100% great") "100%25%20great"`;
uripercentEncodeFunction.insertText = new vscode.SnippetString("uri.percent_encode(${1:value})");

completionItems.push(uripercentEncodeFunction);
        

var percentEncodeFunction = new vscode.CompletionItem("percent_encode", vscode.CompletionItemKind.Function);
percentEncodeFunction.detail = `pub fn percent_encode(value: String) -> String`;
percentEncodeFunction.documentation = `Encodes a string into a percent encoded representation. Examples > percent_encode("100% great") "100%25%20great"`;
percentEncodeFunction.insertText = new vscode.SnippetString("percent_encode(${1:value})");

completionItems.push(percentEncodeFunction);
        

var uriqueryToStringFunction = new vscode.CompletionItem("uri.query_to_string", vscode.CompletionItemKind.Function);
uriqueryToStringFunction.detail = `pub fn query_to_string(query: List(#(String, String))) -> String`;
uriqueryToStringFunction.documentation = `Encodes a list of key value pairs as a URI query string. The opposite operation is uri.parse_query. Examples > query_to_string([#("a", "1"), #("b", "2")]) "a=1&b=2"`;
uriqueryToStringFunction.insertText = new vscode.SnippetString("uri.query_to_string(${1:query}, ${2:String})");

completionItems.push(uriqueryToStringFunction);
        

var queryToStringFunction = new vscode.CompletionItem("query_to_string", vscode.CompletionItemKind.Function);
queryToStringFunction.detail = `pub fn query_to_string(query: List(#(String, String))) -> String`;
queryToStringFunction.documentation = `Encodes a list of key value pairs as a URI query string. The opposite operation is uri.parse_query. Examples > query_to_string([#("a", "1"), #("b", "2")]) "a=1&b=2"`;
queryToStringFunction.insertText = new vscode.SnippetString("query_to_string(${1:query}, ${2:String})");

completionItems.push(queryToStringFunction);
        

var uritoStringFunction = new vscode.CompletionItem("uri.to_string", vscode.CompletionItemKind.Function);
uritoStringFunction.detail = `pub fn to_string(uri: Uri) -> String`;
uritoStringFunction.documentation = `Encodes a Uri value as a URI string. The opposite operation is uri.parse. Examples > let uri = Uri(Some("http"), None, Some("example.com"), ...) > to_string(uri) "http://example.com"`;
uritoStringFunction.insertText = new vscode.SnippetString("uri.to_string(${1:uri})");

completionItems.push(uritoStringFunction);
        

var toStringFunction = new vscode.CompletionItem("to_string", vscode.CompletionItemKind.Function);
toStringFunction.detail = `pub fn to_string(uri: Uri) -> String`;
toStringFunction.documentation = `Encodes a Uri value as a URI string. The opposite operation is uri.parse. Examples > let uri = Uri(Some("http"), None, Some("example.com"), ...) > to_string(uri) "http://example.com"`;
toStringFunction.insertText = new vscode.SnippetString("to_string(${1:uri})");

completionItems.push(toStringFunction);
        
    
    return completionItems;
  }
}

