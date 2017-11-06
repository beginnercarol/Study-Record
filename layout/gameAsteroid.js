window.onload = function(){
	var cav = document.getElementById("clock");
	var gameMonitor = {
		enermyNum : 10,
		enermySpeed : 1,
		enermyArr:[],
	};
	class Map {
		init(canvas){
			this.canvas = canvas.cav;
			this.ctx = this.canvas.getContext('2d');
			this.width = canvas.width;
			this.height = canvas.height;
		}
		clear(){
			this.ctx.clearRect(0,0,this.width,this.height);
		}
		render(){
			this.clear();
			this.ctx.fillStyle = 'black';
			this.ctx.fillRect(0,0,this.width,this.height);
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
		
		render(){

		}
	}
	//生成 enermy 红色的圆环
	class Enermy{
		constructor(props){
			this.x = props.posX;
			this.y = props.posY;
		}
		init(options){
			this.canvas = options.cav;
			this.ctx = this.canvas.getContext('2d');
			this.r = options.radius;
			this.speed = options.speed;
		}
		update(){
			this.x -= this.speed;
			this.y += this.speed;
			if(this.x < -this.r){
				this.x = Math.random() * map.width;
			}
			if(this.y > map.height + this.r){
				this.y = Math.random() * map.height;
			}
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
	});
	createEnermy();

	function createEnermy(){
		//var enermyArr = [];
		for(let i=0;i<gameMonitor.enermyNum;i++){
			const x = Math.random() * map.width + map.width;
			const y = Math.random() * map.height;
			gameMonitor.enermyArr.push(new Enermy({posX:x,posY:y}));
		}
	}

	function collision(player,enermy){

	}

	//反复渲染动画
	(function animate(){
		map.render();
		gameMonitor.enermyArr.forEach((obj)=>{
			obj.init({
				cav : cav,
				radius : 10,
				speed : 1
			});
			obj.render();
			obj.update();
		});
		raf(animate);
	})();
};