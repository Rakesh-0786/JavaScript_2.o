// Default beahivoutr of js is synchronous it means it execute the code line by line
console.log("Rakesh-kumar");
console.log("Ravi");

/* Primitive data-types:
1.String- "", '', ``
2.Number-1,90,20,6 ,Infinity, NAN, 

3.boolean -false, true
4.Undefined
5.Null
6.BigInt-2^53-1
7.Symbol


// Reference Types:-
1.Object -key-value
2.Array
3.Function -Represents a block of code designed to perform a particular task. 
4.Date ->Represents dates and times. The Date object provides methods for manipulating and formatting dates and times.

5.RegExp(Regular Expression) ->Represents a pattern for matching text
6.Map -> Represents a collection of key-value pairs, where keys can be of any data type
7.Set -> Represents a collection of unique values. Sets automatically eliminate duplicate entries.
 
8.WeakMap:-Represents a collection of unique values. Sets automatically eliminate duplicate entries.

9.WeakSet:-Similar to Set, but the values are weakly referenced.

Primitive types are immutable
Reference types:-cannot be changed once created
*/

console.log(typeof(Infinity));

console.log(NaN==NaN);
console.log(typeof(NaN));


// undefined means take space in the memory but doesnot provide any output beacuse doesnot anything initialised 
let score;
console.log(score);

// NULL
console.log(typeof null); // "object"

let user = null; // user is explicitly set to null
let person = null; // person will later be assigned an actual object

console.log(null == undefined); // true
console.log(null === undefined); // false

let item = null;
if (item === null) {
  console.log('item is null');
}


// Slice take two parameter start and end end not inculuded
let text="Rakesg , Bananan, Liwi";
console.log(text.slice(7,13));

let str="Apple, banana, kiwi" ;
console.log(str.substr(7,9));

let txt="hello";
let txt1="world";
let txt3=txt.concat(" ",txt1);
console.log(txt3)