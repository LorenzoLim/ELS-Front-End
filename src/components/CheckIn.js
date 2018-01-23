import React, {Component} from 'react';
import moment from 'moment';
import {api} from '../request';
import {MuiThemeProvider, MenuItem, RaisedButton, SelectField} from 'material-ui';
const jwt = require('jsonwebtoken');

 class CheckIn extends Component {

  state = {
    userEmail: null,
    selectedHourType: null,
    selectedProject: null,
    checkedIn: false,
    projects: null,
    hourType: null,
    working: false,
    startTime: null,
  	stopTime: null,
    showTime: null,
  	totalTime: 0
  };


  componentWillMount(response) {
    api.get ('/projects')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
    api.get ('/hours')
    .then(response => {
      this.setState({
        hourType: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleHourChange = (event, index, value) => {
    this.setState({
      selectedHourType: value
    })
  };

  handleProjectChange = (event, index, value) => {
    this.setState({
      selectedProject: value
    })
  };

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
    let {startTime, selectedProject, selectedHourType, totalTime, stopTime, userEmail} = this.state
    let decoded = jwt.verify(localStorage.getItem("token"), `${process.env.REACT_APP_JWT_SECRET}`)
  	this.setState({
      userEmail: decoded.email,
      stopTime: moment().toNow(),
      totalTime: moment().diff(startTime, 'hours', true),
      showTime: totalTime,
      working: false,
      selectedProject,
      selectedHourType
    })
    api({
      method: 'patch',
      url: '/hours',
      data: {
        userEmail,
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
    let {projects, selectedProject, working, startTime, stopTime, totalTime, selectedHourType, hourType, showTime} = this.state
    if (!projects || !hourType) {
      return null
    }

    return (
      <MuiThemeProvider>
        <div>
            { startTime && stopTime &&
               <p>Total time: {stopTime}</p>
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
            {
              hourType.map((hour) =>
                <MenuItem key={hour._id} value={hour.type} primaryText={hour.type} />
            )}
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
