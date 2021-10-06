/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
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

import React from 'react';
import StoreProvider from '../store/StoreProvider';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { LIGHT_THEME, DARK_THEME } from '../../utils/styledComponentThemes';
import { useDarkMode } from '../../utils/customHooks/useDarkMode';

import Header from '../layouts/StaticStructures/Header';
import Tape from './../layouts/Tape/Tape';
import Codearea from './../layouts/Codearea/Codearea';
import Controls from '../layouts/Controls/Controls';
import TapeInfos from '../layouts/TapeInfos/TapeInfos';
import LoadExamples from '../layouts/LoadExamples/LoadExamples';
import HowToUse from '../layouts/StaticStructures/HowToUse';
import FilesSupport from '../layouts/FilesSupport/FilesSupport';
import SyntaxInfo from '../layouts/StaticStructures/SyntaxInfo';
import Footer from '../layouts/StaticStructures/Footer';

/**
 * Global styles (application-wide) from React Styled Component Package.
 */
const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
    }
    body, code, textarea, button, input {
        font-family: 'JetBrains Mono', monospace;
    }
    body {
        width: 100%;
        color: ${({ theme }) => theme.TEXT};
        background-color: ${({ theme }) => theme.BODY};
    }
    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 1360px;
    }
`;

const App = () => {

    const [ theme, themeToggler ] = useDarkMode();
    const themeMode = theme === 'dark' ? DARK_THEME : LIGHT_THEME;

    return (
        <StoreProvider>
            <ThemeProvider
                theme = {themeMode}
            >
                <GlobalStyles/>
                <Header
                    callbackMode = {themeToggler}
                    mode = {theme}
                />
                <HowToUse/>
                <Tape/>
                <Controls/>
                <TapeInfos/>
                <Codearea/>
                <LoadExamples/>
                <FilesSupport/>
                <SyntaxInfo/>
                <Footer/>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;