import React from 'react';
import StoreProvider from '../store/StoreProvider';
import { createGlobalStyle } from 'styled-components';
import STYLED_CONSTANTS from './../../utils/StylesConstants';

import Header from './../layouts/Header/Header';
import Tape from './../layouts/Tape/Tape';
import Codearea from './../layouts/Codearea/Codearea';
import Controls from '../layouts/Controls/Controls';
import TapeInfos from '../layouts/TapeInfos/TapeInfos';

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
        color: ${STYLED_CONSTANTS.WHITE_COLOUR};
        background-color: ${STYLED_CONSTANTS.BLACK_COLOUR};
    }
    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 1200px;
    }
`;

const App = () => {
    return (
        <StoreProvider>
            <GlobalStyles/>
            <Header/>
            <Tape/>
            <Controls/>
            <TapeInfos/>
            <Codearea/>
        </StoreProvider>
    );
};

export default App;