import React, { Component } from 'react';
import Pic from './biopic.jpg';
import classes from './BioPic.css';
import Fade from 'react-reveal/Fade';

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
<Fade delay={1000}>
          <img 
            onMouseOver={this.mouseOverHandler} 
            className={className} 
            src={Pic}></img>
</Fade>
      
   )
  }
}

