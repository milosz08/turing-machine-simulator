/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';
import { MachineCurrentStateInfoContainer } from '../current-state-info.styles';

const PrevAndNextLabelInfoComponent: React.FC = (): JSX.Element => {
  const { actualState }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { prevState, nextState } = actualState;

  return (
    <MachineCurrentStateInfoContainer $content="labels info">
      {prevState || nextState
        ? `${prevState!.currentState} -> ${nextState!.currentState}`
        : '-'}
    </MachineCurrentStateInfoContainer>
  );
};

export default PrevAndNextLabelInfoComponent;
