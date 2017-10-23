import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../views/components/app';
import BlogPost from '../views/components/blogpost';
import TickingClock from '../views/components/tickingClock'
import Carousel from '../views/components/carousel';

import css from '../css/index.css';


ReactDOM.render(<Test name="seriously"/>,document.getElementById("root"));
ReactDOM.render(<BlogPost />,document.getElementById("root"));


//clock module
function ticking(){
	ReactDOM.render(<TickingClock />,document.getElementById('clock'));
}

var intervalId  = setInterval(ticking,1000);


//轮播组件
const IMAGE_DATA  =[
	{
		src:'../imgs/gallery1.jpg',
		alt: 'pic1'
	},
	{
		src:'../imgs/gallery2.jpg',
		alt: 'pic2'
	},
	{
		src:'../imgs/gallery3.jpg',
		alt: 'pic3'
	},
	{
		src:'../imgs/gallery4.jpg',
		alt: 'pic4'
	}
	
];

ReactDOM.render(<Carousel items={IMAGE_DATA} />,document.getElementById("carousel"));





