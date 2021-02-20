import React from 'react';
import SMLinks from '../SocialMediaLinks/SMLinks';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Footer.module.css';

const Footer=(props)=>{

    const imgArray=['Instagram', 'LinkedIn', 'Github', 'Gmail']
    return (
    <footer className={classes.Footer}>
        
            
    <div className={classes.FooterForm}> 
        <form id="viewsForm">
            <textarea id="viewsForm" onfocus="this.value=''; setbg('#e5fff3');" onblur="setbg('white')" placeholder="Share your views with us..."></textarea>
            <div className={classes.button}>
                <Button buttonStyle='Send'> Send</Button>
            </div>                            
            
        </form>
    </div>          
    

    <div className={classes.FooterLinks}>
        <ul>
            {imgArray.map(icon=>{
                return(
                    <li key={icon}><img src={require(`../../assets/icons/${icon}32.png`).default} alt= '' /></li>
                )
            })}
        </ul>
            
    </div>
    </footer>

        
    )
}

export default Footer
