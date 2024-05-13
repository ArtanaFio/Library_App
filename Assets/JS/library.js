// Library Script

// Array to store user's input and new book objects
const myLibrary = [];

const body = document.querySelector("body");
const bookCatalog = document.querySelector(".catalog");
const bookModal = document.getElementById("book-modal");

const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit-button");

const messageBox = document.querySelector(".messages");

const allInput = document.querySelectorAll("input");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookPagesInput = document.getElementById("book-pages");
const bookGenreOptions = document.getElementById("book-genre");

const bookcase = document.getElementById("storage");
const firstShelf = document.querySelector(".first");
const secondShelf = document.querySelector(".second");
const thirdShelf = document.querySelector(".third");
const fourthShelf = document.querySelector(".fourth");

let bookTitle;
let bookAuthor;
let bookPages;
let bookGenre;

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

// if checkBook = newBook, don't add it
// don't forget to commit about clearing inputs after successfully adding book

// Function to transform any string input into a title case version of the string

function titleCase(string) {
    const newString = string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
    return newString;
}

// Function to add the "book" objects to the "myLibrary" array



function clearInput() {
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookPagesInput.value = '';
    bookGenreOptions.selectedIndex = 0;
};

function clearNotices() {
    //remove old notifications
    const oldMessages = messageBox.querySelectorAll("p");

    oldMessages.forEach((notice) => {
        notice.remove();
    });
};

