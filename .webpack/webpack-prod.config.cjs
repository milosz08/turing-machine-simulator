'use strict';

const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommonConfig = require('./webpack-common.config.cjs');

module.exports = merge(webpackCommonConfig(true), {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$/,
      }),
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
});
