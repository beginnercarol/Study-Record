window.onload = function(){
    //轮播图片
  (function(){
    var flag = 0;//用于记录当前的 slides 是哪一副
    var imgsDiv = document.querySelectorAll(".carousel-inner .item");
    console.log(imgsDiv);
    var controls = document.querySelectorAll(".carousel-indicator li");
    for(var i=0;i<controls.length;i++){
        controls[i].onclick = (function(index){
            //console.log(imgsDiv[index].getAttribute('class'));

            return function(){
                for(var j=0;j<imgsDiv.length;j++){
                    var classList = imgsDiv[j].className;
                    //console.log(classList);
                    //classList = Array.from(classList);
                    imgsDiv[j].className = toggleClass(classList,'active');
                }
                imgsDiv[index].className += ' active';
                flag=index%3;
            }
        })(i);
    }

    function changeSlides(){

        
        //return function(){
            console.log("flag: "+flag);
            for(var j=0;j<imgsDiv.length;j++){
                var classList = imgsDiv[j].className;
                //console.log(classList);
                imgsDiv[j].className = toggleClass(classList,'active');
            }
            imgsDiv[flag].className += ' active';
            flag = (flag+1)%3;
            console.log("flag: "+flag);
            //console.log(flag);
        //}    
    }

    function toggleClass(classList,item){
        var arr = classList.split(" ");
        var index = arr.indexOf(item);
        //console.log(index);
        if(index>=0){
            //console.log((arr.slice(0,index)).concat(arr.slice(index+1)));
            return ((arr.slice(0,index).concat(arr.slice(index+1))).join(" "));
        }else{
            return arr.join(" ");
        }
    }

    var intervalId = setInterval(changeSlides,5000);

  })();





    
}

