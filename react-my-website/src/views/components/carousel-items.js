import React from 'react';
//import style from '../../css/carousel-items.css';

class CarouselItems extends React.Component {
	render(){
		let count = this.props.count;
		let items = this.props.items;
		let width  = 100/count + "%";
		let imgList  = [];
		for(let i=0;i<count;i++){
			imgList[i] = (
				<img src={items.src} alt={items.alt} width={{width:width}} />
			);
		}
		return (
			<div class="carousel-items" style={{width:width}}>
				{imgList}
			</div>
		);
	};
}

export default CarouselItems;