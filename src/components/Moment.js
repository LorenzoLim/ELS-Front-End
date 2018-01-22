import React from 'react';
import moment from 'moment';


export default class App extends React.Component {

state = {
	start: null,
	stop: null,
	total: 0
}

startTimer = () => {
	this.setState({
		start: moment()
	})
}

stopTimer = () => {
	this.setState({
		stop: moment()
	})
}

	render() {
		return (
			<div className="App">
     { this.state.start && this.state.stop &&
          <p>Total time: {this.state.stop.diff(this.state.start, 'hours')} </p>
        }
        <p>{this.state.total}</p>
        <button onClick={this.startTimer}>Start Timer</button>

        <button onClick={this.stopTimer}>Stop Timer</button>

      </div>
    );
  }
}
