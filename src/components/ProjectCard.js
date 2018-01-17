import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {api} from '../request.js'

class ProjectCard extends Component {
  state = {
    projectNumber: "",
    projectLocation: "",
    projectName: "",
    projectStatus: "",
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
        console.log("hgfds", data);
        this.setState({
          projectNumber: data.projectNumber,
          projectLocation: data.projectLocation,
          projectName: data.projectName,
          projectStatus: data.projectStatus,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {projectName, projectLocation, projectStatus} = this.state

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Location</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Hours</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{projectName}</TableRowColumn>
              <TableRowColumn>{projectLocation}</TableRowColumn>
              <TableRowColumn>{projectStatus}</TableRowColumn>
              <TableRowColumn>{null}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    )
  }
}

export default ProjectCard
