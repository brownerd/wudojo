# ESLint

Install
`npm install -g eslint`

Init
`eslint --init`

JSX
`npm install eslint-plugin-react --save-dev`

Babel
`npm install babel-eslint --save-dev`


## Config

```js

// Open browser automatically
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Create an index.html page for me on the fly
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundlez.js'
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080',
      browser: 'google chrome canary'
    }),
    new HtmlWebpackPlugin()
  ]
}


```
