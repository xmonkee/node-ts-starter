const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

var babelOptions = {
    "presets": [
        "react",
        [ "es2015", { "modules": false } ],
        "es2016"
    ]
};

var moduleOptions = {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            // { loader: 'babel-loader', options: babelOptions },
            { loader: 'ts-loader' }
        ]
    }, {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
            { loader: 'babel-loader', options: babelOptions }
        ]
    }]
}; 


const clientConfig = {
    target: 'web',
    entry:'./src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
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
    module: moduleOptions,
};

var serverConfig = {
    target: 'node',
    node: {
        __dirname: true,
    },
    entry: './server.ts',
    externals: [nodeExternals()],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    module: moduleOptions,
};

module.exports = [clientConfig, serverConfig];
