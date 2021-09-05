/*!
 * @file LoadExamples.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

import React, { useCallback, useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import {
    MACHINE_PROGRAM_EXTENSION, EXAMPLES_PROGRAMS, MACHINE_MESSAGES, DEF_PROGRAMS_REL_PATH
} from './../../../utils/machineConfiguration';

import { ExamplesContainer, ExampleButton } from './LoadExamples.styles';

/**
 * @details Component responsible for loading the selected program from the main directory on the basis of 
 *          the user's choice (pressing the button).
 * 
 * @returns { JSX.Element }
 */
const LoadExamples = () => {
    
    const { setCodearea, setMachineEndMessage, setDisableElms } = useContext(StoreContext);

    /**
     * Asynchronous function responsible for downloading an example program from a file (in a public 
     * folder) and placing it in the edit field.
     * 
     * @param { string } name - name of the program to be loaded.
     */
    const loadProgram = useCallback(name => {
        const URL = `${name.replace(/ /g, '-').toLocaleLowerCase()}.${MACHINE_PROGRAM_EXTENSION}`;
        const relativePath = `${process.env.PUBLIC_URL}${DEF_PROGRAMS_REL_PATH}/`;
        fetch(relativePath + URL, { method: 'GET' })
            .then(res => {
                if(res.ok) {
                    return res.text()
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(data => {
                if(data) {
                    setCodearea(data);
                } else {
                    setMachineEndMessage(MACHINE_MESSAGES.AJAX_ERROR_LOAD);
                }
            })
            .catch(err => {
                setMachineEndMessage(`Error: ${err}`);
            });
        setDisableElms({ fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: false });
    }, [setCodearea, setDisableElms, setMachineEndMessage]);

    /**
     * Loading the first program in the list of sample programs each time you reload the page.
     */
    useEffect(() => {
        loadProgram(EXAMPLES_PROGRAMS[0]);
    }, [loadProgram]);

    /**
     * Generating all sample programs from a static array of elements.
     */
    const generateExamples = EXAMPLES_PROGRAMS.map(example => (
        <ExampleButton
            key = {`${example}_${Math.floor(Math.random() * 1000)}`}
            onClick = {() => loadProgram(example)}
            title = {`Click to load '${example}' example program`}
        >
            {example}
        </ExampleButton>
    ));

    return (
        <ExamplesContainer>
            {generateExamples}
        </ExamplesContainer>
    );
}

export default LoadExamples;