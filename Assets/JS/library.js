// Library Script

// Array to store user's input and new book objects
const myLibrary = [];

const body = document.querySelector("body");
const bookCatalog = document.querySelector(".catalog");
const bookModal = document.getElementById("book-modal");

const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit-button");
const donateButton = document.querySelector(".donate-button");
const searchButton = document.querySelector(".search-button");

const header = document.querySelector("h1");
const submitDiv = document.querySelector(".submit-form");
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

const newBookInputs = document.querySelectorAll(".new-input");

let bookTitle;
let bookAuthor;
let bookPages;
let bookGenre;

bookTitleInput.value = "0 Index";
bookAuthorInput.value = "Some Developer";
bookPagesInput.value = 130;
bookGenreOptions.selectedIndex = 14;

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
};

// Function to transform any string input into a title case version of the string
function titleCase(string) {
    const newString = string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
    return newString;
}


//Functon to clear input fields
function clearInput() {
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookPagesInput.value = '';
    bookGenreOptions.selectedIndex = 0;
};

// Function to remove old notifications
function clearNotices() {
    const oldMessages = messageBox.querySelectorAll("p");

    oldMessages.forEach((notice) => {
        notice.remove();
    });
};

submitButton.addEventListener('click', submitClick, false);

function submitClick(event) {
    event.preventDefault();
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
        let writtenTitle = document.createElement('p');
        let writtenAuthor = document.createElement('p');
        let writtenGenre = document.createElement('p');
        let writtenPages = document.createElement('p');
        let removeButton = document.createElement('button');

        writtenTitle.textContent = `${bookTitle}`;        
        writtenAuthor.textContent = `Written by ${bookAuthor}`;
        writtenGenre.textContent = `Genre: ${bookGenre}`;
        writtenPages.textContent = `Number of Pages: ${bookPages}`;
        newTitle.textContent = bookTitle;
        removeButton.textContent = "Remove book";

        newBook.classList.add('book');
        newTitle.classList.add('title');
        openBook.classList.add('open-book-modal');
        closeBook.classList.add("close-box");       
        closeBookButton.src = "Assets/Images/x-square.svg";
        closeBookButton.classList.add("close-book");        
        bookContent.classList.add('book-modal-content');       
        blankSide.classList.add('blank-side');
        removeButton.classList.add('remove-option');        
        bookDetails.classList.add('details');        
        writtenTitle.classList.add('title-display');
        writtenAuthor.style.gridRow = "3 / 4";
        writtenAuthor.style.alignSelf = "center";
        writtenGenre.style.gridRow = "4 / 5";
        writtenGenre.style.alignSelf = "end";
        writtenPages.style.gridRow = "5 / 6";
        writtenPages.style.alignSelf = "start";
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
        bookContent.appendChild(blankSide);
        bookContent.appendChild(bookDetails);
        blankSide.appendChild(removeButton);
        bookDetails.appendChild(writtenTitle);
        bookDetails.appendChild(writtenAuthor);
        bookDetails.appendChild(writtenGenre);
        bookDetails.appendChild(writtenPages);

        newBook.addEventListener('click', () => {
            openBook.style.display = "flex";
            let thisBookTitle = writtenTitle.textContent;
            let thisBookAuthor = writtenTitle.textContent;
            let thisBookPages = writtenPages.textContent;
            let thisBookGenre = writtenGenre.textContent;

            console.log(`You opened ${thisBookTitle}`);
            
            removeButton.addEventListener('click', () => {
                
                removeButton.classList.add("invisible");
                const confirmDelete = document.createElement('p');
                confirmDelete.textContent = `Are you sure you want to remove ${thisBookTitle}?`;
                confirmDelete.classList.add("delete-message");
                blankSide.appendChild(confirmDelete);
                const yesDeleteButton = document.createElement('button');
                yesDeleteButton.textContent = "yes";
                yesDeleteButton.classList.add("yes");
                blankSide.appendChild(yesDeleteButton);
                yesDeleteButton.addEventListener('click', () => {
                    newBook.remove();
                    openBook.remove();
                    /*let unwantedBook = myLibrary.findIndex(bookyBook =>
                        bookyBook.title === thisBookTitle && bookyBook.author === thisBookAuthor
                    );
                    console.log(unwantedBook);
                    if (unwantedBook !== -1) {
                        myLibrary.splice(unwantedBook, 1);
                        console.log(`${thisBookTitle} was removed. Check the library`);
                        console.log(myLibrary);
                    } else {
                        console.log("something went wrong.");
                    }*/                    
                })
                const noDeleteButton = document.createElement('button');
                noDeleteButton.textContent = "no";
                noDeleteButton.classList.add("no");
                blankSide.appendChild(noDeleteButton);
                noDeleteButton.addEventListener('click', () => {
                    removeButton.classList.remove("invisible");
                    confirmDelete.remove();
                    yesDeleteButton.remove();
                    noDeleteButton.remove();
                })
            })
        })
        closeBookButton.addEventListener('click', () => {
            openBook.style.display = "none";
        })

        

        header.textContent = `You have added "${bookTitle}" to the library!`;
        header.classList.add("submitted-header");
        submitDiv.style.gridTemplateRows = "1fr 1fr";
    
        messageBox.classList.add('action');
        messageBox.textContent =  "Or close the catalog and check the bookcase";

        newBookInputs.forEach((input) => {
            input.classList.remove("new-input");
            input.classList.add("invisible");
        });
    
        submitButton.style.display = "none";
        donateButton.style.display = "block";
        searchButton.style.display = "block";
    }
});

donateButton.addEventListener('click', () => {
    header.textContent = "Enter your book into the Catalog:";
    header.classList.add("normal-header");
    header.classList.remove("submitted-header");
    messageBox.textContent = "";
    messageBox.classList.remove('action');
    newBookInputs.forEach((input) => {
        input.classList.remove("invisible");
        input.classList.add("new-input");
    });
    donateButton.style.display = "none";
    searchButton.style.display = "none";
    submitButton.style.display = "block";
});

searchButton.addEventListener('click', () => {
    messageBox.textContent = "";
    messageBox.classList.remove('action');
});


// Open the book catalog submit form
bookCatalog.addEventListener('click', () => {
    bookModal.style.display = "flex";
});

// Close the book modal
closeButton.addEventListener('click', () => {
    bookModal.style.display = "none";
    clearInput();
    clearNotices();
    console.log("Books in the library:");
    console.log(myLibrary);
})



