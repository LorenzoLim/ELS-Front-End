import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
class Checkout extends Component {
constructor(props){
  super(props);
  this.state={
  comments:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
             <TextField
               hintText="Enter Any Notes or Comments"
               floatingLabelText="Comments"
               onChange = {(event,newValue) => this.setState({comments:newValue})}
               />
             <br/>
             <RaisedButton label="Check Out" primary={true} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Checkout