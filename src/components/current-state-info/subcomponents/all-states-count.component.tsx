/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: all-states-count.component.tsx
 *   Created at: 2023-08-01, 19:02:27
 *   Last updated at: 2023-08-30, 18:41:32
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
import { useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { MachineCurrentStateInfoContainer } from '../current-state-info.styles';

const AllStatesCountComponent: React.FC = (): JSX.Element => {
  const { allStatesCount }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );

  return (
    <MachineCurrentStateInfoContainer $content="states count">
      {allStatesCount}
    </MachineCurrentStateInfoContainer>
  );
};

export default AllStatesCountComponent;
