/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
