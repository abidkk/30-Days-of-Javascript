// The This Keyword

// Task : 
let book =  {
    title: "The Compont Effect",
    author : "Darren Hardy",
    year: 2002,
    description: function(){
        return `The book is ${this.title} and the writer is ${this.author} published in ${book.year}`
    }
}

console.log(book.description());
