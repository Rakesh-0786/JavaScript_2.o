// With the help of destruturing we can easily extract the particular from any data set and from any iterable like array, object ,set ,map etc and assign it into any variable
// iterable like array, object , set , nested array, nested object.
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.
// destructruing the special symbol that is intoruduced in es6 
// destructring is arranged in ordereing way.like 1,2,3,4 etc.

// let nums=[10,20,30,40];
// // array destructring
// const[a,b,c]=nums;
// console.log([a]);
// console.log([b]);
// console.log([c])

// console.log("Hello")
// const str='Rakesh kumar'.split(" ");
// let [firstName, sirName]=str;
// console.log([firstName,sirName]);



// ,,comma is used for skip the value
// we can skip the unwanted value from the array with the help of comma

// let nums=[10,20,30,40,50,60];
// const[a,,c,d]=nums;
// console.log([a]);
// console.log([c]);
// console.log([d])


// string
// let [a,b,c]='hello';

// console.log(a);
// console.log(b)
// console.log(c)



// Set:-
// let setData=new Set([1,1,1,2,3,4,5,2,3,4,5]);
// const[a,b,c]=setData;

// console.log(a);
// console.log(b);


// Object:-

// let user={};

// [user.name,user.sirName]="Rakesh Kumar".split(" ");

// console.log(user.name);
// console.log(user.sirName)


// Swap
// let firstName="Rakesh";
// let sirName="Kumar";

// [sirName,firstName]=[firstName,sirName];
// console.log(sirName);
// console.log(firstName)


// Object Destructuring
// const user={
//     username:'Rakesh',
//     email:'rakeshkum@gmail.com'
// };

// let {username,email}=user
// console.log(username,email);



// Default value

// let employee={
//     empId:1,
//     userName1:"RakeshKumar"
// }
// // const{empId,userName1, depart='cse'}=employee;

// // we can also change the property name and value also
// const{empId:id , userName1:nameOfUser, depart='CSE'}=employee;
// // console.log(empId);
// // console.log(userName1);
// // console.log(depart);

// console.log(id);
// console.log(nameOfUser);
// console.log(depart)


// const user1={
//     name:'Rakesh',
//     age:20,
//     city:'Delhi',
//     occupation:'Software Engineer',
//     hobbies:['coding','music','travel']
// }
// const{name, age, occupation}=user1;
// console.log(name,age,occupation);


// Smart function parameters

const user1={
    name:'Rakesh',
    age:20,
    city:'Delhi',
    occupation:'Software Engineer',
    hobbies:['coding','music','travel']
}

function specialFunc({occupation,name,age}){
    // console.log(`Name: ${name}`);
    console.log(`occupation:${occupation}`);


}
specialFunc(user1);