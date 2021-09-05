/*!
 * @file App.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
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
        transform: translateZ(0);
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