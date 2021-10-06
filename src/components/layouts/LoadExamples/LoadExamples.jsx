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

import React, { useCallback, useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import {
    MACHINE_PROGRAM_EXTENSION, EXAMPLES_PROGRAMS, MACHINE_MESSAGES, DEF_PROGRAMS_REL_PATH
} from '../../../utils/machineConfiguration';

import { ExamplesContainer, ExampleButton } from './LoadExamples.styles';

/**
 * Component responsible for loading the selected program from the main directory on the basis of
 * the user's choice (pressing the button).
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