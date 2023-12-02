/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import useFollowByCurrentPos from '~/app-hooks/use-follow-by-current-pos';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import {
  CodeAreaRowsContainer,
  CodeAreaRowsCounter,
} from '../code-area.styles';
import CodeAreaDoubleIndicatorMarksComponent from '../subcomponents/code-area-double-indicator-marks.component';
import CodeAreaSingleRowComponent from '../subcomponents/code-area-single-row.component';

const CodeAreaRowsComponent: React.FC = (): JSX.Element => {
  const { rawCodeAreaInput, actualState }: IMachineStoreReduxState =
    useSelector((state: RootState) => state.machine);
  const { codeScrollPos }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  useFollowByCurrentPos();

  const countOfLines = rawCodeAreaInput.split('\n').length;
  const activePrevState = Number(actualState.prevState?.lineIndex) - 1;
  const activeNextState = Number(actualState.nextState?.lineIndex) - 1;

  const generateCountingRows = Array.from(
    { length: countOfLines },
    (_, i) => i
  ).map(iter =>
    iter === activePrevState && iter === activeNextState ? (
      <CodeAreaDoubleIndicatorMarksComponent key={iter} iteration={iter} />
    ) : (
      <CodeAreaSingleRowComponent
        key={iter}
        iterator={iter}
        prev={iter === activePrevState}
        next={iter === activeNextState}
      />
    )
  );

  return (
    <CodeAreaRowsContainer>
      <CodeAreaRowsCounter $positionY={codeScrollPos}>
        {generateCountingRows}
      </CodeAreaRowsCounter>
    </CodeAreaRowsContainer>
  );
};

export default CodeAreaRowsComponent;
