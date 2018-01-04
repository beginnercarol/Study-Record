var webpack = require('webpack');
const path = require('path');

module.exports={
	entry:{
		entry:'./index.js',
	},
	output:{
		path:path.resolve(__dirname,'./client/static/output/'),
		filename:'bundle.js',
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				exclude:/node_modules/,
				use:'babel-loader',
			},
			{
				test:/(\.css|\.scss)$/,
				use:[
					{
						loader:'style-loader',
					},
					{
						loader:'css-loader',

					},
					{
						loader:'sass-loader',
					}
				]
			},
		]
	}
}