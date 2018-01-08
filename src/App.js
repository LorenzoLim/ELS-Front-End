import React, { Component } from 'react';
import './App.css';
import logo from './images/downer-logo.jpg';
import SignIn from './components/Sign-in';
import CheckIn from './components/Check-in';
import SignOut from './components/Sign-out';
class App extends Component {
  state = {
    login: false
  }
  render() {
    return (
      <div className="App">
          <img src={logo} alt="logo" />
          <SignOut />
      </div>

    );
  }
}

export default App;
