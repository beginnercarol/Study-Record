(function(){
	console.log(btJump(12));
	function btJump(numbers){
		var m = new Array(numbers+1);
		var sum = 0;
		//为方便起见从索引为1处开始
		//初始化为0
		// m[i][j] 表示 用 i 步 跳完 j 个台阶
		for(let i=0;i<=numbers;i++){
			m[i] = new Array(numbers+1);
			for(let j=0;j<=numbers;j++){
				m[i][j]=0;
			}
		}
		//1步跳完1...n 个台阶都是1步完成
		m[1] = m[1].map(function(){
			return 1;
		});
		console.log(m[1]);
		for(let i=2;i<=numbers;i++){
			for(let j=i;j<=numbers;j++){
				// for(let p=1;p<j;p++){
				// 	m[i][j]+=m[i-1][j-p];
				// }
				//求和这一步经过简化可以表示为如下的式子
				m[i][j] = m[i-1][j-1]+m[i][j-1];
			}
		}
		//只要取每行的末尾相加即可得到最终的结果
		for(let i=1;i<=numbers;i++){
			sum += m[i][numbers];
		}
		return sum;
	}
})();

//递推公式还可以更简单
(function(){
	function superJump(n){
		//f(n) = f(n-1)+f(n-2)+f(n-3)+...+f(n-n);
		//f(0) = 1 , f(1)=1 , f(2) = 2,f(3)=f(2)+f(1)+f(0)=3
		//f(n) = f(n-1)+f(n-2)+f(n-3)+...+f(0)
		//f(n) = 2f(n-1)
		var count = 1;
		let count = 0;
		if(n==0 || n==1){
			return 1;
		}
		let i=2;
		while(i<=n){
			count*=2;
			i++;
		}
		return count;
	}
})();

