/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { MACHINE_MESSAGES, MACHINE_PROGRAM_EXTENSION } from '../../../utils/machineConfiguration';

import { FileSupportWrapper } from './FilesSupport.styles';

/**
 * Component responsible for the generation of the input field and the button for loading Turing machine programs.
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