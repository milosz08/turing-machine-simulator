/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { FilesSupportContainer } from './files-support.styles';

const SaveToFileComponent = React.lazy(
  () =>
    import(
      '~/app-components/files-support/subcomponents/save-to-file.component'
    )
);
const ReadFromFileComponent = React.lazy(
  () =>
    import(
      '~/app-components/files-support/subcomponents/read-from-file.component'
    )
);

const FilesSupportComponent: React.FC = (): JSX.Element => (
  <FilesSupportContainer>
    <SaveToFileComponent />
    <ReadFromFileComponent />
  </FilesSupportContainer>
);

export default FilesSupportComponent;
