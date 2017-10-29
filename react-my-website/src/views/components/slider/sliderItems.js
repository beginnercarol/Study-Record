import React from 'react';

class SliderItems extends React.Component{
	constructor(props){
		super(props);
		this.local = this.props.local;

	}
	componentWillMount(){

	}
	render(){
		let index=0;
		const local = this.props.local;
		const img = this.props.items[local];
		return (
			<div className="slider-items" style={{position:'relative'}}>
				<img src={img.src} alt={img.alt}  />
			</div>
		);
	}

}

export default SliderItems;