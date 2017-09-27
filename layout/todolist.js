$(document).ready(function(){
	var modified_checkbox = $('.modified_checkbox');
	modified_checkbox.removeClass('on');
	modified_checkbox.click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
		}else{
			$(this).addClass("on");
		}
	});


	var icon = $('.icon use');
	
	if(icon.css("href")=="#icon-icon"){
		icon.css("href","#icon-xing");
	}else{
		icon.css("href","#icon-icon");
	}
});

