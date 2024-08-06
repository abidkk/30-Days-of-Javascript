// Objects Methods
let book =  {
    title: "The Compont Effect",
    author : "Darren Hardy",
    year: 2002
}

// Task 3: Adding Method to the object
book.desc = function(){
    return `The book is ${this.title} and author is ${this.author}`
}
console.log(book.desc());




// Task 4: Adding Method to the object that take paramter as year and return
book.details = function(year){
    return `The book is ${this.title} and author is ${this.author} published in ${year}`
}
// console.log(book.details(book.year)); // done

// let bookYear = book.year = 2004;
book.year = 2005;
console.log(book.details(book.year));