import * as commonSettings from '../settings';
const webpackMerge = require('webpack-merge');

var settings: ISettings = {
    build: 'test'
};

export = webpackMerge(commonSettings, settings);
