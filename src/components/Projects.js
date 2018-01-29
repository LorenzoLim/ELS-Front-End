import React, {Component} from 'react';
import {MuiThemeProvider, MenuItem} from 'material-ui';
import {api} from '../request.js'

class Manage extends Component {
  state = {
    projects: null,
    selected: null
  };

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

  handleChange = (event, index, value) => {
    this.setState({
      selected: value
    })
  };

  render() {
    const {projects, selected} = this.state
    if (!projects) {
      return null
    }

    return (
      <MuiThemeProvider>
        <div>
          {projects.map((project) =>
            )
          }
          {/* <SelectField
            floatingLabelText="Select Project  "
            value={selected}
            onChange={this.handleChange}
            >
              {projects.map((project) =>
                <MenuItem key={project._id} value={project._id} primaryText={project.projectName} />
              )}
          </SelectField>
          <ProjectCard projectId={selected}/> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Manage
