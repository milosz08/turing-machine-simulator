/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
