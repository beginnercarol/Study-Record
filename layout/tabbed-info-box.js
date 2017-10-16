$(document).ready(function(){

var tabs = document.querySelectorAll(".tab");

var tabSec = document.querySelectorAll("section div");

console.log(tabs.length);
for(var i=0;i<tabs.length;i++){
	var index = i;
  tabs[i].addEventListener('click',changeTab(index));
  
}
function hasClass(index,className,element){
	var class_name = element[index].className;
	var class_name_list = class_name.split(" ");
	for(var i=0;i<class_name_list.length;i++){
		if(class_name_list[i]==className){
			return true;
		}else{
			return false;
		}
	}
}

function removeClass(index,className,element){
	var class_name = element[index].className;
	var class_name_list = class_name.split(" ");
	var idx = class_name_list.indexOf(className);
	class_name_list.splice(idx,1);
	element[index].className = class_name_list.join(" ");
}

function changeTab(index){
	console.log("changeTab: "+index);
  	return function changeTabSec(){
	  for(var i=0;i<tabs.length;i++){
	  	var temp = i;
	    if(hasClass(temp,"active-sec",tabSec)){
	      removeClass(temp,"active-sec",tabSec);
	    }
	    if(hasClass(temp,"active",tabs)){
	    	removeClass(temp,"active",tabs);
	    }
	  }
	  tabSec[index].setAttribute("class","active-sec");
	  tabs[index].setAttribute("class","active");
	}
}

});