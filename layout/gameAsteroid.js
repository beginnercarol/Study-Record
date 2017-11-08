window.onload = function(){
	var cav = document.getElementById("clock");
	var gameMonitor = {
		width : 500,
		height : 500,
		enermyNum : 10,
		enermySpeed : 1,
		enermyArr:[],
		particleArr : [],
		playerIni : {
			cav:cav,
			width:500,
			height:500,
			radius:5,
			speed:5,
			color:"#F1F8E9",
		},
		enermyIni : {
			radius : 10,
			speed : 0.2,
		}

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

	//定义 player
	class Player{
		init(canvas){
			this.canvas = canvas.cav;
			this.ctx = this.canvas.getContext('2d');
			this.x = canvas.width/2;
			this.y = canvas.height/2;
			this.r = canvas.radius;
			this.speed = canvas.speed;
			this.kill = 0;
			this.flash = false;
			this.color = "#F1F8E9";
		}
		update(){
			this.x += 1;
			this.y += 1;
		}
		//一旦死亡则重置
		resetSelf(){
			this.init(gameMonitor.playerIni);
		}
		bling(){
			//console.log("blink");
			let self = this;
			let timeOut = setTimeout((function(self){
				return function(){
					self.flash = false;
				self.color = "#F1F8E9";
				//console.log("setTimeout : "+self.flash);
				}
			})(self),5000);
		}
		render(){
			this.ctx.beginPath();
			this.ctx.lineWidth = 5;
			if(this.flash){
				this.color = (this.color=="#1B5E20")?"#F1F8E9":"#1B5E20";
			}
			this.ctx.strokeStyle = this.color;
			//console.log("render() : "+this.flash);
			this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			this.ctx.closePath();
			this.ctx.stroke();

		}
	}

	//生成 enermy 红色的圆环
	class Enermy{
		constructor(props){
			this.x = Math.random() * gameMonitor.width + gameMonitor.width;
			this.y = Math.random() * gameMonitor.height - gameMonitor.height;
			this.r = props.radius;
			this.speed = props.speed;
			this.rotate = 0;
		}
		init(options){
			this.canvas = options.cav;
			this.ctx = this.canvas.getContext('2d');	
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
			if(this.r<10){
				//console.log(this.r);
				//this.r += 0.02;
			}

		}
		//一旦被撞击就重置位置
		clearSelf(){
			 //this.constructor(gameMonitor.)
			this.x = Math.random() * gameMonitor.width + gameMonitor.width;
			this.y = Math.random() * gameMonitor.height - gameMonitor.height;
		}
		render(){
			this.ctx.beginPath();
			this.ctx.lineWidth = 5;
			this.ctx.strokeStyle="red";
			this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			this.ctx.closePath();
			this.ctx.stroke();
		}
		multiAngle(){
			this.ctx.beginPath();
			this.ctx.strokeStyle ="teal";//#64FFDA";
			this.ctx.lineWidth = 1;
			this.ctx.lineJoin = "round";
			this.ctx.moveTo(this.x-this.r/2,this.y-(this.r)/2*Math.sqrt(3));
			this.ctx.lineTo(this.x+this.r/2,this.y-(this.r)/2*Math.sqrt(3));
			this.ctx.lineTo(this.x+this.r,this.y);
			this.ctx.lineTo(this.x+(this.r)/2,this.y+(this.r)/2*Math.sqrt(3));
			this.ctx.lineTo(this.x-(this.r)/2,this.y+(this.r)/2*Math.sqrt(3));
			this.ctx.lineTo(this.x-this.r,this.y);
			this.ctx.closePath();
			this.ctx.stroke();
		}
		//在...时检查是否相撞,若相撞则 闪烁 & 产生粒子碎裂效果
		checkCollision(){
			if(player){
				let dis = Math.pow(Math.abs(this.x-player.x),2)+Math.pow(Math.abs(this.y-player.y),2);
				//console.log(dis);
				if(dis<=Math.pow(this.r+player.r,2)){
					//console.log("close");
					player.flash = true;
					player.bling();
				}
			}
		}
		
	}

	class Particle {
	  constructor(props){
	    this.x = props.x;
	    this.y = props.y;
	    this.r = props.radius;
	    this.vx = 0.2*Math.random()*this.r;
	    this.vy = 0.2*Math.random()*this.r;
	    this.dx = [-1,1][Math.round(Math.random())];
	    this.dy = [-1,1][Math.round(Math.random())];
	    this.cav = props.canvas;
	    //console.log(this.dx);
	  }
	  update(){
	    this.x += this.dx*this.vx;
	    this.y += this.dy*this.vy;
	    if(this.r>=0.1){
	      this.r -= 0.1;
	    }
	    //console.log("particle:" + this.x + " " + this.y + " " + this.r);
	  }
	  render(){
	    //console.log("particle");
	    this.ctx = this.cav.getContext("2d");
	    //this.ctx.clearRect(0,0,this.cav.width,this.cav.height);
	    this.ctx.beginPath();
	    this.ctx.lineWidth = 1;
	    this.ctx.strokeStyle = "red";
	    this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
	    this.ctx.stroke();
	    this.ctx.closePath();
	    
	  }
	  //超出规定范围则消失
	  disappear(){
	    
	  }
	}

	var player = new Player();
	player.init({
		cav:cav,
		width:500,
		height:500,
		radius:5,
		speed:5,
		color:"#F1F8E9",
	});	
	player.render();
	if(player){
		window.addEventListener('keydown',function(evt){
			if(evt.keyCode==38){
				//console.log(38);
				if(player.y>player.r){
					player.y -= player.speed;
					player.render();
				}
			}
			else if(evt.keyCode==40){
				//console.log(40);
				if(player.y<cav.height-player.r){
					player.y += player.speed;
					player.render();
				}
			}
			else if(evt.keyCode==37){
				//console.log(37);
				if(player.x>player.r){
					player.x -= player.speed;
					player.render();
				}
			}
			else if(evt.keyCode==39){
				//console.log(39);
				if(player.x<cav.width-player.r){
					player.x += player.speed;
					player.render();
				}
			}
		});
	}

	var raf = window.requestAnimationFrame || function(callback){
		window.setTimeout(callback,1000/60);
	}

	//生成 enermy 对象数组
	function createEnermy(){
		//var enermyArr = [];
		for(let i=0;i<gameMonitor.enermyNum;i++){
			//const x = Math.random() * map.width + map.width;
			//const y = Math.random() * map.height;
			gameMonitor.enermyArr.push(new Enermy({radius : 10,
				speed : 0.2}));
		}
	}

	function createParticle(){
		for(let i=0;i<100;i++){
			gameMonitor.particleArr.push(new Particle({
				x : cav.height/2,
				y : cav.height/2,
				radius : 5,
				canvas : cav,
			}));
		}
	}




	var map = new Map();
	map.init({
		cav: cav,
		width:500,
		height:500
	});
	createEnermy();
	createParticle();

	var particle = new Particle({
	  x : 250,
	  y : 250,
	  radius : 5,
	  canvas : cav,

	});
	
	//反复渲染动画
	(function animate(){
		map.render();
		if(player){
			player.render();
			//console.log(player.flash);
		}
		if(particle){
			particle.render();
			particle.update();
		}
		gameMonitor.enermyArr.forEach((obj)=>{
			//console.log("?");
			obj.init({
				cav : cav
			});
			obj.multiAngle();
			obj.checkCollision();
			obj.update();
		});
		gameMonitor.particleArr.forEach((obj)=>{
			obj.render();
			obj.update();
		});
		raf(animate);
	})();
};