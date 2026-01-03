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
const maximumBooks = Math.floor(
  (shelfWidth + shelfGap - bookWidth) / (bookWidth + shelfGap)
); //Math.floor((shelfWidth - (2 * shelfGap) - bookWidth) / (shelfGap + bookWidth));
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
  this.info = function () {
    return `${this.title} is written by ${this.author}, belongs to the ${this.genre} genre, and has ${this.pages} pages.`;
  };
  this.readInfo = function () {
    if (this.read === true) {
      return `You have read this book`;
    } else if (this.read === false) {
      return `You have not read this book`;
    }
  };
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

const library_key = "books";

function getBooks() {
  return JSON.parse(localStorage.getItem(library_key));
}

function storeBook(library) {
  localStorage.setItem(library_key, JSON.stringify(library));
}

function deleteBooks() {
  localStorage.removeItem(library_key);
}

function makeBackendBook(title, author, pages, genre, read) {
  const backendBook = new Book(title, author, pages, genre, read);
  myLibrary.push(backendBook);

  storeBook(myLibrary);

  return backendBook;
}

function makeElement(element, classes, text, parent) {
  const item = document.createElement(element);
  if (classes) {
    item.classList.add(...classes.split(" "));
  }
  if (text) {
    item.textContent = text;
  }
  if (parent) {
    parent.appendChild(item);
  }
  return item;
}

function convertedGenre(string) {
  const stringArray = string.split(" ").map((word) => word.toLowerCase());
  const justWordsArray = [];
  stringArray.forEach((word) => {
    if (word !== "&") {
      justWordsArray.push(word);
    }
  });
  const convertedString = justWordsArray.join("-");
  return convertedString;
}

function makeShelfBook(backendBookGenre, backendBookTitle, shelf) {
  const genreCss = convertedGenre(backendBookGenre);
  const shelfBook = makeElement("div", `book ${genreCss}`, "", shelf);
  const bookTitle = makeElement("p", "title", backendBookTitle, shelfBook);

  return {
    shelfBook: shelfBook,
    bookTitle: bookTitle,
  };
}

function makeOpenBookInterface(backendBook, newBook) {
  const openBook = makeElement("div", "open-book-modal", "", body);
  const bookContent = makeElement(
    "div",
    `book-modal-content ${convertedGenre(backendBook.genre)}-border`,
    "",
    openBook
  );
  const closeBook = makeElement("div", "close-box", "", openBook);
  const closeBookButton = makeElement("img", "close-book", "", closeBook);
  closeBookButton.src = "Assets/Images/x-square.svg";
  const blankSide = makeElement("div", "blank-side", "", bookContent);
  const bookDetails = makeElement("div", "details", "", bookContent);
  const pageSides = makeElement("div", "page-sides", "", bookContent);
  const firstPageEdge = makeElement("div", "edges first-edge", "", pageSides);
  const secondPageEdge = makeElement("div", "edges second-edge", "", pageSides);
  const thirdPageEdge = makeElement("div", "edges third-edge", "", pageSides);
  const printTitle = makeElement(
    "p",
    "title-display",
    backendBook.title,
    bookDetails
  );
  const printAuthor = makeElement(
    "p",
    "author-display",
    `Written by ${backendBook.author}`,
    bookDetails
  );
  const printGenre = makeElement(
    "p",
    "genre-display",
    `Genre: ${backendBook.genre}`,
    bookDetails
  );
  const printPages = makeElement(
    "p",
    "pages-display",
    `Number of Pages: ${backendBook.pages}`,
    bookDetails
  );
  const removeSection = makeElement("div", "remove-box", "", blankSide);
  const removeButton = makeElement(
    "button",
    "remove-option book-button",
    "Remove book",
    removeSection
  );
  const confirmDelete = makeElement(
    "p",
    "delete-message gone",
    `Are you sure you want to remove ${backendBook.title}?`,
    removeSection
  );
  const alignBox = makeElement("div", "align-box gone", "", removeSection);
  const yesDeleteButton = makeElement(
    "button",
    "yes book-button gone",
    "yes",
    alignBox
  );
  const noDeleteButton = makeElement(
    "button",
    "no book-button gone",
    "no",
    alignBox
  );

  const readSection = makeElement("div", "read-box", "", blankSide);
  const readMessage = makeElement(
    "p",
    "read-message",
    "Have you read this book?",
    readSection
  );
  const readAlignBox = makeElement("div", "align-box", "", readSection);
  const yesReadButton = makeElement(
    "button",
    "yes book-button",
    "yes",
    readAlignBox
  );
  const noReadButton = makeElement(
    "button",
    "no book-button",
    "not yet",
    readAlignBox
  );
  const updateButton = makeElement(
    "button",
    "update invisible book-button",
    "update status",
    readAlignBox
  );

  newBook.addEventListener("click", () => {
    openABook(
      openBook,
      yesReadButton,
      noReadButton,
      updateButton,
      readMessage,
      backendBook
    );

    readStatus(readMessage, backendBook);

    updateButton.addEventListener("click", () => {
      updateReadStatus(readMessage, updateButton, yesReadButton, noReadButton);
    });

    yesReadButton.addEventListener("click", () => {
      pickYesRead(
        backendBook,
        yesReadButton,
        noReadButton,
        updateButton,
        readMessage
      );
    });

    noReadButton.addEventListener("click", () => {
      pickNoRead(
        backendBook,
        yesReadButton,
        noReadButton,
        updateButton,
        readMessage
      );
    });

    removeButton.addEventListener("click", () => {
      showRemovalOption(
        removeButton,
        confirmDelete,
        alignBox,
        yesDeleteButton,
        noDeleteButton
      );

      yesDeleteButton.addEventListener("click", () => {
        removeBook(newBook, openBook, backendBook);
      });

      noDeleteButton.addEventListener("click", () => {
        cancelRemoval(
          removeButton,
          alignBox,
          confirmDelete,
          yesDeleteButton,
          noDeleteButton
        );
      });
    });
  });
  closeBookButton.addEventListener("click", () => {
    closeABook(openBook);
  });
}

