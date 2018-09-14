import React, { Component } from 'react'
import classes from './Bio.css';
import Fade from 'react-reveal/Fade';
import BioPic from './BioPic/BioPic';

export default class Bio extends Component {
  render() {
    return (
      <div>
        <div className={classes.BioPage}>
          <Fade top delay={1500}>
          <h1 className={classes.Bio}>Hi! I'm <span className={classes.Vince}>Vince Laylo</span> and I'm <br/> an aspiring Web & Software <br/> Developer.</h1> </Fade>
          <Fade top delay={2000}>
          <p className={classes.About}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac consequat felis, a cursus metus. Nunc maximus augue ut consectetur pulvinar. Maecenas convallis neque imperdiet ipsum pretium, non vestibulum leo iaculis. Donec arcu mi, pulvinar sit amet dignissim ut, dignissim id enim.  </p></Fade>
        </div>
      </div>
    )
  }
}
