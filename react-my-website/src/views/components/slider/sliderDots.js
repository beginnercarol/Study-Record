import React from 'react';

class SliderDots extends React.Component{
	constructor(props){
		super(props);
		this.handleMouseOver = this.handleMouseOver.bind(this);
	}
	handleMouseOver(index){
		return ()=>this.props.handleClick(index);//
	}
	render(){
		let nodeList = [];
		for(let i=0;i<this.props.count;i++){
			nodeList.push(<li key={i} onMouseOver={this.handleMouseOver(i)}></li>);
		}
		return (
			<ul className="slider-dots">
				{nodeList}
			</ul>
		);
	}
}

export default SliderDots;