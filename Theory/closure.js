// closure allow a function to access variable from it outer
// function's scope ,even aftet the outer function has finished executing.

function outerFunction(){
    let outerVariable="I am Outside!";

    function innerFunction(){
        console.log(outerVariable);
    }

return innerFunction;
}
const closureExample= outerFunction();
closureExample();


