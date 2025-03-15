import type { MutableRefObject } from 'react';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CodeAreaContext } from '@/components/code-area/code-area.component';
import { useIsMount } from '@/hooks/use-is-mount';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';

const S_ROW_HEIGHT = 21;

const useFollowByCurrentPos = (): void => {
  const { actualState }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { ifCodeFollow }: Partial<IPreferencesStoreReduxState> = useSelector(
    (state: RootState) => state.preferences
  );

  const { areaRef } = useContext<Partial<{ areaRef: MutableRefObject<any> }>>(CodeAreaContext);
  const isMount = useIsMount();

  useEffect(() => {
    if ((actualState.prevState || actualState.nextState) && ifCodeFollow && !isMount) {
      const codeArea = areaRef!.current;
      const activePrevState = Number(actualState.prevState?.lineIndex) - 1;
      const visiblyCenter = Math.floor(codeArea.offsetHeight / 2);
      const scrollFromTop = (activePrevState + 1) * S_ROW_HEIGHT;
      codeArea.scrollTo(0, scrollFromTop - visiblyCenter);
    }
  }, [actualState]);
};

export { useFollowByCurrentPos };
