import React, { useState, useEffect} from 'react/cjs/react.development';
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CachedIcon from '@material-ui/icons/Cached';
import { Link } from "react-router-dom";


const Movie = ({ match }) => {
    const api = `http://api.tvmaze.com/shows/${match.params.id}`
    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
        axios.get(api)
        .then(response => {
            setMovie(response.data)
        })
    }, [api])

        
    //debugger
    if(movie.length === 0) {
        return <CachedIcon />
    }

    const DEFAULT_IMAGE = 'https://via.placeholder.com/210x295';
    const DEFAULT_VALUE = 'UNKNOW'

        if(movie.image === null) {
            movie.image = { medium: DEFAULT_IMAGE};
        }
        
        if(movie.rating.average === null) {
            movie.rating.average = DEFAULT_VALUE
        }

        if(movie.network === null) {
            movie.network = {name: DEFAULT_VALUE}
        }

    return (
        <section className='movie'>
            <div className='main'>
                <div className='btn-back'>
                    <Link to='/'>
                        <ArrowBackIcon /> 
                    </Link>
                    <h1 className='movie-title'>{movie.name}</h1>
                </div>
            </div>
            <div className='plot'>
                <div className='movie-summary' dangerouslySetInnerHTML={{__html: movie.summary}}>

                </div>
                <img src={movie.image.medium} alt='movie poster'/>
            </div>
            <div className='movie-info'>
                <ul>
                    <li>Network: {movie.network.name}</li>
                    <li>Language: {movie.language}</li>
                    <li>Genres: {movie.genres[0]} {movie.genres[1]} {movie.genres[2]} </li>
                    <li>Rating: {movie.rating.average}</li>
                    <li>Premiere: {movie.premiered}</li>
                    <li>Status: {movie.status}</li>
                </ul>

            </div>
            
        </section>
    );
};

export default Movie;