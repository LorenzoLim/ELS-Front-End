import React, {Component} from 'react'
import Manage from './Manage'
import CreateUser from './CreateUser'
import CreateProject from './CreateProject'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
import {

  Route,
  withRouter,
  Switch
} from 'react-router-dom'
class Junction extends Component {


  state = {
    manage: false,
    newUser: false,
    newProject: false
  }

componentDidMount() {
  console.log(this.props);
}

 handleManage = (event) => {
   event.preventDefault
   this.props.history.push('/manage')
 }
 handleNewUser = (event) => {
   event.preventDefault
   this.props.history.push('/newmanager')
 }
 handleNewProject = (event => {
   event.preventDefault
   this.props.history.push('/newproject')
 })
render() {
    return (
      <div>
        {destination === 'manage' && (<Manage />)}
        {destination === 'createUser' && <CreateUser />}
        {destination === 'createProject' && <CreateProject />}
        {destination === '' && (
          <div>
            <RaisedButton className="button" label="Manage" primary={true}  onClick={(event) => this.handleManage(event)}/>

            <RaisedButton className="button" label="View Final Report" primary={true} onClick={(event) => this.handleClick(event)}/>

            <RaisedButton className="button" label="Create New Manager" primary={true} onClick={(event) => this.handleNewUser(event)}/>

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
