// To run this as ES6 I would need to use Gulp or run babel-node commands

var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var yargs = require('yargs')
var filesystem = require('fs')
var path = require('path')
var data = require('./data')

var argv = yargs
  //.usage('Usage: -d [string] -f [num]')
  .usage('Usage: -f [num]')
  .argv

console.log( argv.f );

module.exports = {
  // entry: './app.js',
  // entry: './app.js',
  // entry: path.join(__dirname, 'app.js'),
  // entry: path.resolve(__dirname, 'app.js'),
  // path.join(__dirname, 'js', 'screen.js'),
  //
  //entry: entry,
  entry: data[argv.f],
  output: {
    path: __dirname,
    filename: 'bundlez.js'
  },
  devtool: 'source-map',
  eslint: {
    configFile: './.eslintrc.js'
  },
  // resolve: {
  //   extensions: ['', '.config.js', '.js', '.jsx', '.json'],
  // },
  module: {
    // preLoaders: [
    //   {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    // ],
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        // include: [
        //   path.resolve(__dirname, "js"),
        //   path.resolve(__dirname)
        // ],
        //
        exclude: /node_modules/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          //presets: ['es2015', 'stage-0', 'react'],
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
    new OpenBrowserPlugin({
      url: 'http://localhost:8080',
      browser: 'google chrome canary'
    }),
    new HtmlWebpackPlugin()
  ]
}
