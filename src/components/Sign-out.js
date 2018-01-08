import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
class SignOut extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton label="SignOut" primary={true} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default SignOut
