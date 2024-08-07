// function add(a,b){
//     return a+b;
// }
// console.log(add(3,5));
// Arrow function also called the Lambda function
// feature of Arrow function :-
// Implicient and Explicit returns
// Explicient means when we directly use the return keywords and tells the function returns the statementf outof the function
// implicit means javaScript automatically understands that we wanted to returns the statements

// Explicit
// let sum= (a,b) => {
//     return a+b;
// }
// let result=sum(10,3);
// console.log(result);

// // Implicit:- or single line 
// let add=(a,b) => a+b;

// const ans=add(12,5);
// console.log(ans);


// Difference between Regular function and Arrow functions
// 1. is syntax difference
// 2.implicit and explicit
// 3.argument can be use in regular functions but cannot use in arrow functions.
// 4.this keyword: we cannot use the this keyword in arrow function
// 5.new keyword: we cannot use the new keyword in arrow function
// in arrow function we can create a function with implicit and explicit 
// in arrow function cannot use the arguments objects 

// Arguments with regular function 
// function add(){
//     console.log(arguments);
// }
// // agruments with arrow function
// let add1= () => console.log(arguments);

// add(10,20,30,40,50);
// add1(10,20,30,40,50);



// bindigs of this
// in arrow function this keyword is not used beacuse it is not the part of the arrow functions.


// const person ={
//     name:"John",
//     greet:function(){
//         console.log("greet:",this);
//         // greet: {name: 'John', greet: ƒ, greetTwo: ƒ}
//        // arrow-fun.js:54 Hello, My Name is John
        
//         console.log(`Hello, My Name is ${this.name}`)
//     },
//     greetTwo:() => { 
//         console.log("greetTwo",this);
//         // greetTwo Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//         // arrow-fun.js:60 Hello, My Name is 
//         console.log(`Hello, My Name is ${this.name}`);
//     }

// }

// person.greet();
// person.greetTwo();




// use for new Keyword
// new keywords automate the task.
// behind the seen it use for creating the object with constructor
// whenever we used any function as a contructor then we can simly used the  new keywords.


function RegularFunction(name){
    this.name=name;
}

const regularObj=new RegularFunction("Rakesh");
console.log(regularObj); 


const ArrowFunction= (name) => {
    this.name=name;
}
const arrowObj=new ArrowFunction("Rakesh-kumar");
console.log(arrowObj);



function newMy(...num){
    return num;
}
console.log(newMy(1,2,3,34,5,6,67,7));










