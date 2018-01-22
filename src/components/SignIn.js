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
        role,
        loggedIn: true
      }
    })
    .then((response) => {
      console.log(response);
      setJwt(response.data.token)
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
        {/* {
          this.state.loggedIn && <Junction />
        } */}
      </div>
    );
  }
}

export default SignIn
