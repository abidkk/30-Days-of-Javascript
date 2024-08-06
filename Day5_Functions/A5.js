// Higher Order Functions

// Task9: Higher order function that take a function and a number and sholud call the fucntion it many times
function run() {
    return "running";
}

function ground(time, action) {
    for (let i = 0; i < time; i++) {
        console.log(`He is ${action()} since Morning`)
    }
}
ground(4, run)



// Task 10 : Write a higher order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.

function fun1(val) {
    return val + "Playing Cricket "
}
function fun2(val) {
    return val + "And Playing Football "
}

function higher(f1, f2, val) {
    let res1 = f1(val)
    let res2 = f2(res1)
    return res2;
}
let val = "I am "
console.log(higher(fun1, fun2, val))