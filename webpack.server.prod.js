const serverConfig = require('./webpack.server.js');
module.exports = {
    ...serverConfig, 
    entry: './server.prod.ts',
};
