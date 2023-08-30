/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: read-from-file.component.tsx
 *   Created at: 2023-08-01, 21:53:34
 *   Last updated at: 2023-08-30, 18:40:55
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { Directions, FilesService } from '~/app-utils/machine-config';
import {
  FilesSupportAsideTextValue,
  FilesSupportInput,
  FilesSupportLabel,
  FilesSupportWrapper,
} from '../files-support.styles';

const ReadFromFileComponent: React.FC = (): JSX.Element => {
  const [showingTxt, setShowingTxt] = useState<FilesService>(
    FilesService.CLICK_TO_LOAD_PROGRAM
  );
  const dispatcher = useDispatch();

  const handleLoadMachineProgramFromFile = (): void => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const element = document.getElementById('fileInput') as HTMLInputElement;
      const file = element.files![0];
      const reader = new FileReader();
      const textFile = /text.*/;
      if (file.type.match(textFile)) {
        reader.onload = (e: ProgressEvent<FileReader>) => {
          dispatcher(
            MachineAction.loadExampleProgramAction({
              sourceCode: e.target.result as string,
            })
          );
          setShowingTxt(FilesService.SUCCESS_LOAD_PROGRAM);
          setTimeout(() => {
            setShowingTxt(FilesService.CLICK_TO_LOAD_PROGRAM);
          }, 3000);
        };
      } else {
        setShowingTxt(FilesService.PROGRAM_LOAD_ERROR);
      }
      reader.readAsText(file);
    }
  };

  return (
    <FilesSupportWrapper
      $direction={Directions.RIGHT}
      $pseudoContent="load program from file">
      <FilesSupportInput
        type="file"
        onChange={handleLoadMachineProgramFromFile}
        accept={`.${FilesService.MACHINE_PROGRAM_EXTENSION}`}
        id="fileInput"
      />
      <FilesSupportLabel htmlFor="fileInput">Select file</FilesSupportLabel>
      <FilesSupportAsideTextValue>{showingTxt}</FilesSupportAsideTextValue>
    </FilesSupportWrapper>
  );
};

export default ReadFromFileComponent;
