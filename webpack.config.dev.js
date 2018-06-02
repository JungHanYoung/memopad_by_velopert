var webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: [
		'./src/index.js',
		require.resolve('webpack/hot/dev-server'),
		require.resolve('webpack-dev-server/client') + '?http://0.0.0.0:4000' // dev-server의 포트를 따른다.
	],
	output: {
		path: '/public',
		filename: 'bundle.js'
	},
	devServer: {
		hotOnly: true,
		inline: true,
		filename: 'bundle.js',
		publicPath: '/',
		historyApiFallback: true,
		contentBase: './public',
		/* 모든 요청을 프록시로 돌려서 express의 응답을 받아오며,
        bundle 파일의 경우엔 우선권을 가져서 devserver 의 스크립트를 사용하게 됩니다 */
		proxy: {
			'**': 'http://localhost:3000' // express 서버주소
		},
		stats: {
			// 콘솔 로그를 최소화 합니다
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					cacheDirectory: true,
					presets: [ 'env', 'react', 'stage-2' ],
					plugins: [ 'react-hot-loader/babel' ]
				}
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
