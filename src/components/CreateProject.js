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
      users: null,
      values: []
    }
  }

  handleCreateProject = () => {
    let {projectNum, projectLocation, projectName, projectStatus, selectedUsers} = this.state;
    api({
      method: 'post',
      url: '/projects',
      headers: {'Content-Type': 'application/json'},
      data: {
        projectNum,
        projectLocation,
        projectName,
        projectStatus,
        projectUsers: selectedUsers
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = (event, index, values) => {
    this.setState({
      values: [...this.state.values , values]
    });
  }

  menuItems(values) {
    let {users, selectedUsers} = this.state
    return users.map((user) => (
      <MenuItem
        key={`${user.firstName} ${user.lastName}`}
        insetChildren={true}
        checked={values && values.indexOf(user) > -1}
        value={user}
        primaryText={`${user.firstName} ${user.lastName}`}
      />
    ));
  }

  render() {
    let {selectedUsers, users, values} = this.state
    if (!users) {
      return null
    }
    if (!values) {
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
              multiple={true}
              hintText="Select Managers"
              value={values}
              onChange={this.handleChange}
            >
              {this.menuItems(selectedUsers)}
            </DropDownMenu>
            {console.log(selectedUsers)}
            <br/>
            <RaisedButton className="button" label="Create Project" primary={true} onClick={(event) => this.handleCreateProject()} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateProject
