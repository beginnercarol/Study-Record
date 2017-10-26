import React from 'react';
//import CarouselItems from './carousel-items';
//import CarouselIndicator from './carousel-indicator';
//import CarouselControl from './carousel-control';

class Carousel extends React.Component {
	constructor(props){
		super(props);
		this.ctrNodes = [];
		//this.imgList = [];
		this.length = this.props.imgs.length;
		this.state={
			src:this.props.imgs[0].src,
			alt:this.props.imgs[0].alt,
			flag:0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClickLeft = this.handleClickLeft(this);
		this.handleClickRight = this.handleClickRight(this);
	}
	componentWillMount(){
		for(let i=0;i<this.length;i++){
				this.ctrNodes.push(<li id={i} key={i} onClick={this.handleClick}></li>);
				//this.imgList.push(<img src={this.props.imgs[i].src} alt={this.props.imgs[i].alt} />);
		}
	}
	handleClick(event){
		//console.log(this.props.imgs[event.target.id].src);
		this.setState({
			src:this.props.imgs[event.target.id].src,
			alt:this.props.imgs[event.target.id].alt,
			flag:event.target.id
		});
	}
	handleClickLeft(){
		console.log("here:"+(this.state.flag-1)%this.length);
		this.setState({
			src:this.props.imgs[(this.state.flag-1)%this.length].src,
			alt:this.props.imgs[(this.state.flag-1)%this.length].alt,
		});
	}
	handleClickRight(){
		this.setState({
			src:this.props.imgs[(this.state.flag+1)%this.length].src,
			alt:this.props.imgs[(this.state.flag+1)%this.length].alt,
		});
	}
	render(){
		//console.log(this.length);
		return(
			<div className="myCarousel">
				<span className="carousel-left" onClick={this.handleClickLeft}>&lt;</span>
				<span className="carousel-right" onClick={this.handleClickRight}>&gt;</span>
				<ul className="carousel-indicator">{this.ctrNodes}</ul>
				<img className="carousel-item" src={this.state.src} alt={this.state.alt} />
			</div>
		);
	}
}

export default Carousel;