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
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/reduxStore';
import { MachineInitialTypes } from '../../../redux/machineStore/initialState';

import { TapeContainer, TapeSingleCharacter } from './Tape.styles';

const Tape: React.FC = (): JSX.Element => {

    const { tapeValues, headPosition }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { valuesArray } = tapeValues;

    const generateTapeSymbols: JSX.Element[] = valuesArray.map((character, idx) => (
        <TapeSingleCharacter
            key = {idx}
            $active = {headPosition === idx}
        >
            {character}
        </TapeSingleCharacter>
    ));

    return (
        <TapeContainer>
            {generateTapeSymbols}
        </TapeContainer>
    );
};

export default Tape;