import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useFollowByCurrentPos } from '@/hooks/use-follow-by-current-pos';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { CodeAreaRowsContainer, CodeAreaRowsCounter } from '../code-area.styles';
import { CodeAreaDoubleIndicatorMarksComponent } from '../subcomponents/code-area-double-indicator-marks.component';
import { CodeAreaSingleRowComponent } from '../subcomponents/code-area-single-row.component';

const CodeAreaRowsComponent: React.FC = (): JSX.Element => {
  const { rawCodeAreaInput, actualState }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { codeScrollPos }: Partial<IPreferencesStoreReduxState> = useSelector(
    (state: RootState) => state.preferences
  );

  useFollowByCurrentPos();

  const countOfLines = rawCodeAreaInput.split('\n').length;
  const activePrevState = Number(actualState.prevState?.lineIndex) - 1;
  const activeNextState = Number(actualState.nextState?.lineIndex) - 1;

  const generateCountingRows = Array.from({ length: countOfLines }, (_, i) => i).map(iter =>
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
      <CodeAreaRowsCounter $positionY={codeScrollPos}>{generateCountingRows}</CodeAreaRowsCounter>
    </CodeAreaRowsContainer>
  );
};

export { CodeAreaRowsComponent };
