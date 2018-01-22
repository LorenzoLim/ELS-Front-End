import React, {Component} from 'react';
import {MuiThemeProvider, MenuItem, RaisedButton, DropDownMenu} from 'material-ui';
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
    api({
      method: 'post',
      url: '/hours',
      data: {

      }
    })
    .then((response) => {
      this.setState({
        checkedIn: true
      })
    })
  }

  render() {
    let {projects, selectedProject} = this.state
    if (!projects) {
      return null
    }
    if (!selectedProject) {
      return null
    }
    return (
      <MuiThemeProvider>
        <div>
          <DropDownMenu
            floatingLabelText="Select Project"
            value={selectedProject}
            onChange={this.handleProjectChange}
            >
              {projects.map((project) =>
                <MenuItem key={project._id} value={project._id} primaryText={project.projectName} />
              )}
          </DropDownMenu>
          <br/>
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleHourChange}
            hintText='Choose an Hour Type'
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
          </DropDownMenu>
          <br/>
          <RaisedButton  className="button"label="Start Work" primary={true} onClick={(event,newValue) => this.setState({selectedHourType:newValue})}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CheckIn
