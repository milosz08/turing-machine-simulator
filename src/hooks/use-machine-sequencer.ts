import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsMount } from '@/hooks/use-is-mount';
import * as MachineAction from '@/redux/machine-store/actions';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { MachineModes } from '@/utils/machine-modes';

const useMachineSequencer = (): void => {
  const { machineState, machineFinish }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { headSpeed }: Partial<IPreferencesStoreReduxState> = useSelector(
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

export { useMachineSequencer };
