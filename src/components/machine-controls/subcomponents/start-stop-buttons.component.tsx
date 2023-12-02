/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { CompilerSyntaxIssues } from '~/app-utils/machine-messages';
import { MachineModes } from '~/app-utils/machine-modes';
import { MachineControlButton } from '../machine-controls.styles';

const StartStopButtonsComponent: React.FC = (): JSX.Element => {
  const stateMach: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );

  const { machineState, machineTuples, disabledControls } = stateMach;

  const errorsLength = machineTuples.errors.filter(
    el => el.danger !== CompilerSyntaxIssues.WARNING_LEVEL
  ).length;
  const dispatcher = useDispatch();

  const handleStartStopMachine = (): void => {
    dispatcher(MachineAction.machineStartStopTogglingAction());
  };

  return (
    <MachineControlButton
      onClick={handleStartStopMachine}
      $ifSquare={true}
      disabled={errorsLength > 0 || disabledControls.controlButtons}>
      {machineState === MachineModes.RUNNING ? <FaPause /> : <FaPlay />}
    </MachineControlButton>
  );
};

export default StartStopButtonsComponent;
