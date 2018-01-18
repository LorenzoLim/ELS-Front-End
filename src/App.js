import React, { Component } from 'react';
import './App.css'
import logo from './images/downer-logo.jpg'
import CheckOut from './components/CheckOut'
import ChangePassword from './components/ChangePassword'
import Junction from './components/Junction'
import Manage from './components/Manage'
import CheckIn from './components/CheckIn'
import SignOut from './components/SignOut'
import CreateProject from './components/CreateProject'
import CreateUser from './components/CreateUser'
import { api, setJwt } from './request'
import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();
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
      </div>
    );
  }
}

export default App;
