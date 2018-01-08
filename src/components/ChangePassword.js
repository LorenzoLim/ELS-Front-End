import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
class ChangePassword extends Component {
constructor(props){
  super(props);
  this.state={
  oldPassword:'',
  newPassword:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
           <TextField
             type="password"
             hintText="Enter Your Old Password"
             floatingLabelText="Old Password"
             onChange = {(event,newValue) => this.setState({oldPassword:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter Your New Password"
               floatingLabelText="New Password"
               onChange = {(event,newValue) => this.setState({newPassword:newValue})}
               />
             <br/>
             <RaisedButton label="Change Password" primary={true} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default ChangePassword
