function Person(name,age){
    this.name=name;
    this.age=age

}

Person.prototype.greet=function(){
    console.log(`Hello, My Name is ${this.name} and my age is ${this.age}`);
}

let obj=new Person("Rakesh",21)
obj.greet();
console.log(Person.prototype)
console.log(Person.prototype.constructor);