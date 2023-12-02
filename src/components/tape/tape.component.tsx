/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import {
  TapeContainer,
  TapeSingleCharacter,
} from '~/app-components/tape/tape.styles';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { RootState } from '~/app-redux/redux-store';

const TapeComponent: React.FC = (): JSX.Element => {
  const { tapeValues, headPosition }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );

  const generateTapeSymbols: JSX.Element[] = tapeValues.valuesArray.map(
    (character, idx) => (
      <TapeSingleCharacter key={idx} $active={headPosition === idx}>
        {character}
      </TapeSingleCharacter>
    )
  );

  return <TapeContainer>{generateTapeSymbols}</TapeContainer>;
};

export default TapeComponent;
