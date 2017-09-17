var server = require("./server");
var router = require("./router");
var requestHandle = require("./requestHandle");


var handler = {};
handler["/"] = requestHandle.start;
handler["/start"] = requestHandle.start;
handler["/upload"] = requestHandle.upload;


server.start(router.router,handler);