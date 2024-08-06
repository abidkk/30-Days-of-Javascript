// Destructuring

// Task 3: Array Desctucture to get first and last element
let nums = [20,30,40,50,60,70]
// Destructuring with rest
const [first, second, ...rest] = nums;
let last = rest[rest.length -1]

console.log(first);
console.log(last);



// Task 4: Object Destructure to get title and author from book object
let book =  {
    title: "The Compont Effect",
    author : "Darren Hardy",
    year: 2002
}

const {title, author, year} = book;
console.log(title);
console.log(author);


