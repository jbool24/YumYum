const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

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

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}