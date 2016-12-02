import * as commonSettings from '../settings';
const webpackMerge = require('webpack-merge');

var settings: ISettings = {
    build: 'release'
};

export = webpackMerge(commonSettings, settings);
