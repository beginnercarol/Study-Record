
//1 1 2 3 5 8 13 21 34 55 89
//求和：所有斐波那契中小于num的奇数项
function sumFibs(num) {
  var fibs = [1,1];
  var sum=0;
  if(num>fibs[fibs.length-1]){//不能用-1作为index
  	var a=1,b=1;
  	while(b<=num){
  		b=a+b;
  		a=b-a;//可以不使用temp进行交换值
  		fibs.push(b);
  	}
  	for(var i=0;i<fibs.length;i++){
  		if(fibs[i]%2!==0 && fibs[i]<=num){
  			sum+=fibs[i];
  		}
  	}
  }
  else{
    sum=2;
  }
  return sum;
}


console.log(sumFibs(4));
