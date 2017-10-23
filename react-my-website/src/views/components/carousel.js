import React from 'react';
import CarouselIndicator from './carousel-indicator';
import CarouselItems from './carousel-items';
import style from '../../css/carousel.css';


class Carousel extends React.Component {
	render(){
		//let {count,items} = this.props;
		console.log(this.props.items);
		let items  =this.props.items;
		let count  =items.length;
		let width = 100*count +"%";
		return (
			<div className={style.carousel} >
				<CarouselItems items = {items} count = {count} style={{width:width}}/>
				<CarouselIndicator count = {count} />
			</div>	
		
		);
	}
}

export default Carousel;