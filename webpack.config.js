
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode:'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
    contentBase: './dist'
    },
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
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}


