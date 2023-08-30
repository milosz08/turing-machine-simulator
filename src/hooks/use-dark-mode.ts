/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: use-dark-mode.ts
 *   Created at: 2023-07-31, 23:51:20
 *   Last updated at: 2023-08-30, 18:35:10
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PrefAction from '~/app-redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { ThemeModes } from '~/app-utils/theme-modes';

const useDarkMode = (): [ThemeModes, () => void] => {
  const { LIGHT, DARK } = ThemeModes;

  const { currentThemeMode }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );
  const dispatcher = useDispatch();

  const setTheme = (mode: ThemeModes): void => {
    dispatcher(PrefAction.switchThemeAction({ selectedTheme: mode }));
  };

  const setMode = (mode: ThemeModes): void => {
    window.localStorage.setItem('theme', mode.toString());
    setTheme(mode);
  };

  const themeToggle = (): void => {
    setMode(currentThemeMode === LIGHT ? DARK : LIGHT);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(ThemeModes[localTheme as keyof typeof ThemeModes]);
  }, []);

  return [currentThemeMode, themeToggle];
};

export default useDarkMode;
