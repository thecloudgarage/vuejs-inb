const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.API_URL_BALANCE': JSON.stringify('http://ApiHostBalance:3000'),
            'process.env.API_URL_FEEDBACK': JSON.stringify('http://ApiHostFeedback:3000'),
            'process.env.API_URL_FORGOT': JSON.stringify('http://ApiHostForgot:3000'),
            'process.env.API_URL_LOGIN': JSON.stringify('http://ApiHostLogin:3000'),
            'process.env.API_URL_PASSWORD': JSON.stringify('http://ApiHostPassword:3000'),
            'process.env.API_URL_PAYEE': JSON.stringify('http://ApiHostPayee:3000'),
            'process.env.API_URL_RESET': JSON.stringify('http://ApiHostReset:3000'),
            'process.env.API_URL_TRANSFER': JSON.stringify('http://ApiHostTransfer:3000'),
            'process.env.API_URL_USER': JSON.stringify('http://ApiHostUser:3000'),
        }),
    ],
});


module.exports = config;
