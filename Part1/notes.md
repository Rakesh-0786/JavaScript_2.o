JavaScript helps to display our elements content and other is to make interactive 

javaScript has ability to store any datatypes reference

kya js ki ability hai ki wo kissi bhii dsta type ke referece ko store kr skti hai kaise?

Haan, JavaScript ki ability hai ki wo kisi bhi data type ke reference ko store kar sakti hai. JavaScript mein, data types ko do main categories mein divide kiya gaya hai: primitive types aur reference types.

Primitive Types:

Primitive types include numbers, strings, booleans, null, undefined, and symbols.
Primitive values are immutable and are directly stored in memory.
When you assign a primitive value to a variable, it holds the actual value.
Example:

javascript
Copy code
let num = 10; // num holds the primitive value 10
let str = "Hello"; // str holds the primitive value "Hello"
Reference Types:

Reference types include objects, arrays, and functions.
Reference values are mutable and are stored as references (or pointers) to their location in memory.
When you assign a reference type to a variable, it holds a reference to the object, not the actual object itself.
Example:

javascript
Copy code
let obj = { name: "John", age: 30 }; // obj holds a reference to the object
let arr = [1, 2, 3]; // arr holds a reference to the array
In JavaScript, when you assign an object or array to another variable, both variables will point to the same reference. Hence, changes made to the object or array through one variable will be reflected when accessed through the other variable.

javascript
Copy code
let person = { name: "Alice" };
let anotherPerson = person; // anotherPerson holds a reference to the same object as person

anotherPerson.name = "Bob"; // Modify the object through anotherPerson
console.log(person.name); // Output: "Bob" - person reflects the change
Is tarah se, JavaScript ki reference types ko store karne ki capability ke zariye, aap multiple variables ko ek hi data structure ke saath link kar sakte hain.


Initially js is client side rendering language means this is used only in browser console but with the help of js runtime environment we can also used js as server side  

js run synchronously but with the help of node it is capable for runnig the asynchrounous task 

#History:-
-1995
-Navigator(browser)
-ECMAScript
-jquery- SPA is comming from the jquery and say that page is not reloaded 

-react.js- But it works good then jquery on Virtual Dom


ECMASCRIPT-:
ECMASCRIPT is a es standarization and version of es
ECMAScript (often abbreviated as ES) is a scripting language specification that serves as the foundation for several programming languages, including JavaScript. It standardizes the core features and syntax of these languages to ensure consistency and interoperability across different implementations.

Here’s a breakdown of what ECMAScript entails:

Standardization:

ECMAScript is maintained by ECMA International, an industry standards organization. The specification ensures that JavaScript and similar languages conform to a common set of rules.
Versions:

ECMAScript has gone through several versions since its initial release. Major versions include:
ES1 (1997): The first edition, establishing the basics of the language.
ES3 (1999): Introduced regular expressions, try/catch exception handling, and more.
ES5 (2009): Added features like strict mode, JSON support, and new methods for arrays and objects.
ES6 (2015), also known as ES2015: Brought significant updates such as classes, modules, arrow functions, template literals, and enhanced object literals.
ES7 (2016), ES8 (2017), and beyond: Each subsequent version has introduced incremental improvements and new features, such as async/await, shared memory, and new data structures.
Core Features:

Syntax: Defines the syntax for language constructs (e.g., variable declarations, loops, conditionals).
Types: Specifies built-in types like numbers, strings, and objects.
Objects: Details how objects work, including properties and prototypes.
Functions: Defines how functions are declared, called, and behave.
Error Handling: Specifies mechanisms for handling errors and exceptions.
Implementation:

Different JavaScript engines (like V8 in Chrome, SpiderMonkey in Firefox, and JavaScriptCore in Safari) implement ECMAScript standards to provide consistent behavior across various web browsers and environments.
In summary, ECMAScript is a crucial specification that provides a standardized blueprint for implementing scripting languages like JavaScript, ensuring compatibility and consistency across different platforms and implementations.






