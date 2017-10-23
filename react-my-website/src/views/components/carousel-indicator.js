import React from 'react';
//import style from '../../css/carousel-indicator.css';

class CarouselIndicator extends React.Component {
	handleClick(i){

	}

	render() {
		let count = this.props;//接收两个参数,图片张数和图片内容
		//let width  = 100/count + "%";
		let dotNodes = [];
		for(let i=0;i<count;i++){
			dotNodes[i]= (
				<li key={'dot'+i}></li>
			);
		}
		return (
			<div className="carousel-indicator">
				<ul>
	    			{dotNodes}
    			</ul>
			</div>
		);
	}
}
export default CarouselIndicator;