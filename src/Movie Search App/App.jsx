import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div className="app">
        <h1>Movie Search App</h1>
        <Search onSearch={setMovies} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
