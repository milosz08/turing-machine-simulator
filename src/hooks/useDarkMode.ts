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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/reduxStore';
import { PrefActions } from '../redux/preferencesStore/actions';
import { prefStateKeys, ThemeModes } from '../redux/preferencesStore/types';
import { PreferencesInitialTypes } from '../redux/preferencesStore/initialState';

const useDarkMode = (): [ ThemeModes, () => void ] => {

    const { LIGHT, DARK } = ThemeModes;
    const { CURRENT_THEME_MODE } = prefStateKeys;

    const { currentThemeMode }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);
    const dispatcher = useDispatch();

    const setTheme = (mode: ThemeModes): void => {
        dispatcher(PrefActions.changeSingleField(CURRENT_THEME_MODE, mode));
    };

    const setMode = (mode: ThemeModes): void => {
        window.localStorage.setItem('theme', mode.toString());
        setTheme(mode);
    };

    const themeToggle = (): void => {
        currentThemeMode === LIGHT ? setMode(DARK) : setMode(LIGHT);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(ThemeModes[localTheme as keyof typeof ThemeModes]);
    }, []);

    return [ currentThemeMode, themeToggle ];
};

export default useDarkMode;