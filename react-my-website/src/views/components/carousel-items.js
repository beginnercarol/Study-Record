import React from 'react';


class CarouselItems extends React.Component {
	render(){
		return (
			<img src={this.props.content[0].src} alt={this.props.content[0].alt} />
		);
	}
}

export default CarouselItems;