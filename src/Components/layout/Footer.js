import React from 'react';
import '../style/Components.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='provider'>
                <h3>Provider:</h3>
                <p>Provide with API TVMaze API</p>          
            </div>
            <div className='contact'>
                <h3>Contact us:</h3>
                <p>bleine.dh@gmail.com</p>
            </div>
            <div className='logo-help'>
                <h3>Logo by:</h3>
                <p><a href='https://fr.pngtree.com/so/logo'>logo png de fr.pngtree.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;