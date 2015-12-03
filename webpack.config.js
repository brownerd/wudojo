// To run this as ES6 I would need to use Gulp or run babel-node commands

var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var yargs = require('yargs')
var filesystem = require('fs')
var path = require('path')
var data = require('./data')

var argv = yargs
  .usage('Usage: -f [num]')
  .default('f', 1)
  .argv

module.exports = {

  entry: data[argv.f - 1],

  output: {
    path: __dirname,
    filename: 'bundlez.js'
  },

  devtool: 'source-map',

  eslint: {
    configFile: './.eslintrc.js'
  },

  module: {
    // preLoaders: [
    //   {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    // ],
    loaders: [
      {
        loader: "babel-loader",

        exclude: /node_modules/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      },
      // {
      //   test: /\.js$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // },
    ]
  },
  plugins: [
    // Serve bundle from localhost:8080
    // Launch in canary automatically
    new OpenBrowserPlugin({
      url: 'http://localhost:8080',
      browser: 'google chrome canary'
    }),
    // Dynamically generate an index.html page
    // Bundle will be automatically added as a script
    new HtmlWebpackPlugin()
  ]
}
