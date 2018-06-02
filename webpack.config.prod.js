var path = require('path');

module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};
