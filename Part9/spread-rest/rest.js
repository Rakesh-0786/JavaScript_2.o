// In Rest Operator we can collect the all elements and put them into an array.
// Rest operator are passed through a parameter

// collecting all parameters in a functions
// With the help of rest we can convert the individuals elements into an arrays

// The rest operator is used to collect multiple elements into an array. It is commonly used in function parameters to capture a variable number of arguments or in destructuring assignments.
function sumOfAllNumbers(...numbers){
    // console.log(numbers)
   return numbers.reduce((acc,curr) => acc+curr, 0)
}
console.log(sumOfAllNumbers(1,2,3,4))

// Destructuring

let arr1=['HTML','CSS','JS','REACT','NODE','EXPRESS','GIT'];
// let [element1,element2]=arr1;
let [element1,element2, ...remainigElements]=arr1;
console.log(element1,element2)
console.log(remainigElements)
