import React, { Component } from 'react';
import Card from '../UI/Card/Card';
import Logo from '../Logo/Logo'
import classes from './Hero.module.css';
import Navbar from '../Navbar/Navbar';

const hero = props => {
    return(
        <div >           
            <Card >
            <div style={{padding:'50px 0'}}>
                <Logo />
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            </Card>

        </div>
    )
};

export default hero;