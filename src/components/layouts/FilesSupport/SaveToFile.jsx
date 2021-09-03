/**
 * @file Header.js
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

import { FileSupportWrapper } from './FilesSupport.styles';
import { ControlButton } from '../Controls/Controls.styles';

/**
 * @details Component responsible for generating the field and the button for saving and downloading the current state 
 *          of the code field in the form of a .txt file.
 * 
 * @returns { JSX.Element }
 */
const SaveToFile = () => {

    const { codearea } = useContext(StoreContext);

    const downloadTxtFile = () => {
        const element = document.createElement('a');
        const file = new Blob([codearea], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'turing-machine-program.txt';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <FileSupportWrapper 
            direction = 'left'
            pseudoContent = 'save program to file'
        >
            <ControlButton
                onClick = {downloadTxtFile}
            >
                Save to file
            </ControlButton>
            <div>Click here to save your program into .txt file.</div>
        </FileSupportWrapper>
    );
};

export default SaveToFile;