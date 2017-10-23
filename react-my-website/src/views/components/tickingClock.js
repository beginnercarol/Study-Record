import React from 'react';

class TickingClock extends React.Component {
	render() {
		return (
			<div classnme="clock">
        <p> It is {new Date().toLocaleTimeString()}</p>
      </div>
			);
	}
}

export default TickingClock;