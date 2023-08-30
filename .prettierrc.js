'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: .prettierrc.js
 *   Created at: 2023-08-30, 17:25:31
 *   Last updated at: 2023-08-30, 17:43:11
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

module.exports = {
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  bracketSameLine: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react*)$',
    '^(@.*)$',
    '^([a-zA-Z].*)$',
    '^~/(.*)$',
    '^[./]',
    '^[../]',
    '^~/(-styles)$',
    '^~/(.styles)$',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
