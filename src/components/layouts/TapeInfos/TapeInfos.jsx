import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { TapeInfosContainer, StateInfosWrapper } from './TapeInfos.styles';

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
            <div>{machineEndMessage}</div>
            <StateInfosWrapper pseudoContent = 'states count'>
                {allSteps.length}
            </StateInfosWrapper>
        </TapeInfosContainer>
    );
};

export default TapeInfos;