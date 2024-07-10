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
searchButton.classList.add("working-search-button");

const header = document.querySelector("h1");
const submitDiv = document.querySelector(".submit-form");
const messageBox = document.querySelector(".messages");

const allInput = document.querySelectorAll("input");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookPagesInput = document.getElementById("book-pages");
const bookGenreOptions = document.getElementById("book-genre");
const bookReadInput = document.getElementById("read-toggle");

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
let bookRead;
/*
console.log(`Shelf width: ${shelfWidth}px`);
console.log(`Book width: ${bookWidth}px`);
console.log(`Gap between books: ${shelfGap}px`);
console.log(`Maximum number of books on the shelf: ${maximumBooks}`);
console.log(`Maximum library capacity: ${maxLibraryCapacity} books`);
console.log("Remaining available shelf space: shelf-width - (number of books * book-width) - (number of gaps * gap-width)");
*/
// Function to create a "book" object using an object constructor
function Book(title, author, pages, genre, read) {
    // "book" constructor
    this.title = title; // enter a string representing the book's title
    this.author = author; // enter a string representing the author's name
    this.pages = pages; // enter a number representing the number of pages within the book
    this.genre = genre; // enter a string representing the book's genre
    this.read = read; // boolean value representing whether the user has read the book
    this.info = function() {
        return `${this.title} is written by ${this.author}, belongs to the ${this.genre} genre, and has ${this.pages} pages.`;
    };
    this.readInfo = function () {
        if (this.read === true) {
            return `You have read this book`;
        } else if (this.read === false) {
            return `You have not read this book`;
        }
        
    }
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}


