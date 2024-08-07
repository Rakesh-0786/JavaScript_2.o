// unordered collection

// unique values

// const setExample=new Set();
// // adding new values in Set
// setExample.add(10);
// setExample.add(20);
// setExample.add(10);
// setExample.add(20);
// setExample.add(30);
// setExample.add(40);


// console.log(setExample);
// console.log('Size of the Set:', setExample.size)

// // setExample.clear()   //it clear the whole set of the elements or values

// setExample.delete(30); //delete the one element

// console.log(setExample);




// const data= new Set();

// data.add("Rakesh");

// data.add({
//     likes:'javaScript'
// });

// console.log(data.entries());
// const data= new Set();
// data.add(10);
// data.add(20);

// data.add(30);
// data.add(40);

// function multiply(value1, value2){
//     console.log(`data[${value1}] : data[${value2 *2}]`)
// }

// // data.forEach(multiply);
// console.log(data.has(200));  //returns true if the value is present in the given set otherwise returns the false if the value is not present.
// console.log(data.keys());



// convert array into set
let arr=[10,20,30,40,10,20,30,40,10,20,30,40];
const set= new Set(arr);
console.log(set);

// convert set into an Array.
console.log(Array.from(set));