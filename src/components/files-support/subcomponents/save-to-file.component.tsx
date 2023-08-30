/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: save-to-file.component.tsx
 *   Created at: 2023-08-01, 21:53:43
 *   Last updated at: 2023-08-30, 18:41:07
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
import { useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { Directions, FilesService } from '~/app-utils/machine-config';
import {
  FilesSupportAsideTextValue,
  FilesSupportButtonElement,
  FilesSupportWrapper,
} from '../files-support.styles';

const SaveToFileComponent: React.FC = (): JSX.Element => {
  const { rawCodeAreaInput }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );

  const handleSaveTxtFile = (): void => {
    const element = document.createElement('a');
    const file = new Blob([rawCodeAreaInput], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = FilesService.SAMPLE_MACHINE_PROGRAM_NAME;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <FilesSupportWrapper
      $direction={Directions.LEFT}
      $pseudoContent="save program to file">
      <FilesSupportButtonElement onClick={handleSaveTxtFile}>
        Save to file
      </FilesSupportButtonElement>
      <FilesSupportAsideTextValue>
        Click here to save your program into .txt file.
      </FilesSupportAsideTextValue>
    </FilesSupportWrapper>
  );
};

export default SaveToFileComponent;
