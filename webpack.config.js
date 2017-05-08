const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

const isProd = (process.env.NODE_ENV === 'production')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            vue: 'vue/dist/vue.js',
            components: path.resolve(__dirname, 'src/components')
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"), // where files are served
        compress: true,
        // hot: true, // HMR
        stats: "errors-only",
        //open: true // opens new window first time
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            // minify: {
            //   collapseWhitespace: true
            // },
            hash: true, // creates random hash after script injection
            template: './src/index.html'
        }),
        // new ExtractTextPlugin("styles.css"), // Bundles everything to one CSS file ('styles.css'), and automatically injects to the generated HTML
        new webpack.HotModuleReplacementPlugin()
    ]
}
