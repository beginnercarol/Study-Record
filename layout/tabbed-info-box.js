$(document).ready(function(){
	var tabs = $('section ul li');
	console.log(tabs.length);
	var pannels = $(".pannels > div");
	console.log(pannels.length);
	for(var j=0;j<tabs.length;j++){
		var tab = tabs[j];
		setHandler(tab,j);
	}

	function setHandler(tab,j){
		tab.onclick=function(){
			for(var i=0;i<tabs.length;i++){
				tabs[i].removeClass();
				pannels[i].removeClass();
			}		
			tabs[j].addClass("active");
			pannels[j].addClass("active");
	
		};
	}


	
});