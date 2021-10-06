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

import { HeaderStyled, SideContent, CenterContent, ToggleButton } from './StaticStructures.styles';

/**
 * Component responsible for generating the header along with navigation and the most important links. It is
 * also responsible for implementing the switch that changes the mode (light/dark).
 * 
 * @returns { JSX.Element }
 */
const Header = ({ mode, callbackMode }) => (
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
            <ToggleButton>
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
            </ToggleButton>
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

export default Header;