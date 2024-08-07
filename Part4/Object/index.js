// Object:-

// var emp={
//     name:"Rakesh",
//     age:20,
//     salary:50000
// }
// Key is a Object inbuilt method that is used for printing the keys in the form of array.
// and now key is in the form of array so we can apply on any array method and this proccess is called the method chaining.

// let keys=Object.keys(emp).forEach((key) => console.log(key));
// Method chaining

// console.log(Object.keys(emp));
// console.log(keys);
/*Method chaining is a common pattern in JavaScript (and other programming languages) where multiple methods are called on an object sequentially, with each method returning the object itself or another value that allows further method calls.

In your example, Object.keys(emp).forEach(...) demonstrates method chaining. Here's how:

Object.keys(emp): This method returns an array of the object's keys.

.forEach(...): The forEach method is called on the array returned by Object.keys(emp). It iterates over each key in the array and performs the provided function.

The chaining happens because Object.keys(emp) returns an array, and arrays have a forEach method, which can be called directly on the result.

Method chaining can make code more concise and readable by allowing multiple operations to be performed in a single line, without the need for intermediate variables.
 */

// var emp={
//     name:"Rakesh",
//     age:20,
//     salary:50000
// }
// Here we got the key of an  object in the form of  array.
// and now we can apply the array methods on it 
// so we use the multiple Operations in One line this the called the method chaining
// let keys=Object.keys(emp).forEach((key)=> console.log(key));
// console.log(keys);


// var emp ={
//     name:"Rakesh",
//     age:20,
//     salary:50000
// }
// console.log(Object.keys(emp)); 
// // for value 
// console.log(Object.values(emp));

// // for both key and value in the form of array
// let keyValuePairs=Object.entries(emp);
// console.log(keyValuePairs);

// // Manipulation array into Objects
// let convertToObject=Object.fromEntries(keyValuePairs);
// console.log(convertToObject);




// Assign
// Assign method is used for copying the objects

// var emp= {
//     name:"Rakesh",
//     age:21,
//     salary:50000
// }
// // assign take two input one is empty object and the other is original Object where to copy this
// // console.log(Object.assign({},emp));
// const newObject=Object.assign({},emp);
// console.log(newObject===emp);  //false beacuse the reference of  emp is different and the Reference of newObject is different



// Object.freeze
// var emp= {
//     name:"Rakesh",
//     age:21,
//     salary:50000
// }
// // but before the use of freeze method we can change this.

// emp.age=22;
// console.log(emp);
// // with freeze method we cannot add the new property in the given Object or cannot  change the value of the Object
// Object.freeze(emp);

// emp.name="Shashwat";
// console.log(emp);

// // we can also check that the object is frozen or not
// console.log(Object.isFrozen(emp));


// seal -this is same as freeze method but one thing  is different that is we can change the existing object property,

// var emp= {
//     name:"Rakesh",
//     age:21,
//     salary:50000
// }

// emp.department="IT";
// Object.seal(emp);

// emp.id=100;
// emp.name="Shashwat"
// console.log(emp);
// console.log(Object.isSealed(emp));



// // object.create:- this method is used to create a object
// let user1={name:"Rakesh"}
// // let obj=Object.create(null)
// let user2=Object.create(user1);
// user2.age=22;

// console.log(user1)
// console.log(user2)
// console.log(user2.name)



// // Object.hashown() this property is used for returning the value in the form of true or false

// var emp= {
//     name:"Rakesh",
//     age:21,
//     salary:50000
// }

// console.log(Object.hasOwn(emp, 'name'));

// // Object.getOwnPropertyNames:- this method is similar as keys methods
// console.log(Object.getOwnPropertyNames(emp));

// let descriptor=Object.getOwnPropertyDescriptor(emp, "name")
// console.log(descriptor);


// defineProperty :- it is used for defining only One property

// var  emp= {

// }
// Object.defineProperty(emp, 'name', {
//     value:'Rakesh',
//     writable:false
// })
// console.log(emp.name);

// define the multiple Descriptors

// const data= {}
// Object.defineProperties(data, {
//     username: {
//         value:"Rakesh",
//         writable:true
//     },
//     email: {
//         value:"rakesh@gmail.com",
//         writable:true
//     }
// })
// console.log(data.username);
// console.log(data.email);

// enumerable:-

const data= {}
Object.defineProperties(data, {
    username: {
        value:"Rakesh",
        enumerable:true
    },
    email: {
        value:"rakesh@gmail.com",
        enumerable:true
    },
    phone:{
        value:"8982650998",
        enumerable:false
    }
})
for(const key in data){
    console.log(`${key} : ${data[key]}`)
}
