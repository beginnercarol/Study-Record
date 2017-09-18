var url = require("url");

function router (pathname,handler,response,request) {
	if(typeof handler[pathname] === 'function'){
		 handler[pathname](response,request);//Don't forget the "()"!!
	}else{
		console.log( "no such handler.");
		response.writeHead(404,{"Content-type":"text/plain"});
		response.write("404 Not Found");
		response.end();//结束本次
	}
}


exports.router = router;