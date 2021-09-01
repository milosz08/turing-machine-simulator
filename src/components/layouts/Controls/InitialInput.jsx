import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { ControlInputContainer } from './Controls.styles';

const InitialInput = ({ inputDisabled }) => {
    
    const { initialInput, setInitialInput } = useContext(StoreContext);
    
    return (
        <ControlInputContainer pseudoContent = 'initial input'>
            <input
                value = {initialInput}
                onChange = {({ target }) => setInitialInput(target.value)}
                disabled = {inputDisabled}
            />
        </ControlInputContainer>
    );
}

export default InitialInput;