/*chrome.runtime.onConnect.addListener(function(port){
	if(port.name==="devtools"){
		port.onMessage.addListener(function(msg){
			var ctx = document.getElementById("content");
			ctx.innerText = "zenmefeishi!";
		});
	}
});*/

function do_sth(msg){
	var ctx = document.getElementById("content");
	ctx.innerText += "\n" + JSON.parse(msg);
	console.log("success");
}