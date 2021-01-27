import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchBox from './Components/SearchBox';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

function App() {
   return (
    <div className="App">
      <Header />
      <SearchBox />
      <Footer />
    </div>
  );
}

export default App;
