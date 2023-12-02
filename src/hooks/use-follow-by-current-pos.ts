/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
