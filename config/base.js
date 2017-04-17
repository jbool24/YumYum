const path    = require('path');
const webpack = require('webpack');


module.exports = function() {
    return {
        context: path.resolve(__dirname, '../src'),
        entry: {
            'main': './index.js',
            'style': './sass/',
        },
        resolve: {
            extensions: ['.sass', '.js', '.json'],
            modules: [path.join(__dirname, '../src'), 'node_modules'],
        },
        module: {
            rules: [
              {
                test: /\.js$/,
                use: [{
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015', 'react']
                  },
                }],
            }, {
                test: /\.sass$/,
                include: path.resolve(__dirname, "src/sass"),
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            }],
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor', 'manifest']
            }),
        ],
    };
}
