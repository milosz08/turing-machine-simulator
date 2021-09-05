/*!
 * @file TapeInfos.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { TapeInfosContainer, StateInfosWrapper, MessageWrapper } from './TapeInfos.styles';

/**
 * @details Component responsible for generating a field with information about the previous and next label, 
 *          information about the number of states and the main text information about the state of the machine.
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