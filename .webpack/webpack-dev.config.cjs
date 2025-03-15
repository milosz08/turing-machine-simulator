'use strict';

const { merge } = require('webpack-merge');
const { SourceMapDevToolPlugin } = require('webpack');
const webpackCommonConfig = require('./webpack-common.config.cjs');

module.exports = merge(webpackCommonConfig(false), {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 9091,
    historyApiFallback: true,
    hot: false,
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});
