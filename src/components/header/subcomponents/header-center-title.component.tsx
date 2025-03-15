import type { JSX } from 'react';
import * as React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CheckboxTogglerComponent } from '@/components/checkbox-toggler/checkbox-toggler.component';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { ThemeModeContext } from '@/router/entrypoint-page.component';
import { ThemeModes } from '@/utils/theme-modes';
import { HeaderAsideText, HeaderMainTitle, HeaderMainTitleContainer } from '../header.styles';

const HeaderCenterTitleComponent: React.FC = (): JSX.Element => {
  const { currentThemeMode }: Partial<IPreferencesStoreReduxState> = useSelector(
    (state: RootState) => state.preferences
  );

  const { changeTheme } = useContext<Partial<{ changeTheme: () => void }>>(ThemeModeContext);

  const handleChangeTheme = (): void => {
    changeTheme();
  };

  return (
    <HeaderMainTitleContainer>
      <HeaderMainTitle to="/">Turing Machine Simulator</HeaderMainTitle>
      <HeaderAsideText>created by Miłosz Gilga in ReactJS</HeaderAsideText>
      <CheckboxTogglerComponent
        leftContent="light"
        rightContent="dark"
        checked={currentThemeMode === ThemeModes.DARK}
        changeCallback={handleChangeTheme}
      />
    </HeaderMainTitleContainer>
  );
};

export { HeaderCenterTitleComponent };