function openABook(openBook, yesReadButton, noReadButton, updateButton) {
  openBook.style.display = "flex";
  yesReadButton.classList.add("invisible");
  noReadButton.classList.add("invisible");
  updateButton.classList.remove("invisible");
}

function readStatus(readMessage, backendBook) {
  readMessage.textContent = backendBook.readInfo();
  if (backendBook.read === false) {
    readMessage.classList.add("unread");
  } else {
    readMessage.classList.add("been-read");
  }
}

function updateReadStatus(
  readMessage,
  updateButton,
  yesReadButton,
  noReadButton
) {
  readMessage.textContent = "Have you read this book?";
  updateButton.classList.add("invisible");
  yesReadButton.classList.remove("invisible");
  noReadButton.classList.remove("invisible");
  readMessage.classList.remove("unread", "been-read");
}

function pickYesRead(
  backendBook,
  yesReadButton,
  noReadButton,
  updateButton,
  readMessage
) {
  backendBook.read = true;
  yesReadButton.classList.add("invisible");
  noReadButton.classList.add("invisible");
  updateButton.classList.remove("invisible");
  readMessage.classList.add("been-read");
  readMessage.textContent = backendBook.readInfo();
  storeBook(myLibrary);
}

function pickNoRead(
  backendBook,
  yesReadButton,
  noReadButton,
  updateButton,
  readMessage
) {
  backendBook.read = false;
  yesReadButton.classList.add("invisible");
  noReadButton.classList.add("invisible");
  updateButton.classList.remove("invisible");
  readMessage.classList.add("unread");
  readMessage.textContent = backendBook.readInfo();
  storeBook(myLibrary);
}

function showRemovalOption(
  removeButton,
  confirmDelete,
  alignBox,
  yesDeleteButton,
  noDeleteButton
) {
  removeButton.classList.add("gone");
  confirmDelete.classList.remove("gone");
  alignBox.classList.remove("gone");
  yesDeleteButton.classList.remove("gone");
  noDeleteButton.classList.remove("gone");
}

function removeBook(newBook, openBook, backendBook) {
  newBook.remove();
  openBook.remove();
  const removeBook = myLibrary.findIndex(
    (book) =>
      book.title === backendBook.title &&
      book.author === backendBook.author &&
      book.pages === backendBook.pages &&
      book.genre === backendBook.genre
  );
  console.log(removeBook);
  if (removeBook !== -1) {
    myLibrary.splice(removeBook, 1);
    console.log(`${backendBook.title} was removed. Check the library`);
    console.log(myLibrary);
    storeBook(myLibrary);
  }
}

