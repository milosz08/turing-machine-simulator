/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import { useSelector } from 'react-redux';

import { CompilerSyntaxIssues, CompileStatus } from '../config/machineMessages';

import { RootState } from '../redux/reduxStore';
import { codeAreaModes } from '../redux/machineStore/types';
import { MachineInitialTypes } from '../redux/machineStore/initialState';
import { PreferencesInitialTypes } from '../redux/preferencesStore/initialState';

const useChangeBottomBarInfo = () => {

    const mainState: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { cursorPosition }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);

    const { machineState, rawCodeAreaInput, allStatesCount, actualState, machineTuples, sourceCodeAreaMode } = mainState;
    const { ERROR_LEVEL, WARNING_LEVEL } = CompilerSyntaxIssues;

    const allChars = rawCodeAreaInput.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '').length;
    const errorsArr = machineTuples.errors.filter(element => element.danger === ERROR_LEVEL);
    const warningsArr = machineTuples.errors.filter(element => element.danger === WARNING_LEVEL);

    return (): string => {
        switch(sourceCodeAreaMode) {
            case codeAreaModes.COMPILED:
                return (
                    `Compile status: ${CompileStatus[machineState]}, Errors: ${errorsArr.length},
                     Warnings: ${warningsArr.length}`
                );
            case codeAreaModes.RUNNING:
                return (
                    `State counter ${allStatesCount}, Previous label: ${actualState.prevState?.currentState},
                     Next label: ${actualState.nextState?.currentState}`
                );
            case codeAreaModes.IDLE:
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