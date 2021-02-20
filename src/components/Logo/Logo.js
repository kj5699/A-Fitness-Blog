import React, { Component } from 'react';
import classes from './Logo.module.css';

const logo = props => {
    return(
        <div className= {classes.Logo}>
            <a href='/'>Jatin Khemchandani</a>
        </div>
    )
};

export default logo;