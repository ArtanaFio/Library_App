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
const fifthShelf = document.querySelector(".fifth");

const newBookInputs = document.querySelectorAll(".new-input");
const shelfWidth = firstShelf.offsetWidth;

const bookWidth = 25;
const shelfGap = 10;
const maximumBooks = Math.floor((shelfWidth + shelfGap - bookWidth) / (bookWidth + shelfGap)); //Math.floor((shelfWidth - (2 * shelfGap) - bookWidth) / (shelfGap + bookWidth));
const maxLibraryCapacity = 5 * maximumBooks;

let bookTitle;
let bookAuthor;
let bookPages;
let bookGenre;

bookTitleInput.value = "Patience";
bookAuthorInput.value = "Faith Hope";
bookPagesInput.value = "130";
bookGenreOptions.selectedIndex = 10;

console.log(`Shelf width: ${shelfWidth}px`);
console.log(`Book width: ${bookWidth}px`);
console.log(`Gap between books: ${shelfGap}px`);
console.log(`Maximum number of books on the shelf: ${maximumBooks}`);
console.log(`Maximum library capacity: ${maxLibraryCapacity} books`);
console.log("Remaining available shelf space: shelf-width - (number of books * book-width) - (number of gaps * gap-width)");

// Function to create a "book" object using an object constructor
function Book(title, author, pages, genre, read) {

    // "book" constructor
    this.title = title; // enter a string representing the book's title
    this.author = author; // enter a string representing the author's name
    this.pages = pages; // enter a number representing the number of pages within the book
    this.genre = genre; // enter a string representing the book's genre
    this.read = read; // enter a strng ("read" or "not read") representing whether the user has read the book
    this.info = function() {
        return `${this.title} is written by ${this.author}, belongs to the ${this.genre} genre, and has ${this.pages} pages.`;
    };
    this.readInfo = function () {
        return `You have ${this.read ? "read" : "not read"} this book`;
    }
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

    function addBookToLibrary() {
        
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
        
        if (/*!bookDuplicate && */myLibrary.length < maxLibraryCapacity && (bookTitle !== '' && bookAuthor !== '' && bookPages !== '' && bookGenre !== '') && (bookTitle !== 'Title' && bookTitle !== 'Book Title') && (bookAuthor !== 'First & Last Name' && bookAuthor !== 'Author' && bookAuthor !== 'Author Name' && bookAuthor !== 'First Last' &&  bookAuthor !== 'First Name' &&  bookAuthor !== 'Last Name') && (bookPages >= 5)) {
            
                // Creates a book object from correct user input
                const libraryBook = new Book(bookTitle, bookAuthor, bookPages, bookGenre);
                myLibrary.push(libraryBook);
                console.log(myLibrary);
                console.log(`Current number of library books: ${myLibrary.length}`);

            //clearInput();
            allInput.forEach((input) => {
                input.addEventListener('click', () => {
                    clearNotices();
                });
            })
            bookGenreOptions.addEventListener('click', () => {
                clearNotices();
            });
            
            const idTitle = bookTitle;
            const idAuthor = bookAuthor;
            const idGenre = bookGenre;
            const idPages = bookPages;    
            const newBook = document.createElement('div');
            const newTitle = document.createElement('p');
            const openBook = document.createElement('div');
            const closeBook = document.createElement('div');
            const closeBookButton = document.createElement('img');
            const bookContent = document.createElement('div');
            const blankSide = document.createElement('div');
            const bookDetails = document.createElement('div');
            const pageSides = document.createElement('div');
            const firstPageEdge = document.createElement('div');
            const secondPageEdge = document.createElement('div');
            const thirdPageEdge = document.createElement('div');
            const printTitle = document.createElement('p');
            const printAuthor = document.createElement('p');
            const printGenre = document.createElement('p');
            const printPages = document.createElement('p');
            const removeSection = document.createElement('div');
            const removeButton = document.createElement('button');
            const readSection = document.createElement('div');
            const readMessage = document.createElement('p');
            const readAlignBox = document.createElement('div');
            const yesReadButton = document.createElement('button');
            const noReadButton = document.createElement('button');
            const updateButton = document.createElement('button');

            printTitle.textContent = `${bookTitle}`;        
            printAuthor.textContent = `Written by ${bookAuthor}`;
            printGenre.textContent = `Genre: ${bookGenre}`;
            printPages.textContent = `Number of Pages: ${bookPages}`;
            newTitle.textContent = bookTitle;
            removeButton.textContent = "Remove book";
            readMessage.textContent = "Have you read this book?";
            yesReadButton.textContent = "yes";
            noReadButton.textContent = "not yet";
            updateButton.textContent = "update status";

            newBook.classList.add('book');
            newTitle.classList.add('title');
            openBook.classList.add('open-book-modal');
            closeBook.classList.add("close-box");       
            closeBookButton.src = "Assets/Images/x-square.svg";
            closeBookButton.classList.add("close-book");        
            bookContent.classList.add('book-modal-content');       
            blankSide.classList.add('blank-side');
            readSection.classList.add('read-box');
            removeSection.classList.add('remove-box');
            removeButton.classList.add('remove-option', 'book-button');
            readMessage.classList.add('read-message');
            readAlignBox.classList.add('align-box');
            yesReadButton.classList.add('yes', 'book-button');
            noReadButton.classList.add('no', 'book-button');
            updateButton.classList.add('update', 'invisible', 'book-button');        
            bookDetails.classList.add('details');
            pageSides.classList.add('page-sides');
            firstPageEdge.classList.add('edges', 'first-edge');
            secondPageEdge.classList.add('edges', 'second-edge');
            thirdPageEdge.classList.add('edges', 'third-edge');
            printTitle.classList.add('title-display');
            printAuthor.classList.add('author-display');
            printGenre.classList.add('genre-display');
            printPages.classList.add('pages-display');
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
            
            const libraryBooks = myLibrary.length;
            let secondShelfBooks = libraryBooks - maximumBooks;
            let thirdShelfBooks = libraryBooks - 2 * maximumBooks;
            let fourthShelfBooks = libraryBooks - 3 * maximumBooks;
            let fifthShelfBooks = libraryBooks - 4 * maximumBooks;

            let firstShelfSpace = shelfWidth - (libraryBooks * bookWidth) - ((libraryBooks -1) * shelfGap);
            let secondShelfSpace = shelfWidth - (secondShelfBooks * bookWidth) - ((secondShelfBooks -1) * shelfGap);
            let thirdShelfSpace = shelfWidth - (thirdShelfBooks * bookWidth) - ((thirdShelfBooks -1) * shelfGap);
            let fourthShelfSpace = shelfWidth - (fourthShelfBooks * bookWidth) - ((fourthShelfBooks -1) * shelfGap);
            let fifthShelfSpace = shelfWidth- (fifthShelfBooks * bookWidth) - ((fifthShelfBooks -1) * shelfGap);

            if (libraryBooks <= maximumBooks) {
                firstShelf.appendChild(newBook);
                console.log(`Number of books on the first shelf: ${libraryBooks}`);
                console.log(`Remaining avaiable shelf space: ${firstShelfSpace}px`);
            } else if (libraryBooks > maximumBooks && libraryBooks <= (2 * maximumBooks)) {
                secondShelf.appendChild(newBook);
                console.log(`Number of books on the second shelf: ${secondShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${secondShelfSpace}px`);
            } else if (libraryBooks > maximumBooks && libraryBooks <= (3 * maximumBooks)) {
                thirdShelf.appendChild(newBook);
                console.log(`Number of books on the third shelf: ${thirdShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${thirdShelfSpace}px`);
            } else if (libraryBooks > maximumBooks && libraryBooks <= (4 * maximumBooks)) {
                fourthShelf.appendChild(newBook);
                console.log(`Number of books on the fourth shelf: ${fourthShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${fourthShelfSpace}px`);
            } else if (libraryBooks > maximumBooks && libraryBooks <= (5 * maximumBooks)) {
                fifthShelf.appendChild(newBook);
                console.log(`Number of books on the fifth shelf: ${fifthShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${fifthShelfSpace}px`);
            } else {
                alert("The library is full and can no longer accept any more donations!");
            }

            newBook.appendChild(newTitle);
            body.appendChild(openBook);
            openBook.appendChild(bookContent);
            openBook.appendChild(closeBook);
            closeBook.appendChild(closeBookButton);
            bookContent.appendChild(blankSide);
            bookContent.appendChild(bookDetails);
            bookContent.appendChild(pageSides);
            pageSides.appendChild(firstPageEdge);
            pageSides.appendChild(secondPageEdge);
            pageSides.appendChild(thirdPageEdge);
            blankSide.appendChild(removeSection);
            removeSection.appendChild(removeButton);
            blankSide.appendChild(readSection);
            readSection.appendChild(readMessage);
            readSection.appendChild(readAlignBox);
            readAlignBox.appendChild(yesReadButton);
            readAlignBox.appendChild(noReadButton);
            readAlignBox.appendChild(updateButton); 
            bookDetails.appendChild(printTitle);
            bookDetails.appendChild(printAuthor);
            bookDetails.appendChild(printGenre);
            bookDetails.appendChild(printPages);

            newBook.addEventListener('click', () => {
                openBook.style.display = "flex";
                console.log(`You opened ${printTitle.textContent}`);

                yesReadButton.addEventListener('click', () => {
                    console.log("you clicked yes");
                    libraryBook.read = "read";
                    console.log(libraryBook);
                    yesReadButton.classList.add('invisible');
                    noReadButton.classList.add('invisible');
                    updateButton.classList.remove('invisible');
                    readMessage.textContent = "Status: read";

                })
                noReadButton.addEventListener('click', () => {
                    console.log("you clicked no");
                    libraryBook.read = "not read";
                    console.log(libraryBook);
                    yesReadButton.classList.add('invisible');
                    noReadButton.classList.add('invisible');
                    updateButton.classList.remove('invisible');
                    readMessage.textContent = "Status: unread";
                })
                updateButton.addEventListener('click', () => {
                    readMessage.textContent = "Have you read this book?"
                    updateButton.classList.add('invisible');
                    yesReadButton.classList.remove('invisible');
                    noReadButton.classList.remove('invisible');
                })            
                removeButton.addEventListener('click', () => {
                    console.log(`${idTitle}, ${idAuthor}, ${idGenre}, ${idPages}`);                
                    removeButton.classList.add("invisible");
                    const confirmDelete = document.createElement('p');
                    confirmDelete.textContent = `Are you sure you want to remove ${printTitle.textContent}?`;
                    confirmDelete.classList.add("delete-message");
                    removeSection.appendChild(confirmDelete);
                    const alignBox = document.createElement('div');
                    alignBox.classList.add('align-box');
                    removeSection.appendChild(alignBox);
                    const yesDeleteButton = document.createElement('button');
                    yesDeleteButton.textContent = "yes";
                    yesDeleteButton.classList.add("yes", 'book-button');
                    alignBox.appendChild(yesDeleteButton);
                    yesDeleteButton.addEventListener('click', () => {
                        newBook.remove();
                        openBook.remove();
                        const unwantedBook = myLibrary.findIndex(book =>
                            book.title === idTitle && book.author === idAuthor && book.pages === idPages && book.genre === idGenre
                        );
                        console.log(unwantedBook);
                        if (unwantedBook !== -1) {
                            myLibrary.splice(unwantedBook, 1);
                            console.log(`${printTitle.textContent} was removed. Check the library`);
                            console.log(myLibrary);
                        } else {
                            console.log("something went wrong.");
                            console.log(myLibrary);
                        }
                        bookTitleInput.disabled = false;
                        bookAuthorInput.disabled = false;
                        bookPagesInput.disabled = false;
                        bookGenreOptions.disabled = false;
                        submitButton.disabled = false;                 
                    })
                    const noDeleteButton = document.createElement('button');
                    noDeleteButton.textContent = "no";
                    noDeleteButton.classList.add("no", 'book-button');
                    alignBox.appendChild(noDeleteButton);
                    noDeleteButton.addEventListener('click', () => {
                        removeButton.classList.remove("invisible");
                        alignBox.remove();
                        confirmDelete.remove();
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

        if (myLibrary.length >= maxLibraryCapacity) {
            bookTitleInput.disabled = true;
            bookAuthorInput.disabled = true;
            bookPagesInput.disabled = true;
            bookGenreOptions.disabled = true;
            submitButton.disabled = true;
            const fullMessage = document.createElement('p');
            fullMessage.textContent = "The library is full and cannot accept donations anymore.";
            fullMessage.classList.add('error');
            messageBox.appendChild(fullMessage);
        }
    };
    addBookToLibrary();
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
    messageBox.textContent = "Search by genre and author: coming soon!";
    messageBox.classList.remove('action');
    header.textContent = "Search the catalog:";
    header.classList.add("normal-header");
    header.classList.remove("submitted-header");
    searchButton.style.display = "none";
    donateButton.style.gridColumn = "1 / 3";
});


// Open the book catalog submit form
bookCatalog.addEventListener('click', () => {
    bookModal.style.display = "flex";
});

// Close the book modal
closeButton.addEventListener('click', () => {
    bookModal.style.display = "none";
    //clearInput();
    clearNotices();
    console.log("Books in the library:");
    console.log(myLibrary);
})



