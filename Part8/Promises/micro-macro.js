/*
In JavaScript, the event loop handles asynchronous code execution using
 two main queues: the macrotask queue and the microtask queue.
  Understanding these queues is crucial for managing how and when different 
  types of asynchronous code are executed.

  Macrotask Queue (Task Queue)
The macrotask queue contains tasks that are typically initiated by events or operations such as:

Timers: setTimeout, setInterval
I/O Operations: File read/write operations
UI Rendering: Paint operations or DOM updates
Network Requests: XMLHttpRequest or fetch
Tasks in the macrotask queue are executed one at a time, and the event loop processes them in the order they were added. 
After processing a macrotask, the event loop will then process all microtasks before moving to the next macrotask.


Microtask Queue (Next Tick Queue)
The microtask queue, also known as the next tick queue, 
contains tasks that need to be executed after the currently 
executing script but before the next rendering or macrotask.
 Microtasks include:
Promises: .then, .catch, and .finally callbacks
Mutation Observers: DOM mutation changes
Microtasks are generally used for tasks that need 
to be executed as soon as possible after the current task,
 but without waiting for the next macrotask.


 Event Loop Execution Order
1.Execute Current Script: The JavaScript engine executes the currently running script or function.

2.Process Microtasks: After the script execution, all tasks in the microtask queue are processed. This includes promise callbacks and other microtasks.
3.Render (if needed): If there are any UI updates or reflows required, they are performed.
4.Process Macrotasks: The event loop picks the next macrotask from the macrotask queue and executes it.
5.Repeat: The process repeats, starting from step 2.
 */

// Example:
console.log("Start");
setTimeout(()=>{
    console.log("MacroTask 1")
},1000);

Promise.resolve().then(() => {
    console.log("MicroTask1")
});

setTimeout(() => {
    console.log("MacroTask 2")
},0);

Promise.resolve().then(() => {
    console.log("MicroTask 2")
});

console.log("End");

/*
Execution Order:

Synchronous Code:

Logs: 'Start'
Logs: 'End'
Microtasks:

Executes all microtasks before moving to the next macrotask.
Logs: 'Microtask 1'
Logs: 'Microtask 2'
Macrotasks:

Executes macrotasks after microtasks.
Logs: 'Macrotask 1'
Logs: 'Macrotask 2'
Output:

sql
Copy code
Start
End
Microtask 1
Microtask 2
Macrotask 1
Macrotask 2
Summary
Macrotask Queue: Handles longer tasks such as timers, I/O, and rendering events. Processes tasks one at a time.
Microtask Queue: Handles shorter tasks such as promise callbacks and mutation observers. Processes tasks immediately after the current script and before the next macrotask.
Event Loop: Manages the execution of code by processing the microtask queue before moving on to the macrotask queue, ensuring that microtasks are completed as soon as possible.
Understanding the differences between these queues helps manage the execution order of asynchronous operations and ensures that tasks are handled efficiently in JavaScript. */