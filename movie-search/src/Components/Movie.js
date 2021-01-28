import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Movie = ({ movie }) => {
    return (
        <section className='movie'>
            <h1 className='movie-title'>{movie.show.name}</h1>
            <p>{movie.show.summary}</p>
            <img src="#" alt='movie-poster' className='poster' />
        </section>
    );
};

export default Movie;