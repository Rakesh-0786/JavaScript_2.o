/*
The fetch API in JavaScript is used to make network requests
 to retrieve or send data to a server. It is a modern replacement
  for older methods like XMLHttpRequest, offering a simpler and more 
  flexible way to handle HTTP requests and responses. 
  
  Key Features of fetch
Promises-Based: fetch uses promises to handle asynchronous operations, making it easier to work with asynchronous data without deeply nested callbacks.

More Flexible: Provides a more powerful and flexible interface compared to XMLHttpRequest, supporting a wide range of HTTP methods, headers, and request configurations.

Stream API: Allows you to work with request and response bodies as streams, which can be useful for handling large amounts of data efficiently.
  */

fetch('http://type.fit/api/quotes')
.then(function f(response){
    return response.json();
})
.then(function f(value) {
    console.log(value)
})