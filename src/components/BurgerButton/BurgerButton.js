import React, { Component } from 'react';
import classes from './BurgerButton.css'


export default class BurgerButton extends Component {
  render() {
    return (
        <div className={classes.Burger}>
            <div className={classes.BurgerButton}></div>
            <div className={classes.Hello}>HELLO</div>
      </div>
    )
  }
}
