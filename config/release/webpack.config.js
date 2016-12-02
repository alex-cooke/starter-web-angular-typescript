const path = require('path');
const webpack = require("webpack");
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('../webpack.config.js'); // the settings that are common to prod and dev

const config = {

    output: {
        path: path.resolve("./build/release"),
    },

    // plugins: [

    //     new webpack.ProvidePlugin({

    //         settings: path.resolve(__dirname, "./settings/dev")

    //     })

    // ],
    devServer: {

        contentBase: path.resolve("./build/release")

    }

};

module.exports = webpackMerge(commonConfig, config);
