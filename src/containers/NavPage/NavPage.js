import React, { Component } from 'react';
import classes from './NavPage.css';
import NavPageButtons from './NavPageButtons/NavPageButtons';
import Slide from 'react-reveal/Slide';

export default class NavPage extends Component {


  render() {
    return (
      this.props.show ? 
      <Slide left opposite duration={500} exit>
      <div className={classes.NavPage} onClick={this.props.clicked}>
          <NavPageButtons>home</NavPageButtons>
          <NavPageButtons>portfolio</NavPageButtons>
          <NavPageButtons>contact</NavPageButtons>
      </div></Slide> :  false
    )
  }
}
