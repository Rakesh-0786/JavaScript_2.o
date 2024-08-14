let sum=0;
const calc = (n) => {
    for(let i=0; i<=n;i++){
        sum+=i;
    }
    return sum;
}

const memoize = (fun) =>{
    let cache={};
    return function(...args){
        let n=args[0];
        // here first check the that the value is present in cache if present the direclty give the value without using the actual memory but if the value is not available in cache then add this value to cache.
        // if (n in cache): This checks if the key n (which is 3 in this case) exists in the cache object.
// If True: The program knows that the square of 3 is already computed and stored, so it directly accesses cache[n].
// If False: The square is calculated, stored in the cache, and then used.
// it is used in memoization.
          
        // it is not a for loop it is if loop and it can be run only run time

        if(n in cache){
            console.log("cache");
            console.log(cache)
            return cache[n];
        } else{
            console.log("Calculating First Time")
            let result= fun(n);
            cache[n]=result;
            return result;
        }
    }
}
console.time();
const effecient=memoize(calc);
console.log(effecient(6))
console.timeEnd();

// Again call
console.time();
// const effecient=memoize(calc);
console.log(effecient(6))
console.timeEnd();


// console.log(calc(5));
