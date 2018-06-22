const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: {
    app: resolve(__dirname, './../src/index.js'),
  },
  output: {
    path: resolve(__dirname, './../dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './../src/templates/index.html'),
    }),
  ],
});
