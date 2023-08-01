/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: webpack-commons.config.js
 * Last modified: 7/31/23, 10:54 PM
 * Project name: react-ts-turing-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

const path = require("path");

const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = isProd => ({
    entry: {
        app: [ path.resolve(__dirname, "..", "src", "index.tsx") ],
    },
    output: {
        path: path.join(__dirname, "..", "dist"),
        filename: `__react.[${isProd ? "contenthash:10" : "name"}].bundle.js`,
        chunkFilename: `__react.[${isProd ? "contenthash:10" : "name"}].chunk.js`,
        clean: true,
    },
    resolve: {
        extensions: [ ".js",".ts",".tsx" ],
        modules: [ "node_modules" ],
        alias: {
            "~/app-algorithms": path.resolve(__dirname, "..", "src", "algorithms"),
            "~/app-components": path.resolve(__dirname, "..", "src", "components"),
            "~/app-hooks": path.resolve(__dirname, "..", "src", "hooks"),
            "~/app-pages": path.resolve(__dirname, "..", "src", "pages"),
            "~/app-redux": path.resolve(__dirname, "..", "src", "redux"),
            "~/app-router": path.resolve(__dirname, "..", "src", "router"),
            "~/app-utils": path.resolve(__dirname, "..", "src", "utils"),
            "~/app-styles": path.resolve(__dirname, "..", "src", "styles"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /\/node_modules\//,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                [
                                    "babel-plugin-styled-components",
                                    {
                                        displayName: !isProd,
                                        ssr: true,
                                        fileName: isProd,
                                    },
                                ],
                            ],
                        },
                    },
                    {  loader: "ts-loader" },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](?!react|react-dom|react-router-dom).*/,
                    name: "vendors",
                    chunks: "all",
                },
                reactVendor: {
                    test: /[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: "vendor-react",
                    chunks: "all",
                },
            },
        },
    },
    plugins: [
        new DefinePlugin({
            "process.env.BUILD_ENV": JSON.stringify(isProd ? "prod" : "dev"),
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "src", "index.html"),
            inject: "body",
            scriptLoading: "blocking",
            minify: {
                removeComments: false,
                collapseWhitespace: true,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "..", "src", "assets"),
                    to: path.resolve(__dirname, "..", "dist", "assets"),
                },
            ],
        }),
    ],
});
