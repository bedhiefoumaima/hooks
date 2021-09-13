import React from 'react'
import MovieCard from './MovieCard'
import SearchText from './SearchText'

const MovieListe = ({movies, searchText}) => {
    return (
        <div style = {{
        display: "flex" , 
        justifyContent : "space-around", 
        flexWrap :"wrap"}}>

            { movies
            .filter((el)=> el.name.toUpperCase().includes(searchText.toUpperCase()))
            .map((el)=>(
            <MovieCard movie= {el} />
            ))
        }
        </div>
    )
}

export default MovieListe
