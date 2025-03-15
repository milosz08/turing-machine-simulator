'use strict';

const path = require('path');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = isProd => ({
  entry: {
    app: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: `js/react-[${isProd ? 'contenthash:10' : 'name'}]-bundle.js`,
    chunkFilename: `js/react-[${isProd ? 'contenthash:10' : 'name'}]-chunk.js`,
    publicPath: '',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: [
      'algorithms',
      'components',
      'hooks',
      'pages',
      'redux',
      'router',
      'utils',
      'styles',
    ].reduce(
      (acc, name) => ({
        ...acc,
        [`@/${name}`]: path.resolve(__dirname, '..', 'src', name),
      }),
      {}
    ),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /\/node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                [
                  'babel-plugin-styled-components',
                  {
                    displayName: !isProd,
                    ssr: true,
                    fileName: isProd,
                  },
                ],
              ],
            },
          },
          { loader: 'ts-loader' },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](?!react|react-dom|react-router-dom).*/,
          name: 'vendors',
          chunks: 'all',
        },
        reactVendor: {
          test: /[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new DefinePlugin({
      'process.env.BUILD_ENV': JSON.stringify(isProd ? 'prod' : 'dev'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      minify: {
        removeComments: false,
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src', 'assets'),
          to: path.resolve(__dirname, '..', 'dist', 'assets'),
        },
      ],
    }),
  ],
});
