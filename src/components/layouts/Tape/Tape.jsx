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

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { TapeContainer, TapeCharacter } from './Tape.styles';

/**
 * Component responsible for generating the appearance of the tape and positioning the head over the
 * supported element, according to the value in the React Context store.
 * 
 * @returns { JSX.Element }
 */
const Tape = () => {

    const { tapeValue, headPosition } = useContext(StoreContext);

    /**
     * Generate all tape symbols from the hook tapeValue. It is also responsible for positioning the 
     * head over the currently operated element (based on the index and the current position of the head).
     */
    const generateTapeSymbols = Array.from(tapeValue).map((character, index) => (
        <TapeCharacter
            key = {index}
            active = {headPosition === index}
        >
            {character !== ' ' ? character : ` `}
        </TapeCharacter>
    ));

    return (
        <TapeContainer>
            {generateTapeSymbols}
        </TapeContainer>
    );
};

export default Tape;