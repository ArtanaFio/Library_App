// Library Script

// Array to store user's input and new book objects
const myLibrary = [];

const bookCatalog = document.querySelector(".catalog");
const bookModal = document.getElementById("book-modal");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit-button");
const submitMessage = document.querySelector(".message");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookPagesInput = document.getElementById("book-pages");
const bookGenreInput = document.getElementById("book-genre");
const bookcase = document.getElementById("storage");
const firstShelf = document.querySelector(".first");
const secondShelf = document.querySelector(".second");
const thirdShelf = document.querySelector(".third");
const fourthShelf = document.querySelector(".fourth");


// Function to create a "book" object using an object constructor
function Book(title, author, pages, genre) {

    // "book" constructor
    this.title = title; // enter a string representing the book's title
    this.author = author; // enter a string representing the author's name
    this.pages = pages; // enter a number representing the number of pages within the book
    this.genre = genre; // enter a string representing the book's genre
    this.info = function() {
        return `${this.title} is written by ${this.author}, belongs to the ${this.genre} genre, and has ${this.pages} pages.`;
    };
}

// Function to add the "book" objects to the "myLibrary" array
function addBookToLibrary() {

    submitButton.addEventListener('click', () => {
        
        const bookTitle = bookTitleInput.value;
        const bookAuthor = bookAuthorInput.value;
        const bookPages = bookPagesInput.value;
        const bookGenre =bookGenreInput.value;

        // Creates a book object from user input and alert missing information
        if (bookTitle === '' || bookAuthor === '' || bookPages === '' || bookGenre === '') {
            submitMessage.textContent = "Some information is missing.";
            submitMessage.style.color = "red";
        } else {
            const libraryBook = new Book(bookTitle, bookAuthor, bookPages, bookGenre);
            console.log(libraryBook);
            myLibrary.push(libraryBook);
            console.log(myLibrary);
            submitMessage.style.color = "forestgreen";
            submitMessage.textContent = "You have added a book to the library!";
            let newBook = document.createElement('div');
            let newTitle = document.createElement('p');
            newBook.classList.add('book');
            newTitle.classList.add('title');
            newTitle.textContent = bookTitle;
            firstShelf.appendChild(newBook);
            newBook.appendChild(newTitle);
        }
        
    });
};
addBookToLibrary();


// Open the book catalog submit form
bookCatalog.addEventListener('click', () => {
    bookModal.style.display = "flex";
    bookcase.style.display = "none";
});

// Close the book modal
closeButton.addEventListener('click', () => {
    bookModal.style.display = "none";
    submitMessage.textContent = "";
    bookcase.style.display = "grid";
})


