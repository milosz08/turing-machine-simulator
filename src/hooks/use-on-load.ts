/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';

const useOnLoad = (): void => {
  const { tapeValues }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(MachineAction.loadInitialInputOnTapeAction());
  }, [tapeValues.initialInput]);
};

export default useOnLoad;
