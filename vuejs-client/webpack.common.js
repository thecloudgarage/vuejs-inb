const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-3'],
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'vue-loader' },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.vue',
        ],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'client'),
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            { from: 'client/index.html' },
        ]),
    ],
};


module.exports = config;
