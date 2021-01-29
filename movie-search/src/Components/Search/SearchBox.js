import React, { useState } from 'react/cjs/react.development';
import axios from 'axios';
import MovieResults from '../Movies/MovieResults';
import SearchIcon from '@material-ui/icons/Search';
import '../style/Components.css';


const SearchBox = () => {

  const [state, setState] = useState ({
    s:'',
    movies: [],
  })

  const input = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });

  }

  const search = (e) => {
    if (e.key === 'Enter') {
      axios('https://api.tvmaze.com/search/shows?q=' + state.s).then(({data}) => {
        let movies = data;

        setState(prevState => {
          return { ...prevState, movies: movies }
        })
      });
    }
  }
  
    return (
        <div className='search'>
            <div className = 'btn-search'>
                <h2 className='search-h2'><SearchIcon /> Looking for a show for tonight?</h2>
            </div>
            <div className='search-section'>
                <input
                    type='text'
                    className= 'search-box'
                    placeholder= 'Find your tv show...'
                    onChange= { input }
                    onKeyPress= { search }
                />
            </div>
            <div className='all-result'>
                <MovieResults movies={state.movies}/>
            </div>

        </div>
    );
};

export default SearchBox;