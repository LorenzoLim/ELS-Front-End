import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
class SignOut extends Component {
constructor(props){
  super(props);

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton className="button"label="SignOut" primary={true} onClick={localStorage.removeItem('token')}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default SignOut
