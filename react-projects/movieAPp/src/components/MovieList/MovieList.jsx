import React, { useEffect, useState } from "react";
import Cards from "../card/Card";
import { useParams } from "react-router-dom";
import './MovieLists.css'

const MovieLists = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=241138a7e2b24661f6d1bbdfbab7ad80&language=en-US`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }
}

export default MovieLists;