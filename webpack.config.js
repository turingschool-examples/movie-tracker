const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
   entry: [
     'babel-polyfill',
   ],
   output: {
     path: path.join(__dirname, 'app'),
     filename: 'bundle.js',
   },
   module: {
     loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/,
          options: {
            presets: ['env'],
            plugins: ['babel-plugin-transform-class-properties']
          }
        }
     ]
   },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
