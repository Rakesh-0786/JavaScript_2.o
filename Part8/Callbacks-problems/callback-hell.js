/*
Callback Hell, also known as Pyramid of Doom, refers to a situation 
in asynchronous programming where multiple nested callbacks make the 
code hard to read, maintain, and debug. This often happens when you
 have a series of asynchronous operations that depend on the results
  of previous ones. The code becomes deeply nested, which makes it less manageable.
 */

//   In this example, each callback depends on the result of the previous one, leading to deeply nested code.

//how to handle the callback hell?
// 1.using Promises
// 2.Async/await
// 3.Modularize your code:Break your code into smaller functions. This helps manage complexity and makes it easier to understand each part.
// 4.Use libraries:-Libraries like async.js can help manage asynchronous workflows more effectively by providing utilities for handling series, parallel execution, and error handling.

// By adopting these techniques, you can avoid callback hell and write cleaner, more maintainable asynchronous code.

console.log("Start");
function getSquare(n, callback) {
  setTimeout(() => {
    callback(n * n);
  }, 1000);
}
getSquare(2, function (result) {
  console.log(result); //4
  // we want to get again square of 4
  getSquare(result, (result2) => {
    console.log(result2); //16
    getSquare(result2, (result3) => {
      console.log(result3); //256
    });
  });
});
console.log("End");
