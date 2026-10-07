import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    description: ""
  });

 useEffect(() => {
  if (!id) return;
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

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await api.put(`/books/${id}`, book);
        alert("Book updated successfully!");
      } else {
        await api.post("/books", book);
        alert("Book added successfully!");
      }

      navigate("/library");
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h2 className="mb-4">
            {id ? "Update Book" : "Add Book"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Book Title</label>

              <input
                type="text"
                name="title"
                className="form-control"
                value={book.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>

              <input
                type="text"
                name="author"
                className="form-control"
                value={book.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>

              <input
                type="number"
                name="price"
                className="form-control"
                value={book.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>

              <textarea
                name="description"
                className="form-control"
                rows="4"
                value={book.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success me-2">
              {id ? "Update Book" : "Add Book"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/library")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBook;
