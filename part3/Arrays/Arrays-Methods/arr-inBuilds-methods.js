// Array Methods
// Add Remove items

// let numbers=[10,20,30,40,50];
// // add elements at the end of the array
// numbers.push(60);
// numbers.push(70);
// console.log(numbers);

// // remove the last elements from the array

// let poppedItem=numbers.pop();
// console.log("DeletedItems is :" ,poppedItem)

// console.log(numbers);



// begining of the array:-
// let numbers=[10,20,30,40,50];
// // add elements at the begining of the array
// numbers.unshift(7);
// numbers.unshift(5);
// console.log(numbers);

// // remove elements from at the begining of the array

// numbers.shift();
// console.log(numbers);



// let arr=["I","Love", "JavaScript"];

// // slice methods
// // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array is not modified.

// // Syntax:
// // arr.slice(startIndex, endIndex) not including the lastIndex

// console.log(arr.slice(0,2));
// console.log(arr);


// another example:-

// let arr1=['t','e','s','t'];
// // if we didnot add the lastIndex then it print the selected startIndex to remaing elements.
// // console.log(arr1.slice(-2));
// console.log(arr1.slice(1));

// // slice methods create the shallow copy of the original arrays
// let nums=[10,20,30,40,50];
// let copyNums=nums.slice();
// nums[0]=100;
// console.log(copyNums);
// console.log(nums);




// Splice Methods:-

// add, delete , replace

// syntax:
// arr.splice(startIndex, delecount, arg1, arg2,arg3...argN)


// let arr=["I","study","Programming","Right","Now"];

// // delete
// // arr.splice(1,1);

// // delete replace
// arr.splice(0,3,"Listen","Music");
// console.log(arr);

// insert only

// let arr=["I","study","Programming"];
// arr.splice(2,0,"complex","skill");
// console.log(arr);



// from back

// let arr=[1,2,3,19];
// arr.splice(-1,0,3,4);
// console.log(arr);




// concat:-
// it is used to add the two more arrays into a single array

// let arr=[10,20];
// let arr1=[30,40];
// console.log(arr.concat(arr1));

// console.log(arr.concat([50,60],[70,80]))
// console.log(arr.concat([30,40],50,60))




// iterate
// forEach():-
/*In JavaScript, forEach() is a method available on arrays that allows you to iterate over each element of the array. It executes a provided function once for each array element, in order. This method is particularly useful for performing operations on each element of an array without manually managing a loop index or the length of the array.

Syntax
javascript
Copy code
array.forEach(function(currentValue, index, array) {
    // Your logic here
});
currentValue: The value of the current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach() is being called on. */

// let arr=[10,20,30];

// arr.forEach(function(item, index, array){
//     console.log(`${item} is at index ${index} in ${array}`)
// })




// Searching in Array:-

// indexOf- this methods return the indexof the elements and if the elements are not present then it print the -1

// let arr=[1,0,false,"Rakesh",'t']
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(1));
// console.log(arr.indexOf("Rakesh"));
// console.log(arr.indexOf('t'));
// console.log(arr.indexOf(100));
// console.log(arr.indexOf(null));



// Includes :- this truns the boolean value that is true or false
// let arr=[1,0,false,"Rakesh",'t']
// console.log(arr.includes(0));
// console.log(arr.includes(false));
// console.log(arr.includes(1));
// console.log(arr.includes("Rakesh"));
// console.log(arr.includes('t'));
// console.log(arr.includes(100));
// console.log(arr.includes(null));


// find:-

let users=[
    {id:1 , name:"Rakesh"},
    {id:2 , name:"Shashwat"},
    {id:3 , name:"Subham"},
]

// let user= users.find(function(item, index,array){
//     console.log(item,index,array)

//     return item.id==1
// })
// console.log(user);



// findIndex:-

// let user =users.findIndex(function(item, index, array){
//     // console.log()
//     return item.name=="Rak"
// })
// console.log(user);



// Reverse methods:-

// let nums=[10,20,30,40,50];

// nums.reverse()
// console.log(nums);



// Split and join

// Split:
/*In JavaScript, the split() method is used to divide a string into an array of substrings based on a specified separator. This method is particularly useful for breaking down a string into manageable parts, such as splitting a sentence into words or parsing data from a CSV (Comma-Separated Values) string.

Syntax
javascript
Copy code
string.split(separator, limit); */
// split is used to store the string into array.
// let names="Rakesh, Shashwat, Subham"

// let arr=names.split(",");
// for(let name of arr){
//     console.log(`Send Message to ${name}`)
// }
// console.log(arr)


// Join :- In JavaScript, the join() method is used to combine all the elements of an array into a single string. It joins the array elements using a specified separator (delimiter). If no separator is provided, the default is a comma (,).

let names='Rakesh , Shashwat, Sahil'

let nameArray=names.split(',')
console.log(nameArray);

let str=nameArray.join(":");
console.log(str);