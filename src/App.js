import React, { Component } from 'react'

import NavBar from './containers/NavBar/NavBar';
import Particles from 'react-particles-js';
import NavPage from './containers/NavPage/NavPage';
import Home from './containers/Home/Home.js';
import classes from './App.css';
import Border from './components/Border/Border';
import Scroll from 'react-animate-on-scroll'


export default class App extends Component {
  render() {
    return (
    <div classname={classes.App}>
         <Home/>
   </div>
    )
    
  }
}
