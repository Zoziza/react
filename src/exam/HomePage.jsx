import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome User!</h1>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/book-gallery">Book Gallery</Link>
      </nav>
    </div>
  );
}

export default HomePage;