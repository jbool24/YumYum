const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

const isProduction = process.env.NODE_env === "production";

module.exports = {
  context: path.resolve(__dirname),

  mode: isProduction ? "production" : "development",

  devtool:
    process.env.NODE_ENV !== "production" ? "source-map" : "cheap-source-map",

  devServer: {
    contentBase: path.join(__dirname, "..", "public"),
    historyApiFallback: true,
    port: 8081,
    compress: true,
    publicPath: "/",
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    hot: true
  },

  entry: {
    main: "./client/index.js",
    react: ["react", "react-dom", "react-router"],
    style: "./client/stylesheets/main.sass"
  },

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public/"),
    publicPath: "/",
    sourceMapFilename: "[name].map"
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
            query: { modules: false, sourceMap: true }
          },
          {
            loader: "sass-loader",
            query: { sourceMap: true }
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
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/react_app.html"),
      filename: "index.html",
      inject: "head"
    })
  ]
};
