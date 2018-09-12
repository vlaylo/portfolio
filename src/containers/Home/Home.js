import React, { Component } from 'react';
import classes from './Home.css'
import NavPage from '../NavPage/NavPage';
import Particles from 'react-particles-js';
import MenuButton from '../../components/MenuButton/MenuButton';
import Bio from '../../components/Bio/Bio';
import Border from '../../components/Border/Border'
import BioPic from '../../components/Bio/BioPic/BioPic'
import NavBar from '../NavBar/NavBar';
import {CSSTransition} from 'react-transition-group'

const particleOpt = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: false,
        value_area: 1200
      }
    },
    line_linked: {
      enable: true,
      distance: 500,
      color: '#f0f0f0'
    },
    color: {
      value: '#000000'
    },
    shape: {
      type: 'edge',
      stroke: {
        width: 4,
        color: '#f9f9f9'
      },
      polygon: {
        nb_sides: 5
      }
    },
    size: {
      value: 2,
      random: true
    },
    move: {
      enable: true,
      speed: 5
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  retina_detect: true
            }

export default class Home extends Component {

  state = {
    navPage: false,
}


  navPageOpenHandler = () => {
    this.setState((prevState) => {
        return {navPage: !prevState.navPage};
    });
}
  navPageCloseHandler = () => {
    this.setState((prevState) => {
      return {navPage: !prevState.navPage};
  });
}


  render() {
    return (
      <div className={classes.WholeHome}>
       <div className ={classes.Menu}>
          </div>
          <NavPage
            clicked={this.navPageCloseHandler}
            show={this.state.navPage}/>
        <div className={classes.Home}>
        <Border/>
        <BioPic/>
        <Bio/>
        <Bio/>
        <Particles params={particleOpt}/>
        </div>
        </div>
      
    )
  }
}

//<MenuButton clicked={this.navPageOpenHandler}/>

