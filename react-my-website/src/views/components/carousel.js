import React from 'react';
//import CarouselItems from './carousel-items';
//import CarouselIndicator from './carousel-indicator';
//import CarouselControl from './carousel-control';

class Carousel extends React.Component {
	constructor(props){
		super(props);
		this.ctrNodes = [];
		this.indiNodes = [];
		//this.imgList = [];
		this.length = this.props.imgs.length;
		this.state={
			src:this.props.imgs[0].src,
			alt:this.props.imgs[0].alt,
			flag:0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClickLeft = this.handleClickLeft.bind(this);
		this.handleClickRight = this.handleClickRight.bind(this);
	}
	componentWillMount(){
		for(let i=0;i<this.length;i++){
				this.ctrNodes.push(<li id={i} key={i} onClick={this.handleClick}></li>);
				//this.imgList.push(<img src={this.props.imgs[i].src} alt={this.props.imgs[i].alt} />);
		}
		this.indiNodes.push(<span key="0" className="carousel-left" onClick={this.handleClickLeft}>&lt;</span>);
		this.indiNodes.push(<span key="1" className="carousel-right" onClick={this.handleClickRight}>&gt;</span>);
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
		var flag=this.state.flag;
		var index = (flag==0)?(this.length-1):(flag-1);
		console.log("left:"+index);
		this.setState({
			src:this.props.imgs[index].src,
			alt:this.props.imgs[index].alt,
			flag:index
		});
		//console.log("here:"+((this.state.flag==0)?(this.length-1):(this.state.flag-1));

	}
	handleClickRight(){
		var flag=this.state.flag;
		var index = (flag==this.length)?(0):(flag+1);
		console.log("right:"+index);
		this.setState({
			src:this.props.imgs[index].src,
			alt:this.props.imgs[index].alt,
			flag:index
		});
	}
	render(){
		//console.log(this.length);
		return(
			<div className="myCarousel clearfix">
				{this.indiNodes}
				<ul className="carousel-indicator">{this.ctrNodes}</ul>
				<img className="carousel-item" src={this.state.src} alt={this.state.alt} />
			</div>
		);
	}
}

export default Carousel;