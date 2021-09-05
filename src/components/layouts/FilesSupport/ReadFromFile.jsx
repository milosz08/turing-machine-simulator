/*!
 * @file ReadFromFile.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { MACHINE_MESSAGES, MACHINE_PROGRAM_EXTENSION } from '../../../utils/machineConfiguration';

import { FileSupportWrapper } from './FilesSupport.styles';

/**
 * @details Component responsible for the generation of the input field and the button for loading Turing machine programs.
 * 
 * @returns { JSX.Element }
 */
const ReadFromFile = () => {

    const { setCodearea } = useContext(StoreContext);
    const { CLICK_TO_LOAD_PROGRAM, SUCCESS_LOAD_PROGRAM, PROGRAM_LOAD_ERROR } = MACHINE_MESSAGES;

    const [ showingTxt, setShowingTxt ] = useState(CLICK_TO_LOAD_PROGRAM);

    /**
     * Function loads the machine program from a .txt file from the user's computer.
     */
    const showAndLoadFile = () => {
        if(window.File && window.FileReader && window.FileList && window.Blob) {
            const file = document.getElementById('fileInput').files[0];
            const reader = new FileReader();

            const textFile = /text.*/;

            if(file.type.match(textFile)) {
                reader.onload = e => {
                    setCodearea(e.target.result);
                    setShowingTxt(SUCCESS_LOAD_PROGRAM);
                    setTimeout(() => {
                        setShowingTxt(CLICK_TO_LOAD_PROGRAM);
                    }, 3000);
                }
            } else {
                setShowingTxt(PROGRAM_LOAD_ERROR);
            }
            reader.readAsText(file);
        }
    };

    return (
        <FileSupportWrapper 
            direction = 'right'
            pseudoContent = 'load program from file'
        >
            <input
                type = 'file'
                onChange = {showAndLoadFile}
                accept = {`.${MACHINE_PROGRAM_EXTENSION}`}
                id = 'fileInput'
            />
            <label htmlFor = 'fileInput'>
                Select file
            </label>
            <div>{showingTxt}</div>
        </FileSupportWrapper>
    );
};

export default ReadFromFile;