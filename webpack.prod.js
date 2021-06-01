const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = (env) => {
	return {
		mode: 'production',
		entry: ['./src/index.ts'], //'@babel/polyfill',
		output: {
			// 打包文件根目录
			path: path.resolve(__dirname, 'dist/'),
			filename: 'index.js',
		},
		plugins: [new uglify(), new CleanWebpackPlugin()],
		module: {
			rules: [
				{
					test: /\.(ts)?$/,
					use: ['ts-loader'],
					include: path.resolve(__dirname, 'src'),
				},
			],
		},
		resolve: {
			extensions: ['.ts', '.js'],
			plugins: [],
		},
	};
};
