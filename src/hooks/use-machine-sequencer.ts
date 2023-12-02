/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
