/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import * as React from 'react';
import { useSelector } from 'react-redux';

import { Directions, FilesService } from '../../../../config/machineConfig';

import { RootState } from '../../../../redux/reduxStore';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';

import { FilesSupportAsideTextValue, FilesSupportButtonElement, FilesSupportWrapper } from '../FilesSupport.styles';

const SaveToFile: React.FC = (): JSX.Element => {

    const { rawCodeAreaInput }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const handleSaveTxtFile = (): void => {
        const element = document.createElement('a');
        const file = new Blob([ rawCodeAreaInput ], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = FilesService.SAMPLE_MACHINE_PROGRAM_NAME;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <FilesSupportWrapper
            $direction = {Directions.LEFT}
            $pseudoContent = 'save program to file'
        >
            <FilesSupportButtonElement
                onClick = {handleSaveTxtFile}
            >
                Save to file
            </FilesSupportButtonElement>
            <FilesSupportAsideTextValue>
                Click here to save your program into .txt file.
            </FilesSupportAsideTextValue>
        </FilesSupportWrapper>
    );
};

export default SaveToFile;