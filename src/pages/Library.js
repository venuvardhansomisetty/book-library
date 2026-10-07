import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>📚 Book Library</h1>

        <Link to="/update" className="btn btn-success">
          Add Book
        </Link>
      </div>

      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">{book.title}</h4>

                <p className="card-text">
                  <strong>Author:</strong> {book.author}
                </p>

                <p className="card-text">
                  <strong>Price:</strong> ₹{book.price}
                </p>

                <Link
                  to={`/read/${book.id}`}
                  className="btn btn-primary me-2"
                >
                  Read
                </Link>

                <Link
                  to={`/update/${book.id}`}
                  className="btn btn-warning me-2"
                >
                  Update
                </Link>

                <Link
                  to={`/delete/${book.id}`}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <div className="alert alert-info">
          No books available.
        </div>
      )}
    </div>
  );
}

export default Library;