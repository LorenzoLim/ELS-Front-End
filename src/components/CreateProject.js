import React, {Component} from 'react'
import { createProject } from '../request'

import {MuiThemeProvider, RaisedButton, TextField} from 'material-ui';
class SignIn extends Component {
constructor(props){
  super(props);
    this.state = {
      projectNum: '',
      projectLocation: '',
      projectName: '',
      projectStatus: ''
    }
 }

   handleCreateProject = (event) => {
     let {projectNum, projectLocation, projectName, projectStatus} = this.state;
     createProject({
       method: 'post',
       url: '/projects',
       headers: {'Content-Type': 'application/json'},
       data: {
        projectNum,
        projectLocation,
        projectName,
        projectStatus
      }
     })
     .then((response) => {
       console.log(response);
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
              hintText="Enter Project Number"
              floatingLabelText="Project Number"
              onChange = {(event,newValue) => this.setState({projectNum:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter Project Name"
              floatingLabelText="Project Name"
              onChange = {(event,newValue) => this.setState({projectName:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter Project Location"
              floatingLabelText="Project Location"
              onChange = {(event,newValue) => this.setState({projectLocation:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter Project Status"
              floatingLabelText="Project Status"
              onChange = {(event,newValue) => this.setState({projectStatus:newValue})}
            />
            <br/>
            <RaisedButton className="button" label="Create Project" primary={true} onClick={(event) => this.handleCreateProject(event)} />
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default SignIn
