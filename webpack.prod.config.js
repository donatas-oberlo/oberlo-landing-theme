const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');

module.exports = {
  entry: {
    bundle: './main.js',
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/prod',
    path: path.resolve(__dirname, 'dist/prod')
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
    new HandlebarsPlugin({
      // path to hbs entry file(s)
      entry: path.join(process.cwd(), 'docs', 'pages', '**', '*.html'),
      // output path and filename(s)
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), 'dist/prod', '[name].html'),
      // data passed to main hbs template: `main-template(data)`
      data: require('./data-prod.json'),

      // globbed path to partials, where folder/filename is unique
      partials: [
        path.join(process.cwd(), 'docs', 'components', '*.html'),
      ],
    }),
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new CompressionPlugin({
      test: /\.css/
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ]
};
