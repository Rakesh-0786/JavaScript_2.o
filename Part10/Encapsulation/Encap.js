// Private data are used with the #hash and _ underscore

// function for private the data
// Private data can be access directly means it cannot use with the this keyword
// and also access with the help of getter method.
// A getter method allows you to retrieve the value of a property. It is defined using the get keyword.
// A setter method allows you to modify the value of a property. It is defined using the set keyword.
function Person(name,age){
    this.name=name;
    let _age=age;  //private
    this.greet=function(){
        console.log(`Hello, My Name is ${this.name} and I am ${_age} old`);
    }
    this.getAge=function(){
        return _age
    }
    this.setAge=function(age){
        if(age>0){
            _age=age
        } else {
            console.log('Invalid age')
        }
    }

}

let obj=new Person("Rakesh",21);
// console.log(obj.name);
// console.log(obj._age);
// obj.greet();
console.log(obj.getAge());