submitButton.addEventListener('click', () => {
        
    clearNotices();
        
    const bookTitle = titleCase(bookTitleInput.value);
    const bookAuthor = titleCase(bookAuthorInput.value);
    const bookPages = bookPagesInput.value;
    const bookGenre = bookGenreOptions.value;

    let bookDuplicate = myLibrary.find(existingBook =>
        existingBook.title === titleCase(bookTitleInput.value) && existingBook.author === titleCase(bookAuthorInput.value) && existingBook.pages === bookPagesInput.value && existingBook.genre === bookGenreOptions.value
    );

    if (bookDuplicate) {
        const bookDuplicateMessage = document.createElement('p');
        bookDuplicateMessage.textContent = "Sorry, the library already has this book. Please donate another book.";
        bookDuplicateMessage.classList.add('error');
        messageBox.appendChild(bookDuplicateMessage);
    }

    if (bookTitle === '' || bookAuthor === '' || bookPages === '' || bookGenre === '') {
        const missingMessage = document.createElement('p');
        missingMessage.textContent = "Some information is missing.";
        missingMessage.classList.add('error');
        messageBox.appendChild(missingMessage);
    } 
        
    if (bookTitle === 'Title' || bookTitle === 'Book Title'|| bookTitle === 'A Title'|| bookTitle === 'Any Title') {
        const titleMessage = document.createElement('p');
        titleMessage.textContent = "Please enter a proper book title.";
        titleMessage.classList.add('error');
        messageBox.appendChild(titleMessage);
    }
        
    if (bookAuthor === 'First & Last Name' || bookAuthor === 'Author' || bookAuthor === 'Author Name' || bookAuthor === 'First Last' ||  bookAuthor === 'First Name' ||  bookAuthor === 'Last Name') {
        const authorMessage = document.createElement('p');
        authorMessage.textContent = "Please enter a valid name.";
        authorMessage.classList.add('error');
        messageBox.appendChild(authorMessage);
    }
        
    if (bookPages < 5 && bookPages !== '') {
        const pagesMessage = document.createElement('p');
        pagesMessage.textContent = "Please make sure your book has at least 5 pages.";
        pagesMessage.classList.add('error');
        messageBox.appendChild(pagesMessage);
    }
        
    if (!bookDuplicate && (bookTitle !== '' && bookAuthor !== '' && bookPages !== '' && bookGenre !== '') && (bookTitle !== 'Title' && bookTitle !== 'Book Title') && (bookAuthor !== 'First & Last Name' && bookAuthor !== 'Author' && bookAuthor !== 'Author Name' && bookAuthor !== 'First Last' &&  bookAuthor !== 'First Name' &&  bookAuthor !== 'Last Name') && (bookPages >= 5)) {
        function addBookToLibrary() {
            // Creates a book object from correct user input
            const libraryBook = new Book(bookTitle, bookAuthor, bookPages, bookGenre);
            myLibrary.push(libraryBook);
            console.log(myLibrary);
        };
        addBookToLibrary();
        const successMessage = document.createElement('p');
        successMessage.classList.add('correct');
        successMessage.textContent = `You have added ${bookTitle} to the library!`;
        messageBox.appendChild(successMessage);

        clearInput();

        allInput.forEach((input) => {
            input.addEventListener('click', () => {
                clearNotices();
            });
        })

        bookGenreOptions.addEventListener('click', () => {
            clearNotices();
        });
            
        let newBook = document.createElement('div'); // Create visual representation of book
        let newTitle = document.createElement('p');
        let openBook = document.createElement('div');
        let closeBook = document.createElement('div');
        let closeBookButton = document.createElement('img');
        let bookContent = document.createElement('div');
        let blankSide = document.createElement('div');
        let bookDetails = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let genre = document.createElement('p');
        let pages = document.createElement('p');

        title.textContent = `${bookTitle}`;        
        author.textContent = `Written by ${bookAuthor}`;
        genre.textContent = `Genre: ${bookGenre}`;
        pages.textContent = `Number of Pages: ${bookPages}`;

        newBook.classList.add('book');
        newTitle.classList.add('title');
        newTitle.textContent = bookTitle;
        openBook.classList.add('open-book-modal');
        closeBook.classList.add("close-box");       
        closeBookButton.src = "Assets/Images/x-square.svg";
        closeBookButton.classList.add("close-book");        
        bookContent.classList.add('book-modal-content');       
        blankSide.classList.add('blank-side');        
        bookDetails.classList.add('details');        
        title.classList.add('title-display');
        author.style.gridRow = "3 / 4";
        author.style.alignSelf = "center";
        genre.style.gridRow = "4 / 5";
        genre.style.alignSelf = "end";
        pages.style.gridRow = "5 / 6";
        pages.style.alignSelf = "start";
        switch (bookGenre) {
            case 'Adventure':
                newBook.style.backgroundColor = "red";
                bookContent.style.borderColor = "red";
                break;
            case 'Fantasy':
                newBook.style.backgroundColor = "mediumseagreen";
                bookContent.style.borderColor = "mediumseagreen";
                break;
            case 'Mystery':
                newBook.style.backgroundColor = "indigo";
                newBook.style.color = "chocolate";
                bookContent.style.borderColor = "indigo";
                break;
            case 'Horror & Thriller':
                newBook.style.backgroundColor = "midnightblue";
                newBook.style.color = "chocolate";
                bookContent.style.borderColor = "midnightblue";
                break;
            case 'Science Fiction':
                newBook.style.backgroundColor = "darkviolet";
                bookContent.style.borderColor = "darkviolet";
                break;
            case 'Historical Fiction':
                newBook.style.backgroundColor = "crimson";
                bookContent.style.borderColor = "crimson";
                break;
            case 'Contemporary Fiction':
                newBook.style.backgroundColor = "aqua";
                bookContent.style.borderColor = "aqua";
                break;
            case 'Romance':
                newBook.style.backgroundColor = "deeppink";
                bookContent.style.borderColor = "deeppink";
                break;
            case 'Poetry':
                newBook.style.backgroundColor = "forestgreen";
                bookContent.style.borderColor = "forestgreen";
                break;
            case 'Self-Help':
                newBook.style.backgroundColor = "mediumpurple";
                bookContent.style.borderColor = "mediumpurple";
                break;
            case 'Biography & Memoirs':
                newBook.style.backgroundColor = "coral";
                bookContent.style.borderColor = "coral";
                break;
            case 'Religion & Philosophy':
                newBook.style.backgroundColor = "sandybrown";
                bookContent.style.borderColor = "sandybrown";
                break;
            case 'History':
                newBook.style.backgroundColor = "cornflowerblue";
                bookContent.style.borderColor = "cornflowerblue";
                break;
            case 'Science & Technology':
                newBook.style.backgroundColor = "slateblue";
                bookContent.style.borderColor = "slateblue";
                break;
        }
            
        firstShelf.appendChild(newBook);
        newBook.appendChild(newTitle);
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


// Open the book catalog submit form
bookCatalog.addEventListener('click', () => {
    bookModal.style.display = "flex";
    bookcase.style.display = "none";
});

// Close the book modal
closeButton.addEventListener('click', () => {
    bookModal.style.display = "none";
    bookcase.style.display = "grid";
    clearInput();
    clearNotices();
    console.log("Books in the library:");
    console.log(myLibrary);
})


