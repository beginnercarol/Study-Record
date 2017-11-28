/*chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create('window.html',{
		'bounds' : {
			'width' : 400,
			'height' : 500
		}
	});
});*/

var ports = [];
var data = [];
chrome.runtime.onConnect.addListener(function(port){
	if(port.name !=="devtools") return;
	ports.push(port);
	port.onDisconnect.addListener(function(port){
		var i  = ports.indexOf(port);
		if(i>0){
			ports.splice(i,1);
		}
	});
	port.onMessage.addListener(function(msg){
		console.log(msg);
	});
});

function notifyDevtools(msg){
	ports.forEach(function(port){
		port.postMessage(msg);
	});
}