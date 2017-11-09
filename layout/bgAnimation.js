window.onload = function(){
	var cav = document.getElementById("myBg");
	var ctx = cav.getContext("2d");
	var bgMonitor = {
	  width : cav.width,
	  height : cav.height,
	  polygon : {
	    edges : 8,
	    color : "#03A9F4",
	    radius : 10,
	    speed : 0.2,
	  },
	  canvas : cav,
	  polygonArr : [],
	  mousePointer : '',
	}
	class Polygon {
	  constructor(props){
	    this.edges = props.edges;
	    this.color = props.color;
	    this.r = props.radius;
	    this.speed = props.speed;
	    this.rotate = 0;
	    this.ang = Math.PI*2/this.edges;
	    this.vx = [-1,1][Math.round(Math.random())];
	    this.vy = [-1,1][Math.round(Math.random())];
	    //console.log(this.vy);
	  }
	  init(pos){
	    this.x = pos.x;
	    this.y = pos.y;
	    //console.log("init"+this.x);
	  }
	  resetSelf(){
	  	this.x = Math.random()*bgMonitor.width;
	  	this.y = Math.random()*bgMonitor.height;
	  }
	  update(){
	      this.x += this.vx*this.speed;
	      this.y += this.vy*this.speed;
	      if(this.x>=bgMonitor.width || this.y>=bgMonitor.height || this.x<=0 || this.y<=0){
	      	this.resetSelf();
	      }
	      this.rotate = (this.rotate + this.ang/2)%(Math.PI*2);
	      //console.log(this.rotate);
	  }
	  render(){
	    //console.log(bgMonitor.width);
	    this.cav = bgMonitor.canvas;
	    this.ctx = this.cav.getContext("2d");
	    this.ctx.beginPath();
	    this.ctx.lineWidth = 1;
	    this.ctx.strokeStyle=this.color;
	    this.ctx.moveTo(this.x+this.r*Math.sin(this.rotate+this.ang),this.y+this.r*Math.cos(this.rotate+this.ang));
	    for(let i=2;i<=this.edges;i++){
	  this.ctx.lineTo(this.x+this.r*Math.sin(this.rotate+this.ang*i),this.y+this.r*Math.cos(this.rotate+this.ang*i));
	    }
	    this.ctx.closePath();
	    this.ctx.stroke();
	    //console.log(bgMonitor.width);
	  }
	}
	var raf = window.requestAnimationFrame || function(callback){
	  window.setTimeout(callback,1000/60);
	}

	var polygon = new Polygon(bgMonitor.polygon);
	polygon.init({x:100,y:100});
	polygon.render();

	for(var i=0;i<10;i++){
		let polygon = new Polygon(bgMonitor.polygon);
		polygon.init({
			x:Math.random()*bgMonitor.width,
			y:Math.random()*bgMonitor.height,
		});
		bgMonitor.polygonArr.push(polygon);

	}
//console.log(bgMonitor.polygonArr.length);

	(function animation(){
		ctx.clearRect(0,0,bgMonitor.width,bgMonitor.height);
		bgMonitor.polygonArr.forEach((obj)=>{
			obj.render();
			obj.update();
		});
		if(bgMonitor.mousePointer){
			bgMonitor.mousePointer.render();
		}
		raf(animation);
	})();


	window.onmousemove = function(event){
		console.log("move");
		var pos = {
			x:event.clientX,
			y:event.clientY,
		};
		console.log(pos);
		bgMonitor.mousePointer = new Polygon(bgMonitor.polygon);
		bgMonitor.mousePointer.init(pos);
	}



};