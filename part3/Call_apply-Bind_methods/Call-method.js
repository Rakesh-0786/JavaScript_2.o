// Call Methods:-

// const user1={
//     name:"Rakesh",
//     // greetings:function(){
//     //     console.log(`Hello, ${this.name}`)
//     // }
// }

// function greetings(city, age){
//     console.log(`Hello, ${this.name} from ${city} of age ${age} `)
// }


// const user2={
//     name:"Shashwat",
// }
// // user1.greetings.call(user2);    //this key points whenever we call the functions and this points to the .leftside i.e user1
// // greetings.call(user1,"Rupnagar",20);
// // greetings.call(user2,"Ludhiana",21);

// // Apply methods
// // apply methods is similar to call methods but there is one minor difference is that is we pass the elements into an array.
//  greetings.apply(user1,["Rupnagar",20]);
// greetings.apply(user2,["Ludhiana",21]);



// Bind methods:-
// Creates  a new function with fixed this

const person={
    name:"Rakesh",
    sayHi:function(city, age){
        console.log(`Hello, ${this.name} from ${city} of age ${age}`)
    }
}

const anotherPerson={
    name:"Shashwat",
}

const boundFunction=person.sayHi.bind(anotherPerson, "Rupnagar",20);

boundFunction();