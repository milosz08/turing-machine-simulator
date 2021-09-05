/*!
 * @file StoreProvider.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Context Store component.
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { createContext, useState } from 'react';
import { CODEAREA_MODES, HEAD_SPEED } from '../../utils/machineConfiguration';

/**
 * Create the context of the store. Function exported and used to destructurize context members.
 */
export const StoreContext = createContext([]);

/**
 * @details Component responsible for storing the main properties and states in the program. This component 
 *          generate Context, that supplies these properties to all components in whole application.
 * 
 * @param { React.ReactNode } children - all nodes of the virtual DOM React tree covered by the Provider.
 * 
 * @returns { JSX.Element } 
 */
const StoreProvider = ({ children }) => {
    
    const { MIN_SPEED } = HEAD_SPEED;

    /**
     * Storing information about the compiled program (labels), if the compilation was successful. 
     * If the compilation was not successful, it populates the 'errors' table with errors or warnings.
     */
    const [ labelsArrays, setLabelsArrays ] = useState({ labels: [], errors: [] });
    
    /**
     * Initial value that is put on the tape and a converted string into an array 
     * (used in the machine's algorithm).
     */
    const [ initialInput, setInitialInput ] = useState(' ');
    const [ tapeValue, setTapeValue ] = useState([...initialInput]);

    /**
     * Contents of the uncompiled edit field for entering the program code.
     */
    const [ codearea, setCodearea ] = useState('');
    
    /**
     * Default label with which the program is to start. Possible to change in input fields.
     */
    const [ startLabel, setStartLabel ] = useState('q0');

    /**
     * Machine mode support (current mode storage, compilation information storage: success/failure).
     */
    const [ codeareaMode, setCodeareaMode ] = useState(CODEAREA_MODES.RUNNING);
    const [ onCompile, setOnCompile ] = useState(CODEAREA_MODES.COMPILING);
    
    /**
     * Counter the number of states going through the machine while the program is running.
     */
    const [ stateCounter, setStateCounter ] = useState(0);
    
    /**
     * Head position, setting the previous and current state (based on the head position) and a table that stores 
     * all steps (necessary to enable undoing operations in the program being executed).
     */
    const [ headPosition, setHeadPosition ] = useState(0);
    const [ actualState, setActualState ] = useState({ prevState: null, nextState: null });
    const [ allSteps, setAllSteps ] = useState([]);

    /**
     * Main message of the current state of the element and/or the entire machine.
     */
    const [ machineEndMessage, setMachineEndMessage ] = useState('');
    
    /**
     * Blocking elements that may interact with the user (eliminating errors through improper machine operation).
     */
    const [ disableElms, setDisableElms ] = useState({
        fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: false, scrollCodearea: false,
    });

    /**
     * Additional machine controls
     */
    const [ addtlnContr, setAddtlnContr ] = useState({ headSpeed: MIN_SPEED, codeFollow: true });

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
                machineEndMessage, setMachineEndMessage,
                headPosition, setHeadPosition,
                actualState, setActualState,
                allSteps, setAllSteps,
                codearea, setCodearea,
                disableElms, setDisableElms,
                addtlnContr, setAddtlnContr
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;