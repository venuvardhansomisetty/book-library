import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";

function ReadBook() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
  const getBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };
  getBook();
}, [id]);

  const getBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  if (!book) {
    return (
      <div className="container mt-5">
        <div className="alert alert-info">
          Loading book...
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1>{book.title}</h1>

          <hr />

          <h5>Author</h5>
          <p>{book.author}</p>

          <h5>Price</h5>
          <p>₹{book.price}</p>

          <h5>Description</h5>
          <p>{book.description}</p>

          <Link to="/library" className="btn btn-secondary">
            Back to Library
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReadBook;
