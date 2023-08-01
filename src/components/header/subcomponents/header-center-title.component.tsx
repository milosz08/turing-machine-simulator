/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: header-center-title.component.tsx
 * Last modified: 8/1/23, 12:58 AM
 * Project name: react-ts-turing-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import * as React from "react";
import type { JSX } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";

import { RootState } from "~/app-redux/redux-store";
import { IPreferencesStoreReduxState } from "~/app-redux/preferences-store/state";
import { ThemeModes } from "~/app-utils/theme-modes";
import { ThemeModeContext } from "~/app-router/entrypoint-page.component";

const CheckboxTogglerComponent = React.lazy(() => import("~/app-components/checkbox-toggler/checkbox-toggler.component"));

import { HeaderAsideText, HeaderMainTitle, HeaderMainTitleContainer } from "../header.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const HeaderCenterTitleComponent: React.FC = (): JSX.Element => {

    const { currentThemeMode }: IPreferencesStoreReduxState = useSelector((state: RootState) => state.preferences);
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

export default HeaderCenterTitleComponent;
