import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MachineAction from '@/redux/machine-store/actions';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { RootState } from '@/redux/redux-store';

const useOnLoad = (): void => {
  const { tapeValues }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(MachineAction.loadInitialInputOnTapeAction());
  }, [tapeValues.initialInput]);
};

export { useOnLoad };
