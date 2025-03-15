import type { JSX } from 'react';
import * as React from 'react';
import { ReadFromFileComponent } from '@/components/files-support/subcomponents/read-from-file.component';
import { SaveToFileComponent } from '@/components/files-support/subcomponents/save-to-file.component';
import { FilesSupportContainer } from './files-support.styles';

const FilesSupportComponent: React.FC = (): JSX.Element => (
  <FilesSupportContainer>
    <SaveToFileComponent />
    <ReadFromFileComponent />
  </FilesSupportContainer>
);

export { FilesSupportComponent };
