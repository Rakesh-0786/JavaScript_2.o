/*
Regular expressions (regex or regexp) in JavaScript are patterns used to match character combinations in strings. They are a powerful tool for searching, matching, and manipulating text based on specific patterns.

Syntax
A regular expression is created using either:

Literal Notation: Enclosed between two slashes /pattern/
Constructor Notation: Using the RegExp constructor new RegExp('pattern')
Basic Patterns
Literal Characters: Matches the exact characters (e.g., /hello/ matches the string "hello").
Metacharacters: Special characters with specific meanings (e.g., . matches any character except newline).
Common Metacharacters
.: Matches any single character except newline.
^: Matches the beginning of a string.
$: Matches the end of a string.
*: Matches 0 or more occurrences of the preceding element.
+: Matches 1 or more occurrences of the preceding element.
?: Matches 0 or 1 occurrence of the preceding element.
[]: Matches any one of the characters inside the brackets (e.g., [abc] matches a, b, or c).
[^]: Matches any character not inside the brackets.
{n}: Matches exactly n occurrences of the preceding element.
{n,}: Matches n or more occurrences of the preceding element.
{n,m}: Matches between n and m occurrences of the preceding element.
|: Acts as a logical OR (e.g., a|b matches a or b).
\d: Matches any digit (equivalent to [0-9]).
\D: Matches any non-digit character.
\w: Matches any word character (alphanumeric plus underscore).
\W: Matches any non-word character.
\s: Matches any whitespace character (spaces, tabs, etc.).
\S: Matches any non-whitespace character.
Example Usage
Matching a Pattern
javascript
Copy code
const pattern = /hello/;
const text = "hello world";

console.log(pattern.test(text)); // Output: true
Extracting Matches
javascript
Copy code
const pattern = /(\d+)/;
const text = "I have 2 apples and 5 oranges.";

const result = text.match(pattern);
console.log(result[0]); // Output: "2" (the first match)
Replacing Text
javascript
Copy code
const pattern = /world/;
const text = "hello world";

const newText = text.replace(pattern, "JavaScript");
console.log(newText); // Output: "hello JavaScript"
Using Flags
Flags modify the behavior of a regex pattern:

g: Global search (find all matches).
i: Case-insensitive search.
m: Multiline search.
javascript
Copy code
const pattern = /hello/i; // Case-insensitive search
const text = "Hello world";

console.log(pattern.test(text)); // Output: true
Key Points
Regular expressions are a powerful tool for pattern matching in strings.
Modifiers and metacharacters allow complex search patterns.
Methods such as test(), match(), replace(), search(), and split() utilize regular expressions.
Regular expressions can be intricate and are worth exploring in-depth if you frequently work with text processing and pattern matching. If you have any specific questions or need more examples, feel free to ask!


 */


let pattern='rk'

let regExOne= new RegExp(pattern)

let flag='gi'
let regExTwo=new RegExp(pattern,flag)

let regExThree=/rk/gi

const strToCheck= "rk is growing at a rapid speed and recently they are working on rkSkilss to create skills based rkcontent"

const result=regExThree.test(strToCheck);
console.log(result)

const anotherResult=strToCheck.match(regExThree)
console.log(anotherResult)