/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';

const TapeComponent = React.lazy(
  () => import('~/app-components/tape/tape.component')
);
const MachineControlsComponent = React.lazy(
  () => import('~/app-components/machine-controls/machine-controls.component')
);
const CurrentStateInfoComponent = React.lazy(
  () =>
    import('~/app-components/current-state-info/current-state-info.component')
);
const AdditionalControlsComponent = React.lazy(
  () =>
    import('~/app-components/additional-controls/additional-controls.component')
);
const CodeAreaComponent = React.lazy(
  () => import('~/app-components/code-area/code-area.component')
);
const LoadExampleProgramComponent = React.lazy(
  () =>
    import(
      '~/app-components/load-examples-program/load-example-program.component'
    )
);
const FilesSupportComponent = React.lazy(
  () => import('~/app-components/files-support/files-support.component')
);

const RootPageComponent: React.FC = (): JSX.Element => (
  <>
    <TapeComponent />
    <MachineControlsComponent />
    <CurrentStateInfoComponent />
    <AdditionalControlsComponent />
    <CodeAreaComponent />
    <LoadExampleProgramComponent />
    <FilesSupportComponent />
  </>
);

export default RootPageComponent;
