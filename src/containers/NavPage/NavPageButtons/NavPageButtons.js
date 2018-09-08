import React from 'react';
import { checkPropTypes } from 'prop-types';
import classes from './NavPageButtons.css';
import Slide from 'react-reveal/Slide';


const NavPageButtons = (props) => {
    return (
        
        <div className={classes.NavPageButtons}>
        {props.children}
        </div>
    )
}

export default NavPageButtons;