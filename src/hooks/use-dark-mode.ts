/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
