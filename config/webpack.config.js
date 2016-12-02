const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        index: "./source/index.ts"
    },

    devtool: 'source-map',

    output: {
        path: path.resolve("./build/"),
        filename: "[name].js",
        sourceMapFilename: '[name].map'
    },

    plugins: [

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

    module: {

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