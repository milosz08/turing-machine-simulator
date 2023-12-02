/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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

const InitialInputFieldComponent: React.FC = (): JSX.Element => {
  const { tapeValues, disabledControls }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );

  const { initialInput } = tapeValues;
  const dispatcher = useDispatch();

  const handleChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    dispatcher(
      MachineAction.setInitialTapeInputAction({ content: target.value })
    );
  };

  return (
    <MachineControlsInputContainer $content="initial input">
      <MachineControlsInput
        type="text"
        value={initialInput}
        onChange={handleChangeInput}
        disabled={disabledControls.initialInput}
      />
    </MachineControlsInputContainer>
  );
};

export default InitialInputFieldComponent;
