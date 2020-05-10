# HW21-Google-Books-Search

## Description
A React-based Google Books Search app.

## Requirements
This application requires at minimum:
* User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.
*  Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

At a minimum, books should have each of the following fields:
* title - Title of the book from the Google Books API
* authors - The books's author(s) as returned from the Google Books API description - The book's description as returned from the Google Books API
* description - The book's description as returned from the Google Books API
* image - The Book's thumbnail image as returned from the Google Books API
* link - The Book's information link as returned from the Google Books API

Express routes:
* /api/books (get) - Should return all saved books as JSON.
* /api/books (post) - Will be used to save a new book to the database.
* /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.


## Technologies Used
HTML, CSS, JavaScript, React.JS, Heroku, MongoDB

## Heroku deployed link:
https://radiant-plains-48457.herokuapp.com/
