import React from 'react';
import './Components.css';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react/cjs/react.development';
import logo from './asserts/logo.png';

const Header = () => {
    // const [search, setSearch] = useState(false)
    // let bar;

    // if (search) {
    //     bar = <input
    //             type='text'
    //             className= 'search-box'
    //             placeholder= 'Find your movie'
    //         />
    // }
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} className="logo-image" />
                <p>Search my movie</p>
            </div>
            {/* <div className='search'>
                <div className = 'btn-search'>
                    <SearchIcon 
                        onClick={() => setSearch(!search)}
                        />
                </div>
                    {bar}

            </div> */}
        </header>
    );
};

export default Header;