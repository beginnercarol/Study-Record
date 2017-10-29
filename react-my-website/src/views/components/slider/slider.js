import React from 'react';
import SliderDots from './sliderDots';
import SliderItems from './sliderItems';
import SliderArrow from './sliderArrow';

class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state={
			local:0
		}
		this.handleLeftClick = this.handleLeftClick.bind(this);
		this.handleRightClick = this.handleRightClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.change = this.change.bind(this);
	}
	handleLeftClick(){
		const length = this.props.setting.imgs.length;
		this.setState((prevState)=>({
			local:(prevState.local==0)?(length-1):(prevState.local-1)
		}));
	}
	handleRightClick(){
		const length = this.props.setting.imgs.length;
		this.setState((prevState)=>({
			local:(prevState.local==length-1)?(0):(prevState.local+1)
		}));
	}
	handleClick(index){
		this.setState({
			local:index
		});
	}
	change(){
		this.setState((prevState)=>({local:((prevState.local+1)%3)}));
	}
	componentDidMount(){
		this.props.setting.auto && (this.timeId = setInterval(this.change,5000));
	}
	componentWillUnmount(){
		this.timeId && clearInterval(this.timeId);
	}
	render(){
		let arrowNodes = <SliderArrow handleArrowLeftClick={this.handleLeftClick} handleArrowRightClick={this.handleRightClick}/>
		let dotNodes = <SliderDots count={this.props.setting.imgs.length} local={this.state.local} handleClick={this.handleClick}/>
		return (
			<div className="slider-wrapper">
				<SliderItems items={this.props.setting.imgs} local={this.state.local} />
				{this.props.setting.arrow?arrowNodes:null}
				{this.props.setting.dots?dotNodes:null}
			</div>
		);
	}
}

export default Slider;
