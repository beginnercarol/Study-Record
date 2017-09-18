
function start(){
	console.log("RequestHandler 'start' is called.");
	function sleep(milliseconds,callbackFunc){
		var startTime = new Date().getTime();
		console.log("Start: "+startTime);
		while((new Date().getTime() - startTime)<milliseconds);
	}

	function callbackFunc(){
		console.log("Callback: "+ new Date().getTime());
		return "hello,start";
	}


	sleep(10000,callbackFunc);
	//return "hello,start!";
}


function upload(){
	console.log("RequestHandler 'upload' is called.");
	return "Hello,upload!";
}


exports.start = start;
exports.upload = upload;