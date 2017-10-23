const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
	cache: true,
	context: process.cwd(),
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3333
	},
	resolve: {
		modules: [
			path.resolve('./node_modules')
		],
		extensions: ['.js']
	},
	entry: {
		'main': APP_DIR + '/main.js'
	},
	output: {
		path: path.join(process.cwd(), 'build'),
		filename: '[name].js',
		sourceMapFilename: '[file].map'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.ejs'
		}),
		new ExtractTextPlugin({
			filename: '[name].css'
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
	module: {
        loaders : [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel'
          }
        ],
		rules: [{
			enforce: 'pre',
			test: /\.js$/,
			use: {
				loader: 'eslint-loader',
				options: {
					failOnError: true
				}
			},
			exclude: [/node_modules/]
		},{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		},{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		},{
			test: /\.js$/,
			exclude: [/node_modules/],
			use: 'babel-loader'
		}]
	}
};
