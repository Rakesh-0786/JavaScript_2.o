// A function are called the higherOrder function when it is treated as a variable or assign as a variable.

// A function that returns a function or takes other functions as arguments is called a higher-order function.

// we can pass the function as a parameter through another functions

// const powerTwo= function (n){
//     return n** 2;
// }

// function powerCube(powerTwo, n){
//     return powerTwo(n)*n;

// }
// let result=powerCube(powerTwo,3);
// console.log(result);

// // we can return as a function also

// function sayHello(){
//     return () => {
//         console.log("Hello Rakesh")
//     }
// }
// let guessValue=sayHello()
// console.log(guessValue);

// guessValue();




// we can pass the mutliple function inside a function

const higherOrder=n =>{
    const oneFun= m =>{
        const twoFun= p =>{
            return m+n+p
        }
        return twoFun
    }
    return oneFun
}

// calling
let result=higherOrder(2)(3)(4);
console.log(result);


const myNums=[2,3,4,5]

const sumArray= arr => {
    let total= 0;
    arr.forEach(function(element){
        total+=element;
    })
    return total;
}
// console.log(sumArray(myNums))


setInterval(()=>{
    console.log("Helo Rakesh!", Math.random())
},1000);


setTimeout(() =>{
    console.log("Rakesh!")
},2000)