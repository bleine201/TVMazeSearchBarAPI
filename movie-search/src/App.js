import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchBox from './Components/SearchBox';
import React, { useState } from 'react/cjs/react.development';
import Movie from './Components/Movie';
import { BrowserRouter as Router, 
          Switch, 
          Route } 
from 'react-router-dom';

function App() {

   return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={SearchBox} />
          <Route path='/:id' component={Movie} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
