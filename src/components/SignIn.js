import React, {Component} from 'react'
import { api, setJwt } from '../request'
import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      role: '',
      loggedIn: false
    }
  };

  handleSignIn = () => {
    let {email, password, role, loggedIn} = this.state;
    api({
      method: 'post',
      url: '/auth',
      headers: {'Content-Type': 'application/json'},
      data: {
        email,
        password,
        role
      }
    })
    .then((response) => {
      console.log(response);
      setJwt(response.data.token)
      this.setState({
        loggedIn: true
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
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
    );
  }
}

export default SignIn
