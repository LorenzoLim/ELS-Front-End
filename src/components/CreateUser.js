import React, {Component} from 'react'
import axios from 'axios'
import {MuiThemeProvider, RaisedButton, TextField, Toggle} from 'material-ui';
class CreateUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      role:'manager'
    }
   }

   handleCreateUser = (event) => {
     let {firstName, lastName, email, password, role} = this.state;
     axios({
       method: 'post',
       url: '/users',
       headers: {'Content-Type': 'application/json'},
       data: {
        firstName,
        lastName,
        email,
        password,
        role
      }
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
   }

   toggleUserRole = (event) => {
     this.setState((prevState) => {
       return {
         role: prevState.role === 'admin' ? 'manager' : 'admin'
       }
     })
   }

 render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
             hintText="Enter User's First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
            <br/>
            <TextField
             hintText="Enter User's Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
            <br/>
            <TextField
             hintText="Enter User's E-Mail"
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
             <Toggle
               label="Set Administrator"
               className="adminToggle"
               onToggle={this.toggleUserRole}
             />
            <RaisedButton label="Create User" primary={true} onClick={this.handleCreateUser}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateUser
