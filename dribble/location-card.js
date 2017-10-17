function curryIt(fn){
	var length = fn.length;
	var args = [];
	return function re(para){
		if(length>1){
			length--;
			args.push(para);
			return re;
		}else{
			args.push(para);
			fn.apply(this,args);
		}
	}
}

var fn = function (a, b, c) {return a + b + c};

console.log(curryIt(fn)(1)(2)(3));