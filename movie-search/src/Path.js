import React from 'react';
import { BrowserRouter as Router, 
    Switch, 
    Route } 
from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Home'

const Path = () => {
    return (
        <Router>
            <Switch>
                <Router path='/' exact component={Home} />
                <Router path='/footer' component={Footer} />
            </Switch>
            
        </Router>
    );
};

export default Path;