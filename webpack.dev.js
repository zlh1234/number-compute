const path = require('path');
const HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin');

module.exports = (env) => {
	return {
		mode: 'development',
		entry: ['@babel/polyfill', './src/index.ts'],
		output: {
			// 打包文件根目录
			path: path.resolve(__dirname, 'dist/'),
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './build/index.html',
			}),
		],
		module: {
			rules: [
				{
					test: /\.(ts)?$/,
					use: ['ts-loader'],
					include: path.resolve(__dirname, 'src'),
				},
			],
		},
		devServer: {
			port: 8080,
			host: '0.0.0.0',
			open: true,
		},
		resolve: {
			extensions: ['.ts', '.js'],
			plugins: [],
		},
	};
};
