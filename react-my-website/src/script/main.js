import React from 'react';
import ReactDOM from 'react-dom';
//import Test from '../views/components/app';
//import BlogPost from '../views/components/blogpost';
import TickingClock from '../views/components/tickingClock'
import Carousel from '../views/components/carousel';
//import Comment from '../views/components/comment';
import ToggleBtn from '../views/components/toggleBtn';

import css from '../css/index.scss';


/*ReactDOM.render(<Test name="seriously"/>,document.getElementById("root"));
ReactDOM.render(<BlogPost />,document.getElementById("root"));
*/


//clock component
ReactDOM.render(<TickingClock />,document.getElementById("root-footer"));

ReactDOM.render(<ToggleBtn />,document.getElementById("root-btn"));


//carousel
const imgs = [{src:'./src/imgs/gallery1.jpg',alt:"pic1"},{src:'./src/imgs/gallery2.jpg',alt:"pic2"},{src:'./src/imgs/gallery3.jpg',alt:"pic3"}];

ReactDOM.render(<Carousel imgs={imgs}/>,document.getElementById("root-main"));