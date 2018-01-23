import React, {Component} from 'react';
import {MuiThemeProvider, MenuItem, RaisedButton, SelectField} from 'material-ui';
import {api} from '../request'

 class CheckIn extends Component {
  state = {
    selectedHourType: null,
    selectedProject: null,
    checkedIn: false,
    projects: null
  };

  handleHourChange = (event, index, value) => this.setState({value});

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

  handleProjectChange = (event, index, value) => {
    this.setState({
      selectedProject: value
    })
  };


  handleCheckIn = () => {
    let {selectedProject, selectedHourType} = this.state
    api({
      method: 'post',
      url: '/hours',
      data: {
        selectedProject: {selectedHourType}
      }
    })
    .then((response) => {
      this.setState({
        checkedIn: true
      })
    })
  }

  handleSignOut = () => {
    sessionStorage.removeItem('token')
  }

  render() {
    let {projects, selectedProject} = this.state
    if (!projects) {
      return null
    }

    return (
      <MuiThemeProvider>
        <div>
          <SelectField
            value={selectedProject}
            onChange={this.handleProjectChange}
            hintText='Select Project '
            >
              {projects.map((project) =>
                <MenuItem key={project._id} value={project._id} primaryText={project.projectName} />
              )}
          </SelectField>
          <br/>
          <SelectField
            value={this.state.value}
            onChange={this.handleHourChange}
            hintText='Select Type '
          >
            <MenuItem value={1} primaryText="Project" />
            <MenuItem value={2} primaryText="Business Support - Business Development" />
            <MenuItem value={3} primaryText="Business Support - Commercial" />
            <MenuItem value={4} primaryText="Business Support - Equipment Optimization" />
            <MenuItem value={5} primaryText="Business Support - Maintenance" />
            <MenuItem value={6} primaryText="Business Support - Manufacturing" />
            <MenuItem value={7} primaryText="Business Support - Operations" />
            <MenuItem value={8} primaryText="Business Support - Technical Services" />
            <MenuItem value={9} primaryText="Business Support - Zero Harm" />
            <MenuItem value={10} primaryText="Other - Administration" />
            <MenuItem value={11} primaryText="Other - Attending Site" />
            <MenuItem value={12} primaryText="Other - Audit" />
            <MenuItem value={13} primaryText="Other - Information Technology" />
            <MenuItem value={14} primaryText="Other - Meetings" />
            <MenuItem value={15} primaryText="Other - Training" />
            <MenuItem value={16} primaryText="Other - Travel" />
          </SelectField>
          <br/>
          <RaisedButton  className="button"label="Start Work" primary={true} onClick={(event,newValue) => this.setState({selectedHourType:newValue})}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CheckIn
