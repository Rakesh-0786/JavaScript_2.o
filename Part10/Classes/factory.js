function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`Hello, My Name is ${this.name} and I am ${this.age} years old`);
    }
}

let obj1=new Person("Rakesh",22);
obj1.greet();
let Obj2=new Person("Shashwat",22);
Obj2.greet();

// new keyword:-constructor are created with the help of new keywords
// new keyword behind the scene:-
// 1.first create the empty object {},
// 2.In second: then it set the prototype in this empty object
// 3.in third step:- It binds the this
// finaly it return the this object

  

// Factory function:-
// In JavaScript, a factory function is a function that creates and returns new objects. Unlike constructor functions or classes, factory functions do not use the new keyword. Instead, they directly return an object that can be instantiated with specific properties and methods.

function createPerson(name,age){
    return{
        name:name,
        age:age,
        greet:function(){
            console.log(`Hello, My Name is ${this.name} and I am ${this.age} years old`);
        }
    }
}

let jane=createPerson("jane",21)
jane.greet();