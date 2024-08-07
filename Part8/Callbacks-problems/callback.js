// Callback is a function passed as a argument to another function.
// callback functions are used when there is an asynchronous process.
// asynchrnous are those line code that are not responded immediately but response after some times.
// callbacks are used to handle the asynchronous task.

// there are two types of problems are occures in callbacks
// 1. Callback hell
// 2.Inversion of Control

console.log("Start")
function getSquare(n,callback){
    setTimeout(()=>{
        callback( n*n);
    },1000)
}
getSquare(5, function(result){
    console.log(result)
});
console.log("End")


