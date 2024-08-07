// An IIFE (Immediately Invoked Function Expression) is a JavaScript design pattern that involves creating and executing a function expression immediately after it is defined. It's commonly used to create a new scope and encapsulate variables, preventing them from polluting the global namespace.

// Sytax:
// (function(){
//     console.log("Rakesh")
// })();

// with arrow function

// (() => {
//     console.log("This is self-invoking function")
// })();

// Uses:-
// Avoid pollution of global namespace

// const greet='global variable';

// const greeting= () =>{
//     return "Hello Global Variable"
// }

// (() => {
//     const greet="IIFE variable";
//     const greeting=() =>{
//         return 'Hello IIFE function';
//     }
//     console.log(greet);
//     console.log(greeting());
// })();

// console.log(greet);
// console.log(greeting())



// data privacy
// (() =>{
//     let password='4321';
//     const showPassword= () => {
//         console.log('Password -', password);
//     }
//     showPassword()

// })();
// showPassword();



// module
const point =(() =>{
    let count=0;

    return {
        balance: () => {
            return count;
        },
        increment:() => {
            count++;
        },
        reset:() => {
            count=0;
        },
    }
})()

point.increment()
point.increment()
console.log(point.balance());