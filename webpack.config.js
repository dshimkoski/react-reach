const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: { minimize: true }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './www/index.html',
      filename: './index.html'
    }),
    new webpack.EnvironmentPlugin({
      BASEPATH: '/',
      DEBUG: false,
      NODE_ENV: 'development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
