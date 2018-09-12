import React, { Component } from 'react';

import classes from './NavBar.css';
import Button from '@material-ui/core/Button';
import Auxe from '../../hoc/Auxe';
import Fade from 'react-reveal/Fade';


export default class NavBar extends Component {


    /*sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }*/


    render() {
        return (
            <Auxe>
            <Fade top>
                    <div className={classes.NavBar}>
                        <div className={classes.ButtonStyle}>
                            <div className={classes.Vince}>VINCE | JOSHUA | LAYLO</div> 
                            <div className={classes.Contact}>CONTACT ME</div>
                        </div>
                    </div>

            </Fade>
            </Auxe>
        )
    }}
