/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';

const ThirdPartyLibrariesComponent = React.lazy(
  () =>
    import(
      '~/app-components/third-party-libraries/third-party-libraries.component'
    )
);

const LibrariesPageComponent: React.FC = (): JSX.Element => (
  <ThirdPartyLibrariesComponent />
);

export default LibrariesPageComponent;
