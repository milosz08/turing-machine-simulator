import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { ControlInputContainer } from './Controls.styles';

const InitialState = ({ inputDisabled }) => {
    
    const { startLabel, setStartLabel } = useContext(StoreContext);
    
    return (
        <ControlInputContainer pseudoContent = 'initial state'>
            <input
                value = {startLabel}
                onChange = {({ target }) => setStartLabel(target.value)}
                disabled = {inputDisabled}
            />
        </ControlInputContainer>
    );
}

export default InitialState;