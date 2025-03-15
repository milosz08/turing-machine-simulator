import type { JSX } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CompileAreaHelpers } from '@/algorithms/compile-area-helpers';
import {
  SyntaxInfosButton,
  TerminalLeftContent,
} from '@/components/code-inspections/code-inspections.styles';
import { useChangeBottomBarInfo } from '@/hooks/use-change-bottom-bar-info';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import * as PrefAction from '@/redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { CodeAreaModes } from '@/utils/code-area-modes';
import { AdditionalMessages } from '@/utils/machine-messages';
import { MachineModes } from '@/utils/machine-modes';

const TerminalLeftInfoContentComponent: React.FC = (): JSX.Element => {
  const { machineState, sourceCodeAreaMode }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { ifOpenErrors }: Partial<IPreferencesStoreReduxState> = useSelector(
    (state: RootState) => state.preferences
  );

  const dispatcher = useDispatch();
  const bottomInfo = useChangeBottomBarInfo();
  const backgroundColors = CompileAreaHelpers.selectBarBackground(sourceCodeAreaMode);

  const { COMPILE_PROGRAM } = MachineModes;
  const { COMPILED, IDLE, RUNNING } = CodeAreaModes;

  const handleOpenErrorsWindow = (): void => {
    dispatcher(PrefAction.toggleErrorsTabVisibilityAction({ isVisible: !ifOpenErrors }));
  };

  return (
    <TerminalLeftContent $animationWorking={sourceCodeAreaMode === IDLE}>
      <SyntaxInfosButton
        title={machineState === COMPILE_PROGRAM ? AdditionalMessages.DEBUGGER_ACCESSIBILITY : ''}
        $background={backgroundColors}
        disabled={sourceCodeAreaMode !== COMPILED}
        onClick={handleOpenErrorsWindow}>
        {bottomInfo()}
      </SyntaxInfosButton>
      {sourceCodeAreaMode !== RUNNING && CompileAreaHelpers.selectShowIcon(machineState)}
    </TerminalLeftContent>
  );
};

export { TerminalLeftInfoContentComponent };
