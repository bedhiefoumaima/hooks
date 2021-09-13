import { useState } from 'react';
import './App.css';
import SimpleModal from './Components/Add';
import MovieListe from './Components/MovieListe';
import SearchAppBar from './Components/Navbar';
import { moviesData } from './Constant/Data';

function App() {
 const [movies, setMovies] = useState (moviesData)
 const [searchText, setSearchText] = useState("")
 const addMovies = (movie)=> setMovies(movie.concat(movie))
  return (
    <div className="App">
      <SearchAppBar setSearchText = {setSearchText}/>
      <SimpleModal addMovies = {addMovies}/>
     <MovieListe movies = {movies} searchText={searchText}/>

    </div>
  );
}

export default App;
