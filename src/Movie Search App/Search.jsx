import React, { useState } from 'react';
import axios from 'axios';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    setLoading(true);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`);
      if (response.data.Response === "False") {
        onSearch([]);
      } else {
        onSearch(response.data.Search);
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default Search;
