var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: "#source-map",
	entry: [
		'webpack-hot-middleware/client',
		'./../src/index.js'
	],
	output: {
		path: path.resolve('public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)|app.js/,
				loader: 'babel-loader'
			}
		]
	}
};