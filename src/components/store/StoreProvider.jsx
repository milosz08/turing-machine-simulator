import React, { createContext, useState } from 'react';
import { CodeareaMode } from '../layouts/Codearea/Codearea';

export const StoreContext = createContext([ ]);

const StoreProvider = ({ children }) => {
    
    const [ labelsArrays, setLabelsArrays ] = useState({ labels: [], errors: [] });
    
    const [ initialInput, setInitialInput ] = useState('001101110000111100011111000');
    const [ tapeValue, setTapeValue ] = useState(initialInput);
    const [ startLabel, setStartLabel ] = useState('q0');
    const [ disableMachine, setDisableMachine ] = useState(false);
    
    const [ codeareaMode, setCodeareaMode ] = useState(CodeareaMode.RUNNING);
    const [ onCompile, setOnCompile ] = useState(CodeareaMode.COMPILING);
    
    const [ stateCounter, setStateCounter ] = useState(0);
    const [ headPosition, setHeadPosition ] = useState(0);
    const [ actualState, setActualState ] = useState({ prevState: null, nextState: null });
    const [ allSteps, setAllSteps ] = useState([]);

    const [ machineEndMessage, setMachineEndMessage ] = useState('');
    
    return (
        <StoreContext.Provider
            value = {{
                labelsArrays, setLabelsArrays,
                initialInput, setInitialInput,
                startLabel, setStartLabel,
                stateCounter, setStateCounter,
                codeareaMode, setCodeareaMode,
                onCompile, setOnCompile,
                tapeValue, setTapeValue,
                disableMachine, setDisableMachine,
                machineEndMessage, setMachineEndMessage,
                headPosition, setHeadPosition,
                actualState, setActualState,
                allSteps, setAllSteps
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;