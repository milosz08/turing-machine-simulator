/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import {
  SuspenseLoaderContainer,
  SuspenseLoaderSpinner,
} from './suspense-loader.styles';

const SuspenseLoaderComponent: React.FC = (): JSX.Element => (
  <SuspenseLoaderContainer>
    <SuspenseLoaderSpinner />
  </SuspenseLoaderContainer>
);

export default SuspenseLoaderComponent;
