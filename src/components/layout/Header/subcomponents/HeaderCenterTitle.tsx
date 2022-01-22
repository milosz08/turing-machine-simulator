/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import * as React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { ThemeModeContext } from '../../../App';

import { RootState } from '../../../../redux/reduxStore';
import { ThemeModes } from '../../../../redux/preferencesStore/types';
import { PreferencesInitialTypes } from '../../../../redux/preferencesStore/initialState';

import { HeaderAsideText, HeaderMainTitle, HeaderMainTitleContainer } from '../Header.styles';

const CheckboxToggleElement = React.lazy(() => import('../../CheckboxToggleElement/CheckboxToggleElement'));

const HeaderCenterTitle: React.FC = (): JSX.Element => {

    const { currentThemeMode }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);
    const { changeTheme } = useContext<Partial<{ changeTheme: () => void }>>(ThemeModeContext);

    const handleChangeTheme = (): void => {
        changeTheme!();
    };

    return (
        <HeaderMainTitleContainer>
            <HeaderMainTitle>
                Turing Machine Simulator
            </HeaderMainTitle>
            <HeaderAsideText>
                created by Miłosz Gilga in ReactJS
            </HeaderAsideText>
            <CheckboxToggleElement
                leftContent = 'light'
                rightContent = 'dark'
                checked = {currentThemeMode === ThemeModes.DARK}
                changeCallback = {handleChangeTheme}
            />
        </HeaderMainTitleContainer>
    );
};

export default HeaderCenterTitle;