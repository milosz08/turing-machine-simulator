/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { CurrentStateInfoContainer } from './current-state-info.styles';
import AllStatesCountComponent from './subcomponents/all-states-count.component';
import MachineCurrentStateComponent from './subcomponents/machine-current-state.component';
import PrevAndNextLabelInfoComponent from './subcomponents/prev-and-next-label-info.component';

const CurrentStateInfoComponent: React.FC = (): JSX.Element => (
  <CurrentStateInfoContainer>
    <AllStatesCountComponent />
    <MachineCurrentStateComponent />
    <PrevAndNextLabelInfoComponent />
  </CurrentStateInfoContainer>
);

export default CurrentStateInfoComponent;
