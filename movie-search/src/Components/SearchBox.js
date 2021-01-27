import React from 'react';
import './Header.css';
import { useState } from 'react/cjs/react.development';
import SearchIcon from '@material-ui/icons/Search';


const SearchBox = () => {
  
    return (
        <div className='search'>
            <div className = 'btn-search'>
                <h1>Find your movie</h1>
            </div>
            <div className='search-section'>
                <input
                    type='text'
                    className= 'search-box'
                    placeholder= 'Find your movie'
                />
            </div>
            
        </div>
    );
};

export default SearchBox;