let x=function (){
    console.log("hello");
}
x();

// if we want to use the function at one time or at immidately use only  then that case we can use the immidately invoke function.

(function exec(){
    console.log("rakesh")
})();

(function (x) {
    console.log(x+x);
})(3);

