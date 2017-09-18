var exec  = require("child_process").exec;

function start(response){
	console.log("RequestHandler 'start' is called.");
	
	exec("ls -lah",function(error,stdout,stderr){
		response.writeHead(200,{"Content-type":"text/plain"});
		response.write(stdout);
		response.end();
	});
	//return "hello,start!";
}


function upload(response){
	console.log("RequestHandler 'upload' is called.");
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("Hello,upload");
	response.end();
}


exports.start = start;
exports.upload = upload;