const scotQueen = new Book("Embroidering Her Truth: Mary, Queen of Scots and the Language of Power", "Clare Hunter", "400", "History", false);
myLibrary.push(scotQueen);   
const newQueenBook = document.createElement('div');
const newQueenTitle = document.createElement('p');
newQueenTitle.textContent = `${scotQueen.title}`;
newQueenBook.style.backgroundColor = "cornflowerblue";
newQueenBook.classList.add('book');
newQueenTitle.classList.add('title');
firstShelf.appendChild(newQueenBook);
newQueenBook.appendChild(newQueenTitle);
const openQueenBook = document.createElement('div');
const closeQueenBook = document.createElement('div');
const closeQueenBookButton = document.createElement('img');
const queenBookContent = document.createElement('div');
openQueenBook.classList.add('open-book-modal');
closeQueenBook.classList.add("close-box");       
closeQueenBookButton.src = "Assets/Images/x-square.svg";
closeQueenBookButton.classList.add("close-book");        
queenBookContent.classList.add('book-modal-content');
const queenBlankSide = document.createElement('div');
const queenBookDetails = document.createElement('div');
const queenPageSides = document.createElement('div');
const queenFirstPageEdge = document.createElement('div');
const queenSecondPageEdge = document.createElement('div');
const queenThirdPageEdge = document.createElement('div');
const printQueenTitle = document.createElement('p');
const printQueenAuthor = document.createElement('p');
const printQueenGenre = document.createElement('p');
const printQueenPages = document.createElement('p');
const removeQueenSection = document.createElement('div');
const removeQueenButton = document.createElement('button');
const confirmDeleteQueen = document.createElement('p');
const alignQueenBox = document.createElement('div');
const yesDeleteQueenButton = document.createElement('button');
const noDeleteQueenButton = document.createElement('button');
const queenReadSection = document.createElement('div');
const queenReadMessage = document.createElement('p');
const queenReadAlignBox = document.createElement('div');
const queenYesReadButton = document.createElement('button');
const queenNoReadButton = document.createElement('button');
const queenUpdateButton = document.createElement('button');
printQueenTitle.textContent = `${scotQueen.title}`;        
printQueenAuthor.textContent = `Written by ${scotQueen.author}`;
printQueenGenre.textContent = `Genre: ${scotQueen.genre}`;
printQueenPages.textContent = `Number of Pages: ${scotQueen.pages}`;
removeQueenButton.textContent = "Remove book";
queenReadMessage.textContent = "Have you read this book?";
queenYesReadButton.textContent = "yes";
queenNoReadButton.textContent = "not yet";
queenUpdateButton.textContent = "update status";
queenBlankSide.classList.add('blank-side');
queenReadSection.classList.add('read-box');
removeQueenSection.classList.add('remove-box');
removeQueenButton.classList.add('remove-option', 'book-button');
queenReadMessage.classList.add('read-message');
queenReadAlignBox.classList.add('align-box');
queenYesReadButton.classList.add('yes', 'book-button');
queenNoReadButton.classList.add('no', 'book-button');
queenUpdateButton.classList.add('update', 'invisible', 'book-button');        
queenBookDetails.classList.add('details');
queenPageSides.classList.add('page-sides');
queenFirstPageEdge.classList.add('edges', 'first-edge');
queenSecondPageEdge.classList.add('edges', 'second-edge');
queenThirdPageEdge.classList.add('edges', 'third-edge');
printQueenTitle.classList.add('title-display');
printQueenAuthor.classList.add('author-display');
printQueenGenre.classList.add('genre-display');
printQueenPages.classList.add('pages-display');
queenBookContent.style.borderColor = "cornflowerblue";
body.appendChild(openQueenBook);
openQueenBook.appendChild(queenBookContent);
openQueenBook.appendChild(closeQueenBook);
closeQueenBook.appendChild(closeQueenBookButton);
queenBookContent.appendChild(queenBlankSide);
queenBookContent.appendChild(queenBookDetails);
queenBookContent.appendChild(queenPageSides);
queenPageSides.appendChild(queenFirstPageEdge);
queenPageSides.appendChild(queenSecondPageEdge);
queenPageSides.appendChild(queenThirdPageEdge);
queenBlankSide.appendChild(removeQueenSection);
removeQueenSection.appendChild(removeQueenButton);
queenBlankSide.appendChild(queenReadSection);
queenReadSection.appendChild(queenReadMessage);
queenReadSection.appendChild(queenReadAlignBox);
queenReadAlignBox.appendChild(queenYesReadButton);
queenReadAlignBox.appendChild(queenNoReadButton);
queenReadAlignBox.appendChild(queenUpdateButton); 
queenBookDetails.appendChild(printQueenTitle);
queenBookDetails.appendChild(printQueenAuthor);
queenBookDetails.appendChild(printQueenGenre);
queenBookDetails.appendChild(printQueenPages);
newQueenBook.addEventListener('click', () => {
    openQueenBook.style.display = "flex";
    queenYesReadButton.classList.add('invisible');
    queenNoReadButton.classList.add('invisible');
    queenUpdateButton.classList.remove('invisible');
    queenReadMessage.textContent = scotQueen.readInfo();
    if (scotQueen.read === false) {
        queenReadMessage.classList.add('unread');
    } else {
        queenReadMessage.classList.add('been-read');
    }
    
    queenUpdateButton.addEventListener('click', () => {
        queenReadMessage.textContent = "Have you read this book?"
        queenUpdateButton.classList.add('invisible');
        queenYesReadButton.classList.remove('invisible');
        queenNoReadButton.classList.remove('invisible');
        queenReadMessage.classList.remove('unread', 'been-read');
    })
    
    queenYesReadButton.addEventListener('click', () => {
        scotQueen.read = true;
        queenYesReadButton.classList.add('invisible');
        queenNoReadButton.classList.add('invisible');
        queenUpdateButton.classList.remove('invisible');
        queenReadMessage.classList.add('been-read');
        queenReadMessage.textContent = scotQueen.readInfo();

    })
    queenNoReadButton.addEventListener('click', () => {
        scotQueen.read = false;
        queenYesReadButton.classList.add('invisible');
        queenNoReadButton.classList.add('invisible');
        queenUpdateButton.classList.remove('invisible');
        queenReadMessage.classList.add('unread');
        queenReadMessage.textContent = scotQueen.readInfo();
    })

    removeQueenButton.addEventListener('click', () => {
        removeQueenButton.remove();        
        confirmDeleteQueen.textContent = `Are you sure you want to remove ${scotQueen.title}?`;
        confirmDeleteQueen.classList.add("delete-message");
        removeQueenSection.appendChild(confirmDeleteQueen);        
        alignQueenBox.classList.add('align-box');
        removeQueenSection.appendChild(alignQueenBox);        
        yesDeleteQueenButton.textContent = "yes";
        yesDeleteQueenButton.classList.add("yes", 'book-button');
        alignQueenBox.appendChild(yesDeleteQueenButton);
        yesDeleteQueenButton.addEventListener('click', () => {
            newQueenBook.remove();
            openQueenBook.remove();
            const removeQueenBook = myLibrary.findIndex(book =>
                book.title === scotQueen.title && book.author === scotQueen.author && book.pages === scotQueen.pages && book.genre === scotQueen.genre
            );
            console.log(removeQueenBook);
            if (removeQueenBook !== -1) {
                myLibrary.splice(removeQueenBook, 1);
                console.log(`${scotQueen.title} was removed. Check the library`);
                console.log(myLibrary);
            }              
        })        
        noDeleteQueenButton.textContent = "no";
        noDeleteQueenButton.classList.add("no", 'book-button');
        alignQueenBox.appendChild(noDeleteQueenButton);
        noDeleteQueenButton.addEventListener('click', () => {
            removeQueenSection.appendChild(removeQueenButton);
            alignQueenBox.remove();
            confirmDeleteQueen.remove();
        })
    })
})
closeQueenBookButton.addEventListener('click', () => {
    openQueenBook.style.display = "none";
})
const rumiBook = new Book("Rumi's Little Book Of Life: The Garden Of The Soul, The Heart, And The Spirit", ["Jalal al-Din Muhammad Rumi", "Maryam Mafi", "Melita Kolin"], "203", "Poetry", false);
myLibrary.push(rumiBook);   
const newRumiBook = document.createElement('div');
const newRumiTitle = document.createElement('p');
newRumiTitle.textContent = `${rumiBook.title}`;
newRumiBook.style.backgroundColor = "forestgreen";
newRumiBook.classList.add('book');
newRumiTitle.classList.add('title');
firstShelf.appendChild(newRumiBook);
newRumiBook.appendChild(newRumiTitle);
const openRumiBook = document.createElement('div');
const closeRumiBook = document.createElement('div');
const closeRumiBookButton = document.createElement('img');
const rumiBookContent = document.createElement('div');
openRumiBook.classList.add('open-book-modal');
closeRumiBook.classList.add("close-box");       
closeRumiBookButton.src = "Assets/Images/x-square.svg";
closeRumiBookButton.classList.add("close-book");        
rumiBookContent.classList.add('book-modal-content');
const rumiBlankSide = document.createElement('div');
const rumiBookDetails = document.createElement('div');
const rumiPageSides = document.createElement('div');
const rumiFirstPageEdge = document.createElement('div');
const rumiSecondPageEdge = document.createElement('div');
const rumiThirdPageEdge = document.createElement('div');
const printRumiTitle = document.createElement('p');
const printRumiAuthor = document.createElement('p');
const printRumiGenre = document.createElement('p');
const printRumiPages = document.createElement('p');
const removeRumiSection = document.createElement('div');
const removeRumiButton = document.createElement('button');
const confirmDeleteRumi = document.createElement('p');
const alignRumiBox = document.createElement('div');
const yesDeleteRumiButton = document.createElement('button');
const noDeleteRumiButton = document.createElement('button');
const rumiReadSection = document.createElement('div');
const rumiReadMessage = document.createElement('p');
const rumiReadAlignBox = document.createElement('div');
const rumiYesReadButton = document.createElement('button');
const rumiNoReadButton = document.createElement('button');
const rumiUpdateButton = document.createElement('button');
printRumiTitle.textContent = `${rumiBook.title}`;        
printRumiAuthor.textContent = `Written by ${rumiBook.author}`;
printRumiGenre.textContent = `Genre: ${rumiBook.genre}`;
printRumiPages.textContent = `Number of Pages: ${rumiBook.pages}`;
removeRumiButton.textContent = "Remove book";
rumiReadMessage.textContent = "Have you read this book?";
rumiYesReadButton.textContent = "yes";
rumiNoReadButton.textContent = "not yet";
rumiUpdateButton.textContent = "update status";
rumiBlankSide.classList.add('blank-side');
rumiReadSection.classList.add('read-box');
removeRumiSection.classList.add('remove-box');
removeRumiButton.classList.add('remove-option', 'book-button');
rumiReadMessage.classList.add('read-message');
rumiReadAlignBox.classList.add('align-box');
rumiYesReadButton.classList.add('yes', 'book-button');
rumiNoReadButton.classList.add('no', 'book-button');
rumiUpdateButton.classList.add('update', 'invisible', 'book-button');        
rumiBookDetails.classList.add('details');
rumiPageSides.classList.add('page-sides');
rumiFirstPageEdge.classList.add('edges', 'first-edge');
rumiSecondPageEdge.classList.add('edges', 'second-edge');
rumiThirdPageEdge.classList.add('edges', 'third-edge');
printRumiTitle.classList.add('title-display');
printRumiAuthor.classList.add('author-display');
printRumiGenre.classList.add('genre-display');
printRumiPages.classList.add('pages-display');
rumiBookContent.style.borderColor = "forestgreen";
body.appendChild(openRumiBook);
openRumiBook.appendChild(rumiBookContent);
openRumiBook.appendChild(closeRumiBook);
closeRumiBook.appendChild(closeRumiBookButton);
rumiBookContent.appendChild(rumiBlankSide);
rumiBookContent.appendChild(rumiBookDetails);
rumiBookContent.appendChild(rumiPageSides);
rumiPageSides.appendChild(rumiFirstPageEdge);
rumiPageSides.appendChild(rumiSecondPageEdge);
rumiPageSides.appendChild(rumiThirdPageEdge);
rumiBlankSide.appendChild(removeRumiSection);
removeRumiSection.appendChild(removeRumiButton);
rumiBlankSide.appendChild(rumiReadSection);
rumiReadSection.appendChild(rumiReadMessage);
rumiReadSection.appendChild(rumiReadAlignBox);
rumiReadAlignBox.appendChild(rumiYesReadButton);
rumiReadAlignBox.appendChild(rumiNoReadButton);
rumiReadAlignBox.appendChild(rumiUpdateButton); 
rumiBookDetails.appendChild(printRumiTitle);
rumiBookDetails.appendChild(printRumiAuthor);
rumiBookDetails.appendChild(printRumiGenre);
rumiBookDetails.appendChild(printRumiPages);
newRumiBook.addEventListener('click', () => {
    openRumiBook.style.display = "flex";
    rumiYesReadButton.classList.add('invisible');
    rumiNoReadButton.classList.add('invisible');
    rumiUpdateButton.classList.remove('invisible');
    rumiReadMessage.textContent = rumiBook.readInfo();
    if (rumiBook.read === false) {
        rumiReadMessage.classList.add('unread');
    } else {
        rumiReadMessage.classList.add('been-read');
    }

    rumiUpdateButton.addEventListener('click', () => {
        rumiReadMessage.textContent = "Have you read this book?"
        rumiUpdateButton.classList.add('invisible');
        rumiYesReadButton.classList.remove('invisible');
        rumiNoReadButton.classList.remove('invisible');
        rumiReadMessage.classList.remove('unread', 'been-read');
        
    })      

    rumiYesReadButton.addEventListener('click', () => {
        rumiBook.read = true;
        rumiYesReadButton.classList.add('invisible');
        rumiNoReadButton.classList.add('invisible');
        rumiUpdateButton.classList.remove('invisible');
        rumiReadMessage.classList.add('been-read');
        rumiReadMessage.textContent = rumiBook.readInfo();
    })
    rumiNoReadButton.addEventListener('click', () => {
        rumiBook.read = false;
        rumiYesReadButton.classList.add('invisible');
        rumiNoReadButton.classList.add('invisible');
        rumiUpdateButton.classList.remove('invisible');
        rumiReadMessage.classList.add('unread');
        rumiReadMessage.textContent = rumiBook.readInfo();
    })

    removeRumiButton.addEventListener('click', () => {               
        removeRumiButton.classList.add("invisible");
        confirmDeleteRumi.textContent = `Are you sure you want to remove ${rumiBook.title}?`;
        confirmDeleteRumi.classList.add("delete-message");
        removeRumiSection.appendChild(confirmDeleteRumi);
        alignRumiBox.classList.add('align-box');
        removeRumiSection.appendChild(alignRumiBox);
        yesDeleteRumiButton.textContent = "yes";
        yesDeleteRumiButton.classList.add("yes", 'book-button');
        alignRumiBox.appendChild(yesDeleteRumiButton);
        yesDeleteRumiButton.addEventListener('click', () => {
            newRumiBook.remove();
            openRumiBook.remove();
            const removeRumiBook = myLibrary.findIndex(book =>
                book.title === rumiBook.title && book.author === rumiBook.author && book.pages === rumiBook.pages && book.genre === rumiBook.genre
            );
            console.log(removeRumiBook);
            if (removeRumiBook !== -1) {
                myLibrary.splice(removeRumiBook, 1);
                console.log(`${rumiBook.title} was removed. Check the library`);
                console.log(myLibrary);
            }             
        })
        noDeleteRumiButton.textContent = "no";
        noDeleteRumiButton.classList.add("no", 'book-button');
        alignRumiBox.appendChild(noDeleteRumiButton);
        noDeleteRumiButton.addEventListener('click', () => {
            removeRumiButton.classList.remove("invisible");
            alignRumiBox.remove();
            confirmDeleteRumi.remove();
        })
    })
})
closeRumiBookButton.addEventListener('click', () => {
    openRumiBook.style.display = "none";
})

