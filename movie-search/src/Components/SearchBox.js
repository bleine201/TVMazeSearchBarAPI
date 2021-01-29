import React, { useState } from 'react/cjs/react.development';
import axios from 'axios';
import MovieResults from './MovieResults';
import './Components.css';


const SearchBox = () => {
     //State for search parameter (input & search)
  const [state, setState] = useState ({
    //Blank string to insert data in the search box
    s:'',
    //Empty array for display th result from the API
    movies: [],
  })

  //Save value inside input
  const input = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });

    //console.log(state.s)
  }

  //Search request with API data
  const search = (e) => {
    if (e.key === 'Enter') {
      axios('https://api.tvmaze.com/search/shows?q=' + state.s).then(({data}) => {
        let movies = data;

        setState(prevState => {
          return { ...prevState, movies: movies }
        })

        //console.log(movies);
      });
    }
  }
  
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
            <div>
                <MovieResults movies={state.movies}/>
            </div>
            
        </div>
    );
};

export default SearchBox;