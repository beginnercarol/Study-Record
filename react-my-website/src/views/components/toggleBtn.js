import React from 'react';

class ToggleBtn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			like:'true'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState((prevState)=>(
			{
			like:!prevState.like
	}));
	}
	render(){
		return (
			<button onClick={this.handleClick} >
			{this.state.like?'ON':'OFF'}
			</button>
		);
	}
}


export default ToggleBtn;