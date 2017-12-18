(function(){
	function Interval(start,end){
		this.start = start;
		this.end = end;
	}
	function eraseOverlapInterval(intervals){
		var num=0;
		//贪心算法,根据最早结束时间排序
		intervals.sort((a,b)=>{
			return a.end-b.end;
		});
		var preEnd = intervals[0].end;
		for(i=1;i<intervals.length;i++){
			if(intervals[i].start>=preEnd){
				preEnd = intervals[i].end;
			}else{
				num++;
			}
		}
		return num;
	}
	// var intervals = [new Interval(1,2),new Interval(2,3),new Interval(3,4),new Interval(1,3)];
	var intervals = [new Interval(1,2),new Interval(2,3)];
	console.log(eraseOverlapInterval(intervals));
})()

