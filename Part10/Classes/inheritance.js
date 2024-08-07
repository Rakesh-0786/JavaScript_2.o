// Parent class
class Animal {
    constructor(name, age, habitat) {
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }

    describe() {
        return `${this.name} is ${this.age} years old and lives in ${this.habitat}.`;
    }
}

// child class
class Dog extends Animal {
    constructor(name, age, habitat, breed) {
        super(name, age, habitat); // Pass parameters to the parent class constructor
        this.breed = breed;
    }

    bark() {
        return `${this.name} barks.`;
    }
}

// Create instances of the child class
const myDog = new Dog('Rex', 5, 'house', 'Labrador');
console.log(myDog.describe()); 
console.log(myDog.bark());   
