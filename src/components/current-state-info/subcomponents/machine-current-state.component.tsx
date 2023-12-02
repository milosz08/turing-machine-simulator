/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import { MachineMainMessageInfoContainer } from '~/app-components/current-state-info/current-state-info.styles';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { machineMessages } from '~/app-utils/machine-messages';

const MachineCurrentStateComponent: React.FC = (): JSX.Element => {
  const { machineState, machineCustomMessage }: IMachineStoreReduxState =
    useSelector((state: RootState) => state.machine);
  const currentState = machineCustomMessage || machineMessages[machineState];

  return (
    <MachineMainMessageInfoContainer>
      {currentState}
    </MachineMainMessageInfoContainer>
  );
};

export default MachineCurrentStateComponent;
