// Array is no-primitive type of dataStructure that is used to store the data
// It is used to store the Ordered List of An Elements at contigious memory location.


// Declarations

// empty array
// using square brackets
// let numbersArray=[]
// console.log(typeof(numbersArray)); //object
// console.log(Array.isArray(numbersArray)); 


// let numbersArray=[10,20,30,40,50];
// console.log(numbersArray);

// // using array constructors:
// let fruits= new Array("Apples", "Oranges","Bananas");
// console.log(fruits);


// Using array literals

// let mixedArray=Array('Apples',true,10,{name:"Rakesh"});

// let mixedArray= ['Apples',true,10,{name:"Rakesh"}];
// console.log(mixedArray);



// Accessing an array Elements

// let nums=[10,20,304,40,50];
// console.log(nums[0]);

// We can replace the array elements value

// nums[2]=true;
// nums[5]=9;
// nums.pop(nums[5]);

// console.log(nums.length);


// iterations of arrays

// let Num=[10,20,30,40,50,60];
// for(let i=0;i<Num.length;i++){
//     console.log(`at index ${i} value is ${Num[i]}`);
// }


// While
// let Num=[10,20,30,40,50,60];

// let i=0;
// while(i<Num.length){
//     console.log(`At Index ${i} value is ${Num[i]}`);
//     i++;
// }


// for of loop

let Num=[10,20,30,40,50,60];
for( let num of Num){
    console.log(`value is ${num}`);
}

