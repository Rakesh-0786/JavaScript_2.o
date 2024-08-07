// In class private data are bind with the this keyword but not in function
class Person{
    constructor(name,age){
        this.name=name;
        this._age=age;
    }

    get age(){
        return this._age + 4;
    }
    set age(value){
        if(value>0){
            this._age=value;
        } else{
            console.log('Invalid age');
        }

    }

}

const obj=new Person("Rakesh",21);
console.log(obj._age);
// console.log(obj.age) //undefined
console.log(obj.age)

