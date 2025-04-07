import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookGallery = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <div className="book-gallery">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} className="book-image" />
          <h3 className="book-title">{book.title}</h3>
          <button
            className="book-button"
            onClick={() => navigate(`/book/${book.id}`)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookGallery;