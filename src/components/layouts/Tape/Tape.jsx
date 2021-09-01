import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { TapeContainer, TapeCharacter } from './Tape.styles';

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