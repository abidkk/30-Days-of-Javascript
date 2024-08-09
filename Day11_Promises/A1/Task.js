// Promise

// Task 1: create a promise that resolve with a message after a 2 seconds timeout and log the message to the log

let prom = new Promise((res) => {
    setTimeout(() => {
        res("It is resolved Task1")
    }, 2000)
})
prom
.then((message) => {
    console.log(message);
})


console.log(123);


// Task 2 :Create a promise that reject with an error message after a 2 second timeout and handle the error using .catch() 
let prom2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("The Promis is rejected");
    }, 4000)
})
prom2
.then((message) => {
    console.log(message);
})
.catch((err) => {
    console.log(err);
})