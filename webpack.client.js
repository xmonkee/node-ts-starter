const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js')

const clientConfig = {
    target: 'web',
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        //new UglifyJSPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: baseConfig.moduleOptions,
};

module.exports = clientConfig;