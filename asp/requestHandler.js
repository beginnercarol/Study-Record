
function start(){
	console.log("RequestHandler 'start' is called.");
	function sleep(milliseconds){
		var startTime = new Date().getTime();
		while((new Date().getTime() - startTime)<milliseconds);
	}
	sleep(10000);
	return "hello,start!";
}


function upload(){
	console.log("RequestHandler 'upload' is called.");
	return "Hello,upload!";
}


exports.start = start;
exports.upload = upload;