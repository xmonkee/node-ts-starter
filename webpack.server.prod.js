const serverConfig = require('./webpack.server.js');
module.exports = {
    ...serverConfig, 
    entry: './src/server.prod.ts',
};
