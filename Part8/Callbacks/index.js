/*
A callback function is a function passed as an argument to another function. The purpose of the callback is to allow the calling function to execute some code once a certain task is completed or an event occurs.

Key points about callback functions:

Asynchronous Operations: Callbacks are often used in asynchronous operations, such as reading files, making network requests, or handling events. The callback function gets executed after the asynchronous operation completes.

Control Flow: Callbacks help manage the flow of code execution, especially when dealing with tasks that may take some time or happen in the future.

Higher-Order Functions: A function that takes another function as an argument (or returns a function) is known as a higher-order function. Callbacks are commonly used with higher-order functions.

Flexibility: They provide flexibility by allowing you to define what should be done once the main function has finished its job. This allows you to decouple the main operation from the additional tasks to be performed.

Example of a callback function:

javascript
Copy code
function processData(data, callback) {
    // Simulate processing data
    console.log("Processing data: " + data);
    
    // Execute the callback function once processing is done
    callback();
}

function onComplete() {
    console.log("Data processing is complete.");
}

// Use the processData function with a callback
processData("Sample Data", onComplete);
In this example:

processData is the higher-order function.
onComplete is the callback function.
After processing the data, processData calls the onComplete function to signify that the processing is finished.
Asynchronous Callback Example:

javascript
Copy code
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000); // Simulate a 2-second delay
}

function onDataFetched() {
    console.log("Callback: Data is now available.");
}

fetchData(onDataFetched);
In this asynchronous example:

fetchData simulates a data fetch operation with a delay.
After the data is fetched (after 2 seconds), the onDataFetched callback function is called. */

// function processData(data, callback){
//     console.log("Processing data: "+ data);

//     // Execute the callback function once processing is done
//     callback();
// }

// function onComplete(){
//     console.log("Data Processing is complete.");
// }

// function onComplete(){
//     console.log("Data procesing is complete.")
// }

// processData("Sample Data", onComplete);





// callback
// function h(x, fn){
//     //h-> is a hof
//     //fn-> callback
//     console.log(x*x);
//     fn();
// }
// h(10, function(){
//     console.log("Done with callback")
// });


// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     },2000)
// }

// function onDataFetched(){
//     console.log("Callback: Data is now available.");
// }

// fetchData(onDataFetched);

// EXAMPLE:-
// synchronous callback
// function h(x, fn){
//     console.log(x*x);
//     fn(x*x);
// }
// // h(10, function(){
// //     console.log("Done With Callback")
// // })
// h(10, exec)

// function exec(n){
//     console.log("squared value is" ,n);
// }


// Asynchronous callback:-
console.log("Start");
setTimeout(() => {
    console.log("Timer Done!")
},500)

console.log("End");
for(let i=0;i<10000000;i++) {}
