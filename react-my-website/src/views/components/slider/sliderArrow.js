import React from 'react';

class SliderArrow extends React.Component{
	constructor(props){
		super(props);
		this.handleLeftClick = this.handleLeftClick.bind(this);
		this.handleRightClick = this.handleRightClick.bind(this);
	}
	handleLeftClick(){
		this.props.handleArrowLeftClick();
	}
	handleRightClick(){
		this.props.handleArrowRightClick();
	}
	render(){
		return (
			<div className="sliderArrow">
				<span onClick={this.handleLeftClick}>&lt;</span>
				<span onClick={this.handleRightClick}>&gt;</span>
			</div>
		);
	}
}

export default SliderArrow;