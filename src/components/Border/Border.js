import React, { Component } from 'react';

import classes from './Border.css'
import NavBar from '../../containers/NavBar/NavBar';
import MenuButton from '../../components/MenuButton/MenuButton';
import NavPage from '../../containers/NavPage/NavPage';



export default class Border extends Component {
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
      <div className={classes.Border}>
        <NavBar/>
      </div>
    )
  }
}
