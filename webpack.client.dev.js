const clientConfig = require('./webpack.client.js');
module.exports = {...clientConfig, devtool: 'inline-source-map'};