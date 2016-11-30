const webpackConfig = require('./webpack.config');
const serverLauncher = require('webpack-focus').serverLauncher;

const customConfig = {
    proxy: null
}

require('./api');
serverLauncher(webpackConfig, customConfig);
