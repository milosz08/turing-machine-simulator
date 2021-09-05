/*!
 * @file InitialInput.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { ControlInputContainer } from './Controls.styles';

/**
 * @details Component responsible for generating the input field for the initial value to be written to the tape.
 * 
 * @returns { JSX.Element }
 */
const InitialInput = () => {
    
    const { initialInput, setInitialInput, disableElms } = useContext(StoreContext);
    
    return (
        <ControlInputContainer pseudoContent = 'initial input'>
            <input
                value = {initialInput}
                onChange = {({ target }) => setInitialInput(target.value)}
                disabled = {disableElms.inputs}
            />
        </ControlInputContainer>
    );
}

export default InitialInput;