var webpack = require('webpack');

module.exports={
	entry:['./src/script/main.js'],
	output:{
		path:__dirname + '/dist/js',
		filename:'bundle.js'
	},
	devServer:{
		inline:true,
		port:3002
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['react','latest']
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?modules'
			}
		]
	}
}