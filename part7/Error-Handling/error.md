 Exception handling:-
 Exception handling is a technique in programming to handle errors and exceptions that occur during the execution of a program. In JavaScript, the try and catch statements are used to handle exceptions.

 We should always keep the complex code in a try-catch statement.The try statement and catch statement in javaScript come in pairs


 there are two main types of errors in javaScript.

 1.Syntax Errors:- Occur when the code syntax is not proper and the javaScript interpreter can't understand it.This error can't be handled with exception handling.

 2.Runtime Errors:- Occurs while the code is executing, such as when trying to access an undefined variable or when a function is not found.These errors can be handled using exception handling.

 Only run-time errors whic occur during the execution can be handled using exception handling in javaScript.


 try :-
 it is a piece of  code that needs to be tested the execution of code.The block of code is checked if it has any errors or not.if Any errors are encountered, then the try{} statement passes it to the catch{} statement block.Once the control is handled over the catch block of the code block under the catch{} will ve executed.

 catch:-
 the catch statement defines a block of code that gets executed when any errors are encountered within the  try block.The catch block gets executed only when there is any errors present in the try block and the error needs to be addressed.Otherwise the catch block gets skipped .the catch block gets executed only after the execution of the try block.



syntax:-

try{
//block of code for testing.
}catch{
//block of code for addressing errors.

}finaly {
  //block of code run after the try -catch .
  it always run whether the  try or catch statement is executed or not.
  
}
