/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import ReadFromFileComponent from '~/app-components/files-support/subcomponents/read-from-file.component';
import SaveToFileComponent from '~/app-components/files-support/subcomponents/save-to-file.component';
import { FilesSupportContainer } from './files-support.styles';

const FilesSupportComponent: React.FC = (): JSX.Element => (
  <FilesSupportContainer>
    <SaveToFileComponent />
    <ReadFromFileComponent />
  </FilesSupportContainer>
);

export default FilesSupportComponent;
