

let num=10;  //num holds the primitive value
let str="Hello"; //str holds the primitive value

let obj={name:"Rakesh", age:30}; // obj holds a reference to the object
let arr=[1,2,3] // arr holds a reference to the array


/*In JavaScript, when you assign an object or array 
to another variable, both variables will point to the 
same reference. Hence, changes made to the object or array
 through one variable will be reflected when accessed through the
  other variable. */


  let person = { name: "Shashwat" };
  let anotherPerson = person; // anotherPerson holds a reference to the same object as person
  
  anotherPerson.name = "Bob"; // Modify the object through anotherPerson
  console.log(person.name); // Output: "Bob" - person reflects the change
  