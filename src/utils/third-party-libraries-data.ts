/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */

export interface IThirdPartyLibraryDataType {
  name: string;
  githubSlug: string;
}

export const thirdPartyLibrariesData: IThirdPartyLibraryDataType[] = [
  { name: '@babel/core', githubSlug: 'babel/babel' },
  { name: '@babel/plugin-syntax-dynamic-import', githubSlug: 'babel/babel' },
  { name: '@babel/preset-env', githubSlug: 'babel/babel' },
  { name: '@babel/preset-react', githubSlug: 'babel/babel' },
  { name: '@reduxjs/toolkit', githubSlug: 'reduxjs/redux-toolkit' },
  {
    name: '@trivago/prettier-plugin-sort-imports',
    githubSlug: 'trivago/prettier-plugin-sort-imports',
  },
  { name: '@types/node', githubSlug: 'DefinitelyTyped/DefinitelyTyped' },
  { name: '@types/react', githubSlug: 'DefinitelyTyped/DefinitelyTyped' },
  { name: '@types/react-dom', githubSlug: 'DefinitelyTyped/DefinitelyTyped' },
  {
    name: '@types/styled-components',
    githubSlug: 'DefinitelyTyped/DefinitelyTyped',
  },
  {
    name: '@typescript-eslint/eslint-plugin',
    githubSlug: 'typescript-eslint/typescript-eslint',
  },
  {
    name: '@typescript-eslint/parser',
    githubSlug: 'typescript-eslint/typescript-eslint',
  },
  { name: 'babel-loader', githubSlug: 'babel/babel-loader' },
  {
    name: 'babel-plugin-styled-components',
    githubSlug: 'styled-components/babel-plugin-styled-components',
  },
  { name: 'clean-webpack-plugin', githubSlug: 'johnagan/clean-webpack-plugin' },
  {
    name: 'compression-webpack-plugin',
    githubSlug: 'webpack-contrib/compression-webpack-plugin',
  },
  {
    name: 'copy-webpack-plugin',
    githubSlug: 'webpack-contrib/copy-webpack-plugin',
  },
  { name: 'cli-spinner', githubSlug: 'sindresorhus/cli-spinners' },
  { name: 'command-line-args', githubSlug: '75lb/command-line-args' },
  { name: 'docker', githubSlug: 'docker' },
  { name: 'eslint', githubSlug: 'eslint/eslint' },
  {
    name: 'eslint-plugin-import',
    githubSlug: 'import-js/eslint-plugin-import',
  },
  { name: 'eslint-plugin-json', githubSlug: 'azeemba/eslint-plugin-json' },
  { name: 'eslint-plugin-react-hooks', githubSlug: 'facebook/react' },
  { name: 'husky', githubSlug: 'husky/husky' },
  { name: 'html-webpack-plugin', githubSlug: 'jantimon/html-webpack-plugin' },
  { name: 'lint-staged', githubSlug: 'okonet/lint-staged' },
  { name: 'prettier', githubSlug: 'prettier/prettier' },
  {
    name: 'promisify-child-process',
    githubSlug: 'jcoreio/promisify-child-process',
  },
  { name: 'httpd', githubSlug: 'apache/httpd' },
  { name: 'react', githubSlug: 'facebook/react' },
  { name: 'react-dom', githubSlug: 'facebook/react' },
  { name: 'react-icons', githubSlug: 'react-icons/react-icons' },
  { name: 'react-redux', githubSlug: 'reduxjs/react-redux' },
  { name: 'react-router', githubSlug: 'remix-run/react-router' },
  { name: 'react-router-dom', githubSlug: 'remix-run/react-router' },
  {
    name: 'styled-components',
    githubSlug: 'styled-components/styled-components',
  },
  {
    name: 'terser-webpack-plugin',
    githubSlug: 'webpack-contrib/terser-webpack-plugin',
  },
  { name: 'ts-loader', githubSlug: 'TypeStrong/ts-loader' },
  { name: 'typescript', githubSlug: 'microsoft/TypeScript' },
  { name: 'webpack', githubSlug: 'webpack/webpack' },
  { name: 'webpack-cli', githubSlug: 'webpack/webpack-cli' },
  { name: 'webpack-dev-server', githubSlug: 'webpack/webpack-dev-server' },
  {
    name: 'webpack-remove-empty-scripts',
    githubSlug: 'webdiscus/webpack-remove-empty-scripts',
  },
  { name: 'webpack-merge', githubSlug: 'survivejs/webpack-merge' },
];
