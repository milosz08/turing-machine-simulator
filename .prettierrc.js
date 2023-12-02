'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For get license, check LICENSE file
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
