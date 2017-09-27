$(document).ready(function(){
	$(".btn").on('click',function(){
		//console.log("here");
		//$(".side_main").css("display","visible");
		$(".main_part").css("left",0);
		var width = $(".side_main").width();
		console.log(width);
		$(".side_main").stop().animate({right:0});
	});
});