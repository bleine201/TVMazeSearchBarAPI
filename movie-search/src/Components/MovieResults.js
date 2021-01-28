import React, {useState} from 'react';
import MoviePoster from './MoviePoster';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Movie from './Movie';


const MovieResults = ({ movies }) => {   
    
    return (
        <section className='movies-results'>
            {movies.map(movie => (
                <Router>
                    <Link to={`/movie/${movie.show.id}`}>
                        <section className='movie'>
                            <h1 className='movie-title'>{movie.show.name}</h1>
                            <MoviePoster movie={movie}/>
                        </section>
                    </Link>
                    <Switch>
                        <Route exact path={`/movie/${movie.show.id}`}>
                            <Movie movie={movie} />
                        </Route>
                    </Switch>
                </Router>
            ))}  
        </section>
    );
};

export default MovieResults;