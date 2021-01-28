import React from 'react';

const MoviePoster = ({ movie, image }) => {

    if(movie === null ) {
        let image;
        image = <img src='#' alt='movie-poster' className='poster' />;
        return image;
    }

    return (
            <div className='movie-poster'>
            <img src={movie.show.image.medium} alt='movie-poster' className='poster' />
            {image}
        </div>

        
    );
};

export default MoviePoster;