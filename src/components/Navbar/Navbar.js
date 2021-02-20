import React, { useState }  from 'react';
import classes from './Navbar.module.css';
import img from '../../assets/icons/search.png'
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    const [search, setSearch] = useState(false);
    
    const submitHandler =(e)=>{
        e.preventDefault()
        alert('Searched')
    }
    
    const searchHandler =() =>{
        setSearch(true)
    }

    const searchClass= search ? classes.SearchInput +'.active' : classes.SearchInput
    
    const socialMediaLinkStyle={
        listStyle:'none',
        display:'inline-block'
    }

    return(
        <div className={classes.Navbar}>
            
            <ul className = {classes.NavbarMenu}>
                <li><NavLink to='/'> Home </NavLink></li>
                <li><NavLink to='/about-us'> About Us </NavLink></li>
                <li><NavLink to='/post'> Posts </NavLink></li>
                <li><NavLink to='/contact-us'> Contact Us </NavLink></li>
            </ul>

            <div className = {classes.Search}>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder="search" className={searchClass}></input>
                    <img onClick={searchHandler} className={ classes.SearchIcon} src={img} alt="search"></img>
                </form>
                
            </div>
        </div>
    )
};
export default Navbar;