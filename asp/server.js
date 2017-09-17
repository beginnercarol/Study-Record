var http = require("http");
var url = require("url");


function start(router){//在这里传递了一个函数 router 作为参数
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for:"+pathname+" received.");

		router(pathname);//js 可以传递函数作为参数,因此不需要 require('./router.js')

		response.writeHead(200,{"Content-type":"text/plain"});
		response.write("Hello");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server is working...");
}

exports.start = start;