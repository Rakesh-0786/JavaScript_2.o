/*The for loop and while loop are both control flow statements used to repeatedly execute a block of code in C++, JavaScript, and many other programming languages. However, they are used in different scenarios and have some distinct characteristics:

For Loop
A for loop is typically used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.

Syntax:
cpp
Copy code
for (initialization; condition; increment) {
    // Code block to be executed
}
Example:
cpp
Copy code
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}
Characteristics:
Initialization: Initializes the loop control variable(s) at the start.
Condition: The loop runs as long as this condition is true.
Increment/Decrement: Updates the loop control variable(s) after each iteration.
Pre-defined Iterations: Best used when the number of iterations is known beforehand.
Compact Syntax: All three loop-control statements are in one line.
While Loop
A while loop is typically used when the number of iterations is not known beforehand and depends on a condition being true. The condition is evaluated before the code block is executed.

Syntax:
cpp
Copy code
while (condition) {
    // Code block to be executed
    // Update statement (increment/decrement)
}
Example:
cpp
Copy code
int i = 0;
while (i < 5) {
    std::cout << i << std::endl;
    i++;
}
Characteristics:
Condition: The loop runs as long as this condition is true.
Initialization and Update: The initialization and update of the loop control variable(s) can be handled within the loop body or before the loop starts.
Unknown Iterations: Best used when the number of iterations depends on dynamic conditions.
Flexibility: Can potentially create infinite loops if the condition never becomes false.
Key Differences:
Initialization:

for loop: Initialization happens within the loop statement.
while loop: Initialization happens outside the loop, typically before the loop starts.
Condition Check:

for loop: Condition is checked before each iteration.
while loop: Condition is also checked before each iteration, but more flexibility in managing loop variables and conditions.
Increment/Decrement:

for loop: Typically done within the loop statement.
while loop: Must be handled within the loop body, providing more flexibility.
Use Cases:

for loop: Ideal for iterating a specific number of times.
while loop: Ideal for iterating based on a condition that might not have a predefined number of iterations.
Syntax and Readability:

for loop: More compact and concise, good for simple iterations.
while loop: Provides more flexibility, good for more complex conditions and control flow.
Both loops can be used interchangeably in many cases, but choosing the right one can make the code more readable and appropriate for the task at hand. */

let i=1;
while(i<=5){
    console.log(i);
    i++;
}