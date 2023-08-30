/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: state.ts
 *   Created at: 2023-07-31, 23:43:01
 *   Last updated at: 2023-08-30, 18:33:28
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
import { ThemeModes } from '~/app-utils/theme-modes';

export interface IPreferencesStoreReduxState {
  currentThemeMode: ThemeModes;
  ifCodeFollow: boolean;
  headSpeed: number;
  codeScrollPos: number;
  cursorPosition: {
    ln: number;
    col: number;
    sel: number;
  };
  ifOpenErrors: boolean;
}

export const preferencesStoreReduxState: IPreferencesStoreReduxState = {
  currentThemeMode: ThemeModes.LIGHT,
  ifCodeFollow: true,
  headSpeed: 100,
  codeScrollPos: 0,
  cursorPosition: {
    ln: 0,
    col: 0,
    sel: 0,
  },
  ifOpenErrors: false,
};
