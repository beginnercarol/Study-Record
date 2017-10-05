$(document).ready(function(){
	var tabs = document.querySelectorAll(".control ul li");

	var pic = document.querySelector(".imgs ul");

	var imgs = 	document.querySelectorAll(".imgs ul li img");

	var width = document.querySelector(".imgs ul li img").width;
	console.log(width);	


	function changePic(index){
		return function(){
			var dis = -width*index;
			console.log(dis);
			pic.style.left = dis + "px";//dis;
		}
	}


	for(var i=0; i< tabs.length;i++){
		var temp = i;
		tabs[i].addEventListener('click',changePic(temp));
	}






});