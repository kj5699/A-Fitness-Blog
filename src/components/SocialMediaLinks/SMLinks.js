import React from 'react';
import classes from './SMLinks.module.css'

const SMLinks = props => {
    const imgArray=['Instagram', 'LinkedIn', 'Github', 'Gmail']
    return(
        <div className={classes.SMLinks} >
            <ul >
                {imgArray.map(icon=>{
                    return(
                        <li key={icon}><img src={require(`../../assets/icons/${icon}32.png`).default} alt= '' /></li>
                    )
                })}
            </ul>

        </div>
    )
};

export default SMLinks;