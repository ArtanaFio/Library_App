// Library Script

// Array to store user's input and new book objects
const myLibrary = [];

const body = document.querySelector("body");
const bookCatalog = document.querySelector(".catalog");
const bookModal = document.getElementById("book-modal");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit-button");
const submitMessage = document.querySelector(".message");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookPagesInput = document.getElementById("book-pages");
const bookGenreOptions = document.getElementById("book-genre");
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

// Test Book
/*
const pumpkinQueen = new Book("Long Live the Pumpkin Queen", "Shea Ernshaw", "311", "Fantasy");
console.log(pumpkinQueen);
myLibrary.push(pumpkinQueen);
console.log(myLibrary);
const pumpkinQueenBook = document.createElement('div');
const pumpkinQueenTitle = document.createElement('p');
pumpkinQueenTitle.textContent = "Long Live the Pumpkin Queen";
pumpkinQueenBook.classList.add('book');
pumpkinQueenTitle.classList.add('title');
firstShelf.appendChild(pumpkinQueenBook);
pumpkinQueenBook.appendChild(pumpkinQueenTitle);

const learnCode = new Book("Learn Code", "Some Developer", "300", "Non-Fiction");
console.log(learnCode);
myLibrary.push(learnCode);
console.log(myLibrary);
const learnCodeBook = document.createElement('div');
const learnCodeTitle = document.createElement('p');
learnCodeTitle.textContent = "Learn Code";
learnCodeBook.classList.add('book');
learnCodeTitle.classList.add('title');
firstShelf.appendChild(learnCodeBook);
learnCodeBook.appendChild(learnCodeTitle);
*/
// Function to add the "book" objects to the "myLibrary" array
function addBookToLibrary() {

    submitButton.addEventListener('click', () => {
        
        const bookTitle = bookTitleInput.value;
        const bookAuthor = bookAuthorInput.value;
        const bookPages = bookPagesInput.value;
        const bookGenre = bookGenreOptions.value;

        

        // Creates a book object from user input and alert missing information
        if (bookTitle === '' || bookAuthor === '' || bookPages === '' || bookGenre === '') {
            submitMessage.textContent = "Some information is missing.";
            submitMessage.style.color = "red";
        } else {
            const libraryBook = new Book(bookTitle, bookAuthor, bookPages, bookGenre);
            console.log("You have created a book");
            myLibrary.push(libraryBook);
            console.log("Check your library:");
            console.log(myLibrary);
            submitMessage.style.color = "forestgreen";
            submitMessage.textContent = "You have added a book to the library!";
            let newBook = document.createElement('div'); // Create visual representation of book
            let newTitle = document.createElement('p');
            newBook.classList.add('book');
            newTitle.classList.add('title');
            newTitle.textContent = bookTitle;

            firstShelf.appendChild(newBook);
            newBook.appendChild(newTitle);

            let openBook = document.createElement('div');
            openBook.classList.add('open-book-modal');
            let closeBook = document.createElement('div');
            closeBook.classList.add("close-box");
            let closeBookButton = document.createElement('img');
            closeBookButton.src = "Assets/Images/x-square.svg";
            closeBookButton.classList.add("close-book");
            let bookContent = document.createElement('div');
            bookContent.classList.add('book-modal-content');
            let blankSide = document.createElement('div');
            blankSide.classList.add('blank-side');
            let bookDetails = document.createElement('div');
            bookDetails.classList.add('details');
            let title = document.createElement('p');
            title.classList.add('title-display');
            title.textContent = `${bookTitle}`;
            let author = document.createElement('p');
            author.style.gridRow = "3 / 4";
            author.style.alignSelf = "center";
            author.textContent = `Written by ${bookAuthor}`;
            let genre = document.createElement('p');
            genre.style.gridRow = "4 / 5";
            genre.style.alignSelf = "end";
            genre.textContent = `Genre: ${bookGenre}`;
            let pages = document.createElement('p');
            pages.style.gridRow = "5 / 6";
            pages.style.alignSelf = "start";
            pages.textContent = `Number of Pages: ${bookPages}`;
            
            body.appendChild(openBook);
            openBook.appendChild(bookContent);
            openBook.appendChild(closeBook);
            closeBook.appendChild(closeBookButton);
            bookContent.appendChild(bookDetails);
            bookDetails.appendChild(title);
            bookDetails.appendChild(author);
            bookDetails.appendChild(genre);
            bookDetails.appendChild(pages);

            newBook.addEventListener('click', () => {
                openBook.style.display = "flex";
                bookcase.style.display = "none";
            })

            closeBookButton.addEventListener('click', () => {
                openBook.style.display = "none";
                bookcase.style.display = "grid";
            })
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
    console.log("Books in the library:");
    console.log(myLibrary);
})


