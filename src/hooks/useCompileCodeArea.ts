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

import { useDispatch, useSelector } from 'react-redux';

import CodeAreaCompiler from '../algorithms/CodeAreaCompiler';

import { RootState } from '../redux/reduxStore';
import { MachineActions } from '../redux/machineStore/actions';
import { MachineInitialTypes } from '../redux/machineStore/initialState';
import { codeAreaModes, machineModes, machineStateKeys } from '../redux/machineStore/types';

const useCompileCodeArea = () => {

    const initialState: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const {
        TAPE_VALUES, INITIAL_INPUT, MACHINE_STATE, MACHINE_TUPLES, DISABLED_CONTROLS, COMPILE_BUTTON, RESET_BUTTON,
        SOURCE_CODE_MODES
    } = machineStateKeys;

    const { rawCodeAreaInput, initialStateLabel } = initialState;
    const dispatcher = useDispatch();

    return () => {
        const compiler = new CodeAreaCompiler(rawCodeAreaInput, initialStateLabel);
        const compileIndicator = compiler.validateCodeArea();
        const initialInput = compiler.setInitialInput();
        let compileStatus: machineModes = machineModes.COMPILE_FAILURE;
        if(initialInput) {
            dispatcher(MachineActions.changeSecondLevelSingleField(TAPE_VALUES, INITIAL_INPUT, initialInput));
        }
        if(compileIndicator) {
            compileStatus = machineModes.COMPILE_SUCCESSFUL;
            dispatcher(MachineActions.changeSecondLevelSingleField(DISABLED_CONTROLS, RESET_BUTTON, false));
        }
        dispatcher(MachineActions.changeSecondLevelSingleField(DISABLED_CONTROLS, COMPILE_BUTTON, true));
        dispatcher(MachineActions.changeSingleField(MACHINE_STATE, compileStatus));
        dispatcher(MachineActions.changeSingleField(SOURCE_CODE_MODES, codeAreaModes.COMPILED));
        dispatcher(MachineActions.changeSingleField(MACHINE_TUPLES, {
            labels: compiler.tuplesArray, errors: compiler.problemsArray
        }));
    };

};

export default useCompileCodeArea;