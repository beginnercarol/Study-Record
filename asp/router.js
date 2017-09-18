var url = require("url");

function router (pathname,handler) {
	if(typeof handler[pathname] === 'function'){
		 return handler[pathname]();
	}else{
		return "no such handler.";
	}
}


exports.router = router;