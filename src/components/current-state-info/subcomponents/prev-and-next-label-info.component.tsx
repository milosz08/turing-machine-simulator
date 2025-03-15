import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { RootState } from '@/redux/redux-store';
import { MachineCurrentStateInfoContainer } from '../current-state-info.styles';

const PrevAndNextLabelInfoComponent: React.FC = (): JSX.Element => {
  const { actualState }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { prevState, nextState } = actualState;

  return (
    <MachineCurrentStateInfoContainer $content="labels info">
      {prevState || nextState ? `${prevState!.currentState} -> ${nextState!.currentState}` : '-'}
    </MachineCurrentStateInfoContainer>
  );
};

export { PrevAndNextLabelInfoComponent };
