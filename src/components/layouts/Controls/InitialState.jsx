/*!
 * @file InitialState.jsx
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
 * @details Component responsible for setting the name for the startup label.
 * 
 * @returns { JSX.Element }
 */
const InitialState = () => {
    
    const { startLabel, setStartLabel, disableElms } = useContext(StoreContext);
    
    return (
        <ControlInputContainer pseudoContent = 'initial state'>
            <input
                value = {startLabel}
                onChange = {({ target }) => setStartLabel(target.value)}
                disabled = {disableElms.inputs}
            />
        </ControlInputContainer>
    );
}

export default InitialState;