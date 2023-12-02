/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import CheckboxTogglerComponent from '~/app-components/checkbox-toggler/checkbox-toggler.component';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { ThemeModeContext } from '~/app-router/entrypoint-page.component';
import { ThemeModes } from '~/app-utils/theme-modes';
import {
  HeaderAsideText,
  HeaderMainTitle,
  HeaderMainTitleContainer,
} from '../header.styles';

const HeaderCenterTitleComponent: React.FC = (): JSX.Element => {
  const { currentThemeMode }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const { changeTheme } =
    useContext<Partial<{ changeTheme: () => void }>>(ThemeModeContext);

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

export default HeaderCenterTitleComponent;
