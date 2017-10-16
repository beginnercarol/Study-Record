window.onload = function(){
  (function(){
    var top = (typeof window.screenLeft =="number"?window.screenLeft:window.screenX);
    var left = (typeof window.screenTop =="number"?window.screenTop:window.screenY);
    console.log("top: "+top+" left:"+left);
  })();
    
}

