import React, { Component } from 'react';
import classes from './NavPage.css';
import './NavPage.css';
import NavPageButtons from './NavPageButtons/NavPageButtons';
import MenuButton from '../../components/MenuButton/MenuButton';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


let className = classes.NavPage

export default class NavPage extends Component {
  state = {
    navPageOpen: true
  }
  
  /*openNavPage = () => {
    this.setState({navPageOpen: true })
  if (this.state.navPageOpen) {
    className = classes.NavPageOpen}
} */

openNavPage = () => {
  this.setState((prevState) => {
      return {navPageOpen: !prevState.navPageOpen};})
      if (this.state.navPageOpen) {
        className = classes.NavPageOpen
      } else {
        className = classes.NavPageAfter
      }
    }


  render() {
    return (
    <div className={classes.MenuButton}>
    <MenuButton clicked={this.openNavPage}/>
        <div className={className} onClick={this.props.clicked}>
          <NavPageButtons>home</NavPageButtons>
          <NavPageButtons>portfolio</NavPageButtons>
          <NavPageButtons>contact</NavPageButtons>
        </div>
    </div>
    )
  }
}


/*      this.props.show ? 
      <Slide down opposite duration={500} exit>
      <div className={classes.NavPage} onClick={this.props.clicked}>
          <NavPageButtons>home</NavPageButtons>
          <NavPageButtons>portfolio</NavPageButtons>
          <NavPageButtons>contact</NavPageButtons>
      </div></Slide> :  false*/