
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin   = require('webpack-dashboard/plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: './client/index.js',
    vendor: ['react', 'react-dom', 'react-router'],
    style: './client/stylesheets/main.sass',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public/dist/'),
    publicPath: '/dist',
    sourceMapFilename: '[name].map',
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.sass?$/,
        use: ExtractTextPlugin
          .extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', query: { modules: false, sourceMaps: true} },
              { loader: 'sass-loader', query: { modules: false, sourceMaps: true } },
            ]
          }),
      },
      {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
      },
    ],
  },
  plugins: [
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunk: Infinity,
      filename: '[name].bundle.js'
    }),
    new ExtractTextPlugin('[name].min.css'),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/react_app.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}
