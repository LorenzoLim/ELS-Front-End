import React, {Component} from 'react';
import {MuiThemeProvider, SelectField, MenuItem, RaisedButton} from 'material-ui';



const projects = [];
for (let i = 0; i < 100; i++ ) {
  projects.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
 class CheckIn extends Component {
  state = {
    value: 10,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            maxHeight={200}
          >
            {projects}
          </SelectField>
          <br/>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            maxHeight={200}
          >
            {projects}
          </SelectField>
          <br/>
          <RaisedButton label="Start Work" primary={true} onClick={(event) => this.handleClick(event)}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CheckIn
