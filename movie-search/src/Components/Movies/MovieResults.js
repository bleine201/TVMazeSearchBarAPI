import React from 'react';
import MoviePoster from './MoviePoster';
import { Link } from "react-router-dom";


const MovieResults = ({ movies }) => {   
    
    return (
        <section className='movies-results'>
            {movies.map(movie => (
                <Link to={`/${movie.show.id}`}>
                <section className='movies'>
                    <h1 className='movie-title'>{movie.show.name}</h1>
                    <MoviePoster movie={movie}/>
                </section>
                </Link>
            ))}  
        </section>
    );
};

export default MovieResults;