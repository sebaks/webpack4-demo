const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        another: './src/another.js',
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: "./src/another.html",
            filename: "another.html",
            chunks: ['another']
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bandle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};