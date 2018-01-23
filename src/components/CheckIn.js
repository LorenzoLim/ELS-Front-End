import React, {Component} from 'react';
import moment from 'moment';
import {MuiThemeProvider, MenuItem, RaisedButton, SelectField} from 'material-ui';
import {api} from '../request';

 class CheckIn extends Component {
  state = {
    selectedHourType: null,
    selectedProject: null,
    checkedIn: false,
    projects: null,
    hourType: null,
    working: false,
    startTime: null,
  	stopTime: null,
  	totalTime: 0
  };

  handleHourChange = (event, index, value) => {
    this.setState({
      selectedHourType: value
    });
  }
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

  handleSignOut = () => {
    sessionStorage.removeItem('token')
  }

  startTimer = () => {
  	this.setState({
  		startTime: moment(),
      working: true
  	})
  }

  stopTimer = () => {
    let {startTime, selectedProject, selectedHourType, totalTime, stopTime} = this.state
  	this.setState({
      stopTime: moment(),
      totalTime: moment().diff(startTime, 'hours', true),
      working: false,
      selectedProject,
      selectedHourType
    })
    api({
      method: 'post',
      url: '/hours',
      data: {
        stopTime,
        totalTime,
        selectedProject,
        selectedHourType
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    let {projects, selectedProject, working, startTime, stopTime, totalTime, selectedHourType, hourType} = this.state
    if (!projects) {
      return null
    }
      console.log(totalTime);
      console.log(selectedProject);
      console.log(this.state.selectedHourType);
    return (
      <MuiThemeProvider>
        <div>
            { startTime && stopTime &&
               <p>Total time: {totalTime} minute/s</p>
             }

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
            value={selectedHourType}
            onChange={this.handleHourChange}
            hintText='Select Type '
          >
            {/* {
              hourType.map((hour) =>
                <MenuItem key={hour._id} value={hour._id} primaryText={hour.} />

            )} */}
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
          {
            !working ? <RaisedButton  className="button" label="Start Work" primary={true} onClick={this.startTimer}/> :
            <RaisedButton  className="button" label="Stop Work" primary={true} onClick={this.stopTimer}/>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CheckIn
