// Scope tell the Accessibility means who can accesss the particuler or specific block 

// Types:-

// Global Scope
// Local-Scope - in local Scope there are Two Terms one is Function and other is Block
// Module - Common.js, module


// Function
/*
Function myFun(){
// This is Function Scope
    if(){
        // This is blocked Scope
    }
}
*/

// Example:- Function and Blocked Scope

var globalVariable=10;

function scope(){
    var value=10;
    console.log("We can Access the global variable anywhere: ",globalVariable );
}
scope();

// This is a local variable and blocked scope variable we can't access the local variable outside the function 
console.log(value);

console.log(globalVariable);



