// Async- it is used for define the function
// await -it is used for pause the exection until the promise get resolve or reject.
// async always returns promises
function createPromise(){
    return new Promise(function executer(resolve, reject){
        setTimeout(()=>{
            console.log("timer Done!")
            // resolve(10)
            reject(10);
        },2000)

    })
}

// Async always return the promises

// async function consume(){
//     return 10;
// }
// console.log(consume());


// await is used for pausing the execution until the promises get resolved or rejected
// await doesnot block main single thread of javaScript

async function consume(){
    try{
        console.log("Inside Function");
    const response= await createPromise();
    const response1=await createPromise();
    console.log("Response is", response);
    }catch(err){
        console.log("handled",err)

    }
    
}
console.log("Start");
consume();
console.log("End");