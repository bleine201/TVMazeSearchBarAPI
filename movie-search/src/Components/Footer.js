import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='network'>
                <a href='https://www.facebook.com/tvmaze' target="_blank">
                    <FacebookIcon />
                </a>
                <a href='https://twitter.com/tvmaze' target="_blank">
                    <InstagramIcon />
                </a>
                <a href='https://www.instagram.com/tvmazecom/' target="_blank">
                    <TwitterIcon />
                </a>            
            </div>
            <p>Provide with Maze API - Bleine Dhellot</p>
            
        </footer>
    );
};

export default Footer;