/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
