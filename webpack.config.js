var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react']
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: extractPlugin.extract({
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
          loader: 'url-loader?limit=10000',
        },
      ]
  },
  plugins: [
    extractPlugin
  ]
};
