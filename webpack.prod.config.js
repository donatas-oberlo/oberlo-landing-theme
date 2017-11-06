const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  entry: {
    bundle: './main.js',
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new CompressionPlugin({
      test: /\.css/
    })
  ]
};
