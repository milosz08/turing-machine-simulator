/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: use-machine-sequencer.ts
 *   Created at: 2023-08-01, 22:02:58
 *   Last updated at: 2023-08-30, 18:35:32
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
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIsMount from '~/app-hooks/use-is-mount';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { MachineModes } from '~/app-utils/machine-modes';

const useMachineSequencer = (): void => {
  const { machineState, machineFinish }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { headSpeed }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const dispatcher = useDispatch();
  const isMount = useIsMount();
  const increment = useRef<any>(null);

  useEffect(() => {
    const intervalSingleMove = (): void => {
      if (!isMount) {
        const intervalFunction = (): void => {
          dispatcher(MachineAction.oneStepForwardAction());
        };
        if (machineState === MachineModes.RUNNING) {
          increment.current = setInterval(intervalFunction, headSpeed);
        } else if (machineState === MachineModes.STOPPED || machineFinish) {
          clearInterval(increment.current);
        }
      }
    };
    intervalSingleMove();
  }, [machineState, machineFinish]);
};

export default useMachineSequencer;
