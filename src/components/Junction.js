import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
import Manage from './Manage'
import CreateUser from './CreateUser'
import CreateProject from './CreateProject'

class Junction extends Component {
  constructor(props){
    super(props);
    this.state = {
      destination: ''
    }
  }

  render() {
    let {destination} = this.state;

    return (
      <div>
        {destination === 'manage' && (<Manage />)}
        {destination === 'createUser' && <CreateUser />}
        {destination === 'createProject' && <CreateProject />}
        {destination === '' && (
          <div>
            <MuiThemeProvider>
              <div>
                <RaisedButton className="button" label="Manage" primary={true} onClick={(event) => this.setState({destination: 'manage'})}/>
                <br />
                <RaisedButton className="button" label="Create New Manager" primary={true} onClick={(event) => this.setState({destination: 'createUser'})}/>
                <br />
                <RaisedButton className="button" label="Create New Project" primary={true} onClick={(event) => this.setState({destination: 'createProject'})}/>
              </div>
            </MuiThemeProvider>
          </div>
        )}
      </div>
    )
  }
}

export default Junction
