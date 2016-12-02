const path = require('path');
const webpack = require("webpack");
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('../webpack.config.js'); // the settings that are common to prod and dev

const config = {

    output: {
        path: path.resolve("./build/debug"),
    },

    plugins: [

        new webpack.ProvidePlugin({

            settings: path.resolve(__dirname, "./settings")

        })

    ],

    devServer: {

        contentBase: path.resolve("./build/debug")

    }

};

module.exports = webpackMerge(commonConfig, config);
