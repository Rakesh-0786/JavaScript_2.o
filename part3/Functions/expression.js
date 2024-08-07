// expression functions are functions that are assign it into the variable 

// there are two type of expression function named function and anonymous function

// name function
let x= function exeec(){
    console.log("hi")
}
x();

// anonymous

let y=function(){
    console.log("he")
}
y();



// self invoke function are also called the immidately invoke function
(function exec(){
    console.log("rakesh")
})();

(function sum(x){
    console.log(x+x);
})(7)