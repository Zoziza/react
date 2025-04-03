 import React from "react";
 import { Link } from "react-router-dom";


 const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies && movies.length > 0 ? ( 
                movies.map((movie) => (
                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                        <div className="movie-card">
                            <img 
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} 
                                alt={movie.Title} 
                            />
                          <div>
                          <div className="movie-info">
                            <h3 className="movie-title">{movie.Title}</h3>
                            <p className="movie-meta">
                                <span>{movie.Years}</span>
                                <span>.</span>
                                <span>{ movie.Type === 'movie' ? 'Фильм':'Сериал' }</span>
                            </p>
                          </div>
                          </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No found.</p> 
            )}
        </div>
    );
};

export default MovieList;