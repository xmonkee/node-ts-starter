const path = require('path');

var moduleOptions = {
    rules: [
        {
            test: /\.[jt]s(x?)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'ts-loader' }
            ]
        },
    ]
};

module.exports = { moduleOptions };