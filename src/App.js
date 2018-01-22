import React, { Component } from 'react';
import './App.css'
import logo from './images/downer-logo.jpg'
import ChangePassword from './components/ChangePassword'
import Junction from './components/Junction'
import CheckIn from './components/CheckIn'
import { api, setJwt } from './request'
import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
import {BrowserRouter as Router} from 'react-router-dom';

import Moment from './components/Moment'

require('dotenv').config()


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    token: localStorage.getItem("token"),
    loggedIn: false,
    email: '',
    password: '',
    role: ''
    }
  };

  handleSignIn = () => {
    let {email, password} = this.state;
    api({
      method: 'post',
      url: '/auth',
      headers: {'Content-Type': 'application/json'},
      data: {
        email,
        password
      }
    })
    .then((response) => {
      setJwt(response.data.token);
      this.setState({
        role: response.data.role,
        token: response.data.token,
        loggedIn: true
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    let {role, loggedIn} = this.state
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Router>
        {
          loggedIn ? (role.toLowerCase() === 'admin' ? <Junction /> : <CheckIn />) :
          (
            <div>
              <MuiThemeProvider>
                <div>
                  <TextField
                  hintText="Enter Your E-Mail"
                  floatingLabelText="E-Mail"
                  onChange = {(event,newValue) => this.setState({email:newValue})}
                  />
                  <br/>
                  <TextField
                  type="password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange = {(event,newValue) => this.setState({password:newValue})}
                  />
                  <br/>
                  <RaisedButton className="button" label="Sign-In" primary={true} onClick={this.handleSignIn}/>
                </div>
              </MuiThemeProvider>
            </div>
          )
        }
        </Router>
      </div>
    );
  }
}

export default App;
