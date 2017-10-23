var express = require('express');
var path = require('path');
var routers = require('./routers/routers');
var ejs = require('ejs');
var app = express();


/**var cb0 = function(req,res,next){
	console.log("cb0 ");
	next();
}

var cb1 = function(req,res,next){
	console.log("cb1");
	next();
}

app.get('/example',[cb0,cb1],function(req,res,next){
	console.log("response will be sent by the next function.");
	next();
},function(req,res){
	res.send("hello from outer space.");
})


app.get('/',function(req,res){
	res.render('index');
});

app.get('/data',function(req,res){
	//var c_path  =req.parans.module;
	var Action = require('./actiondata/actData');
	Action.execute(req.res);
});*/


//routers();
app.use('/',routers);

//设置视图和视图引擎
app.set('views','.');
app.set('view engine','html');
app.engine('html',ejs.renderFile);

app.use(express.static(__dirname));


var server = app.listen(3002,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s',host,port);
});