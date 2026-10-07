import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Library from "./pages/Library";
import ReadBook from "./pages/ReadBook";
import UpdateBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/library" element={<Library />} />

        <Route path="/read/:id" element={<ReadBook />} />

        <Route path="/update" element={<UpdateBook />} />

        <Route path="/update/:id" element={<UpdateBook />} />

        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;