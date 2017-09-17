var url = require("url");

function router (pathname) {
	if(pathname=="/index.html"){
		console.log("Sorry I am not able to send you this by now.");
	}else{
		console.log("Request for:"+pathname);
	}
	
}


exports.router = router;