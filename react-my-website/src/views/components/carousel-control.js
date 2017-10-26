import React from 'React';
//params length
class CarouselControl extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	render(){
		var ctrList = [];
		for(let i=0;i<this.props.length;i++){
			ctrList.push(<li key={i} onClick={this.handleClick}></li>);
		}
		return (
			<ul className="carousel-control">
				{ctrList}
			</ul>
		);
	}
}

export default CarouselControl;