var getMsgList = require('../data/dataMsg');

/*exports.execute = function(req,res){
	getMsgList.getMsgList(function(data){
		res.send(data);
	});
};*/

exports.execute = function(req,res){
	console.log(getMsgList);
	res.send(getMsgList);//send没有被定义
}