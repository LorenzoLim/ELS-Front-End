import React, {Component} from 'react'
import Manage from './Manage'
import CreateUser from './CreateUser'
import CreateProject from './CreateProject'
import {MuiThemeProvider, RaisedButton, AppBar, Tabs, Tab} from 'material-ui';
import {Route, withRouter, Switch} from 'react-router-dom';

require('dotenv').config()

class Junction extends Component {

  state = {
    manage: false,
    newUser: false,
    newProject: false,
    data: null
  }

  handleManage = (event) => {
    this.props.history.push('/manage')
  }

  handleNewUser = (event) => {
    this.props.history.push('/newmanager')
  }

  handleNewProject = (event) => {
    this.props.history.push('/newproject')
  }

  handleCSVExport = (event) => {
    window.open(`${process.env.REACT_APP_API_URL}report.csv`, "_blank")
  }

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    return (

      <div>
        <MuiThemeProvider>
            <Tabs>
              <Tab label="Projects" >
                <div>
                  <h2 style={styles.headline}>Tab One</h2>

                </div>
              </Tab>
              <Tab label="Users" >
                <div>
                  <h2 style={styles.headline}>Tab Two</h2>
                  <p>
                    This is another example tab.
                  </p>
                </div>
              </Tab>
              <Tab label="Report" data-route="/home">
                <div>
                  <h2 style={styles.headline}>Tab Three</h2>
                  <Manage />
                </div>
              </Tab>
              <Tab label="Sign Out" data-route="/home">
                <div>
                  <h2 style={styles.headline}>Tab Three</h2>
                  <Manage />
                </div>
              </Tab>
            </Tabs>
          {/* <div>
            <RaisedButton className="button" label="Manage" primary={true}  onClick={(event) => this.handleManage(event)}/>

            <RaisedButton className="button" label="Export" primary={true} onClick={(event) => this.handleCSVExport(event)}/>

            <RaisedButton className="button" label="Create New User" primary={true} onClick={(event) => this.handleNewUser(event)}/>

            <RaisedButton className="button" label="Create New Project" primary={true} onClick={(event) => this.handleNewProject(event)}/>
          </div> */}
        </MuiThemeProvider>

        {/* <Switch>
          <Route path="/manage" component={Manage} />
          <Route path="/newmanager" component={CreateUser} />
          <Route path="/newproject" component={CreateProject} />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(Junction)