function cancelRemoval(
  removeButton,
  alignBox,
  confirmDelete,
  yesDeleteButton,
  noDeleteButton
) {
  removeButton.classList.remove("gone");
  alignBox.classList.add("gone");
  confirmDelete.classList.add("gone");
  yesDeleteButton.classList.add("gone");
  noDeleteButton.classList.add("gone");
}

function closeABook(openBook) {
  openBook.style.display = "none";
}

if (localStorage.length === 0) {
  const scotQueen = makeBackendBook(
    "Embroidering Her Truth: Mary, Queen of Scots and the Language of Power",
    "Clare Hunter",
    "400",
    "History",
    false
  );
  console.log(scotQueen.readInfo());

  const newQueenBook = makeShelfBook(
    scotQueen.genre,
    scotQueen.title,
    firstShelf
  ).shelfBook;

  const queenBookInterface = makeOpenBookInterface(scotQueen, newQueenBook);

  const rumiBook = makeBackendBook(
    "Rumi's Little Book Of Life: The Garden Of The Soul, The Heart, And The Spirit",
    ["Jalal al-Din Muhammad Rumi", "Maryam Mafi", "Melita Kolin"],
    "203",
    "Poetry",
    false
  );

  const newRumiBook = makeShelfBook(
    rumiBook.genre,
    rumiBook.title,
    firstShelf
  ).shelfBook;

  const rumiBookInterface = makeOpenBookInterface(rumiBook, newRumiBook);

  const butterflyBook = makeBackendBook(
    "The Butterfly Garden",
    "Dot Hutchison",
    "286",
    "Horror & Thriller",
    false
  );

  const newButterflyBook = makeShelfBook(
    butterflyBook.genre,
    butterflyBook.title,
    firstShelf
  ).shelfBook;

  const butterflyBookInterface = makeOpenBookInterface(
    butterflyBook,
    newButterflyBook
  );
} else {
  let books = getBooks();

  books.forEach((book) => {
    const backendBookCopy = makeBackendBook(
      book.title,
      book.author,
      book.pages,
      book.genre,
      book.read
    );
    const storedBook = makeShelfBook(
      backendBookCopy.genre,
      backendBookCopy.title,
      firstShelf
    ).shelfBook;
    makeOpenBookInterface(backendBookCopy, storedBook);
  });
}

console.log(myLibrary);

//console.log(`Initial number of books on the first shelf: ${firstShelf.children.length}`);

// Function to transform any string input into a title case version of the string
function titleCase(string) {
  const wordArray = string.split(" ").map((word) => word.toLowerCase());
  let newArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (
      wordArray[i] !== "a" &&
      wordArray[i] !== "an" &&
      wordArray[i] !== "and" &&
      wordArray[i] !== "the" &&
      wordArray[i] !== "but" &&
      wordArray[i] !== "at" &&
      wordArray[i] !== "by" &&
      wordArray[i] !== "in" &&
      wordArray[i] !== "on" &&
      wordArray[i] !== "for" &&
      wordArray[i] !== "nor" &&
      wordArray[i] !== "or" &&
      wordArray[i] !== "to" &&
      wordArray[i] !== "yet" &&
      wordArray[i] !== "of" &&
      wordArray[i] !== "as" &&
      wordArray[i] !== "if"
    ) {
      const newWord =
        wordArray[i].charAt(0).toUpperCase() +
        wordArray[i].slice(1).toLowerCase();
      newArray.push(newWord);
    } else if (i === 0 || i === wordArray.length - 1) {
      const newWord =
        wordArray[i].charAt(0).toUpperCase() +
        wordArray[i].slice(1).toLowerCase();
      newArray.push(newWord);
    } else {
      newArray.push(wordArray[i]);
    }
  }
  const title = newArray.join(" ");
  return title;
}

function toggleDisplay() {
  const yesText = document.getElementById("yes-read");
  const noText = document.getElementById("no-read");
  const toggleSwitch = document.querySelector(".toggle:before");
  bookReadInput.addEventListener("click", () => {
    if (bookReadInput.checked === true) {
      noText.style.color = "transparent";
      yesText.style.color = "forestgreen";
    } else if (bookReadInput.checked === false) {
      noText.style.color = "darkgoldenrod";
      yesText.style.color = "transparent";
    }
  });
}
toggleDisplay();

