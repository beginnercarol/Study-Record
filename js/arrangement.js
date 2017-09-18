(function(){
	var perm = [];
	function permAlone(str){
		var arr = str.split("");
	}
	function permutation(arr,begin){
		if(begin==arr.length-1){
			perm.push(arr.join(""));//递归结束则 push 进数组
		}else{
			for(let i=0;i+begin<arr.length;i++){
				var temp = arr.slice();
				//temp.splice(begin,i);
				temp.shift(temp.splice(begin,i));

			}
		}
	}
})();