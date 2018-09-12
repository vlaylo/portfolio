import React, { Component } from 'react';
import Pic from './biopic.jpg';
import classes from './BioPic.css';

let className = classes.BioPic;

export default class BioPic extends Component {

  state = {
    hovered: true,
  }

  mouseOverHandler = () => {
  this.setState({hovered: true })
  if (this.state.hovered) {
    className = classes.BioPicAfter}
  }

 

  render() {
    return (
        <img 
          onMouseOver={this.mouseOverHandler} 
          className={className} 
          src={Pic}></img>
      
   )
  }
}

