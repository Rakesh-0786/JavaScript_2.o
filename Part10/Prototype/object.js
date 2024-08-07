// Prototype: A special object associated with a constructor function, used to define methods and properties shared by all instances of that constructor.

// A prototype is an object associated with a constructor function, from which newly created objects inherit properties and methods. It serves as a blueprint for creating instances and enables shared behavior across all instances created by that constructor."
// Key Points
// Inheritance: The prototype allows objects created by a constructor function to inherit properties and methods from the prototype object.
// Shared Methods: Methods defined on the prototype are shared among all instances of the constructor, saving memory and ensuring consistency.
// Object Creation: When a new object is created with a constructor function, it automatically gets a reference to the constructor's prototype, which it uses to look up properties and methods that are not found directly on the object.
function multipleBy5(num){
    return  num*5
}

multipleBy5.power=2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
// multipleBy5.prototype: This will output {} because multipleBy5 is not intended to be used as a constructor function. The prototype property is used with constructor functions to set up inheritance and is otherwise an empty object if the function is not used with new.
console.log(multipleBy5.prototype)


// Constructor function
function createUser(username, score){
    this.username=username;
    this.score=score;
}


// Adding methods to the prototype
createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.PrintMe=function(){
    console.log(`Price is ${this.score}`);
}

// Creating Instances
const chai=new createUser("chai",25);
const tea= new createUser("tea",250);

// Calling the Prototype methods
chai.PrintMe();
