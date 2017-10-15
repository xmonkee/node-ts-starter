const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const clientConfig = require('./webpack.client.js');
module.exports = {
    ...clientConfig,
    plugins: [
        ...clientConfig.plugins,
        new UglifyJSPlugin(),
    ]
};