var exec  = require("child_process").exec;
var querystring = require("querystring");
var formidable = require("formidable");
var fs = require("fs");

function start(response){
	console.log("RequestHandler 'start' is called.");

	var body = '<html>'+
	'<head>'+'<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" />'+
    '<input type="submit" value="upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200,{"Content-type":"text/html"});
    response.write(body);
    response.end();
}



function start0(response){
	console.log("RequestHandler 'start' is called.");
	
	exec("find /",{timeout:10000,maxBuffer:20000*1024},function(error,stdout,stderr){
		response.writeHead(200,{"Content-type":"text/plain"});
		response.write(stdout);
		response.end();
	});
	//return "hello,start!";
}


function upload(response,request){
	console.log("RequestHandler 'upload' is called.");

	var form = new formidable.IncomingForm();
	form.parse(request,function(error,fields,files){
		console.log("Old path:"+files.upload.path);
		fs.renameSync(files.upload.path,"./temp/test.png");//路径./表示当前目录
		response.writeHead(200,{"Content-type":"text/html"});
		response.write("received image:<br/>"+"<img src='/show' />");
		response.end();
	});

	//response.writeHead(200,{"Content-type":"text/plain"});
	//response.write(querystring.parse(postData).text);



	//response.end();
}



function show(response,request){
	console.log("Request for 'show' is called.")
	fs.readFile("./temp/test.png","binary",function(error,file){//路径./表示当前目录
		if(error){
			response.writeHead(500,{"Content-type":"text/plain"});
			response.write(error+"\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-type":"image/png"});
			response.write(file,"binary");
			response.end();
		}
	});
}







exports.start = start;
exports.upload = upload;
exports.show = show;
