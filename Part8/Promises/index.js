// bydefault when we create a new promise then the state of that promise is Pending
// When our asynchronous task is completed then the promise state move to from the pending to fulfilled.
// and if we got any error in asynchronous code then the promise state change from pending to rejected.

function createPromise(){
    return new Promise(function executer(resolve, reject) {
        // your asynchronous code here
        setTimeout(function f(){
            console.log("timer Done!");
            resolve("10");
            // reject("Error");
        },3000)
    });
}
console.log("Start!");
let x= createPromise(); //placeholder 
console.log("Got a new Promise");
x.then(function f(value){
    console.log("Promise Done",value)
}).catch(function g(value){
    console.log("handled", value);
}).finally(function fn(){
    console.log("Finally")
})

console.log("End");
for(let i=0;i<1000000;i++){  //blocking piece of code
    
}
