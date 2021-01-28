import React from 'react';
import './Components.css';


const SearchBox = ({input, search}) => {
  
    return (
        <div className='search'>
            <div className = 'btn-search'>
                <h1 className='search-title'>Find your movie</h1>
            </div>
            <div className='search-section'>
                <input
                    type='text'
                    className= 'search-box'
                    placeholder= 'Find your movie...'
                    onChange= { input }
                    onKeyPress= { search }
                />
            </div>
            
        </div>
    );
};

export default SearchBox;