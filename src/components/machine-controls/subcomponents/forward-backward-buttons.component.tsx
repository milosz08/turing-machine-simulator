/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: forward-backward-buttons.component.tsx
 *   Created at: 2023-08-01, 17:47:34
 *   Last updated at: 2023-08-30, 18:37:12
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
import type { JSX } from 'react';
import * as React from 'react';
import { useEffect } from 'react';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { MachineModes } from '~/app-utils/machine-modes';
import { MachineControlButton } from '../machine-controls.styles';

type Props = {
  render: () => JSX.Element;
  dispatcherCallback: ActionCreatorWithOptionalPayload<any, any>;
  machineMode: MachineModes;
  disabledItem: boolean;
};

const ForwardBackwardButtonsComponent: React.FC<Props> = ({
  render,
  dispatcherCallback,
  machineMode,
  disabledItem,
}): JSX.Element => {
  const { machineFinish }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const dispatcher = useDispatch();

  const handleForwardBackward = (): void => {
    dispatcher(dispatcherCallback());
    dispatcher(
      MachineAction.switchMachineStateAction({ selectedState: machineMode })
    );
  };

  useEffect(() => {
    if (machineFinish) {
      dispatcher(
        MachineAction.switchMachineStateAction({
          selectedState: MachineModes.FINISH,
        })
      );
    }
  }, [machineFinish]);

  return (
    <MachineControlButton
      $ifSquare={true}
      onClick={handleForwardBackward}
      disabled={disabledItem}>
      {render()}
    </MachineControlButton>
  );
};

export default ForwardBackwardButtonsComponent;
