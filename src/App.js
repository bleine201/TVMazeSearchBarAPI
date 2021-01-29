import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import SearchBox from './Components/Search/SearchBox';
import React from 'react/cjs/react.development';
import Movie from './Components/Movies/Movie';
import { BrowserRouter as Router, 
          Switch, 
          Route } 
from 'react-router-dom';

function App() {

   return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={SearchBox} />
            <Route path='/:id' component={Movie} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
