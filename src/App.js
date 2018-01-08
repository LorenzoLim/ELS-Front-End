import React, { Component } from 'react';
import './App.css';
import logo from './images/downer-logo.jpg'
import SignIn from './components/Sign-in'
import CheckIn from './components/Check-in'
class App extends Component {
  state = {
    login: false
  }
  render() {
    return (
      <div className="App">
          <img src={logo} alt="logo" />
        <CheckIn />
      </div>

    );
  }
}

export default App;