//Functon to clear input fields
function clearInput() {
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookGenreOptions.selectedIndex = 0;
  bookReadInput.checked = false;
  noText.style.color = "darkgoldenrod";
  yesText.style.color = "transparent";
}

// Function to remove old notifications
function clearNotices() {
  const oldMessages = messageBox.querySelectorAll("p");

  oldMessages.forEach((notice) => {
    notice.remove();
  });
}

submitButton.addEventListener("click", submitClick, false);
function submitClick(event) {
  event.preventDefault();
}

submitButton.addEventListener("click", () => {
  clearNotices();

  const bookTitle = titleCase(bookTitleInput.value);
  const bookAuthor = titleCase(bookAuthorInput.value);
  const bookPages = bookPagesInput.value;
  const bookGenre = bookGenreOptions.value;
  const bookRead = bookReadInput.checked;

  let bookDuplicate = myLibrary.find(
    (existingBook) =>
      existingBook.title === titleCase(bookTitleInput.value) &&
      existingBook.author === titleCase(bookAuthorInput.value) &&
      existingBook.pages === bookPagesInput.value &&
      existingBook.genre === bookGenreOptions.value
  );

  function addBookToLibrary() {
    if (bookDuplicate) {
      const bookDuplicateMessage = makeElement(
        "p",
        "error",
        "Sorry, the library already has this book. Please donate another book.",
        messageBox
      );
    }

    if (
      bookTitle === "" ||
      bookAuthor === "" ||
      bookPages === "" ||
      bookGenre === ""
    ) {
      const missingMessage = makeElement(
        "p",
        "error",
        "Some information is missing.",
        messageBox
      );
    }

    if (
      bookTitle === "Title" ||
      bookTitle === "Book Title" ||
      bookTitle === "A Title" ||
      bookTitle === "Any Title"
    ) {
      const titleMessage = makeElement(
        "p",
        "error",
        "Please enter a proper book title.",
        messageBox
      );
    }

    if (
      bookAuthor === "First & Last Name" ||
      bookAuthor === "Author" ||
      bookAuthor === "Author Name" ||
      bookAuthor === "First Last" ||
      bookAuthor === "First Name" ||
      bookAuthor === "Last Name"
    ) {
      const authorMessage = makeElement(
        "p",
        "error",
        "Please enter a valid name.",
        messageBox
      );
    }

    if (bookPages < 5 && bookPages !== "") {
      const pagesMessage = makeElement(
        "p",
        "error",
        "Please make sure your book has at least 5 pages.",
        messageBox
      );
    }

    if (
      !bookDuplicate &&
      myLibrary.length < maxLibraryCapacity &&
      bookTitle !== "" &&
      bookAuthor !== "" &&
      bookPages !== "" &&
      bookGenre !== "" &&
      bookTitle !== "Title" &&
      bookTitle !== "Book Title" &&
      bookAuthor !== "First & Last Name" &&
      bookAuthor !== "Author" &&
      bookAuthor !== "Author Name" &&
      bookAuthor !== "First Last" &&
      bookAuthor !== "First Name" &&
      bookAuthor !== "Last Name" &&
      bookPages >= 5
    ) {
      // Creates a book object from correct user input
      const libraryBook = makeBackendBook(
        bookTitle,
        bookAuthor,
        bookPages,
        bookGenre,
        bookRead
      );
      console.log(myLibrary);
      console.log(`Current number of library books: ${myLibrary.length}`);

      clearInput();
      allInput.forEach((input) => {
        input.addEventListener("click", () => {
          clearNotices();
        });
      });
      bookGenreOptions.addEventListener("click", () => {
        clearNotices();
      });

      const idTitle = bookTitle;
      const idAuthor = bookAuthor;
      const idGenre = bookGenre;
      const idPages = bookPages;
      const idRead = bookRead;

      const libraryBooks = myLibrary.length;
      let secondShelfBooks = libraryBooks - maximumBooks;
      let thirdShelfBooks = libraryBooks - 2 * maximumBooks;
      let fourthShelfBooks = libraryBooks - 3 * maximumBooks;
      let fifthShelfBooks = libraryBooks - 4 * maximumBooks;

      let firstShelfSpace =
        shelfWidth - libraryBooks * bookWidth - (libraryBooks - 1) * shelfGap;
      let secondShelfSpace =
        shelfWidth -
        secondShelfBooks * bookWidth -
        (secondShelfBooks - 1) * shelfGap;
      let thirdShelfSpace =
        shelfWidth -
        thirdShelfBooks * bookWidth -
        (thirdShelfBooks - 1) * shelfGap;
      let fourthShelfSpace =
        shelfWidth -
        fourthShelfBooks * bookWidth -
        (fourthShelfBooks - 1) * shelfGap;
      let fifthShelfSpace =
        shelfWidth -
        fifthShelfBooks * bookWidth -
        (fifthShelfBooks - 1) * shelfGap;

      let shelf;
      if (
        libraryBooks <= maximumBooks ||
        firstShelf.children.length < maximumBooks
      ) {
        shelf = firstShelf;
        console.log(
          `Number of books on the first shelf: ${firstShelf.children.length}`
        );
        console.log(`Remaining avaiable shelf space: ${firstShelfSpace}px`);
        if (libraryBooks < maximumBooks) {
          console.log("The first shelf still has space");
        } else {
          console.log("The first shelf is full");
        }
      } else if (
        (libraryBooks > maximumBooks && libraryBooks <= 2 * maximumBooks) ||
        secondShelf.children.length < maximumBooks
      ) {
        shelf = secondShelf;
        console.log(`Number of books on the second shelf: ${secondShelfBooks}`);
        console.log(`Remaining avaiable shelf space: ${secondShelfSpace}px`);
      } else if (
        (libraryBooks > maximumBooks && libraryBooks <= 3 * maximumBooks) ||
        thirdShelf.children.length < maximumBooks
      ) {
        shelf = thirdShelf;
        console.log(`Number of books on the third shelf: ${thirdShelfBooks}`);
        console.log(`Remaining avaiable shelf space: ${thirdShelfSpace}px`);
      } else if (
        (libraryBooks > maximumBooks && libraryBooks <= 4 * maximumBooks) ||
        fourthShelf.children.length < maximumBooks
      ) {
        shelf = fourthShelf;
        console.log(`Number of books on the fourth shelf: ${fourthShelfBooks}`);
        console.log(`Remaining avaiable shelf space: ${fourthShelfSpace}px`);
      } else if (
        (libraryBooks > maximumBooks && libraryBooks <= 5 * maximumBooks) ||
        fifthShelf.children.length < maximumBooks
      ) {
        shelf = fifthShelf;
        console.log(`Number of books on the fifth shelf: ${fifthShelfBooks}`);
        console.log(`Remaining avaiable shelf space: ${fifthShelfSpace}px`);
      }

      const newLibraryBook = makeShelfBook(
        libraryBook.genre,
        libraryBook.title,
        shelf
      ).shelfBook;

      const libraryBookInterface = makeOpenBookInterface(
        libraryBook,
        newLibraryBook
      );

      header.textContent = `You have added "${bookTitle}" to the library!`;
      header.classList.add("submitted-header");
      submitDiv.style.gridTemplateRows = "1fr 1fr";

      messageBox.classList.add("action");
      messageBox.textContent = "Or close the catalog and check the bookcase";

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

      messageBox.classList.add("action");
      messageBox.textContent = "Or close the catalog and check the bookcase";

      newBookInputs.forEach((input) => {
        input.classList.remove("new-input");
        input.classList.add("invisible");
      });

      submitButton.style.display = "none";
      donateButton.style.display = "none";
      searchButton.style.display = "block";
      searchButton.style.gridColumn = "1 / 3";
    }
  }
  addBookToLibrary();
});

donateButton.addEventListener("click", () => {
  header.textContent = "Enter your book into the Catalog:";
  header.classList.add("normal-header");
  header.classList.remove("submitted-header");
  messageBox.textContent = "";
  messageBox.classList.remove("action");
  newBookInputs.forEach((input) => {
    input.classList.remove("invisible");
    input.classList.add("new-input");
  });
  donateButton.style.display = "none";
  searchButton.style.display = "block";
  submitButton.style.display = "block";
});

searchButton.addEventListener("click", () => {
  messageBox.textContent = "The search feature is coming soon!";
  header.classList.add("normal-header");
  searchButton.disabled = "true";
  searchButton.classList.remove("working-search-button");
});

// Open the book catalog submit form
bookCatalog.addEventListener("click", () => {
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
    messageBox.classList.remove("action");
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
closeButton.addEventListener("click", () => {
  bookModal.style.display = "none";
  clearInput();
  clearNotices();
  console.log("Books in the library:");
  console.log(myLibrary);
});
