import React from 'react';

const MoviePoster = ({ movie }) => {

    const DEFAULT_POSTER = 'https://via.placeholder.com/210x295';

        if(movie.show.image === null) {
            movie.show.image = { medium: DEFAULT_POSTER};
        } 

    return (
            <div className='movie-poster'>
            <img src={movie.show.image.medium} alt='movie-poster' className='poster' />
        </div>
    );
};

export default MoviePoster;