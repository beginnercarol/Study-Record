import React from 'react';

class TickingClock extends React.Component {
	constructor(props){
		super(props);
		this.state = {date:new Date()};
	}
	componentDidMount(){
		this.timerId = setInterval(
			() => this.tick,1000
		);
	}
	componentWillUnmount(){
		clearInterval(this.timerId);
	}
	tick(){
		this.setState({date:new Date()});
	}

	render() {
		return (
			<div className="clock">
        <h1>Welcome</h1>
        <p> It is {this.state.date.toLocaleTimeString()}</p>
      </div>
			);
	}
}


export default TickingClock;