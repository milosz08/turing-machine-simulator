import type { JSX } from 'react';
import * as React from 'react';
import { MachineControlsContainer } from './machine-controls.styles';
import { ControlButtonsComponent } from './subcomponents/control-buttons.component';
import { InitialInputFieldComponent } from './subcomponents/initial-input-field.component';
import { InitialStateInfoComponent } from './subcomponents/initial-state-info.component';

const MachineControlsComponent: React.FC = (): JSX.Element => (
  <MachineControlsContainer>
    <InitialInputFieldComponent />
    <ControlButtonsComponent />
    <InitialStateInfoComponent />
  </MachineControlsContainer>
);
export { MachineControlsComponent };
