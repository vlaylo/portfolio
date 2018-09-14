import React from 'react';
import classes from './Logos.css';

import HTMLLogo from './html.svg';
import CSSLogo from './css.svg';
import ReactLogo from './react.svg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';




const Logos = () => {
    return (    
       
            <Fade delay={3000} top wait='2'>
                <div className={classes.Logos}>
                 <Slide delay={3000} distance='500px' right><img className={classes.Logo} src={HTMLLogo}/></Slide>
                 <Fade delay={3000} top><img className={classes.Logo} src={ReactLogo}/></Fade>
                 <Slide delay={3000} distance='500px' left><img className={classes.Logo} src={CSSLogo} /></Slide>
                </div>
            </Fade>

    )
}

export default Logos;