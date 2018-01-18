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
        console.log(response.data);
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
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </DropDownMenu>
          <br/>
          <RaisedButton  className="button"label="Start Work" primary={true} onClick={(event,newValue) => this.setState({selectedHourType:newValue})}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CheckIn
