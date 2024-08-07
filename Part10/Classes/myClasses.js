class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello My Name is ${this.name} and My age is ${this.age}`)
    }


}

//  objects are created in class the help of new keyword
const Obj=new Person("Rakesh",22);
Obj.greet();