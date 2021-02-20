import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    
    const ButtonClass={
        'ReadMore': classes.ReadMoreButton,
        'Send': classes.SendButton,
        'Submit': classes.SubmitButton
    }
    
    return(
        <div className={ButtonClass[props.buttonStyle]}>
            {props.children}
        </div>
    )
};

export default Button;