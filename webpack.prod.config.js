const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.NODE_env === "production";

module.exports = {
  devtool: "cheap-source-map",
  mode: "development",
  entry: {
    main: "./client/index.js",
    react: ["react", "react-dom", "react-router"],
    style: "./client/stylesheets/main.sass"
  },

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public/dist/"),
    publicPath: "/dist",
    sourceMapFilename: "[name].map"
  },

  optimization: {
    minimize: isProduction,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.sass?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "css/"
            }
          },
          {
            loader: "css-loader",
            query: { modules: false, sourceMaps: true }
          },
          {
            loader: "sass-loader",
            query: { modules: false, sourceMaps: true }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: "file-loader"
      }
    ]
  },

  plugins: [
    // build optimization plugins
    new MiniCssExtractPlugin("[name].min.css"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/react_app.html"),
      filename: "index.html",
      inject: "body"
    })
  ]
};
