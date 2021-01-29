import React, { useState, useEffect} from 'react/cjs/react.development';
import axios from 'axios';

const Movie = ({ movie }) => {
    
    
    return (
        <section className='movie'>
            <img src={movie.image.original} />
        </section>
    );
};

export default Movie;