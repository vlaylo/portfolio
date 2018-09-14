import React, { Component } from 'react'

import NavBar from './containers/NavBar/NavBar';
import Particles from 'react-particles-js';
import NavPage from './containers/NavPage/NavPage';
import Home from './containers/Home/Home.js';
import classes from './App.css';
import Border from './components/Border/Border';
import Scroll from 'react-animate-on-scroll'
import Design from './containers/Design/Design';

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

export default class App extends Component {
  render() {
    return (
    <div classname={classes.App}>
          <NavBar/>
         <Home/>
         <Design/>
         <Particles params={particleOpt}/>

   </div>
    )
    
  }
}
