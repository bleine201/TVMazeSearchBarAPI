import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchBox from './Components/SearchBox';
import React, { useState } from 'react/cjs/react.development';
import axios from 'axios';
import MovieResults from './Components/MovieResults';

function App() {

  //State for search parameter (input & search)
  const [state, setState] = useState ({
    //Blank string to insert data in the search box
    s:'',
    //Empty array for display th result from the API
    movies: [],
    //Select the result, empty object
    selected: {}
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
    <div className="App">
      <Header />
      <SearchBox input={ input } search={ search }/>
      <MovieResults movies={state.movies} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
