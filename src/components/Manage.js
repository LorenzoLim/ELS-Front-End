import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  MuiThemeProvider,
  MenuItem,
  SelectField
} from 'material-ui';
import {api} from '../request.js'

class Manage extends Component {
  state = {
    projectNumber: "",
    projectLocation: "",
    projectName: "",
    projectStatus: "",
    projects: [],
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px'
  };

  componentWillMount(response) {
    let tableData = [];
    api.get ('/projects')
    .then(response => {
      let array = response.data
      for(var i = 0; i < array.length; i++) {
        let obj = array[i];
        tableData.push(obj.projectName)
        console.log(obj.projectName);
      }
      this.setState({
        projects: tableData
      })
      console.log(this.state.projects);
    })
      // .catch(function (error) {
      //   console.log(error);
      // });
  }


render() {
  const {projects} = this.state
  return (
    <MuiThemeProvider>
      <div>

        <SelectField
          floatingLabelText="Select Project  "
          value={projects}
          onChange={this.handleChange}
          >

            {projects.map((projectName, index) =>
            <MenuItem key={index} value={index} primaryText={projectName} />
          )}
            {/* <MenuItem value={this.state.projects} primaryText={projects} /> */}

        </SelectField>
        {/* <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          >
          <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
          >
          <TableRow>
          <TableHeaderColumn>Project Number</TableHeaderColumn>
          <TableHeaderColumn>Location</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
      displayRowCheckbox={this.state.showCheckboxes}
      deselectOnClickaway={this.state.deselectOnClickaway}
      showRowHover={this.state.showRowHover}
      stripedRows={this.state.stripedRows}
      >
      {this.props.tableData.map((row, index) => (
      <TableRow key={index}>
      <TableRowColumn>{row.projectNumber}</TableRowColumn>
      <TableRowColumn>{row.projectLocation}</TableRowColumn>
      <TableRowColumn>{row.name}</TableRowColumn>
      <TableRowColumn>{row.status}</TableRowColumn>
    </TableRow>
  ))}
</TableBody>
</Table> */}
</div>
</MuiThemeProvider>
);
}
}

export default Manage
