/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: use-follow-by-current-pos.ts
 *   Created at: 2023-08-01, 20:49:49
 *   Last updated at: 2023-08-30, 18:35:18
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
import type { MutableRefObject } from 'react';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CodeAreaContext } from '~/app-components/code-area/code-area.component';
import useIsMount from '~/app-hooks/use-is-mount';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';

const S_ROW_HEIGHT = 21;

const useFollowByCurrentPos = (): void => {
  const { actualState }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { ifCodeFollow }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const { areaRef } =
    useContext<Partial<{ areaRef: MutableRefObject<any> }>>(CodeAreaContext);
  const isMount = useIsMount();

  useEffect(() => {
    if (
      (actualState.prevState || actualState.nextState) &&
      ifCodeFollow &&
      !isMount
    ) {
      const codeArea = areaRef!.current;
      const activePrevState = Number(actualState.prevState?.lineIndex) - 1;
      const visiblyCenter = Math.floor(codeArea.offsetHeight / 2);
      const scrollFromTop = (activePrevState + 1) * S_ROW_HEIGHT;
      codeArea.scrollTo(0, scrollFromTop - visiblyCenter);
    }
  }, [actualState]);
};

export default useFollowByCurrentPos;
