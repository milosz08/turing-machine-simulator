import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { RootState } from '@/redux/redux-store';
import { MachineCurrentStateInfoContainer } from '../current-state-info.styles';

const AllStatesCountComponent: React.FC = (): JSX.Element => {
  const { allStatesCount }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );

  return (
    <MachineCurrentStateInfoContainer $content="states count">
      {allStatesCount}
    </MachineCurrentStateInfoContainer>
  );
};

export { AllStatesCountComponent };
