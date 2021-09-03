/**
 * @file Header.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

import React from 'react';

import { HeaderStyled, SideContent, CenterContent, ToggleDarkLightMode } from './StaticStructures.styles';

/**
 * @details Component responsible for generating the header along with navigation and the most important links. It is
 *          also responsible for implementing the switch that changes the mode (light/dark).
 * 
 * @returns { JSX.Element }
 */
const Header = ({ mode, callbackMode }) => {
    return (
        <HeaderStyled>
            <SideContent>
                <a
                    href = 'https://en.wikipedia.org/wiki/Turing_machine'
                    target = '_blank'
                    rel = 'noreferrer'
                >
                    About Turing Machine
                </a>
                <a
                    href = 'https://github.com/Milosz08/ReactJS_Turing_Machine_Simulator'
                    target = '_blank'
                    rel = 'noreferrer'
                >
                    Source Code
                </a>
            </SideContent>
            <CenterContent>
                <h1>Turing Machine Simulator</h1>
                <a 
                    href = 'https://github.com/Milosz08'
                    target = '_blank'
                    rel = 'noreferrer'
                >
                    created by Miłosz Gilga in ReactJS
                </a>
                <ToggleDarkLightMode>
                    <aside>light</aside>
                    <input
                        type = 'checkbox'
                        id = 'modeToggler'
                        checked = {mode === 'dark' ? true : false}
                        onChange = {({ target }) => callbackMode(target.checked ? 'light' : 'dark')}
                    />
                    <label htmlFor = 'modeToggler'>
                        <div/>
                    </label>
                    <aside>dark</aside>
                </ToggleDarkLightMode>
            </CenterContent>
            <SideContent>
                <a
                    href = 'https://github.com/Milosz08'
                    target = '_blank'
                    rel = 'noreferrer'
                >
                    My Github
                </a>
                <a
                    href = '#syntax'
                    onClick = {() => window.scrollTo(0, document.body.scrollHeight)}
                >
                    Syntax
                </a>
            </SideContent>
        </HeaderStyled>
    );
};

export default Header;