// Array Methods Intermediate

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Task 7: Map method to dobuled each number and return new array
let dobuled = nums.map((x) => {
    return (x * 2)
})
console.log(dobuled)

// Task 8: filter method to get even numbers and return new array

let evens = nums.filter((x) => {
    return (x % 2 == 0)
})
console.log(evens)




console.log("Reduce Method");
// Task 9 : Reduce method to calculate the sum of all nums and retun new array
let initialValue = 0;
let sum = nums.reduce((acc, currentValue) => {
    return (acc + currentValue)
}, initialValue)
console.log(sum)
