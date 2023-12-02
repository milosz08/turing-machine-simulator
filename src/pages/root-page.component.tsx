/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import AdditionalControlsComponent from '~/app-components/additional-controls/additional-controls.component';
import CodeAreaComponent from '~/app-components/code-area/code-area.component';
import CurrentStateInfoComponent from '~/app-components/current-state-info/current-state-info.component';
import FilesSupportComponent from '~/app-components/files-support/files-support.component';
import LoadExampleProgramComponent from '~/app-components/load-examples-program/load-example-program.component';
import MachineControlsComponent from '~/app-components/machine-controls/machine-controls.component';
import TapeComponent from '~/app-components/tape/tape.component';

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
