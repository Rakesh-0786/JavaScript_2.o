// Currying is pattern in function programming 
// with the help of this we can call the function in other way and also pass the different -different arguments
// and in each argument it call the new function

// Traditional function that takes multiple arguments
function multiply(a, b) {
    return a * b;
  }
  
  // Curried version of the multiply function
  function curriedMultiply(a) {
    return function(b) {
      return a * b;
    };
  }
  
  const multiplyBy2 = curriedMultiply(2); // Partial application
  console.log(multiplyBy2(3));  // Output: 6 (2 * 3)
  
  const multiplyBy5 = curriedMultiply(5); // Partial application
  console.log(multiplyBy5(4));  // Output: 20 (5 * 4)
  