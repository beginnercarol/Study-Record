var http = require("http");
var url = require("url");
//var express = require("express");
//var app = express();


function start(router,handler){//在这里传递了一个函数 router 作为参数
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for:"+pathname+" received.");


		var postData = "";
		//request.setEncoding("utf8");formidable 会处理这个 part

		/**request.addListener("data",function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data: "+postDataChunk);

		});

		request.addListener("end",function(){
			router(pathname,handler,response,postData);
		});*/

		router(pathname,handler,response,request);


		//router(pathname,handler,response);//js 可以传递函数作为参数,因此不需要 require('./router.js')

		/**response.writeHead(200,{"Content-type":"text/plain"});
		response.write("hello "+content);
		response.end();**/
	}

	http.createServer(onRequest).listen(8880);
	console.log("Server is working...");
}

exports.start = start;