const path         = require('path');
const webpackMerge = require('webpack-merge');

const commonConfigs = require('./base.js');

module.exports = function(env){
  return webpackMerge(commonConfigs(), {
    output: {
      path: path.join(__dirname, '../dist/assets'),
      filename: '[name].bundle.js',
      publicPath: '../dist/',
      sourceMapFilename: '[name].map'
    },
    devtool: 'source-map',
    devServer: {
      port: 3000,
      host: 'localhost',
      hot: true,
      inline: true,
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: '../dist/'
    }
  });
}
