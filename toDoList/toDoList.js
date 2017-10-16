//window.onload = function(){
	var addBtn = document.getElementById("addBtn");
	var addTask = document.getElementById("addTask");
	var taskContainer = document.getElementById("taskContainer");
	var subBtn = document.querySelector("#addTask input[type='submit']");
//console.log(subBtn);
	subBtn.addEventListener('click',function(){
		
		var taskCon = document.getElementById("addTask");
		//var data = taskCon.taskContent.value;
		var selec = "input[name='taskContent']"
		var data = taskCon.querySelector(selec).value;
		console.log(data);
		addTasks(data);
		if(addTask.style.display == "block"){
			addTask.style.display = "none";
		}
	},false);

	addBtn.addEventListener('click',showTask,false);


	function showTask(){
		addTask.style.display="block";
		
	}

	function addTasks(data){
		var taskContainer = document.getElementById("taskContainer");
		var newDiv = document.createElement("div");
		newDiv.className = "task";
		newDiv.innerHTML = "<label><input type='checkbox' class='finishedTask' /><span></span></label>";
		var sp = document.createElement("span");
		sp.innerText = data;
		console.log(sp);
		newDiv.appendChild(sp);
		taskContainer.appendChild(newDiv);
	}
//}