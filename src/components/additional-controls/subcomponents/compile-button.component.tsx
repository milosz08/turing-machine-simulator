/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { CompileButtonElement } from '../additional-controls.styles';

const CompileButtonComponent: React.FC = (): JSX.Element => {
  const machineState: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { disabledControls, rawCodeAreaInput } = machineState;

  const dispatcher = useDispatch();

  const handleCompileCodeArea = (): void => {
    dispatcher(MachineAction.compileCodeAreaAction());
  };

  useEffect(() => {
    dispatcher(MachineAction.enableCompileButtonAction());
  }, [rawCodeAreaInput]);

  return (
    <CompileButtonElement
      onClick={handleCompileCodeArea}
      disabled={disabledControls.compileButton}>
      To compile program, press this button or click outside the code area.
    </CompileButtonElement>
  );
};

export default CompileButtonComponent;
