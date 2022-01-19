/*
 * Copyright (c) 2022-2022, by Miłosz Gilga <https://miloszgilga.pl>
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
import { Suspense } from 'react';
import { createContext } from 'react';

import useDarkMode from '../hooks/useDarkMode';

import Themes from '../styles/theme.styles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global.styles';

import { ThemeModes } from '../redux/preferencesStore/types';

const Header = React.lazy(() => import('../components/Header/Header'));
const TopInfo = React.lazy(() => import('../components/InfoComponents/TopInfo'));
const BottomInfo = React.lazy(() => import('../components/InfoComponents/BottomInfo'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));

export const ThemeModeContext = createContext<Partial<{ changeTheme: () => void }>>({});

const App: React.FC = (): JSX.Element => {

    const [ theme, themeToggle ] = useDarkMode();
    const styledTheme = theme === ThemeModes.LIGHT ? Themes.darkTheme : Themes.lightTheme;

    return (
        <ThemeProvider
            theme = {styledTheme}
        >
            <Suspense
                fallback = {<></>}
            >
                <GlobalStyles/>
                <ThemeModeContext.Provider
                    value = {{ changeTheme: themeToggle }}
                >
                    <Header/>
                </ThemeModeContext.Provider>
                <TopInfo/>
                <BottomInfo/>
                <Footer/>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;