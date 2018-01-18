import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn

} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {api} from '../request.js'

class ProjectCard extends Component {
  state = {
    projectNumber: "",
    projectLocation: "",
    projectName: "",
    projectStatus: "",
    projectUsers: null,
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
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {projectLocation, projectStatus, projectNum, projectUsers} = this.state
    if (!projectUsers) {
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
                    <span>{user.firstName} {user.lastName} <br /></span>
                  )
                )}
              </TableRowColumn>
              <TableRowColumn>{projectLocation}</TableRowColumn>
              <TableRowColumn>{projectStatus}</TableRowColumn>
              <TableRowColumn>{null}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <div>
          <RaisedButton label="Export" onChange={this.handleDownload} primary={true} />
        </div>
      </div>
    )
  }
}

export default ProjectCard
