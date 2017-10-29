import * as express from 'express';
import * as path from 'path';
import api from './api';
import * as config from './../webpack.client.dev';

const app = express();
const root = path.resolve(__dirname, 'dist');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
console.log(__dirname)

app.use(webpackDevMiddleware(webpack(config), {
    publicPath: '/',
}));
app.use('/api', api);

app.listen(80, function() {
	console.log('Listening');
});
