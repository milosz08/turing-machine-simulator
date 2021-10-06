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

import { TapeInfosContainer, StateInfosWrapper, MessageWrapper } from './TapeInfos.styles';

/**
 * Component responsible for generating a field with information about the previous and next label,
 * information about the number of states and the main text information about the state of the machine.
 * 
 * @returns { JSX.Element }
 */
const TapeInfos = () => {

    const { machineEndMessage, actualState, allSteps } = useContext(StoreContext);

    const labelsInfo = actualState.prevState ? (
        `${actualState.prevState?.currentState} -> ${actualState.nextState?.newState}`
    ) : '-';

    return (
        <TapeInfosContainer>
            <StateInfosWrapper pseudoContent = 'labels info'>
                {labelsInfo}
            </StateInfosWrapper>
            <MessageWrapper>{machineEndMessage}</MessageWrapper>
            <StateInfosWrapper pseudoContent = 'states count'>
                {allSteps.length}
            </StateInfosWrapper>
        </TapeInfosContainer>
    );
};

export default TapeInfos;