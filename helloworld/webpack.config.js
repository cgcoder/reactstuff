const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      index: 'index.html',
      port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
       {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader",
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
]
};
