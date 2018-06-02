var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.send('ok');
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(3000, () => console.log('Server is listening on port', 3000));

if (process.env.NODE_ENV === 'development') {
	var config = require('../webpack.config.dev');
	var compiler = webpack(config);
	var DevServer = new webpackDevServer(compiler, config.devServer);
	DevServer.listen(4000, () => console.log('DevServer is listening on port', 4000));
}
