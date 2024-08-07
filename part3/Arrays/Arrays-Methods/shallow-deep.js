/*In programming, shallow copy and deep copy are terms used to describe how objects (or arrays) are copied. The main difference between them lies in how the nested objects or elements are handled during the copying process.

Shallow Copy
A shallow copy of an object is a copy of the original object that duplicates only the first level of the object’s properties. For any nested objects (objects within objects), the shallow copy only copies references to those objects, not the objects themselves. This means that if the nested object is modified, the changes will be reflected in both the original and the copied objects because they share the same reference.

Example:
javascript
Copy code
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };

shallowCopy.a = 10;
shallowCopy.b.c = 20;

console.log(original);     // Outputs: { a: 1, b: { c: 20 } }
console.log(shallowCopy);  // Outputs: { a: 10, b: { c: 20 } }
In this example, shallowCopy has a reference to the same object as original.b. Therefore, changes to shallowCopy.b.c also affect original.b.c.

Deep Copy
A deep copy of an object duplicates not only the object itself but also all objects nested within it. This means that changes made to the nested objects in the copied object will not affect the original object, and vice versa, because they do not share references.

Example:
javascript
Copy code
let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.a = 10;
deepCopy.b.c = 20;

console.log(original);  // Outputs: { a: 1, b: { c: 2 } }
console.log(deepCopy);  // Outputs: { a: 10, b: { c: 20 } }
In this example, deepCopy and original are completely independent; changes to deepCopy.b.c do not affect original.b.c. */


// Shallow copy:-

let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };

shallowCopy.a = 10;
shallowCopy.b.c = 20;

console.log(original);     // Outputs: { a: 1, b: { c: 20 } }
console.log(shallowCopy);  // Outputs: { a: 10, b: { c: 20 } }
