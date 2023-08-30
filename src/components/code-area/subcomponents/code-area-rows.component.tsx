/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: code-area-rows.component.tsx
 *   Created at: 2023-08-01, 19:58:30
 *   Last updated at: 2023-08-30, 18:43:21
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
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

const CodeAreaSingleRowComponent = React.lazy(
  () => import('../subcomponents/code-area-single-row.component')
);
const CodeAreaDoubleIndicatorMarksComponent = React.lazy(
  () => import('../subcomponents/code-area-double-indicator-marks.component')
);

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
