window.onload = function(){
	var cav = document.getElementById("clock");
	var gameMonitor = {
		enermyNum : 10,
		enermySpeed : 1,
	};
	class Map {
		init(canvas){
			this.canvas = canvas.cav;
			this.ctx = this.canvas.getContext('2d');
			this.width = canvas.width;
			this.height = canvas.height;
		}
		clear(){
			this.ctx.clearReact(0,0,this.width,this.height);
		}
		render(){
			this.clear();
			this.ctx.fillStyle = 'black';
			this.ctx.fillReact(0,0,this.width,this.height);
		}
	}

	class Player{
		init(canvas){
			this.canvas = canvas.cav;
			this.ctx = this.canvas.getContext('2d');
			this.x = canvas.width/2;
			this.y = canvas.height/2;

		}
		update(){
			this.x += 1;
			this.y += 1;
		}
		clear(){
			this.
		}
		render(){

		}
	}
	//生成 enermy 红色的圆环
	class Enermy{
		init(options){
			this.canvas = options.cav;
			this.ctx = this.canvas.getContext('2d');
			this.x = options.pos.x;
			this.y = options.pos.y;
			this.r = options.radius;
		}
		update(){
			this.x += gameMonitor.enermySpeed;
			this.y += gameMonitor.enermySpeed;
		}
		clear(){
			this.
		}
		render(){
			this.ctx.beginPath();
			this.ctx.lineWidth = 10;
			this.ctx.strokeStyle="red";
			this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			this.ctx.stroke();
		}
		
	}

	var raf = window.requestAnimationFrame || function(callback){
		window.setTimeout(callback,1000/60);
	}

	var map = new Map();
	map.init({
		cav,
		width:500,
		height:500
	})

	function createEnermy(){
		this.enermyArr = [];
		for(let i=0;i<gameMonitor.enermyNum;i++){

		}
	}


	(function animate(){
		map.render();
		raf(animate);
	})();
};