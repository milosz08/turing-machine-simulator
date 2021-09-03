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

import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { FileSupportWrapper } from './FilesSupport.styles';

/**
 * @details Component responsible for the generation of the input field and the button for loading Turing machine programs.
 * 
 * @returns { JSX.Element }
 */
const ReadFromFile = () => {

    const { setCodearea } = useContext(StoreContext);
    const [ showingTxt, setShowingTxt ] = useState('Click here to load program from your PC.');

    const showAndLoadFile = () => {
        if(window.File && window.FileReader && window.FileList && window.Blob) {
            const file = document.getElementById('fileInput').files[0];
            const reader = new FileReader();

            const textFile = /text.*/;

            if(file.type.match(textFile)) {
                reader.onload = e => {
                    setCodearea(e.target.result);
                    setShowingTxt('Your Turing Machine Program was succesfully loaded!');
                    setTimeout(() => {
                        setShowingTxt('Click here to load program from your PC.');
                    }, 3000);
                }
            } else {
                setShowingTxt('Error! Turing Machine Program not loaded!');
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
                accept = '.txt'
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