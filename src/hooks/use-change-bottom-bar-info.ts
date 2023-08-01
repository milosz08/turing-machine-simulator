/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: use-change-bottom-bar-info.ts
 * Last modified: 8/1/23, 9:11 PM
 * Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import { useSelector } from "react-redux";

import { RootState } from "~/app-redux/redux-store";
import { IMachineStoreReduxState } from "~/app-redux/machine-store/state";
import { IPreferencesStoreReduxState } from "~/app-redux/preferences-store/state";
import { CodeAreaModes } from "~/app-utils/code-area-modes";
import { CompilerSyntaxIssues, CompileStatus } from "~/app-utils/machine-messages";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const useChangeBottomBarInfo = (): () => string => {

    const mainState: IMachineStoreReduxState = useSelector((state: RootState) => state.machine);
    const { cursorPosition }: IPreferencesStoreReduxState = useSelector((state: RootState) => state.preferences);

    const { machineState, rawCodeAreaInput, allStatesCount, actualState, machineTuples, sourceCodeAreaMode } = mainState;
    const { ERROR_LEVEL, WARNING_LEVEL } = CompilerSyntaxIssues;

    const allChars = rawCodeAreaInput.replace(/(\r\n|\n|\r)/gm, "").replace(/ /g, "").length;
    const errorsArr = machineTuples.errors.filter(element => element.danger === ERROR_LEVEL);
    const warningsArr = machineTuples.errors.filter(element => element.danger === WARNING_LEVEL);

    return (): string => {
        switch(sourceCodeAreaMode) {
            case CodeAreaModes.COMPILED:
                return (
                    `Compile status: ${CompileStatus[machineState]}, Errors: ${errorsArr.length},
                    Warnings: ${warningsArr.length}`
                );
            case CodeAreaModes.RUNNING:
                return (
                    `State counter ${allStatesCount}, Previous label: ${actualState.prevState?.currentState},
                    Next label: ${actualState.nextState?.currentState}`
                );
            case CodeAreaModes.IDLE:
                return (
                    `Ln ${cursorPosition.ln}, Col ${cursorPosition.col} (${cursorPosition.sel} selected),
                    Total signs: ${allChars}`
                );
            default:
                throw new Error(`Unexpected mode. Mode ${sourceCodeAreaMode} is not recognised by machine.`);
        }
    };
};

export default useChangeBottomBarInfo;
