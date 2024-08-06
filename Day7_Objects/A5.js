// Object Iteration

// Task 8: use forin loop over book object

let book =  {
    title: "The Compont Effect",
    author : "Darren Hardy",
    year: 2002
}


for (const key in book) {
// console.log(`${key} is ${book.key}`); // properties indefined
console.log(`${key} is ${book[key]}`);

}

// Task 9 : use object.keys and object.values
console.log(Object.keys(book));
console.log(Object.values(book));



