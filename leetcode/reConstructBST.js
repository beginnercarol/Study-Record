//根据二叉搜索树的后序遍历重建搜索二叉树
(function(){
	function TreeNode(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
	function reConstruct(arr){
		if(arr.length==0)return null;
		var root = new TreeNode(arr.pop());
		var index = null;
		for(let i=0;i<arr.length;i++){
			if(arr[i]>root.val){
				index = i;
				break;
			}
		}
		let leftArr = arr.slice(0,index);
		let rightArr = arr.slice(index);
		root.left=reConstruct(leftArr);
		root.right = reConstruct(rightArr);
		return root;	
	}
	console.log(reConstruct([1,6,10,12,9,17,25,18,16]));
})();