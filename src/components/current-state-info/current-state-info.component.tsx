/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: current-state-info.component.tsx
 *   Created at: 2023-08-01, 18:59:09
 *   Last updated at: 2023-08-30, 18:41:51
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
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
