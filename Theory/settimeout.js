console.log("Heyy");

let delayTime = setTimeout(() => {
    console.log("Hey, This will run after delay");
}, 2000);

let Reapet = setInterval(() => {
    console.log("Executing repeatedly");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(Reapet);
    console.log("Interval cleared");
}, 5000);
