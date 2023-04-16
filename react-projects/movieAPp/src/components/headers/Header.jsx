import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" className="header__icon" /></Link>
                <Link to="/movies/popular"><span>Popular</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="movies/upcoming"><span>Upcoming</span></Link>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header;