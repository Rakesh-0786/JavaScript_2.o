class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log("Some sound")
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed;
    }
    makeSound(){
        console.log("Woof Woof!!")
    }
}

class Cat extends Animal{
    constructor(name,color){
        super(name)
        this.color=color;
    }
    makeSound(){
        console.log("Meow!")
    }
}

const obj=new Animal("Gen")
const obj2=new Dog("ted","GR")
const obj3=new Cat("TOM","White")

obj.makeSound()
obj3.makeSound();
obj2.makeSound()
