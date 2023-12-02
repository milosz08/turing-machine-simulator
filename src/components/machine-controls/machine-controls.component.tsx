/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { MachineControlsContainer } from './machine-controls.styles';

const InitialInputFieldComponent = React.lazy(
  () => import('./subcomponents/initial-input-field.component')
);
const ControlButtonsComponent = React.lazy(
  () => import('./subcomponents/control-buttons.component')
);
const InitialStateInfoComponent = React.lazy(
  () => import('./subcomponents/initial-state-info.component')
);

const MachineControlsComponent: React.FC = (): JSX.Element => (
  <MachineControlsContainer>
    <InitialInputFieldComponent />
    <ControlButtonsComponent />
    <InitialStateInfoComponent />
  </MachineControlsContainer>
);
export default MachineControlsComponent;
