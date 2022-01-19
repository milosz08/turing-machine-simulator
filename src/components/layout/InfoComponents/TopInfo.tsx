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

import * as React from 'react';
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

import {
    InfoComponentContainer, InfoComponentHeader, InfoComponentListElement, InfoComponentOrderedList
} from './InfoComponents.styles';

const TopInfo: React.FC = (): JSX.Element => (
    <InfoComponentContainer
        $margin = '0 0 30px'
    >
        <InfoComponentHeader>
            This is a deterministic, single-tape Turing machine simulator written in JavaScript with ReactJS library.
            To start using the machine you should:
        </InfoComponentHeader>
        <InfoComponentOrderedList>
            <InfoComponentListElement>
                Load a sample program from the list or create your own (if you don't know the syntax, see below the page).
            </InfoComponentListElement>
            <InfoComponentListElement>
                Enter the initial state label and the initial tape value in the 'initial input' and 'initial state' fields
                respectively.
            </InfoComponentListElement>
            <InfoComponentListElement>
                Compile the program (manually with the button or automatically by clicking on any field outside the code area).
            </InfoComponentListElement>
            <InfoComponentListElement>
                If the compilation is successful, reset the tape and print head settings using the 'Machine Reset' button. If the
                compilation fails, correct all errors (you will see them if you click on the bottom colored bar of the code
                area).
            </InfoComponentListElement>
            <InfoComponentListElement>
                Click <FaPlay/> to start the machine operation. You can also click the 'Run at full speed' button (not recommended
                on slow computers) or go 'step by step' using the <FaStepBackward/> and <FaStepForward/> buttons.
            </InfoComponentListElement>
        </InfoComponentOrderedList>
    </InfoComponentContainer>
);

export default TopInfo;