/**
 * @file Tape.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
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

    const generateTapeSymbols = Array.from(tapeValue).map((character, index) => (
        <TapeCharacter
            key = {Math.random() * 1000}
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