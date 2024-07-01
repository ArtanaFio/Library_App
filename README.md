# Libarary_App

## Description
A Library app project using JavaScript objects. This project was created as part of a learning exercise for The Odin Project, Full Stack JavaScript learning path.

## Table of Contents
- [Description](#description)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Instructions](#instructions)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Project Structure
```
Library_App/
├--Assets/
|   ├--CSS/
|      ├--index.css
|      ├--modals_stylesheet.css
|      └--open-app.css
|   ├--Images/
|      ├--darkseagreen_book.svg
|      └--x-square.svg
|   ├--JS/
|      ├--library.js
|      ├--open-app.js
|      └--sky.js
├--index.html
└--README.md
```

## Technologies Used
- HTML5
- CSS3
- JavaScript (vanilla JS)

## Instructions
1. If you have't already, set up your project with skeleton HTML/CSS and JS files.

2. All of your book objects are going to be stored in an array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

const myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. This is where event.preventDefault(); will come in handy. Check out the documentation for event.preventDefault and see how you can solve this issue!

5. Add a button on each book’s display to remove the book from the library. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

6. Add a button on each book's display to change its "read" status. To facilitate this you will want to create the function that toggles a book's "read" status on your "book" prototype instance.

NOTE: You’re not required to add any type of storage right now to save the information between page reloads. You will have the option to come back to this project later on in the course.

## Usage
- Open `index.html` in a web browser to view the project.
- Follow the instructions and complete the tasks as outlined in the project.

## Acknowledgments
- This project was completed as part of the JavaScript course on The Odin Project.
- **SVG:**
   - Book SVG by Feather Icons, https://feathericons.com/?query=book-open
   - Close SVG by Feather Icons, https://feathericons.com/?query=close
- CSS Filter Generator to Convert From Black to Target Hex Color: https://codepen.io/sosuke/pen/Pjoqqp
