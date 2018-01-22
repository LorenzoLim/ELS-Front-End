import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';


export default class App extends React.Component {

state = {
	start: null,
	stop: null,
	total: 0
}

startTimer = () => {
	this.setState({
		start: new Date()
	})
}

stopTimer = () => {
	this.setState({
		stop: new Date()
	})
}

	render() {
		return (
			<div className="App">
     { this.state.start && this.state.stop &&
          <p>Total time: {(this.state.stop - this.state.start) / 1000 /60 /60} </p>
        }
        <p>{this.state.total}</p>
        <button onClick={this.startTimer}>Start Timer</button>

        <button onClick={this.stopTimer}>Stop Timer</button>

      </div>
    );
  }
}

