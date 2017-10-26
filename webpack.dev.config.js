const path = require('path')
const webpack = require('webpack')
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {

        app: './app.es6',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: false,
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.ProvidePlugin({riot: 'riot'}),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|html|css)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'customize-riotjs-loader',
                query: { type: 'none' }
            },
            {
                test: /\.js$|\.tag$|\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }
        ]
    }
}