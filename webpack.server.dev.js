const WebpackOnBuildPlugin = require('on-build-webpack');
const serverConfig = require('./webpack.server.js');
module.exports = {
    ...serverConfig, 
    entry: './server.dev.ts',
    devtool: 'inline-source-map',
};