import React from 'react';

const MoviePoster = ({ movie }) => {

    const DEFAULT_POSTER = 'https://www.joblo.com/assets/images/joblo/database-specific-img-225x333.jpg';

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