const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: [
            'riot'
        ],
        app: './app.es6',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({riot: 'riot'})
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