//判断 popV 序列 是否是 入栈序列 pushV 对应的出栈序列
(function(){
	function IsPopOrder(pushV, popV){
		var i=0,j=0;
		var stack = [];
		while(i<popV.length && j<popV.length){
			if(pushV.length==0){
				i++;
			}
			if(pushV.length>0)stack.push(pushV.shift());
			if(popV[i]==stack[stack.length-1])){
				stack.pop();
				i++;
			}

		}
		return stack.length == 0;
	}
	// console.log(IsPopOrder([1,2,3,4,5],[4,5,2,3,1]));
})();

//修改版本
(function(){
	function IsPopOrder(pushV,popV){
		var j=0;
		var stack = [];
		for(var i=0;i<pushV.length;i++){
			stack.push(pushV[i]);
			while(stack.length && (stack[stack.length-1]==popV[j]) && j<popV.length){
				stack.pop();
				j++;
			}
		}
		return stack.length==0;
	}
})();