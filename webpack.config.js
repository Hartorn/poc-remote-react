const configBuilder = require('webpack-focus').configBuilder;
const path = require('path');

const API_PROTOCOL = process.env.API_PROTOCOL || 'http';
const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 8080;
const API_SUBDOMAIN = process.env.API_SUBDOMAIN || '';

const LEGACY_SEARCH_API = JSON.parse(process.env.LEGACY_SEARCH_API);
const BASE_URL = process.env.BASE_URL ? JSON.stringify(process.env.BASE_URL) : '';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
const IS_PLUGIN = process.env.IS_PLUGIN ? JSON.parse(process.env.IS_PLUGIN) : false;

// Check if focus libraries should be held locally or read from NPM
const localFocus = process.env.LOCAL_FOCUS ? JSON.parse(process.env.LOCAL_FOCUS) : false;

const customConfig = localFocus ? {
    resolve: {
        alias: {
            'focus-core': path.resolve(process.cwd(), '../focus-core'),
            'focus-components': path.resolve(process.cwd(), '../focus-components'),
            moment: path.resolve(process.cwd(), './node_modules/moment'),
            numeral: path.resolve(process.cwd(), './node_modules/numeral'),
            react: path.resolve(process.cwd(), './node_modules/react')
        }
    }
} : {};

const globals = {
    __API_ROOT__: JSON.stringify(process.env.API_ROOT ? process.env.API_ROOT : `${API_PROTOCOL}://${API_HOST}:${API_PORT}/${API_SUBDOMAIN}`),
    __LEGACY_SEARCH_API__: JSON.stringify(LEGACY_SEARCH_API),
    __BASE_URL__: BASE_URL,
    'process.env.NODE_ENV': `'${NODE_ENV}'`
}

const config = configBuilder(customConfig, globals);

if (IS_PLUGIN) {
    config.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM'
    };

    /*config.externals = {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    };*/
    config.output.filename = `${process.env.PLUGIN_NAME}.js`
}
//console.log(JSON.stringify(config));
module.exports = config;
