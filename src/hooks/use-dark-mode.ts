/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: use-dark-mode.ts
 * Last modified: 7/31/23, 11:51 PM
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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "~/app-redux/redux-store";
import { IPreferencesStoreReduxState } from "~/app-redux/preferences-store/state";
import { ThemeModes } from "~/app-utils/theme-modes";

import * as PrefAction from "~/app-redux/preferences-store/actions";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const useDarkMode = (): [ ThemeModes, () => void ] => {

    const { LIGHT, DARK } = ThemeModes;

    const { currentThemeMode }: IPreferencesStoreReduxState = useSelector((state: RootState) => state.preferences);
    const dispatcher = useDispatch();

    const setTheme = (mode: ThemeModes): void => {
        dispatcher(PrefAction.switchThemeAction({ selectedTheme: mode }));
    };

    const setMode = (mode: ThemeModes): void => {
        window.localStorage.setItem("theme", mode.toString());
        setTheme(mode);
    };

    const themeToggle = (): void => {
        setMode(currentThemeMode === LIGHT ? DARK : LIGHT);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(ThemeModes[localTheme as keyof typeof ThemeModes]);
    }, []);

    return [ currentThemeMode, themeToggle ];
};

export default useDarkMode;
