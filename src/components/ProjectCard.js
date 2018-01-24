import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn

} from 'material-ui/Table';
import {api} from '../request.js'

class ProjectCard extends Component {
  state = {
    projectNumber: "",
    projectLocation: "",
    projectName: "",
    projectStatus: "",
    projectUsers: null,
    usersHours: null,
    showCheckboxes: false,
    fixedHeader: true,
    fixedFooter: true
  };
  componentWillMount() {
    this.fetchProject(this.props.projectId)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.projectId !== nextProps.projectId) {
      this.fetchProject(nextProps.projectId)
    }

  }
  fetchProject(projectId) {
    api.get(`/projects/${projectId}`)
      .then(({data}) => {
        this.setState({
          projectNum: data.projectNum,
          projectLocation: data.projectLocation,
          projectName: data.projectName,
          projectStatus: data.projectStatus,
          projectUsers: data.projectUsers
        })
      })
      .catch((error) => {
        console.log(error);
      });
      api.get('/hours')
      .then(({data}) => {
        this.setState({
          usersHours: data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {projectLocation, projectStatus, projectNum, projectUsers, usersHours} = this.state

    if (!projectUsers || !usersHours) {
      return null;
    }
    return (

      <div>
        <Table>
          <TableHeader
             displaySelectAll={this.state.showCheckboxes}
             fixedHeader={this.state.fixedHeader}
             fixedFooter={this.state.fixedFooter}
             adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow className="tableHeaderStyle">
              <TableHeaderColumn tooltip="Project number">Project Number</TableHeaderColumn>
              <TableHeaderColumn tooltip="The managers">Manager/s</TableHeaderColumn>
              <TableHeaderColumn tooltip="Location">Location</TableHeaderColumn>
              <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
              <TableHeaderColumn tooltip="hours">Hours</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableRowColumn>{projectNum}</TableRowColumn>
              <TableRowColumn>
                {
                  projectUsers.map((user) => (
                    <span key={user._id}>{user.firstName} {user.lastName} <br /><hr /></span>
                  )
                )}
              </TableRowColumn>
              <TableRowColumn>{projectLocation}</TableRowColumn>
              <TableRowColumn>{projectStatus}</TableRowColumn>
              <TableRowColumn>
                {
                  usersHours.map((user) => (
                    <span key={user._id}>{user.total}<br /><hr /></span>
                  )
                )}


                
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default ProjectCard
