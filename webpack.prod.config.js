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
        filename: '[name].bundle.min.js'
    },
    devtool: 'source-map',
    
    plugins: [
        new webpack.ProvidePlugin({riot: 'riot'}),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
              screw_ie8: true,
              keep_fnames: true
            },
            compress: {
              screw_ie8: true,
               // remove warnings
              warnings: false,
      
               // Drop console statements
              drop_console: true
            },
            comments: false
          }),
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