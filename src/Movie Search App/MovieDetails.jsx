import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(` https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`);
                if (response.data.Response === "False") {
                    throw new Error(response.data.Error);
                }
                setMovie(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
    }) 

}

export default MovieDetails;