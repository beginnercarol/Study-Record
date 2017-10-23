import React from 'react';
import CarouselIndicator from './carousel-indicator';
import CarouselItems from './carousel-items';
import style from '../../css/carousel.css';


class Carousel extends React.Component {
	render(){
		//let {count,items} = this.props;
		console.log("carousel");
		let items  =this.props.items;
		let count  =items.length;
		let width = 100*count +"%";
		return (
			<div class={style.carousel} >
				<CarouselItems items = {items} count = {count} style={{width:width}}/>
				<CarouselIndicator count = {count} />
			</div>	
		
		);
	}
}

export default Carousel;