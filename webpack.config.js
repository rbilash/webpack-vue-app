'use strict';

const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolvePath (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],    
    devServer: {
        hot: true
    },    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },            
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }            
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([{
            from: resolvePath('static'),
            to: resolvePath('dist/static'),
            toType: 'dir'
        }])        
    ]
}