// let a=20;
// let b=10;
// let c=30;
// let d=40;

// console.log(a+b);
// console.log(c+d);

// jo bhii code aapko bar bar use krna hai  usko aap ek function ke andar daal sakte ho or aap bol sakte hai reauable block of code.
// means jo bhi code es function ke andr rahega usko aap kahi bhi baar baar use kr sakte ho kahi pr bhii use kr sakte ho or usme alag alag type ke data bhii pass kar sakte ho.

// let create function
// reusability is the main advantages of function.


// function  /*functionaName*/ add(Parameter){
//     // block of code
// }
// // function calling
// add(Agruments);




// function add(a ,b){
//     // block of code
//     console.log(a+b);
// }
// add(3,2);
// add(5,8) //function calling function invoking


// First Class citizens
// function ko 

// let sum=function add(a,b){
//     console.log(a+b);
// }
// console.log(sum(3,5));  //8 undefined
// undefined In JavaScript, the undefined value appears when a function doesn't explicitly return a value. In your code, the sum function logs the result of a + b to the console but does not return anything. The value returned by the function is undefined, and that's why it's printed out.

// to avoid the undefined use the return statement to tell the function that returns the value

// code
// let sum= function add(a,b){
//     return (a+b);
// }
// console.log(sum(4,8));


// we can create a multiple functions also

// function x(){
//     console.log("Hello");
// }
// function y(){
//     console.log("Bye!");
// }

// x();
// y();


// we can also pass the another function as an arguments of another functins

function x(callback){
    console.log("Hello");
    callback();
}
function y(){
    console.log("Bye")
    
}

x(y);
// y(x);



// return statements

function add(a,b){
    // block of code
    return a+b;
    // return statements termianates the function of ends of the functions
    // and only send the a and b value in the function calling arguments but not printing anything
    // beacause it terminates the function for printing the value of a and b then we can store them into variale then console it.
    console.log("heloo");
    console.log('ho')
}
let sum=add(3,5);
console.log(sum);