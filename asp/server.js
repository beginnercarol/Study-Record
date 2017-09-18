var http = require("http");
var url = require("url");


function start(router,handler){//在这里传递了一个函数 router 作为参数
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for:"+pathname+" received.");

		router(pathname,handler,response);//js 可以传递函数作为参数,因此不需要 require('./router.js')

		/**response.writeHead(200,{"Content-type":"text/plain"});
		response.write("hello "+content);
		response.end();**/
	}

	http.createServer(onRequest).listen(8880);
	console.log("Server is working...");
}

exports.start = start;