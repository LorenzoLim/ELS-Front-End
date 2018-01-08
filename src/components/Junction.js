import React, {Component} from 'react'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
class Junction extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <RaisedButton className="junctionButton" label="Manage" primary={true} onClick={(event) => this.handleClick(event)}/>
            <br />
            <RaisedButton className="junctionButton" label="View Final Report" primary={true} onClick={(event) => this.handleClick(event)}/>
            <br />
            <RaisedButton className="junctionButton" label="Create New Manager" primary={true} onClick={(event) => this.handleClick(event)}/>
            <br />
            <RaisedButton className="junctionButton" label="Create New Project" primary={true} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Junction
