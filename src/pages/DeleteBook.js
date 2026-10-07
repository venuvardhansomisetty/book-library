import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    try {
      await api.delete(`/books/${id}`);

      alert("Book deleted successfully!");

      navigate("/library");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!book) {
    return (
      <div className="container mt-5">
        <div className="alert alert-info">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body text-center">
          <h2 className="text-danger">Delete Book</h2>

          <p className="mt-4">
            Are you sure you want to delete:
          </p>

          <h4>{book.title}</h4>

          <p>by {book.author}</p>

          <button
            className="btn btn-danger me-2"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/library")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
