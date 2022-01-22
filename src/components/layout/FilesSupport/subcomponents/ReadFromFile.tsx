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
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Directions, FilesService } from '../../../../config/machineConfig';

import { MachineActions } from '../../../../redux/machineStore/actions';
import { machineStateKeys } from '../../../../redux/machineStore/types';

import { FilesSupportAsideTextValue, FilesSupportInput, FilesSupportLabel, FilesSupportWrapper } from '../FilesSupport.styles';

const ReadFromFile: React.FC = (): JSX.Element => {

    const { CLICK_TO_LOAD_PROGRAM, SUCCESS_LOAD_PROGRAM, PROGRAM_LOAD_ERROR } = FilesService;

    const [ showingTxt, setShowingTxt ] = useState<FilesService>(CLICK_TO_LOAD_PROGRAM);
    const dispatcher = useDispatch();

    const handleLoadMachineProgramFromFile = (): void => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            const element = document.getElementById('fileInput') as HTMLInputElement;
            const file = element.files![0];
            const reader = new FileReader();
            const textFile = /text.*/;
            if (file.type.match(textFile)) {
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    dispatcher(MachineActions.changeSingleField(machineStateKeys.RAW_CODE_AREA_INPUT, e.target!.result));
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
        <FilesSupportWrapper
            $direction = {Directions.RIGHT}
            $pseudoContent = 'load program from file'
        >
            <FilesSupportInput
                type = 'file'
                onChange = {handleLoadMachineProgramFromFile}
                accept = {`.${FilesService.MACHINE_PROGRAM_EXTENSION}`}
                id = 'fileInput'
            />
            <FilesSupportLabel
                htmlFor = 'fileInput'
            >
                Select file
            </FilesSupportLabel>
            <FilesSupportAsideTextValue>
                {showingTxt}
            </FilesSupportAsideTextValue>
        </FilesSupportWrapper>
    );
};

export default ReadFromFile;