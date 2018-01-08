import React, { Component } from 'react';
import './App.css';
import logo from './images/downer-logo.jpg'
import SignIn from './components/Sign-in'
import Checkout from './components/Checkout'
class App extends Component {
  state = {
    login: false
  }
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Checkout />
      </div>

    );
  }
}

export default App;
