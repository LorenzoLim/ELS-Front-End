import React, {Component} from 'react';
import {MuiThemeProvider, MenuItem, RaisedButton, DropDownMenu} from 'material-ui';
import {api} from '../request'



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
    selectedHourType: null,
    selectedProject: null,
  };

  hourType = [
    'Work',
    'Lazy'
  ];

  projects = [
    'thing',
    'thing1',
    'thing2'
  ];

  handleHourChange = (event, index, value) => this.setState({value});

  handleProjectChange = (event, index, value) => this.setState({value});

  handleCheckIn = () => {
    api({
      method: 'post',
      url: '/hours',
      data: {

      }
    })
}

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DropDownMenu
            hintText="Select a project"
            value={this.projects.length}
            onChange={this.handleProjectChange}
            maxHeight={200}
          >
          {this.projects.map((projectName, index) =>
          <MenuItem key={index} value={index} primaryText={projectName} />
        )}
          </DropDownMenu>
          <br/>
          <DropDownMenu
            hintText="Select an hour type"
            value={this.hourType.length}
            onChange={this.handleHourChange}
            maxHeight={200}
          >
            {this.hourType.map((type, index) =>
            <MenuItem key={index} value={index} primaryText={type} />
          )}
          </DropDownMenu>
          <br/>
          <RaisedButton  className="button"label="Start Work" primary={true} onClick={(event,newValue) => this.setState({selectedHourType:newValue})}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CheckIn
