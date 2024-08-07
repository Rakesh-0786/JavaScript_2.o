// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous operations more efficiently and avoid callback hell, making the code more readable and manageable.

// Key Concepts
// States of a Promise:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a value.
// Rejected: The operation failed, and the promise has a reason (an error) for the failure.
// Methods:

// then(): Called when the promise is fulfilled. It takes two arguments: a callback function for the fulfilled case and another callback for the rejected case (optional).
// catch(): Called when the promise is rejected. It takes a callback function that handles the error.
// finally(): Called when the promise is settled, meaning it has either been fulfilled or rejected. It is often used for cleanup activities.


// let promise= new Promise((res,rej) => {
//     let success=true;
//     if(success){
//         res("Operation Successfully!")
//     } else{
// rej("Operation failed")
//     }
// })
// promise.
// then((mess) => {
//     console.log(mess);
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() =>{
//     console.log("promise Settled")
// })


async function myDisplay(){
    let promise= new Promise((res, rej) => {
        let success= true;
        if(success){
            res("Operation Successfull!")
        } else{
            rej("Operation Failed")
        }
    })
    return promise;
}
myDisplay()
.then((mess)=>{
    console.log(mess);
})
.catch((er)=>{
    console.log(err)
})


console.log("start");

let delayTime=setTimeout(() =>{
    console.log("DElaying")
},2000);

let ReapetTime=setInterval(()=>{
    console.log("Repeating")
    clearInterval(ReapetTime);
},1000)

console.log("End")