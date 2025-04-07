import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Details from "./Details";
import BookGallery from "./BookGallery";
import Login from "./Login";
import HomePage from "./HomePage";
import ProtectedRoute from "./Protect";
 
 import './App.css';

function App() {
    const [books, setBooks] = useState([]);


    return (
        <Router>
            <div>
                <h1>Book Page </h1>


                <Routes>
                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/books" element={<BookGallery books={books} />} />
                    <Route path="/details/:id" element={<Details />} />


                </Routes>
            </div>
        </Router>
    )
}
export default App; 