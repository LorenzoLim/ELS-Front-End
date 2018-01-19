import React, {Component} from 'react'
import Manage from './Manage'
import CreateUser from './CreateUser'
import CreateProject from './CreateProject'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
class Junction extends Component {


  state = {
    manage: false,
    newUser: false,
    newProject: false
  }
 handleManage = (event) => {
   event.preventDefault
  this.setState({
    manage: true
  })
 }
 handleNewUser = (event) => {
   event.preventDefault
   this.setState({
     newUser: true
   })
 }
 handleNewProject = (event => {
   event.preventDefault
   this.setState({
     newProject: true
   })
 })
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <RaisedButton className="button" label="Manage" primary={true} onClick={(event) => this.handleManage(event)}/>

            <RaisedButton className="button" label="View Final Report" primary={true} onClick={(event) => this.handleClick(event)}/>

            <RaisedButton className="button" label="Create New Manager" primary={true} onClick={(event) => this.handleNewUser(event)}/>

            <RaisedButton className="button" label="Create New Project" primary={true} onClick={(event) => this.handleNewProject(event)}/>
          </div>
        </MuiThemeProvider>
        {
          this.state.manage ? <Manage /> : ""
        }
        {
          this.state.newUser ? <CreateUser /> : ""
        }
        {
          this.state.newProject ? <CreateProject /> : ""
        }


      </div>
    );
  }
}

export default Junction
