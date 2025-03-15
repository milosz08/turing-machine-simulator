import type { JSX } from 'react';
import * as React from 'react';
import { AdditionalControlsComponent } from '@/components/additional-controls/additional-controls.component';
import { CodeAreaComponent } from '@/components/code-area/code-area.component';
import { CurrentStateInfoComponent } from '@/components/current-state-info/current-state-info.component';
import { FilesSupportComponent } from '@/components/files-support/files-support.component';
import { LoadExampleProgramComponent } from '@/components/load-examples-program/load-example-program.component';
import { MachineControlsComponent } from '@/components/machine-controls/machine-controls.component';
import { TapeComponent } from '@/components/tape/tape.component';

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
