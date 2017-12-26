//判断 popV 序列 是否是 入栈序列 pushV 对应的出栈序列
(function(){
	function IsPopOrder(pushV, popV){
		var i=0;
		var stack = [];
		while(i<popV.length && pushV.length>0){
			if(popV[i]!=(stack.length==0?stack[0]:stack[stack.length-1])){
				stack.push(pushV.shift());
			}else{
				stack.pop();
				i++;
			}
		}
		return stack.length == 0;
	}
	console.log(IsPopOrder([1,2,3,4,5],[4,5,2,3,1]));
})();
