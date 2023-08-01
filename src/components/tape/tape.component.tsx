/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: tape.component.tsx
 * Last modified: 8/1/23, 5:41 PM
 * Project name: turing-machine-simulator
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

import * as React from "react";
import type { JSX } from "react";
import { useSelector } from "react-redux";

import { RootState } from "~/app-redux/redux-store";
import { IMachineStoreReduxState } from "~/app-redux/machine-store/state";

import { TapeContainer, TapeSingleCharacter } from "~/app-components/tape/tape.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TapeComponent: React.FC = (): JSX.Element => {

    const { tapeValues, headPosition }: IMachineStoreReduxState = useSelector((state: RootState) => state.machine);

    const generateTapeSymbols: JSX.Element[] = tapeValues.valuesArray.map((character, idx) => (
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

export default TapeComponent;
