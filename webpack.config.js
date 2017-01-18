var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!link-loader'
      },
      {
        test: /\.css$/,
        loader: 'css',
      },
    ],
  },
  devServer: {
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
  },
  devtool: 'eval-source-map'
};

