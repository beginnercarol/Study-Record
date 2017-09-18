var server = require("./server");
var router = require("./router");
var requestHandle = require("./requestHandler");

var handler = {};
handler["/"] = requestHandle.start;
handler["/start"] = requestHandle.start;
handler["/upload"] = requestHandle.upload;
handler["/show"] = requestHandle.show;

server.start(router.router,handler);