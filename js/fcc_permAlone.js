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
		var origArr = arr.slice();
		if(begin===arr.length-1){
			//结束递归
			perm.push(origArr.join(""));
		}else{
			for(let i=0;i+begin<origArr.length;i++){//何时将全排列的字符串 push 进 perm 数组?
				exchange(origArr,begin,begin+i);
				perm.push(origArr.join(""));
				permutation(origArr,begin+1);
				exchange(origArr,begin,begin+i);
			}
		}
	}

	function permAlone(str){
		var arr = str.split("");
		permutation(arr,begin);
		perm = perm.filter(function(val){
			return !(val.search(re)>=0);//只需要判断是否存在用 search 就够了
		});
		return perm;
	}

	console.log(permAlone('aab'));

})();