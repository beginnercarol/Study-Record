window.onload = function(){
    //轮播图片
  (function(){
    var slogans=["数学建模专业团队","985、211院校本科硕士博士","各类数模比赛预定ing"];
    var flag = 0;//用于记录当前的 slides 是哪一副
    var imgsDiv = document.querySelectorAll(".carousel-inner .item");
    console.log(imgsDiv);
    var slogan = document.getElementById("slogan");
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
                slogan.innerText = slogans[index];
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
            slogan.innerText = slogans[flag];
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


(function(){
    var imgModal = document.querySelectorAll(".worksShow .head-pic img");
    var imgSrc = ['./temp/data-01.png','./temp/data-02.png','./temp/data-03.png','./temp/data-04.png'];
    var myModal = document.querySelector(".myModal");
    var myModalImg = document.querySelector(".myModal img");
    var myModalClose = document.querySelector('.myModal>span');
    var height = document.querySelector(".worksShow .head-pic").offsetHeight;
    var modalBg = document.getElementById("modal-wrap");
    for(let i=0;i<imgModal.length;i++){
        imgModal[i].onclick  = (function(index){
            return (function(event){
                var imgSrc = event.target.src;
                var rect = event.target.getBoundingClientRect();
                myModal.style.setProperty('top',(height*Math.floor(index/2)+height*0.05)+'px');
                myModal.style.setProperty('display','block');
                myModalImg.setAttribute('src',imgSrc);
                //modalBg.style.setProperty('opacity',0.6);
            });
        })(i);
    }
    myModalClose.onclick = function(){
        myModal.style.setProperty('display','none');
    }
})();




    
}

