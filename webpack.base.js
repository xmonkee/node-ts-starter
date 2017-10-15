const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

var babelOptions = {
    "presets": [
        "react",
        ["es2015", { "modules": false }],
        "es2016"
    ]
};

var moduleOptions = {
    rules: [
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'ts-loader' }
            ]
        },
        {
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'babel-loader', options: babelOptions }
            ]
        },
    ]
};

module.exports = { moduleOptions };