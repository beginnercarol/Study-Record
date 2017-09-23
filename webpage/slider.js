$(document).ready(function(){
	var li_img = $('.slides li');
	var imgs = $('.slides li img');
	console.log(li_img.length);
	console.log(imgs[0].width);

	for(var i=0;i<li_img.length;i++){
		(function(index){
			$('.thumbnails li:nth-child('+(index+1)+')').on('click',function(evt){
				if(document.documentElement.clientWidth){
					//$('.slides').stop().animate({left:-index*document.documentElement.clientWidth},500);
					$('.slides').stop().animate({left:-index*imgs[index].width},500);
				}else{
					//$('.slides').stop().animate({left:-index*document.body.clientWidth},500);
					$('.slides').stop().animate({left:-index*imgs[index].width},500);
				}		
			});
		})(i);
	}
});