/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: initial-state-info.component.tsx
 *   Created at: 2023-08-01, 17:47:55
 *   Last updated at: 2023-08-30, 18:38:38
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
import { useDispatch, useSelector } from 'react-redux';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import {
  MachineControlsInput,
  MachineControlsInputContainer,
} from '../machine-controls.styles';

const InitialStateInfoComponent: React.FC = (): JSX.Element => {
  const { initialStateLabel, disabledControls }: IMachineStoreReduxState =
    useSelector((state: RootState) => state.machine);

  const dispatcher = useDispatch();

  const handleChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    dispatcher(
      MachineAction.setChangeInputStateAction({ stateLabelValue: target.value })
    );
  };

  return (
    <MachineControlsInputContainer $content="initial state label">
      <MachineControlsInput
        type="text"
        value={initialStateLabel}
        onChange={handleChangeInput}
        disabled={disabledControls.initialInput}
      />
    </MachineControlsInputContainer>
  );
};

export default InitialStateInfoComponent;
