const serverConfig = require('./webpack.server.js');
module.exports = {
    ...serverConfig, 
    entry: './src/server.ts',
    devtool: 'inline-source-map',
};