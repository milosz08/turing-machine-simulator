import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { MachineMainMessageInfoContainer } from '@/components/current-state-info/current-state-info.styles';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { RootState } from '@/redux/redux-store';
import { machineMessages } from '@/utils/machine-messages';

const MachineCurrentStateComponent: React.FC = (): JSX.Element => {
  const { machineState, machineCustomMessage }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const currentState = machineCustomMessage || machineMessages[machineState];

  return <MachineMainMessageInfoContainer>{currentState}</MachineMainMessageInfoContainer>;
};

export { MachineCurrentStateComponent };
