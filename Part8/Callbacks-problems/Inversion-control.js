// Inversion of Control short of ioc?
// Inversion of Control: This is when you hand over control of your code to a third party (usually a library or a third-party API).
// IOC is where we controll the flow of our code and then it executed by third party api or external libraries


function getUserDetails(callback){
    setTimeout(() =>{
        callback({
            userName:"Rakesh",
            userId:"123"
        })
    },2000)
}

function getPosts(userId, callback){
    setTimeout(()=>{
        callback(['post','post2'])
    },2000)
}

getUserDetails((userDetails) => {
    console.log(userDetails)
    getPosts(userDetails.userId,(posts) => {
        console.log(posts)

    })
})

// Another example:-
function doWork(callbck){
    console.log("Doing Work....")
    callbck();
}

function onComplete(){
    console.log("Work is Complete!!")
}

doWork(onComplete);