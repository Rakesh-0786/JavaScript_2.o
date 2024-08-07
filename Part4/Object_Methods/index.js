// Objects:-
// keyed collection
// key-value pair
// more complex data



// Object literal
// empty object
// let employee={}
// let employee={
//     id:10,
//     name:"Rakesh",
//     salary:50000
// }
// console.log(employee);


// // new instance Object constructor
// const employee= new Object()

// employee.id=20;
// employee.name="Rakesh";
// employee.salary=30000;
// console.log(employee);


// custome constructors:-

// function Employee(id, name, salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;
// }
// const employee1=new Employee(40, "Rakesh",30000)

// const employee2=new Employee(10, "Shashwat", 40000)

// console.log(employee1);
// console.log(employee2);



// Accessing an Objects:-
// dot notation  and Square bracket notation

let emp={id:10, name:"Rakesh", salary:40000};

// access
// console.log(emp.id);
// console.log(emp['salary']);

// adding new data
emp.city="Rupnagar";
emp['country']='India';
console.log("Old Objects",emp)

// change data

// emp.name="Shashwat",
// emp.city="Rupnagar",
// console.log("Update Object", emp);


// deleting
delete emp.city
delete emp['country']
console.log("Updated Object", emp);



// iterating

for(const key in emp){
    // console.log(key);
    console.log(emp[key]);
}


// forEach:- iterate over Each array elements once.

const numbers=[1,2,3,4,5];
numbers.forEach((num,index) => {
    console.log(`Index ${index}:${num}`);
})


// 2. for...in Loop
// Definition: The for...in loop is used to iterate over the enumerable properties (keys) of an object. It can also be used with arrays, but it's generally not recommended for arrays due to potential issues with inheritance and unexpected results.

const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // Output:
  // name: Alice
  // age: 30
  // job: Engineer


//   3. for...of Loop
// Definition: The for...of loop is used to iterate over iterable objects (such as arrays, strings, maps, sets). It directly accesses the values of the iterable, rather than the keys.

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// Output:
// 1
// 2
// 3
// 4
// 5
