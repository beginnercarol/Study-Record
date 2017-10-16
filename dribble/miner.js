window.onload = function(){

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

    //添加节点,并添加 eventListener
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
      div.addEventListener('click',findColor);
      myDiv.appendChild(div);
    }

    
    function findColor(event){
      var evt = event.target;
      var indexI = evt.getAttribute("data-indexi");
      var indexJ = evt.getAttribute("data-indexj");
      var color = evt.innerHTML;
      var cols=[],rows=[],top=[],left=[],bottom=[],left=[];

    }
    
    //indexI & indexJ must be Number
    //修改选中cell的背景色和 innerHTMl
    function setColor(indexI,indexJ,color){
      var selector = "[data-indexi='"+ indexI +"']"+ "[data-indexj='"+ indexJ + "']";
      var cell = document.querySelector(selector);
      if(cell.innerHTML == color){
        cell.innerHTML = 0;
        cell.style.backgroundColor = "transparent";
      }
    }

    //递归寻找同色的色块




  }());
  

}