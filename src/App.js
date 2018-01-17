import React, { Component } from 'react';
import './App.css'
import logo from './images/downer-logo.jpg'
import SignIn from './components/Sign-in'
import Checkout from './components/Checkout'
import ChangePassword from './components/ChangePassword'
import Junction from './components/Junction'
import Manage from './components/Manage'
import CheckIn from './components/Check-in'
import SignOut from './components/Sign-out'
import CreateProject from './components/CreateProject'
import CreateUser from './components/CreateUser'
import ProjectCard from './components/ProjectCard'
require('dotenv').config()


class App extends Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Manage />
      </div>
    );
  }
}

export default App;
