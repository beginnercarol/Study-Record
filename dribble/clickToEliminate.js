window.onload = function(){

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
for(let i=0;i<length*length;i++){
  var div = document.createElement("div");
  var color = Math.floor(Math.random()*5+1);
  //console.log(color);
  div.className  = "cell";
  div.setAttribute("data-indexi",Math.floor(i/length));
  div.setAttribute("data-indexj",i%length);
  div.innerHTML = color;
  div.style.backgroundColor = colorDict[color];
  myDiv.appendChild(div);
}


//统计同色的色块
//对应的数组中只保存对应方向上的同色色块的索引,二维数组
function findColor(event){
  var evt = event.target;
  var indexI = evt.getAttribute("data-indexi");
  var indexJ = evt.getAttribute("data-indexj");
  var color = evt.innerHTML;
  var rows = [];
  var cols = [];
  var top=[],right=[],bottom=[],left=[];
   console.log(length);
  checkColor(Number(indexI),Number(indexJ));
  function checkColor(indexI,indexJ){
    //最后只有初始节点没有设为零
    var selector = "[data-indexi='"+indexI+"']"+"[data-indexj='"+indexJ+"']";
    var arr = document.querySelector(selector);
    arr.innerHTML = 0;
    arr.style.backgroundColor="transparent";
    if(indexI-1>=0){//top
      //var selector = "[data-indexi='"+(Number(indexI)-1)+"']"+"[data-indexj='"+indexJ+"']";
      var selector = "[data-indexi='"+(indexI-1)+"']"+"[data-indexj='"+indexJ+"']";
      var arr = document.querySelector(selector);
      console.log(arr);
      if(arr.innerHTML == color){
        //若颜色一致则设为0
        //arr[indexI-1][indexJ]=0;
        arr.innerHTML = 0;
        arr.style.backgroundColor="transparent";
        top.push([indexI-1,indexJ]);
        checkColor(indexI-1,indexJ);
      } 
    }//top
    if((+indexJ+1)<10){//right
       var selector = "[data-indexi='"+indexI+"']"+"[data-indexj='"+(+indexJ+1)+"']";
      var arr = document.querySelector(selector);
      if(arr.innerHTML == color){
        //arr[indexI][indexJ+1]=0;
        arr.innerHTML = 0;        arr.style.backgroundColor="transparent";
        right.push([indexI,indexJ+1]);
        checkColor(indexI,+indexJ+1);
      }
      
    }//right
    if((+indexI+1)<10){//bottom
       var selector = "[data-indexi='"+(+indexI+1)+"']"+"[data-indexj='"+indexJ+"']";
      var arr = document.querySelector(selector);
      if(arr.innerHTML == color){
       // arr[indexI+1][indexJ]=0;
        arr.innerHTML = 0;        arr.style.backgroundColor="transparent";
        bottom.push([indexI+1,indexJ]);
        checkColor(indexI+1,indexJ);
      }
    }//bottom
    if(indexJ-1>=0){//left
       var selector = "[data-indexi='"+indexI+"']"+"[data-indexj='"+(+indexJ-1)+"']";
      var arr = document.querySelector(selector);
      if(arr.innerHTML == color){
        //arr[indexI,indexJ-1]=0;
        arr.innerHTML = 0;        arr.style.backgroundColor="transparent";
        left.push([indexI,indexJ-1]);
        checkColor(indexI,indexJ-1);
      }
    }//left
  }
}


function addEvt(){
  var cellList = document.getElementsByClassName("cell");
  console.log("addEvt");
  for(let i=0;i<cellList.length;i++){
    cellList[i].addEventListener('click',findColor);
  }
}

addEvt();


/*var indexi = 2;
var indexj = 3;
//console.log(document.querySelector("[data-indexi=indexi][data-indexj=indexj]"));

var str = "[data-indexi='"+(indexi-1)+"']"+"[data-indexj='"+indexj+"']"; 
console.log(str);

console.log(document.querySelector(str));
//console.log(document.querySelector("[data-indexi='2'][data-indexj='3']"));*/






};


