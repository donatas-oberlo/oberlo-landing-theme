const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    bundle: './main.js',
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/dev',
    path: path.resolve(__dirname, 'dist/dev'),
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new HandlebarsPlugin({
      // path to hbs entry file(s)
      entry: path.join(process.cwd(), 'docs', 'pages', '**', '*.html'),
      // output path and filename(s)
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), 'dist/dev', '[name].html'),
      // data passed to main hbs template: `main-template(data)`
      data: require('./data-dev.json'),

      // globbed path to partials, where folder/filename is unique
      partials: [
        path.join(process.cwd(), 'docs', 'components', '*.html'),
      ],
    }),
    new DashboardPlugin(),
  ],

  devServer: {
    contentBase: [path.join(__dirname, 'dist/dev'), path.join(__dirname, '.')],
  },
};
