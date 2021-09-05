/*!
 * @file SyntaxInfo.jsx
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

import { SyntaxContainer } from './StaticStructures.styles';

/**
 * @details Component responsible for generating static information about the syntax of machine programs.
 * 
 * @returns { JSX.Element }
 */
const SyntaxInfo = () => (
    <SyntaxContainer>
        <h3>Compiler syntax information:</h3>
        <ul>
            <li>
                Each command line for a machine should contain the following consecutive directives:
                <div>{'<current state>, <current symbol>, <new symbol>, <direction>, <new state>, <terminate>'}</div>
                where the first four labels are mandatory. The last one, on the other hand, is optional and is used 
                to immediately pause the machine after it is done.
            </li>
            <li>
                You can use any word, number, or string in {'<current state> and <new state>'} labels. However, convention 
                dictates that you start the label with a 'q' and don't make them too long. You shouldn't name a label if 
                it would consist of only one of these characters: '#', '*', '_' or ' '. 
            </li>
            <li>
                The {'<current symbol> and <new symbol>'} labels read and write the symbol to the tape. You can use almost 
                all available symbols. The machine takes into account the case of the letters in the symbols. The only 
                symbols you cannot use are '*', '_', '#' and ' '. These are reserved for: '*' in {'<current symbol>'} reads 
                any character from the tape, in {'<new symbol>'} leaves the same symbol on the tape; '_' is responsible 
                for the empty character (space).
            </li>
            <li>
                The {'<direction>'} label should contain the characters: {'>'}, {'<'} or '*', which respectively move the 
                head to the right, left, or do not move the head (it stays in its original position).
            </li>
            <li>
                Comments can be placed after the '#' sign. Anything after this character will be ignored in the 
                compilation and machine reading of the code.
            </li>
            <li>
                It is recommended to add an end label of the form: {`'<current state> -stop'`}, for example: q1-stop. This 
                is not required to compile the program correctly, but it will prevent unexpected program behavior.
            </li>
            <li>
                The last label {'<terminate>'} is optional and may be used to pause program immediately after 
                execution of this label, for example: 'q1 _ * {'>'} q2 !'.
            </li>
            <li>
                When saving a program to a file, you can save the initial state value of the machine. To do this use the 
                following tuple in your code: '### {'<optional text> $<initial tape value>$'}', for example: '### Initial 
                input: $101001001$'.
            </li>
        </ul>
    </SyntaxContainer>
);

export default SyntaxInfo;