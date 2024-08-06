// Nested Objects

// Task 5: 
const library =  {
    name: "Synapse Library",
    books: [
        {
            title: "The Compont Effect",
            author : "Darren Hardy",
            year: 2002
        },
        {
            title: "The Secret",
            author : "Ronda Bryne",
            year: 2011
        }
    ]
}

console.log(library);


// Task 6: Access Library Name and the title of all books
console.log(library.name);
for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title); 
}

