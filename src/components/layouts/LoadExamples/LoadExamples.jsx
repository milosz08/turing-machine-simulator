/**
 * @file LoadExamples.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { ExamplesContainer, ExampleButton } from './LoadExamples.styles';

/**
 * @details Component responsible for loading the selected program from the main directory on the basis of 
 *          the user's choice (pressing the button).
 * 
 * @returns { JSX.Element }
 */
const LoadExamples = () => {
    
    const { setCodearea, setMachineEndMessage, setDisableBtns } = useContext(StoreContext);

    const loadProgram = name => {
        const URL = `${name.replace(/ /g, '-').toLocaleLowerCase()}.${FILES_EXTENSION}`;
        const relativePath = `${process.env.PUBLIC_URL}/examples/`;
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
                    setMachineEndMessage('Error: Load AJAX request program failure. Try again.');
                }
            })
            .catch(err => {
                setMachineEndMessage(`Error: ${err}`);
            });
        setDisableBtns({ fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: false });
    };

    useEffect(() => {
        loadProgram(EXAMPLES_PROGRAMS[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

/**
 * All examples programs (NOTE: this list must match the names of programs in the ./examples directory).
 */
const EXAMPLES_PROGRAMS = [
    'Replace Binary String',
    'Replace Ternary String',
    'Check Symmetric Strings',
    'Binary Palindrome Detector'
];

/**
 * Turing Machine program files extension.
 */
const FILES_EXTENSION = 'txt';

export default LoadExamples;