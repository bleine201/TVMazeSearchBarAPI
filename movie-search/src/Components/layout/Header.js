import React from 'react';
import '../style/Components.css'
import logo from '../asserts/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    <h2>Search my show</h2>
                    <img src={logo} className="logo-image" alt='logo-header' />
                </Link>
            </div>
        </header>
    );
};

export default Header;