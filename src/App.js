import React, { Component } from 'react';
import './App.css'
import logo from './images/downer-logo.jpg'
import SignIn from './components/SignIn'
import Checkout from './components/Checkout'
import ChangePassword from './components/ChangePassword'
import Junction from './components/Junction'
import Manage from './components/Manage'
import CheckIn from './components/CheckIn'
import SignOut from './components/SignOut'
import CreateProject from './components/CreateProject'
import CreateUser from './components/CreateUser'
import Moment from './components/Moment'

require('dotenv').config()


class App extends Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Moment />
      </div>
    );
  }
}

export default App;