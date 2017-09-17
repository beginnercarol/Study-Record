//The question is when to push the recomibined string into final array...
//The former didn't work
(function(){
	var begin=0;
	var perm = [];//存放所有全排列
	var re = /(.)\1+/g;//正则表达式 寻找重复的模式

	function exchange(arr,index1,index2){
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	function permutation(arr,begin){

	}

	function permAlone(str) {
		var arr = str.split("");
		
  		return str;
	}



})();