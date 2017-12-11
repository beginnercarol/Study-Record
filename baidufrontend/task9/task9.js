window.onload = function(){
	var sidebar = document.getElementsByClassName('sidebar')[0];
	var folders = sidebar.getElementsByClassName('folders')[0];
	var items = folders.getElementsByClassName('items');
	//calendar
	(function(){
		var calendar = document.querySelector("div.other-calendar-choose");
		// console.log("calendar",calendar);
		var selectYear = calendar.querySelector("select#other-calendar-choose-year");
		var selectMonth = calendar.querySelector("select#other-calendar-choose-month");
		var selectDate = calendar.querySelector("select#other-calendar-choose-date");
		var selectDay = calendar.querySelector("select#other-calendar-choose-day");
		var date = new Date();
		(function(){
			selectYear.innerHTML = '<option selected>'+date.getFullYear()+"</option>";
			selectYear.addEventListener('click',appendYearOption);
			selectYear.addEventListener('change',function(){
				let month = selectMonth.value;
				let year = selectYear.value;
				let cnt = 29;
				if(month==2){
					if(year%100){
						cnt = year%4?28:29;
					}
					selectDate.innerHTML = "";
					for(let i=1;i<=cnt;i++){
					let node = document.createElement('option');
					node.innerText = i;
					if(i==date.getDate()){
						node.setAttribute("selected",'selected');
					}
					selectDate.appendChild(node);
				}
				}

			});
			function appendYearOption(){
				selectYear.innerHTML = "";
				selectYear.innerHTML = '<option selected>'+date.getFullYear()+"</option>";
				var year = date.getFullYear();
				for(let i=1;i<=10;i++){
					let opt = document.createElement('option');
					opt.innerText = year+i;
					selectYear.appendChild(opt);
				}
				selectYear.firstChild.setAttribute('selected','selected');
				selectYear.removeEventListener('click',appendYearOption); 
			}

			//对于年份还有进一步的要求,即上下移动鼠标时修改相应年份
			//再进一步是当输入一部分的数值时,自动弹出待选项
			// (function(){
			var arr = [];
			selectYear.addEventListener('mousemove',function(e){
				var intervalId = setInterval(getMouseDir(e),20);
			});
			function getMouseDir(e){
				return function(){
					arr.push(getPos(e));
					if((arr[arr.length-1].y-arr[arr.length-2].y)>0){//下
						// console.log('down');
						 // let firstNode = selectYear.children[0];
						 // let year = firstNode.innerText;
						 // for(let i=0;i<)
					}
				}
			}
			// })();
			function getPos(e){
				var x = e.pageX;
				var y = e.pageY;
				if(x === undefined){
					x = e.clientX + (document.body.scrollLeft||document.documentElement.scrollLeft);
					y = e.clientY + (document.body.scrollTop||document.documentElement.scrollTop);
				}
				return {x,y};
			}

			function dirJudge(){

			}



			//自动生成月份
			(function appendMonthOption(){
				for(let i=1;i<=12;i++){
					let node = document.createElement('option');
					node.innerText = i;
					if(i==date.getMonth()+1){//记住 date 中的月份从 0 开始
						node.setAttribute("selected",'selected');
					}
					selectMonth.appendChild(node);
				}
			})();
			//日期
			selectMonth.addEventListener('change',function(){
				selectDate.innerHTML = "";
				var year = selectYear.value;
				console.log("year",year);
				var month = selectMonth.value;
				month = +month;
				console.log(typeof month);
				var cnt = 30;
				console.log(month !=2);
				if(month != 2){
					console.log(month in [1,3,5,7,8,10,12]);
					if([1,3,5,7,8,10,12].indexOf(month)>=0){
						// console.log("month",31);
						cnt = 31;
					}else if([4,6,8,11].indexOf(month)>=0){
						// console.log("month",30);
						cnt = 30;
					}
				}else{
					if(year%100){//非世纪年
						 cnt = year%4 ? 28 : 29;
					}else{
						cnt = year%400 ? 28 : 29;
					}
				}
				for(let i=1;i<=cnt;i++){
					let node = document.createElement('option');
					node.innerText = i;
					if(i==date.getDate()){
						node.setAttribute("selected",'selected');
					}
					selectDate.appendChild(node);
				}
			});
		})();
	})()

}