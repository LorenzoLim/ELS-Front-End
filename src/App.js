import React, { Component } from 'react';
import './App.css'
import logo from './images/downer-logo.jpg'
import SignIn from './components/SignIn'
import Checkout from './components/Checkout'
import ChangePassword from './components/ChangePassword'
import Junction from './components/Junction'
import CheckIn from './components/CheckIn'
import SignOut from './components/SignOut'



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
        {
          loggedIn ? <Junction /> : <SignIn />
        }



      </div>
    );
  }
}

export default App;
