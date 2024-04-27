// Library Script

// Array to store user's input and new book objects
const myLibrary = [];

// Function to create a "book" object using an object constructor
function Book(title, author, pages, read) {
    this.title = title; // enter a string representing the book's title
    this.author = author; // enter a string representing the author's name
    this.pages = pages; // enter a number representing the number of pages within the book
    this.read = read; // enter either "read" or "not read"
    this.info = function() {
        return `${this.title} is written by ${this.author} and has ${this.pages} pages. The user has ${this.read} it.`;
    };
}

// "Book" object format:
// const BookNickname = new Book('itle', 'author', 'pages', 'read');

// Book example:
// const PumpkinQueen = new Book('Long Live the Pumpkin Queen', 'Shea Ernshaw', '311', 'read part of');
// console.log(PumpkinQueen.info());


// Function to add the "book" objects to the "myLibrary" array
function addBookToLibrary() {

    // myLibrary.push(BookNickname);
}

