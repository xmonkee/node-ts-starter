import * as path from 'path';
import * as express from 'express';
import api from './api';

const app = express()
const root = path.resolve(__dirname, 'dist');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.client.js');
app.use(webpackDevMiddleware(webpack(config), {
	publicPath: '/',
}));
app.use('/api', api)

app.listen(3000, function() {
	console.log('Listening');
});