import React, {Component} from 'react';
import {MuiThemeProvider, SelectField, MenuItem} from 'material-ui';
import ProjectCard from './ProjectCard'
import {api} from '../request.js'

class Manage extends Component {
  state = {
//    projectNames: [],
    projects: null,
    selected: null
  };

  componentWillMount(response) {
    //let projectNames = [];
    api.get ('/projects')
      .then(response => {
    /*    let array = response.data
        for(var i = 0; i < array.length; i++) {
          let obj = array[i];
          projectNames.push(obj.projectName)
          console.log(obj.projectName);
        }*/
        this.setState({
          //projectNames: projectNames,
          projects: response.data
        })
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = (event, index, value) => {
    this.setState({
      selected: value
    })
  };

  render() {
    const {projects, selected} = this.state

    if (!projects) {
      return null;
    }

    return (
      <MuiThemeProvider>
        <div>
          <SelectField
            floatingLabelText="Select Project  "
            value={selected}
            onChange={this.handleChange}
            >
              {projects.map((project) =>
                <MenuItem key={project._id} value={project._id} primaryText={project.projectName} />
              )}
          </SelectField>
        </div>
        <ProjectCard projectId={selected}/>
      </MuiThemeProvider>
    );
  }
}

export default Manage
