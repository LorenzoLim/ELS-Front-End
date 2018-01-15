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
// import {apiGet} from '../request.js'

class Manage extends Component {
  state = {
    projectNumber: "",
    projectLocation: "",
    name: "",
    status: "",
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
  // componentWillMount() {
  //   let tableData = [];
  //   apiGet ('/projects')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    return (
      <MuiThemeProvider>
        <div>
           {/* <SelectField
          floatingLabelText="Select Project  "
          value={this.state.value}
          onChange={this.handleChange}
        >
          .map(data => <MenuItem value={this.state.value} primaryText={this.state.project} /> )
           {tableData.map(x => <MenuItem key= {x.payload} value= {x.payload} primaryText= {x.projectName} />)

        </SelectField>  */}
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
            </TableBody> */}
          {/* </Table> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Manage
