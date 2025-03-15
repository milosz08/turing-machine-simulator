import type { JSX } from 'react';
import * as React from 'react';
import { CurrentStateInfoContainer } from './current-state-info.styles';
import { AllStatesCountComponent } from './subcomponents/all-states-count.component';
import { MachineCurrentStateComponent } from './subcomponents/machine-current-state.component';
import { PrevAndNextLabelInfoComponent } from './subcomponents/prev-and-next-label-info.component';

const CurrentStateInfoComponent: React.FC = (): JSX.Element => (
  <CurrentStateInfoContainer>
    <AllStatesCountComponent />
    <MachineCurrentStateComponent />
    <PrevAndNextLabelInfoComponent />
  </CurrentStateInfoContainer>
);

export { CurrentStateInfoComponent };
