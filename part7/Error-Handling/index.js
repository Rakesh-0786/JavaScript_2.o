try{
    let x=undefined;
    console.log(x[0]);

}catch(err){
    console.log("Error handling in catch",err);

}finally{
    console.log("Finally always gets executed");
}

console.log('end');

// try catch hadle the exception.

// let x=undefined;
// console.log(x[0]);
// console.log("end");