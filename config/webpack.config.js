const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {

    entry: {
        dependencies: "./source/dependencies.ts",        
        index: "./source/index.ts"
    },

    devtool: 'eval',


    output: {
        path: path.resolve("./build/"),
        filename: "[name].[hash].js",
        sourceMapFilename: '[name].[hash].map'
    },

    plugins: [

        //  Hash the files using MD5 so that their names change when the content changes
        //  https://www.npmjs.com/package/webpack-md5-hash
        new WebpackMd5Hash(),

        //  https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
            name: "dependencies"
        }),

        //  Process the HTML file(s) - https://www.npmjs.com/package/html-webpack-plugin 
        new HtmlWebpackPlugin({

            //  Webpack require path to the template
            template: './source/index.html',

            //   Inject all assets into the given template
            inject: 'head',

        })

    ],

    resolve: {

        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],

    },


    //  Options affecting the normal modules
    module: {
        
        //  An array of applied pre loaders.
        preLoaders: [
            {
                test: /\.tsx?$/,
                exclude: 'node_modules',
                loader: 'tslint-loader'
            }
            
        ],

        //  An array of automatically applied loaders.
        loaders: [
            //  TypeScript - https://github.com/TypeStrong/ts-loader
            { 
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            //  HTML - https://github.com/webpack/html-loader
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            //  CSS
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            //  SCSS
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
       ]

    },

    devServer: {

        port: 8080,

        //  Enables support for the HTML5 history API (which supports routing in angular)
        historyApiFallback: true,

        //  Inject a small webpack-dev-server client entry to the bundle which refresh the page on change
        inline: true,

        //  Watch the source files, and recompile the bundle whenever they are changed
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },

        //  The webpack-dev-server will serve the files in the current directory, unless you configure a specific content base.  
        contentBase: path.resolve("./build")
    }
}