/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import * as PrefAction from '~/app-redux/preferences-store/actions';
import { RootState } from '~/app-redux/redux-store';
import { HeadSpeed } from '~/app-utils/head-speed';
import {
  MachineChangeAdditionalValuesContainer,
  MachineChangeHeadSpeedRangeInput,
} from '../additional-controls.styles';

const ChangeHeadSpeedComponent: React.FC = (): JSX.Element => {
  const { disabledControls }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { MIN, MAX } = HeadSpeed;

  const [speed, setSpeed] = useState<number>(MAX);
  const dispatcher = useDispatch();

  const handleChangeHeadSpeed = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setSpeed(Number(target.value));
    dispatcher(
      PrefAction.changeHeadSpeedAction({ rawHeadSpeed: target.valueAsNumber })
    );
  };

  return (
    <MachineChangeAdditionalValuesContainer $content="head speed">
      <MachineChangeHeadSpeedRangeInput
        type="range"
        value={speed}
        min={MIN}
        max={MAX}
        onChange={handleChangeHeadSpeed}
        disabled={disabledControls.initialInput}
      />
    </MachineChangeAdditionalValuesContainer>
  );
};

export default ChangeHeadSpeedComponent;
