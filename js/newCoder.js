function makeClosures(arr, fn) {
  var result = [];
     arr.forEach(function(e){
         result.push(function(num){
             return function(){
                 return fn(num);
             };
         }(e));
     });
     return result;
 }


var re = makeClosures([1,2,3],function(x){
return x*x;
});

console.log(re[2]);



function makeClosures(arr,fn){
	var result = arr.map(function(val){
		return function(){
			return fn(val);
		}
	})
	return result;
}

function makeCLosures(arr,fn){
	var result = arr.map(function(val){
		return fn.bind(null,val);
	})
}