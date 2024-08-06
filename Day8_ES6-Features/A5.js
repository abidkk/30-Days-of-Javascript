// Enhanced Object Literals

// Task 8 : use enhanced object literals to create new object with methods and properties, and log to console
let title = "The Secret";
let author = "Ronda Byrne"
let year = 2003;

let bookObj = {
    title,
    author,
    year,
    description(){
        return(`The Book is ${title}`)
    }
}
console.log(bookObj);
console.log(bookObj.description());






// Task 9 : create an object with computed property names based on variables and log

let myName = "name";

let computedObj = {
    [myName]: "Abid", // variable name as propety
    age: 23
}

console.log(computedObj); // { name: 'Abid', age: 23 }
