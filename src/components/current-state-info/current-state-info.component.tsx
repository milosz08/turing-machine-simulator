/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { CurrentStateInfoContainer } from './current-state-info.styles';

const AllStatesCountComponent = React.lazy(
  () => import('./subcomponents/all-states-count.component')
);
const MachineCurrentStateComponent = React.lazy(
  () => import('./subcomponents/machine-current-state.component')
);
const PrevAndNextLabelInfoComponent = React.lazy(
  () => import('./subcomponents/prev-and-next-label-info.component')
);

const CurrentStateInfoComponent: React.FC = (): JSX.Element => (
  <CurrentStateInfoContainer>
    <AllStatesCountComponent />
    <MachineCurrentStateComponent />
    <PrevAndNextLabelInfoComponent />
  </CurrentStateInfoContainer>
);

export default CurrentStateInfoComponent;
