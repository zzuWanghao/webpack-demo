const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin(
        {

            template: 'src/assets/test.html',
            title: 'My App'
        }
    )],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader", // 将 Sass 编译成 CSS
                options: {implementation:require("dart-sass")}
            }]
        },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.styl$/,
                loader: ["style-loader","css-loader","stylus-loader"]// compiles Styl to CSS
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader']
            }
        ]
    }
}