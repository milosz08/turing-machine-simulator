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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

import { InfosContainer } from './StaticStructures.styles';

/**
 * Component responsible for generating the main information about starting the machine program.
 * 
 * @returns { JSX.Element }
 */
const HowToUse = () => (
    <InfosContainer>
        <h3>
            This is a single-tape, deterministic Turing machine simulator written in JavaScript with ReactJS library.
            To start using the machine you should:
        </h3>
        <ol>
            <li>
                Load a sample program from the list or create your own (if you don't know the syntax, see below the page).
            </li>
            <li>
                Enter the initial state label and the initial tape value in the 'initial input' and 'initial state' fields
                respectively.
            </li>
            <li>
                Compile the program (manually with the button or automatically by clicking on any field outside the code area).
            </li>
            <li>
                If the compilation is successful, reset the tape and printhead settings using the 'Machine Reset' button. If the
                compilation fails, correct all errors (you will see them if you click on the bottom colored bar of the code
                area).
            </li>
            <li>
                Click<FontAwesomeIcon icon = {faPlay}/>to start the machine operation. You can also click the 'Run at full 
                speed' button (not recommended on slow computers) or go 'step by step' using the
                <FontAwesomeIcon icon = {faStepBackward}/>and<FontAwesomeIcon icon = {faStepForward}/>buttons.
            </li>
        </ol>
    </InfosContainer>
);

export default HowToUse;