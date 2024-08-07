// let myName="Rakesh     "
// let myCourse="JS         "
// console.log(myName.length) //11
// console.log(myCourse.length) //11
// console.log(myName.trueLength);

// Understanding Prototypes
// Prototype Chain Basics:

// Object Prototype: All objects in JavaScript inherit from Object.prototype by default. This is why methods added to Object.prototype are available to all objects.
// Array Prototype: Arrays inherit from Array.prototype, and thus they have access to methods defined on Array.prototype.
// Function Prototype: Functions have their own prototype and can have methods defined on Function.prototype.
// Custom Prototypes:

// You can add methods to Object.prototype, Array.prototype, or any other prototype. These methods will be available to instances of those types.
// Example Breakdown
// Let's go through your code step by step:

// let myHeros = ["thor", "Spiderman"];

// let heroPower = {
//     thor: "hammer",
//     Spiderman: "sling",
//     getSpiderPower: function() {
//         console.log(`Spidy power is ${this.Spiderman}`);
//     }
// };

// // Adding a method to Object.prototype
// Object.prototype.rakesh = function() {
//     console.log(`rakesh is present in all objects`);
// };

// // Adding a method to Array.prototype
// Array.prototype.heyRakesh = function() {
//     console.log(`Rakesh says hello`);
// };

// // Accessing the custom methods
// myHeros.rakesh(); // Works because `myHeros` is an array, and arrays inherit from `Array.prototype`.
// myHeros.heyRakesh(); // Works because `heyRakesh` is added to `Array.prototype`.

// Accessing the custom methods on heroPower
// heroPower.rakesh(); // This would work because `heroPower` is an object and inherits from `Object.prototype`.

// heroPower.heyRakesh(); // This does NOT work because `heroPower` is a plain object and does not inherit from `Array.prototype`.


// Why heroPower Does Not Access heyRakesh
// Inheritance Chain: heroPower is an object, and it inherits from Object.prototype. Methods added to Object.prototype are available to all objects, but heroPower does not inherit from Array.prototype. It does not have access to methods defined on Array.prototype (like heyRakesh).
// Specific Prototype: heyRakesh is added to Array.prototype, so it is only available to array instances. heroPower is not an array, so it does not have access to this method.
// Summary
// Object.prototype: Methods added here are available to all objects.
// Array.prototype: Methods added here are available to all arrays.
// heroPower: Inherits from Object.prototype but not from Array.prototype, so it does not have access to methods added to Array.prototype.
// myHeros: Is an array and inherits from Array.prototype, so it has access to methods defined there, including the custom heyRakesh method.
// Adding methods to Object.prototype or Array.prototype can affect all instances of those types, but you need to ensure you're aware of the type-specific prototypes when working with methods.


// Inheritance
// __proto__ is a legacy property in JavaScript that allows you to access or set the prototype of an object. It is not part of the official ECMAScript standard but is widely supported by browsers for compatibility reasons.

// const User={
// name:"rakesh",
// email:"rakesh@gmail.com"
// }

// const Teacher= {
//     makeVideo:true
// }

// const TeachingSupport= {
//     isAvailable:false
// }

// const TASupport= {
//     makeAssignment:'JS Assignment',
//     fullTime:true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__=User

// // Modern Syntax:-
// Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName="Shashwat   "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"rakesh".trueLength()
"iceTea".trueLength()
