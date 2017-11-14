const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    bundle: './main.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new DashboardPlugin()
  ]
};
