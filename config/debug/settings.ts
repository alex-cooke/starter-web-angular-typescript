import * as commonSettings from '../settings';
const webpackMerge = require('webpack-merge');

var settings: ISettings = {
    build: 'debug'
};


export = webpackMerge(commonSettings, settings);
