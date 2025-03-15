import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { TapeContainer, TapeSingleCharacter } from '@/components/tape/tape.styles';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { RootState } from '@/redux/redux-store';

const TapeComponent: React.FC = (): JSX.Element => {
  const { tapeValues, headPosition }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );

  const generateTapeSymbols: JSX.Element[] = tapeValues.valuesArray.map((character, idx) => (
    <TapeSingleCharacter key={idx} $active={headPosition === idx}>
      {character}
    </TapeSingleCharacter>
  ));

  return <TapeContainer>{generateTapeSymbols}</TapeContainer>;
};

export { TapeComponent };
