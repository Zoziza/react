import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Details = () => {
     const {id} = useParams()
     const [book, setBook] = useState(null)
     const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)

        useEffect(() => {
            const fetchBook = async () => {
                try {
                    const response = await axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`);
                    if (response.data.error) {
                        throw new Error(response.data.error.message);
                    }
                    setBook(response.data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchBook();
        }, [id]);
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error: {error}</div>;
        }
        if (!book) {
            return <div>No book found</div>;
        }
        

}
export default Details;