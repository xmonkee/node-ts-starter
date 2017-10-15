const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js')

var serverConfig = {
    target: 'node',
    node: {
        __dirname: true,
    },
    externals: [nodeExternals()],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    module: baseConfig.moduleOptions,
    plugins: [],
};

module.exports = serverConfig;