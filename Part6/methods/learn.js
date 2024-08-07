// forEach

// let arr=[2,3,4];

// arr.forEach(function(element, index, arr){
//     console.log(`Elements:${element} Index:${index} Array:${arr}`);
// })

// // arrow function

// arr.forEach((element,index,arr)=>{
//     console.log(`Elements:${element} Index:${index} Array:${arr}`);
// })

const heros=['naagraj','doga','dhruva','maniraj']

heros.forEach((ele,index,arr) => {
    console.log(ele.toUpperCase())
})


// map

let arr=[1,2,3,4];
arr.map((element,index,arr) => {
    console.log(element, index,arr);
})

heros.map((h) => console.log(h.toUpperCase()))



// filter
// The filter method in JavaScript is used to create a new array with all elements that pass a test specified by a provided function. It does not modify the original array but returns a new array containing only the elements that satisfy the condition.

// Syntax
// javascript
// Copy code
// array.filter(callback(element[, index[, array]])[, thisArg])

const numbers=[1,2,3,4,5,6,7,8,9,10];

const evenNumbers=numbers.filter((num =>{
    return num%2===1;
}))
console.log(evenNumbers);

console.log(heros);
const herosWithRaj=heros.filter((h) =>{
    return h.endsWith('raj');
})

console.log(herosWithRaj);

// reduce
const cartBill=[20,30,50];
const sumOfCartBill= cartBill.reduce((prev,curr) =>{
    return  prev+curr},0);
console.log(sumOfCartBill);



/*
The every method in JavaScript tests whether all elements in an array pass a test implemented by a provided function. It returns a boolean value: true if all elements satisfy the condition, and false otherwise.

Syntax
javascript
Copy code
array.every(callback(element[, index[, array]])[, thisArg]) */

const gameScore=[200,300,310,250,150,'rakeshj']
// check is all values are numbers
console.log(typeof gameScore[1]);
const gameScorCheck=gameScore.every((v) => {
     return typeof v==='number';
})
console.log('Check: ',gameScorCheck);

// find:- find method check the condition and if the condtion are satisfied then it print the first satisfied value only.

const above200=gameScore.find((score) => {
    return score > 200;
})
console.log(above200)