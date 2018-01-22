import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import logo from './images/downer-logo.jpg'
import SignIn from './components/SignIn'
import Checkout from './components/Checkout'
import ChangePassword from './components/ChangePassword'
import Junction from './components/Junction'
import CheckIn from './components/CheckIn'
import SignOut from './components/SignOut'

import Moment from './components/Moment'

require('dotenv').config()
class App extends Component {
  state = {
    loggedIn: true
  }
  render() {
    const {loggedIn, role, Admin} = this.state
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Router>
        {
          loggedIn ? <Junction /> : <SignIn />
        }
        </Router>
      </div>
    );
  }
}

export default App;