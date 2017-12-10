window.onload = function(){
	var sidebar = document.getElementsByClassName('sidebar')[0];
	var folders = sidebar.getElementsByClassName('folders')[0];
	var items = folders.getElementsByClassName('items');
	// var clingSubfolder = 
	// for(let i=0;i<items.length;i++){
	// 	var clingSubfolder = folders.querySelector('.items + .sub-folder');
	// 	items[i].addEventListener('click',function(){

	// 	})
	// }

	// calendar
	(function(){
		var calendar = document.querySelector("div.other-calendar-choose");
		console.log("calendar",calendar);
		var select = calendar.querySelector("select");
		select.innerHTML = '<option selected>'+(new Date()).getFullYear()+"</option>";
		select.addEventListener('mouseenter',function(){
			select.innerHTML = "";
			select.innerHTML = '<option selected>'+(new Date()).getFullYear()+"</option>";
			select.addEventListener('click',appendOption);
		});
		select.addEventListener('mouseleave',function(){
			// select.removeEventListener('click',appendOption);

		});
		select.addEventListener('click',appendOption);
		// select.addEventListener('scroll',)
		// select.addEventListener('scroll',addMoreOpt);
		function appendOption(){
			var date = new Date();
			var year = date.getFullYear();
			for(let i=1;i<=10;i++){
				let opt = document.createElement('option');
				opt.innerText = year+i;
				select.appendChild(opt);
			}
			select.firstChild.setAttribute('selected','selected');
			select.removeEventListener('click',appendOption); 
		}
		function addMoreOpt(){
			console.log("scroll");
		}
		
	})()

}