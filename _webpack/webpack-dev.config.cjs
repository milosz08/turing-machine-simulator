'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: webpack-dev.config.cjs
 *   Created at: 2023-07-31, 22:55:00
 *   Last updated at: 2023-08-30, 17:41:50
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

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
