// function with a single parameters

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Rakesh");
// greet("Kumar")
// greet();


//function with a default parameters

// function greet(name="Ravi"){
//     console.log(`Hello ${name}`)
// }
// greet("Rakesh");
// greet("Kumaar");
// greet();


// we can pass the multiple number of parameters in functions

// function calculateSum(num1, num2,num3,num4,num5){
//     // console.log("Rakesh")
//       return num1+num2+num3+num4+num5;
// }
// console.log(calculateSum(5,7,8,9,6));




// we can pass the paramater as any data types

// const num=[1,2,3,4,5];
// function printArrayElements(arr){

//     for(let  i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     }
// }

// printArrayElements(num);



// we can pass the object as parameters

// function greetings({city, name}){
//     console.log(`Hello ${name} from city ${city}`)
// }

// greetings({name:"Rakesh", city:"Delhi"});



// we can handle the unlimited number of arguments withount passing any parameters
// in JavaScript there is an inbuilt object arguments that handle the any number of arguments withouting any passing the parameters
// bedefault this arguments is availabe in every functions

// function sumWithArguments(){
//     // console.log(arguments);
//     // it is an array like structure 

//     // we can converts the arguments object into array like structure
//     const argsArray=Array.from(arguments)
//     // console.log(argsArray);

//     let sum=argsArray.reduce(function(acc, curr){
//         return acc+curr;
//     },0)
// //  arguments.reduce()
// return sum;

// }
// console.log(sumWithArguments(1,2,3));
// console.log(sumWithArguments(1,2,3,4,5,6));


// or we can access the infite numbers of arguments in array with the help of rest.
// or Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array

function sumWithArguments(...numbers){
    console.log(numbers);

    let sum=numbers.reduce(function(acc, curr){
        return acc+curr;
    },0)
    return sum;
}

console.log(sumWithArguments(1,2,3));
console.log(sumWithArguments(1,2,4,5,7,8))
