/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompileAreaHelpers from '~/app-algorithms/compile-area-helpers';
import {
  SyntaxInfosButton,
  TerminalLeftContent,
} from '~/app-components/code-inspections/code-inspections.styles';
import useChangeBottomBarInfo from '~/app-hooks/use-change-bottom-bar-info';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import * as PrefAction from '~/app-redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { CodeAreaModes } from '~/app-utils/code-area-modes';
import { AdditionalMessages } from '~/app-utils/machine-messages';
import { MachineModes } from '~/app-utils/machine-modes';

const TerminalLeftInfoContentComponent: React.FC = (): JSX.Element => {
  const { machineState, sourceCodeAreaMode }: IMachineStoreReduxState =
    useSelector((state: RootState) => state.machine);
  const { ifOpenErrors }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const dispatcher = useDispatch();
  const bottomInfo = useChangeBottomBarInfo();
  const backgroundColors =
    CompileAreaHelpers.selectBarBackground(sourceCodeAreaMode);

  const { COMPILE_PROGRAM } = MachineModes;
  const { COMPILED, IDLE, RUNNING } = CodeAreaModes;

  const handleOpenErrorsWindow = (): void => {
    dispatcher(
      PrefAction.toggleErrorsTabVisibilityAction({ isVisible: !ifOpenErrors })
    );
  };

  return (
    <TerminalLeftContent $animationWorking={sourceCodeAreaMode === IDLE}>
      <SyntaxInfosButton
        title={
          machineState === COMPILE_PROGRAM
            ? AdditionalMessages.DEBUGGER_ACCESSIBILITY
            : ''
        }
        $background={backgroundColors}
        disabled={sourceCodeAreaMode !== COMPILED}
        onClick={handleOpenErrorsWindow}>
        {bottomInfo()}
      </SyntaxInfosButton>
      {sourceCodeAreaMode !== RUNNING &&
        CompileAreaHelpers.selectShowIcon(machineState)}
    </TerminalLeftContent>
  );
};

export default TerminalLeftInfoContentComponent;
