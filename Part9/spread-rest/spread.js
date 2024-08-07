// Applications
// new array
// this is used for creating a new copy from the original arrays

// let nums=[10,20,30,40];
// let newArr= [...nums];
// newArr[0]=100;
// console.log(newArr);
// console.log(nums)



// adding new values
// we can also used for adding the new values in the arrays

// let arr=[10,20,30,40];
// let newArr=[1,...arr, 50];
// console.log(newArr)


// object
let obj={
    name:"Rakesh",
    course:"Full Stack Development"
}
let newObj={...obj, rating:9}
console.log(newObj)


// concatenate two arrays
let arr1=[10,20];
let arr2=[30,40];

let concatenateArr=[...arr1,...arr2]
console.log(concatenateArr)


// spread an array of arguments as individuals
let nums=[10,20,30];

function calculateMax(num1,num2,num3){
    return Math.max(num1,num2,num3)
}
console.log('Maximum Number is:',calculateMax(...nums))


// can be uses with strings
let name="Rakesh";

let arrayOfCharacters=[...name];

console.log(arrayOfCharacters);


// string operator with objects

let obj1={
    name:"Rakesh",
    course:"Full Stack"
}

let obj2={
    rating:5,
    reviews:500
}

let newObjc={...obj1, ...obj2};
console.log(newObjc)