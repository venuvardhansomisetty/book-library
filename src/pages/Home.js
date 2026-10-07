import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <h1 className="display-1 fw-bold">Welcome Book Lovers 📚</h1>

        <p className="lead mt-3">
          Discover and manage your favorite books.
        </p>

        <Link to="/library" className="btn btn-primary btn-lg mt-3">
          Explore Library
        </Link>
      </div>
    </div>
  );
}

export default Home;