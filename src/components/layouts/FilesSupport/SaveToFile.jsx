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

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { SAMPLE_MACHINE_PROGRAM_NAME } from '../../../utils/machineConfiguration';

import { FileSupportWrapper } from './FilesSupport.styles';
import { ControlButton } from '../Controls/Controls.styles';

/**
 * Component responsible for generating the field and the button for saving and downloading the current state
 * of the code field in the form of a .txt file.
 * 
 * @returns { JSX.Element }
 */
const SaveToFile = () => {

    const { codearea } = useContext(StoreContext);

    /**
     * Function saves the current state of the field for entering the code to a file on the user's computer.
     */
    const downloadTxtFile = () => {
        const element = document.createElement('a');
        const file = new Blob([codearea], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = SAMPLE_MACHINE_PROGRAM_NAME;
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