const butterflyBook = new Book("The Butterfly Garden", "Dot Hutchison", "286", "Horror & Thriller", false);
myLibrary.push(butterflyBook);   
const newButterflyBook = document.createElement('div');
const newButterflyTitle = document.createElement('p');
newButterflyTitle.textContent = `${butterflyBook.title}`;
newButterflyBook.style.backgroundColor = "midnightblue";
newButterflyBook.classList.add('book');
newButterflyTitle.classList.add('title');
newButterflyTitle.style.color = "chocolate";
firstShelf.appendChild(newButterflyBook);
newButterflyBook.appendChild(newButterflyTitle);
const openButterflyBook = document.createElement('div');
const closeButterflyBook = document.createElement('div');
const closeButterflyBookButton = document.createElement('img');
const butterflyBookContent = document.createElement('div');
openButterflyBook.classList.add('open-book-modal');
closeButterflyBook.classList.add("close-box");       
closeButterflyBookButton.src = "Assets/Images/x-square.svg";
closeButterflyBookButton.classList.add("close-book");        
butterflyBookContent.classList.add('book-modal-content');
const butterflyBlankSide = document.createElement('div');
const butterflyBookDetails = document.createElement('div');
const butterflyPageSides = document.createElement('div');
const butterflyFirstPageEdge = document.createElement('div');
const butterflySecondPageEdge = document.createElement('div');
const butterflyThirdPageEdge = document.createElement('div');
const printButterflyTitle = document.createElement('p');
const printButterflyAuthor = document.createElement('p');
const printButterflyGenre = document.createElement('p');
const printButterflyPages = document.createElement('p');
const removeButterflySection = document.createElement('div');
const removeButterflyButton = document.createElement('button');
const confirmDeleteButterfly = document.createElement('p');
const alignButterflyBox = document.createElement('div');
const yesDeleteButterflyButton = document.createElement('button');
const noDeleteButterflyButton = document.createElement('button');
const butterflyReadSection = document.createElement('div');
const butterflyReadMessage = document.createElement('p');
const butterflyReadAlignBox = document.createElement('div');
const butterflyYesReadButton = document.createElement('button');
const butterflyNoReadButton = document.createElement('button');
const butterflyUpdateButton = document.createElement('button');
printButterflyTitle.textContent = `${butterflyBook.title}`;        
printButterflyAuthor.textContent = `Written by ${butterflyBook.author}`;
printButterflyGenre.textContent = `Genre: ${butterflyBook.genre}`;
printButterflyPages.textContent = `Number of Pages: ${butterflyBook.pages}`;
removeButterflyButton.textContent = "Remove book";
butterflyReadMessage.textContent = "Have you read this book?";
butterflyYesReadButton.textContent = "yes";
butterflyNoReadButton.textContent = "not yet";
butterflyUpdateButton.textContent = "update status";
butterflyBlankSide.classList.add('blank-side');
butterflyReadSection.classList.add('read-box');
removeButterflySection.classList.add('remove-box');
removeButterflyButton.classList.add('remove-option', 'book-button');
butterflyReadMessage.classList.add('read-message');
butterflyReadAlignBox.classList.add('align-box');
butterflyYesReadButton.classList.add('yes', 'book-button');
butterflyNoReadButton.classList.add('no', 'book-button');
butterflyUpdateButton.classList.add('update', 'invisible', 'book-button');        
butterflyBookDetails.classList.add('details');
butterflyPageSides.classList.add('page-sides');
butterflyFirstPageEdge.classList.add('edges', 'first-edge');
butterflySecondPageEdge.classList.add('edges', 'second-edge');
butterflyThirdPageEdge.classList.add('edges', 'third-edge');
printButterflyTitle.classList.add('title-display');
printButterflyAuthor.classList.add('author-display');
printButterflyGenre.classList.add('genre-display');
printButterflyPages.classList.add('pages-display');
butterflyBookContent.style.borderColor = "midnightblue";
body.appendChild(openButterflyBook);
openButterflyBook.appendChild(butterflyBookContent);
openButterflyBook.appendChild(closeButterflyBook);
closeButterflyBook.appendChild(closeButterflyBookButton);
butterflyBookContent.appendChild(butterflyBlankSide);
butterflyBookContent.appendChild(butterflyBookDetails);
butterflyBookContent.appendChild(butterflyPageSides);
butterflyPageSides.appendChild(butterflyFirstPageEdge);
butterflyPageSides.appendChild(butterflySecondPageEdge);
butterflyPageSides.appendChild(butterflyThirdPageEdge);
butterflyBlankSide.appendChild(removeButterflySection);
removeButterflySection.appendChild(removeButterflyButton);
butterflyBlankSide.appendChild(butterflyReadSection);
butterflyReadSection.appendChild(butterflyReadMessage);
butterflyReadSection.appendChild(butterflyReadAlignBox);
butterflyReadAlignBox.appendChild(butterflyYesReadButton);
butterflyReadAlignBox.appendChild(butterflyNoReadButton);
butterflyReadAlignBox.appendChild(butterflyUpdateButton); 
butterflyBookDetails.appendChild(printButterflyTitle);
butterflyBookDetails.appendChild(printButterflyAuthor);
butterflyBookDetails.appendChild(printButterflyGenre);
butterflyBookDetails.appendChild(printButterflyPages);
newButterflyBook.addEventListener('click', () => {
    openButterflyBook.style.display = "flex";
        butterflyYesReadButton.classList.add('invisible');
        butterflyNoReadButton.classList.add('invisible');
        butterflyUpdateButton.classList.remove('invisible');
        butterflyReadMessage.textContent = butterflyBook.readInfo();
        if (butterflyBook.read === false) {
            butterflyReadMessage.classList.add('unread');
        } else {
            butterflyReadMessage.classList.add('been-read');
        }

    butterflyUpdateButton.addEventListener('click', () => {
        butterflyReadMessage.textContent = "Have you read this book?"
        butterflyUpdateButton.classList.add('invisible');
        butterflyYesReadButton.classList.remove('invisible');
        butterflyNoReadButton.classList.remove('invisible');
        butterflyReadMessage.classList.remove('been-read', 'unread');
    })
    
    butterflyYesReadButton.addEventListener('click', () => {
        butterflyBook.read = true;
        butterflyYesReadButton.classList.add('invisible');
        butterflyNoReadButton.classList.add('invisible');
        butterflyUpdateButton.classList.remove('invisible');
        butterflyReadMessage.classList.add('been-read');
        butterflyReadMessage.textContent = butterflyBook.readInfo();
    })
    butterflyNoReadButton.addEventListener('click', () => {
        butterflyBook.read = false;
        butterflyYesReadButton.classList.add('invisible');
        butterflyNoReadButton.classList.add('invisible');
        butterflyUpdateButton.classList.remove('invisible');
        butterflyReadMessage.classList.add('unread');
        butterflyReadMessage.textContent = butterflyBook.readInfo();
    })
    removeButterflyButton.addEventListener('click', () => {               
        removeButterflyButton.classList.add("invisible");
        confirmDeleteButterfly.textContent = `Are you sure you want to remove ${butterflyBook.title}?`;
        confirmDeleteButterfly.classList.add("delete-message");
        removeButterflySection.appendChild(confirmDeleteButterfly);
        alignButterflyBox.classList.add('align-box');
        removeButterflySection.appendChild(alignButterflyBox);
        yesDeleteButterflyButton.textContent = "yes";
        yesDeleteButterflyButton.classList.add("yes", 'book-button');
        alignButterflyBox.appendChild(yesDeleteButterflyButton);
        yesDeleteButterflyButton.addEventListener('click', () => {
            newButterflyBook.remove();
            openButterflyBook.remove();
            const removeButterflyBook = myLibrary.findIndex(book =>
                book.title === butterflyBook.title && book.author === butterflyBook.author && book.pages === butterflyBook.pages && book.genre === butterflyBook.genre
            );
            console.log(removeButterflyBook);
            if (removeButterflyBook !== -1) {
                myLibrary.splice(removeButterflyBook, 1);
                console.log(`${butterflyBook.title} was removed. Check the library`);
                console.log(myLibrary);
            }                 
        })        
        noDeleteButterflyButton.textContent = "no";
        noDeleteButterflyButton.classList.add("no", 'book-button');
        alignButterflyBox.appendChild(noDeleteButterflyButton);
        noDeleteButterflyButton.addEventListener('click', () => {
            removeButterflyButton.classList.remove("invisible");
            alignButterflyBox.remove();
            confirmDeleteButterfly.remove();
        })
    })
})
closeButterflyBookButton.addEventListener('click', () => {
    openButterflyBook.style.display = "none";
})
console.log(myLibrary);
//console.log(`Initial number of books on the first shelf: ${firstShelf.children.length}`);

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
    bookReadInput.checked = false;
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
    const bookRead = bookReadInput.checked;

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
        
        if (!bookDuplicate && myLibrary.length < maxLibraryCapacity && (bookTitle !== '' && bookAuthor !== '' && bookPages !== '' && bookGenre !== '') && (bookTitle !== 'Title' && bookTitle !== 'Book Title') && (bookAuthor !== 'First & Last Name' && bookAuthor !== 'Author' && bookAuthor !== 'Author Name' && bookAuthor !== 'First Last' &&  bookAuthor !== 'First Name' &&  bookAuthor !== 'Last Name') && (bookPages >= 5)) {
            
            // Creates a book object from correct user input
            const libraryBook = new Book(bookTitle, bookAuthor, bookPages, bookGenre, bookRead);
            myLibrary.push(libraryBook);
            console.log(myLibrary);
            console.log(`Current number of library books: ${myLibrary.length}`);

            clearInput();
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
            const idRead = bookRead;
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
            const confirmDelete = document.createElement('p');
            const alignBox = document.createElement('div');
            const yesDeleteButton = document.createElement('button');
            const noDeleteButton = document.createElement('button');

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
                case 'Self-Help & Guides':
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
                case 'Dystopian':
                    newBook.style.backgroundColor = "olive";
                    bookContent.style.borderColor = "olive";
                    break;
                case 'Literary Fiction':
                    newBook.style.backgroundColor = "darkmagenta";
                    bookContent.style.borderColor = "darkmagenta";
                    break;
                case 'Essays':
                    newBook.style.backgroundColor = "orangered";
                    bookContent.style.borderColor = "orangered";
                    break;
                case 'Politics':
                    newBook.style.backgroundColor = "brown";
                    bookContent.style.borderColor = "brown";
                    break;
                case 'Business & Economics':
                    newBook.style.backgroundColor = "olivedrab";
                    bookContent.style.borderColor = "olivedrab";
                    break;
                case 'Health & Wellness':
                    newBook.style.backgroundColor = "mediumorchid";
                    bookContent.style.borderColor = "mediumorchid";
                    break;
                case 'Young Adult':
                    newBook.style.backgroundColor = "deepskyblue";
                    bookContent.style.borderColor = "deepskyblue";
                    break;
                case 'Graphic Novels & Comics':
                    newBook.style.backgroundColor = "orange";
                    bookContent.style.borderColor = "orange";
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

            if (libraryBooks <= maximumBooks || firstShelf.children.length < maximumBooks) {
                firstShelf.appendChild(newBook);
                console.log(`Number of books on the first shelf: ${firstShelf.children.length}`);
                console.log(`Remaining avaiable shelf space: ${firstShelfSpace}px`);
                if (libraryBooks < maximumBooks) {
                    console.log("The first shelf still has space");
                } else {
                    console.log("The first shelf is full");
                }
            } else if ((libraryBooks > maximumBooks && libraryBooks <= (2 * maximumBooks)) || secondShelf.children.length < maximumBooks) {
                secondShelf.appendChild(newBook);
                console.log(`Number of books on the second shelf: ${secondShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${secondShelfSpace}px`);
            } else if ((libraryBooks > maximumBooks && libraryBooks <= (3 * maximumBooks)) || thirdShelf.children.length < maximumBooks) {
                thirdShelf.appendChild(newBook);
                console.log(`Number of books on the third shelf: ${thirdShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${thirdShelfSpace}px`);
            } else if ((libraryBooks > maximumBooks && libraryBooks <= (4 * maximumBooks)) || fourthShelf.children.length < maximumBooks) {
                fourthShelf.appendChild(newBook);
                console.log(`Number of books on the fourth shelf: ${fourthShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${fourthShelfSpace}px`);
            } else if ((libraryBooks > maximumBooks && libraryBooks <= (5 * maximumBooks)) || fifthShelf.children.length < maximumBooks) {
                fifthShelf.appendChild(newBook);
                console.log(`Number of books on the fifth shelf: ${fifthShelfBooks}`);
                console.log(`Remaining avaiable shelf space: ${fifthShelfSpace}px`);
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
                console.log("you clicked no");
                console.log(libraryBook);
                yesReadButton.classList.add('invisible');
                noReadButton.classList.add('invisible');
                updateButton.classList.remove('invisible');
                if (libraryBook.read === true) {
                    readMessage.classList.add('been-read');
                } else {
                    readMessage.classList.add('unread');
                }
                readMessage.textContent = libraryBook.readInfo();

                updateButton.addEventListener('click', () => {
                    readMessage.textContent = "Have you read this book?"
                    updateButton.classList.add('invisible');
                    yesReadButton.classList.remove('invisible');
                    noReadButton.classList.remove('invisible');
                    readMessage.classList.remove('been-read', 'unread');
                })

                yesReadButton.addEventListener('click', () => {
                    console.log("you clicked yes");
                    libraryBook.read = true;
                    console.log(libraryBook);
                    yesReadButton.classList.add('invisible');
                    noReadButton.classList.add('invisible');
                    updateButton.classList.remove('invisible');
                    readMessage.classList.add('been-read');
                    readMessage.textContent = libraryBook.readInfo();

                })
                noReadButton.addEventListener('click', () => {
                    console.log("you clicked no");
                    libraryBook.read = false;
                    console.log(libraryBook);
                    yesReadButton.classList.add('invisible');
                    noReadButton.classList.add('invisible');
                    updateButton.classList.remove('invisible');
                    readMessage.classList.add('unread');
                    readMessage.textContent = libraryBook.readInfo();
                })
                
                
                removeButton.addEventListener('click', () => {
                    console.log(`${idTitle}, ${idAuthor}, ${idGenre}, ${idPages}`);                
                    removeButton.classList.add("invisible");
                    
                    confirmDelete.textContent = `Are you sure you want to remove ${printTitle.textContent}?`;
                    confirmDelete.classList.add("delete-message");
                    removeSection.appendChild(confirmDelete);
                    alignBox.classList.add('align-box');
                    removeSection.appendChild(alignBox);
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

            submitButton.style.display = "none";

            header.textContent = `The library is full and can no longer accept any more donations`;
            header.classList.add("submitted-header", "full");
            submitDiv.style.gridTemplateRows = "55px 1fr";
        
            messageBox.classList.add('action');
            messageBox.textContent =  "Or close the catalog and check the bookcase";
            
            newBookInputs.forEach((input) => {
                input.classList.remove("new-input");
                input.classList.add("invisible");
            });
            
            submitButton.style.display = "none";
            donateButton.style.display = "none";
            searchButton.style.display = "block";
            searchButton.style.gridColumn = "1 / 3";
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
    searchButton.style.display = "block";
    submitButton.style.display = "block";
});

searchButton.addEventListener('click', () => {
    messageBox.textContent = "The search feature is coming soon!";
    
    header.classList.add("normal-header");
    searchButton.disabled = "true";
    searchButton.classList.remove("working-search-button");
});


// Open the book catalog submit form
bookCatalog.addEventListener('click', () => {
    bookModal.style.display = "flex";
    console.log("myLibrary.length: " + myLibrary.length);
    console.log("maxLibraryCapacity: " + maxLibraryCapacity);
    if (myLibrary.length < maxLibraryCapacity) {
        bookTitleInput.disabled = false;
        bookAuthorInput.disabled = false;
        bookPagesInput.disabled = false;
        bookGenreOptions.disabled = false;
        submitButton.disabled = false;

        header.textContent = "Enter your book into the Catalog:";
        header.classList.add("normal-header");
        header.classList.remove("submitted-header", "full");
        submitDiv.style.gridTemplateRows = "55px 1fr";
        messageBox.textContent = "";
        messageBox.classList.remove('action');
        newBookInputs.forEach((input) => {
            input.classList.remove("invisible");
            input.classList.add("new-input");
        });
        donateButton.style.display = "none";
        searchButton.style.display = "block";
        submitButton.style.display = "block";
        searchButton.style.gridColumn = "2 / 3";
    }
});

// Close the book modal
closeButton.addEventListener('click', () => {
    bookModal.style.display = "none";
    clearInput();
    clearNotices();
    console.log("Books in the library:");
    console.log(myLibrary);
})



