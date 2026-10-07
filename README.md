# Book Lovers 📚

A React frontend for managing a personal book library — add, view, update, and
delete books. Built with Create React App, React Router, and Bootstrap.

**GitHub:** https://github.com/venuvardhansomisetty/book-library

## Features
- Home page with a welcome screen
- Library page listing all books as cards
- Read a single book's full details
- Add a new book or update an existing one, using the same form component
- Delete a book with a confirmation step

## Tech stack
React (Create React App), React Router, Axios, Bootstrap

## How it's structured
- `src/api.js` — a configured Axios instance pointing to the backend API
- `src/components/Navbar.js` — shared navigation bar
- `src/pages/` — one page per route: Home, Library, ReadBook, UpdateBook
  (handles both Add and Update), DeleteBook

## Status
Frontend only, in progress. The app expects a REST API at
`http://localhost:5000` with these endpoints:
- `GET /books` — list all books
- `GET /books/:id` — get one book
- `POST /books` — add a book
- `PUT /books/:id` — update a book
- `DELETE /books/:id` — delete a book


The backend (Node/Express + MySQL) hasn't been built yet. Until then, the
Library page will show "No books available."

## Run locally
```
git clone https://github.com/venuvardhansomisetty/book-library.git
cd book-library
npm install
npm start
```
