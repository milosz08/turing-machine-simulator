import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PrefAction from '@/redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { ThemeModes } from '@/utils/theme-modes';

const useDarkMode = (): [ThemeModes, () => void] => {
  const { LIGHT, DARK } = ThemeModes;

  const { currentThemeMode }: Partial<IPreferencesStoreReduxState> = useSelector(
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
    if (localTheme) {
      setTheme(ThemeModes[localTheme as keyof typeof ThemeModes]);
    }
  }, []);

  return [currentThemeMode, themeToggle];
};

export { useDarkMode };
