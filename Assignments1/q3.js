// // You are developin2 a form validation system. Write a pro2ram that takes user information(such as name,
// email, a2e) and uses the typeof operator to check the data type of each input. Print appropriate messa2es
// like "Name should be a strin2," "Email should be a strin2," or "02e should be a number." if any field is not
// proper.


let name = "Mithun";
let email = "mithun@.com";
let age = 21;

// Validate name
if (typeof name == 'string') {
    console.log("Name should be a string.");
} else {
    console.log("Name is valid.");
}

// Validate email
if (typeof email == 'string') {
    console.log("Email should be a string.");
} else {
    console.log("Email is valid.");
}

// Validate age
if (typeof age == 'number') {
    console.log("Age should be a number.");
} else {
    console.log("Age is valid.");
}


let count=0;

while(count<=10){
    count++;
    console.log(count);
}