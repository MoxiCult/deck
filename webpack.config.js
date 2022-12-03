const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },   
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Deck Layer Example',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
};