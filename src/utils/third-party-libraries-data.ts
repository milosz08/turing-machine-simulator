/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: third-party-libraries-data.ts
 * Last modified: 8/1/23, 2:17 AM
 * Project name: turing-machine-simulator
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

export interface IThirdPartyLibraryDataType {
    name: string;
    githubSlug: string;
}

export const thirdPartyLibrariesData: IThirdPartyLibraryDataType[] = [
    { name: "@babel/core", githubSlug: "babel/babel" },
    { name: "@babel/plugin-syntax-dynamic-import", githubSlug: "babel/babel" },
    { name: "@babel/preset-env", githubSlug: "babel/babel" },
    { name: "@babel/preset-react", githubSlug: "babel/babel" },
    { name: "@reduxjs/toolkit", githubSlug: "reduxjs/redux-toolkit" },
    { name: "@types/node", githubSlug: "DefinitelyTyped/DefinitelyTyped" },
    { name: "@types/react", githubSlug: "DefinitelyTyped/DefinitelyTyped" },
    { name: "@types/react-dom", githubSlug: "DefinitelyTyped/DefinitelyTyped" },
    { name: "@types/styled-components", githubSlug: "DefinitelyTyped/DefinitelyTyped" },
    { name: "@typescript-eslint/eslint-plugin", githubSlug: "typescript-eslint/typescript-eslint" },
    { name: "@typescript-eslint/parser", githubSlug: "typescript-eslint/typescript-eslint" },
    { name: "babel-loader", githubSlug: "babel/babel-loader" },
    { name: "babel-plugin-styled-components", githubSlug: "styled-components/babel-plugin-styled-components" },
    { name: "clean-webpack-plugin", githubSlug: "johnagan/clean-webpack-plugin" },
    { name: "compression-webpack-plugin", githubSlug: "webpack-contrib/compression-webpack-plugin" },
    { name: "copy-webpack-plugin", githubSlug: "webpack-contrib/copy-webpack-plugin" },
    { name: "docker", githubSlug: "docker" },
    { name: "eslint", githubSlug: "eslint/eslint" },
    { name: "eslint-config-standard-with-typescript", githubSlug: "standard/eslint-config-standard-with-typescript" },
    { name: "eslint-plugin-import", githubSlug: "import-js/eslint-plugin-import" },
    { name: "eslint-plugin-n", githubSlug: "eslint-community/eslint-plugin-n" },
    { name: "eslint-plugin-promise", githubSlug: "eslint-community/eslint-plugin-promise" },
    { name: "eslint-plugin-react-hooks", githubSlug: "facebook/react" },
    { name: "html-webpack-plugin", githubSlug: "jantimon/html-webpack-plugin" },
    { name: "httpd", githubSlug: "apache/httpd" },
    { name: "react", githubSlug: "facebook/react" },
    { name: "react-dom", githubSlug: "facebook/react" },
    { name: "react-icons", githubSlug: "react-icons/react-icons" },
    { name: "react-redux", githubSlug: "reduxjs/react-redux" },
    { name: "react-router", githubSlug: "remix-run/react-router" },
    { name: "react-router-dom", githubSlug: "remix-run/react-router" },
    { name: "styled-components", githubSlug: "styled-components/styled-components" },
    { name: "terser-webpack-plugin", githubSlug: "webpack-contrib/terser-webpack-plugin" },
    { name: "ts-loader", githubSlug: "TypeStrong/ts-loader" },
    { name: "typescript", githubSlug: "microsoft/TypeScript" },
    { name: "webpack", githubSlug: "webpack/webpack" },
    { name: "webpack-cli", githubSlug: "webpack/webpack-cli" },
    { name: "webpack-dev-server", githubSlug: "webpack/webpack-dev-server" },
    { name: "webpack-remove-empty-scripts", githubSlug: "webdiscus/webpack-remove-empty-scripts" },
    { name: "webpack-merge", githubSlug: "survivejs/webpack-merge" },
];
