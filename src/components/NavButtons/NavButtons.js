import React from 'react';
import Button from '@material-ui/core/Button';
import Aux from '../../hoc/Aux';
import {withStyles } from '@material-ui/core/styles'
import classes from './NavButtons.css';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
    flat: {
        '&:hover':{
            background: 'none',
        },
        '& span': {
            cursor: 'pointer',
            transition: '.5s',
        },
        '&:hover span': {
            fontSize: '1.2em',
        },
        paddingTop: '10px',
        height: '50px'
        },
}  




const NavButtons = (props) => {    
    return (
   // <Button className={props.classes.flat} variant="flat">{props.children}</Button>
    <div className={classes.flat}>{props.children}</div>
    )}

export default withStyles(styles)(NavButtons);