// simple terms:-In closures  inner function remembers the variables, functions and data of the outer function
// technical terms:-functions bundled along with its leical scope environments

// function outerFunction(){
//     let nums=10;
//     function innerFunction(){
//         console.log(nums);
//     }
//     innerFunction();
// }
// outerFunction();

// function outerFunction(){
//     let nums=10;
//     function innerFunction(){
//         console.log(nums)
//     }
//     return innerFunction;
// }
// const func=outerFunction();
// func();


// or
function outerFunction(nums){
    return function innerFunction(){
        console.log(nums);
    }
}
const func=outerFunction(10);
func();

// closures= > function +lexical environments
