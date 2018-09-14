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
            
                    <div className={classes.NavBar}>
                        <div className={classes.ButtonStyle}>
                        <Fade top>
                            <div className={classes.Vince}>VINCE | JOSHUA | LAYLO</div></Fade>
                        <Fade top>
                            <div className={classes.Contact}>FRONT-END DESIGNER</div></Fade>
                        </div>
                    </div>

            </Auxe>
        )
    }}
