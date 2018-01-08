import React, { Component } from 'react';
import './App.css';
import logo from './images/downer-logo.jpg'
import SignIn from './components/Sign-in'
class App extends Component {
  state = {
    login: false
  }
  render() {
    return (
      <div className="App">
          <img src={logo} alt="logo" />
        <SignIn />
      </div>

    );
  }
}

export default App;
