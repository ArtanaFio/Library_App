// Library Script

// Array to store user's input and new book objects
const myLibrary = [];

// Function to create a "book" object using an object constructor
function Book(title, author, pages, read) {

    // "book" constructor
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

// Open the book catalog submit form

const bookCatalog = document.querySelector(".catalog");
const bookModal = document.getElementById("book-modal");

bookCatalog.addEventListener('click', () => {
    bookModal.style.display = "flex";
    /*let newBook = document.createElement('div');
    let newTitle = document.createElement('p');
    newBook.classList.add('book');
    newTitle.classList.add('title');*/
});

// Show submit message

const submitButton = document.querySelector(".submit-button");
const submitMessage = document.querySelector(".message");

submitButton.addEventListener('click', () => {
    submitMessage.textContent = "You have added a book to the library!";
});

// Close the book modal

const closeButton = document.querySelector(".close");

closeButton.addEventListener('click', () => {
    bookModal.style.display = "none";
    submitMessage.textContent = "";
})

