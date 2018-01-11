import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
class SignIn extends Component {
constructor(props){
  super(props);
  this.state={
  projectnum:'',
  projectlocation:'',
  projectname:'',
  projectstatus:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter Project Number"
              floatingLabelText="Project Number"
              onChange = {(event,newValue) => this.setState({projectnum:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter Project Name"
              floatingLabelText="Project Name"
              onChange = {(event,newValue) => this.setState({projectname:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter Project Location"
              floatingLabelText="Project Location"
              onChange = {(event,newValue) => this.setState({projectlocation:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter Project Status"
              floatingLabelText="Project Status"
              onChange = {(event,newValue) => this.setState({projectstatus:newValue})}
            />
            <br/>
            <RaisedButton className="button" label="Create Project" primary={true} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default SignIn
