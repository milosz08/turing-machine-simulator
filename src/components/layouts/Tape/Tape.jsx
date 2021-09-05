/*!
 * @file Tape.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { TapeContainer, TapeCharacter } from './Tape.styles';

/**
 * @details Component responsible for generating the appearance of the tape and positioning the head over the 
 *          supported element, according to the value in the React Context store.
 * 
 * @returns { JSX.Element }
 */
const Tape = () => {

    const { tapeValue, headPosition } = useContext(StoreContext);

    /**
     * Generate all tape symbols from the hook tapeValue. It is also responsible for positioning the 
     * head over the currently operated element (based on the index and the current position of the head).
     */
    const generateTapeSymbols = Array.from(tapeValue).map((character, index) => (
        <TapeCharacter
            key = {index}
            active = {headPosition === index}
        >
            {character !== ' ' ? character : ` `}
        </TapeCharacter>
    ));

    return (
        <TapeContainer>
            {generateTapeSymbols}
        </TapeContainer>
    );
};

export default Tape;