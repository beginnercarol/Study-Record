(function(){
	var length = 10;
	var width = 10;
	var arr = new Array(length);
	for(let i=0;i<length;i++){
	  arr[i] = new Array(length);
	}

	colorDict = {
	  "1":"red",
	  "2":"yellow",
	  "3":"blue",
	  "4":"green",
	  "5":"orange"
	};

	var myDiv = document.getElementById("container");
	
	//重新绘制方格
	function startGame(){
		for(let i=0;i<length*length;i++){
		  var div = document.createElement("div");
		  var color = Math.floor(Math.random()*5+1);
		  //console.log(color);
		  div.className  = "cell";
		  div.setAttribute("data-indexi",Math.floor(i/length));
		  div.setAttribute("data-indexj",i%length);
		  div.innerHTML = color;
		  div.style.backgroundColor = colorDict[color];
		  div.addEventListener('click',clickToStart);
		  myDiv.appendChild(div);
		}
	}

	startGame();

	function setColorToTrans(indexI,indexJ,color){
		var selector = "[data-indexi='"+indexI+"']"+"[data-indexj='"+indexJ+"']";
    	var arr = document.querySelector(selector);
    	if(arr.innerHTML == color){
	        //若颜色一致则设为0
	        //arr[indexI-1][indexJ]=0;
	        arr.innerHTML = 0;
	        arr.style.backgroundColor="transparent";
	        //top.push([indexI-1,indexJ]);
	        //arr.style.display = "none";
	     } 
    	
	}

	//传入的 index 是 起始块的索引
	function findSameColor(indexI,indexJ,color,pos){
		if(pos=="top"){//不找 bottom
			if(indexI-1>=0){//"top"
				setColorToTrans(indexI-1,indexJ,color);
				findSameColor(indexI-1,indexJ,color,"top");
			}
			if(indexJ+1<length){//"right"
				setColorToTrans(indexI,indexJ+1,color);
				findSameColor(indexI,indexJ+1,color,"right");
			}
			if(indexJ-1>=0){//"left"
				setColorToTrans(indexI,indexJ-1,color);
				findSameColor(indexI,indexJ-1,color,"left");
			}
		}
		if(pos=="right"){//no left
			if(indexI-1>=0){//"top"
				setColorToTrans(indexI-1,indexJ,color);
				findSameColor(indexI-1,indexJ,color,"top");
			}
			if(indexJ+1<length){//"right"
				setColorToTrans(indexI,indexJ+1,color);
				findSameColor(indexI,indexJ+1,color,"right");
			}
			if(indexI+1<=width){//"bottom"
				setColorToTrans(indexI+1,indexJ,color);
				findSameColor(indexI+1,indexJ,color,"bottom");
			}
		}
		if(pos=="bottom"){//不找 top
			if(indexJ+1<length){//"right"
				setColorToTrans(indexI,indexJ+1,color);
				findSameColor(indexI,indexJ+1,color,"right");
			}
			if(indexI+1<=width){
				setColorToTrans(indexI+1,indexJ,color);
				findSameColor(indexI+1,indexJ,color,"bottom");
			}
			if(indexJ-1>=0){//"left"
				setColorToTrans(indexI,indexJ-1,color);
				findSameColor(indexI,indexJ-1,color,"left");
			}
		}
		if(pos=="left"){//不找 right
			if(indexI-1>=0){//"top"
				setColorToTrans(indexI-1,indexJ,color);
				findSameColor(indexI-1,indexJ,color,"top");
			}
			if(indexI+1<=width){
				setColorToTrans(indexI,indexJ-1,color,"bottom");
			}
			if(indexJ-1>=0){//"left"
				setColorToTrans(indexI,indexJ-1,color);
				findSameColor(indexI,indexJ-1,color,"left");
			}
		}
	}


	function clickToStart(event){
		var evt  = event || window.event;
		var indexI = evt.target.getAttribute("data-indexi");
		var indexJ = evt.target.getAttribute("data-indexj");
		var color = evt.target.innerHTML;
		indexI = Number(indexI);
		indexJ = Number(indexJ);
		setColorToTrans(indexI,indexJ,color);
		findSameColor(indexI,indexJ,color,"top");
		findSameColor(indexI,indexJ,color,"left");
		findSameColor(indexI,indexJ,color,"bottom");
		findSameColor(indexI,indexJ,color,"left");
	}


})();