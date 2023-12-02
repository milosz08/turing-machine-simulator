/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { CodeAreaModes } from '~/app-utils/code-area-modes';
import {
  CompileStatus,
  CompilerSyntaxIssues,
} from '~/app-utils/machine-messages';

const useChangeBottomBarInfo = (): (() => string) => {
  const mainState: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { cursorPosition }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const {
    machineState,
    rawCodeAreaInput,
    allStatesCount,
    actualState,
    machineTuples,
    sourceCodeAreaMode,
  } = mainState;

  const { ERROR_LEVEL, WARNING_LEVEL } = CompilerSyntaxIssues;

  const allChars = rawCodeAreaInput
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/ /g, '').length;

  const errorsArr = machineTuples.errors.filter(
    element => element.danger === ERROR_LEVEL
  );

  const warningsArr = machineTuples.errors.filter(
    element => element.danger === WARNING_LEVEL
  );

  return (): string => {
    switch (sourceCodeAreaMode) {
      case CodeAreaModes.COMPILED:
        return `Compile status: ${CompileStatus[machineState]}, Errors: ${errorsArr.length},
                    Warnings: ${warningsArr.length}`;
      case CodeAreaModes.RUNNING:
        return `State counter ${allStatesCount}, Previous label: ${actualState.prevState?.currentState},
                    Next label: ${actualState.nextState?.currentState}`;
      case CodeAreaModes.IDLE:
        return `Ln ${cursorPosition.ln}, Col ${cursorPosition.col} (${cursorPosition.sel} selected),
                    Total signs: ${allChars}`;
      default:
        throw new Error(
          `Unexpected mode. Mode ${sourceCodeAreaMode} is not recognised by machine.`
        );
    }
  };
};

export default useChangeBottomBarInfo;
