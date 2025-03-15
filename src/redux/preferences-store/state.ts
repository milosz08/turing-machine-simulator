import { ThemeModes } from '@/utils/theme-modes';

interface IPreferencesStoreReduxState {
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

const preferencesStoreReduxState: IPreferencesStoreReduxState = {
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

export { type IPreferencesStoreReduxState, preferencesStoreReduxState };
