import React, { useState } from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox'
import './App.css';
function App() {
  const movieData = [];
  const [loading, setLoading] = useState(true);
  const [searchItem, searchState] = useState('');
  const [movies, setState] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //const API_KEY = process.env.Movie_API;
    //console.log(API_KEY);
    setLoading(true);
    const API_KEY = '37d20177';
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchItem}`)
      .then(data => data.json())
      .then(data => {
        const movie = JSON.stringify(data)
        console.log(movie);
        setState(movies.concat(movie));
        movieData.push(movie);
        setLoading(false);
      });
    console.log(movies);
    resetInputField();
  };
  const handleChange = (e) => {
    searchState(e.target.value);
  };
  const resetInputField = () => {
    searchState("");
  }
  return (
    <>
      <div className="App">
        <Nav />
        <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div class="container">
        <div class="columns is-multiline p-0 pt-6 last">
          <div class="column is-full">
            <div class="column is-one-quarter">
              {movies.map(pic => (
                <p>{pic}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;