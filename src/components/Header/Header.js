import React from 'react';
import SMLinks from '../SocialMediaLinks/SMLinks';
import classes from './Header.module.css';

const Header=(props)=>{

    
    return (
    <header className={classes.Header}>
        <nav className={classes.HeaderMenu}>
            <a href ='/'>Home</a>
            <a href ='/'>About Us</a>
            <a href ='/'>Contact Us</a>
        </nav>
        <div>
            <SMLinks/>
        </div>
    </header>

        
    )
}

export default Header
