import type { JSX } from 'react';
import * as React from 'react';
import { SuspenseLoaderContainer, SuspenseLoaderSpinner } from './suspense-loader.styles';

const SuspenseLoaderComponent: React.FC = (): JSX.Element => (
  <SuspenseLoaderContainer>
    <SuspenseLoaderSpinner />
  </SuspenseLoaderContainer>
);

export { SuspenseLoaderComponent };
