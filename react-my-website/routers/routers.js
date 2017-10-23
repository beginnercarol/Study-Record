var express = require('express');
var router = express.Router();
// routers/routers.js

router.get('/',function(req,res){
	res.render('index');
})

var cb0 = function(req,res,next){
	console.log("cb0 ");
	next();
}

var cb1 = function(req,res,next){
	console.log("cb1");
	next();
}

router.get('/example',[cb0,cb1],function(req,res,next){
	console.log("response will be sent by the next function.");
	next();
},function(req,res){
	res.send("hello from outer space.");
})


module.exports = router;
