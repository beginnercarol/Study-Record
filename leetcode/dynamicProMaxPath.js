//递归
(function(){
	function findLongestPath(arr,i,j){
		if(i==arr.length){
			return arr[i][j];
		}
		return arr[i][j]+Math.max(findLongestPath(arr,i+1,j),findLongestPath(arr,i+1,j+1));
	}
})()

//
(function(){
	function longestPath(arr){
		var temp = arr[arr.length-1].slice();
		for(let i=arr.length-2;i>=0;i--){
			let m=0;
			for(let j=0;j<arr[i].length;j++){
				temp[j] = arr[i][j]+Math.max(temp[j],temp[j+1]);
			}
		}
	}
})()
