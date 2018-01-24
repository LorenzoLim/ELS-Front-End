import React, {Component} from 'react'
import Manage from './Manage'
import CreateUser from './CreateUser'
import CreateProject from './CreateProject'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
import {Route, withRouter, Switch} from 'react-router-dom'

require('dotenv').config()

class Junction extends Component {

  state = {
    manage: false,
    newUser: false,
    newProject: false,
    data: null
  }

  componentDidMount() {
  }
  handleManage = (event) => {
    event.preventDefault
    this.props.history.push('/manage')
  }

  handleNewUser = (event) => {
    event.preventDefault
    this.props.history.push('/newmanager')
  }

  handleNewProject = (event) => {
    event.preventDefault
    this.props.history.push('/newproject')
  }

  handleCSVExport = (event) => {
    event.preventDefault
    window.open(`${process.env.REACT_APP_API_URL}report.csv`, "_blank")
  }

  render() {
    return (

      <div>
        <MuiThemeProvider>
          <div>
            <RaisedButton className="button" label="Manage" primary={true}  onClick={(event) => this.handleManage(event)}/>

            <RaisedButton className="button" label="Export" primary={true} onClick={(event) => this.handleCSVExport(event)}/>

            <RaisedButton className="button" label="Create New User" primary={true} onClick={(event) => this.handleNewUser(event)}/>

            <RaisedButton className="button" label="Create New Project" primary={true} onClick={(event) => this.handleNewProject(event)}/>
          </div>
        </MuiThemeProvider>

        <Switch>
          <Route path="/manage" component={Manage} />
          <Route path="/newmanager" component={CreateUser} />
          <Route path="/newproject" component={CreateProject} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Junction)
