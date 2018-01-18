import React, {Component} from 'react'
import { api } from '../request'
import {MuiThemeProvider, RaisedButton, TextField, DropDownMenu, MenuItem} from 'material-ui';
class CreateProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectNum: '',
      projectLocation: '',
      projectName: '',
      projectStatus: '',
      selectedUsers: [],
      users: null
    }
  }

  handleCreateProject = () => {
    let {projectNum, projectLocation, projectName, projectStatus} = this.state;
    api({
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
  componentWillMount(response) {
    api.get ('/users')
      .then(response => {
        this.setState({
          users: response.data
        })
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleUserChange = (event, index, value) => {
    this.state.selectedUsers.push(value)
  };

  render() {
    let {selectedUsers, users} = this.state
    if (!users) {
      return null
    }
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
            <DropDownMenu
              floatingLabelText="Select Managers"
              value={selectedUsers}
              onChange={this.handleUserChange}
              multiple='true'
              >
                {users.map((user) =>
                  <MenuItem key={user._id} value={user._id} primaryText={`${user.firstName} ${user.lastName}`}/>
                )}
            </DropDownMenu>
            <br/>
            <RaisedButton className="button" label="Create Project" primary={true} onClick={(event) => this.handleCreateProject()} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateProject
