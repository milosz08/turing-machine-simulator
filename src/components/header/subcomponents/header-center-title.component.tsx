/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: header-center-title.component.tsx
 *   Created at: 2023-08-01, 00:58:29
 *   Last updated at: 2023-08-30, 18:39:52
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
import * as React from 'react';
import type { JSX } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { ThemeModeContext } from '~/app-router/entrypoint-page.component';
import { ThemeModes } from '~/app-utils/theme-modes';
import {
  HeaderAsideText,
  HeaderMainTitle,
  HeaderMainTitleContainer,
} from '../header.styles';

const CheckboxTogglerComponent = React.lazy(
  () => import('~/app-components/checkbox-toggler/checkbox-toggler.component')
);

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
