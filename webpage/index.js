$(document).ready(function(){
	var dots = $('.dots ul.dot li');
	var imgs = $('.slides li img');
	for(var i=0;i<dots.length;i++){
		(function(index){
			$('.dots ul.dot li:nth-child('+(index+1)+")").on('click',function(evt){
				//改变背景图像 or 移动
				if(document.body.clientWidth){
					$('.slides ul').stop().animate({left:-index*imgs[index].width},500);
				}else{
					$('.slides ul').stop().animate({left:-index*imgs[index].width},500);
				}
			});
		})(i);
	}
});