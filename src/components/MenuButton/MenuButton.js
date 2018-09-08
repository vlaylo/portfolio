import React, { Component } from 'react'
import classes from './MenuButton.css';
import BurgerButton from '../BurgerButton/BurgerButton'

export default class MenuButton extends Component {
  render() {
    return (
      <div  
       onClick={this.props.clicked} 
       className={classes.MenuButton}>
        <BurgerButton/>
      </div>
    )
  }
}
