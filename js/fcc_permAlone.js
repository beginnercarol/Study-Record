(function(){
	var begin=0;
	var perm = [];//存放所有全排列

	function exchange(arr,index1,index2){
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	function permutation(arr,begin){
		var origArr = arr.slice();
		if(begin===arr.length-1){
			//结束递归
		}else{
			for(let i=0;i<origArr.length;i++){//何时将全排列的字符串 push 进 perm 数组?
				exchange(origArr,begin,begin+i);
				permutation(origArr,begin+1);
				exchange(origArr,begin,begin+i);
			}
		}
	}

})();