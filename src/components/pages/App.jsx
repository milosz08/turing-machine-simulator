import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import STYLED_CONSTANTS from './../../utils/StylesConstants';

import Header from './../layouts/Header/Header';
import Tape from './../layouts/Tape/Tape';
import Codearea from './../layouts/Codearea/Codearea';

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        backface-visibility: hidden;
        transform: translateZ(0);
        -webkit-font-smoothing: subpixel-antialiased;
    }
    ::-webkit-scrollbar {
        width: 2px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${STYLED_CONSTANTS.GRAY_COLOUR};
    }
    body, code, textarea, button {
        font-family: 'JetBrains Mono', monospace;
    }
    body {
        color: ${STYLED_CONSTANTS.WHITE_COLOUR};
        background-color: ${STYLED_CONSTANTS.BLACK_COLOUR};
    }
`;

const App = () => {
    return (    
        <Fragment>
            <GlobalStyles/>
            <Header/>
            <Tape/>
            <Codearea/>
        </Fragment>
    );
};

export default App;