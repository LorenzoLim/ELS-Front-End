import React, {Component} from 'react';
import {MuiThemeProvider, MenuItem} from 'material-ui';
import {api} from '../request.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class Manage extends Component {
  state = {
    projects: null,
    selected: null,
    showCheckboxes: false,
    fixedHeader: true,
    fixedFooter: true
  };

  componentWillMount(response) {
    api.get ('/projects')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = (event, index, value) => {
    this.setState({
      selected: value
    })
  };

  render() {
    const {projects, selected, showCheckboxes, fixedHeader, fixedFooter} = this.state
    if (!projects) {
      return null
    }

    return (
      <MuiThemeProvider>
        <div>
          <Table>
            <TableHeader
               displaySelectAll={showCheckboxes}
               fixedHeader={fixedHeader}
               fixedFooter={fixedFooter}
               adjustForCheckbox={showCheckboxes}
            >
              <TableRow className="tableHeaderStyle">
                <TableHeaderColumn tooltip="Project number">Project Number</TableHeaderColumn>
                <TableHeaderColumn tooltip="The managers">Manager/s</TableHeaderColumn>
                <TableHeaderColumn tooltip="Location">Location</TableHeaderColumn>
                <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
                <TableHeaderColumn tooltip="hours">Hours</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {projects.map((project) =>
              <TableRow>
                <span key={projects._id}><br /><hr /></span>
              </TableRow>
              )
            }
          </Table>
          {/* <SelectField
            floatingLabelText="Select Project  "
            value={selected}
            onChange={this.handleChange}
            >
              {projects.map((project) =>
                <MenuItem key={project._id} value={project._id} primaryText={project.projectName} />
              )}
          </SelectField>
          <ProjectCard projectId={selected}/> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Manage
