/*window.onload = function(){
	var dropLis = document.querySelectorAll(".dropDiv>ul>li");
	for(var i=0;i<dropLis.length;i++){
		console.log(dropLis[i]);
			var decentUl = dropLis[i].querySelector("ul");
		dropLis[i].addEventListener('mouseover',(function(index){
			return function(){
				dropLis[index].style.backgroundColor="red";
			if(decentUl){
				decentUl.style.display="block";
			}
			}	
		})(i),false);
		
			
		dropLis[i].addEventListener('mouseout',(function(index){
			return function(){
				dropLis[index].style.backgroundColor="teal";
			if(decentUl){
				decentUl.style.display="none";
			}
			}	
		})(i),false);
	}
};*/

