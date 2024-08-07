// Pass by value vs Pass by reference

// pass by value creates the copy of the orignal value but the changes doesnot effect the orignal value because both lies on the different memory location in the memory.

// let name='Shashwat';

// let newName=name;
// console.log(newName==name); //true

// name="Rakesh";
// console.log(newName==name); //false

// console.log(name);
// console.log(newName);


// let num1=10

// let num2=num1;

// num1=400

// console.log(num1);
// console.log(num2);


// Reference:-
// non-premitive types pass by the reference means the new object can also access the same memory location as like original memory i.e both lies on the same memory location.
// therefore the changes may effects the original value also in pass by refernce

let user={
    name:"Rakesh",
    age:20,
}
 let newUser=user;

 user.name="shashwat"
//  newUser.name="Subham"

 console.log(user);
 console.log(newUser);


let nums=[10,20,30,40]

let nums2=nums;
nums2[1]=99;
console.log(nums);
console.log(nums2);