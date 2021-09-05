/*!
 * @file HowToUse.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

import { InfosContainer } from './StaticStructures.styles';

/**
 * @details Component responsible for generating the main information about starting the machine program.
 * 
 * @returns { JSX.Element }
 */
const HowToUse = () => (
    <InfosContainer>
        <h3>
            This is a single-tape, deterministic Turing machine simulator written in JavaScript with ReactJS library.
            To start using the machine you should:
        </h3>
        <ol>
            <li>
                Load a sample program from the list or create your own (if you don't know the syntax, see below the page).
            </li>
            <li>
                Enter the initial state label and the initial tape value in the 'initial input' and 'initial state' fields
                respectively.
            </li>
            <li>
                Compile the program (manually with the button or automatically by clicking on any field outside the code area).
            </li>
            <li>
                If the compilation is successful, reset the tape and printhead settings using the 'Machine Reset' button. If the
                compilation fails, correct all errors (you will see them if you click on the bottom colored bar of the code
                area).
            </li>
            <li>
                Click<FontAwesomeIcon icon = {faPlay}/>to start the machine operation. You can also click the 'Run at full 
                speed' button (not recommended on slow computers) or go 'step by step' using the
                <FontAwesomeIcon icon = {faStepBackward}/>and<FontAwesomeIcon icon = {faStepForward}/>buttons.
            </li>
        </ol>
    </InfosContainer>
);

export default HowToUse;