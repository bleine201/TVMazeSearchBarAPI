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

    if(movie.length === 0) {
        return <CachedIcon />
    }

    const DEFAULT_IMAGE = 'https://via.placeholder.com/210x295';
    const DEFAULT_VALUE = 'None'

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
                <ul className='info'>
                    
                    <li><b>Network:</b> {movie.network.name} </li>
                    <li><b>Language:</b> {movie.language}</li>
                    <li><b>Genres:</b> {movie.genres[0]} {movie.genres[1]} {movie.genres[2]} </li>
                    <li><b>Rating:</b> {movie.rating.average}</li>
                    <li><b>Premiere:</b> {movie.premiered}</li>
                    <li><b>Status:</b> {movie.status}</li>
                </ul>

            </div>
            
        </section>
    );
};

export default Movie;