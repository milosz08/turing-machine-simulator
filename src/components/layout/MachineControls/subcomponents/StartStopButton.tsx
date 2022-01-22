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

import * as React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { CompilerSyntaxIssues } from '../../../../config/machineMessages';

import { RootState } from '../../../../redux/reduxStore';
import { MachineActions } from '../../../../redux/machineStore/actions';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { codeAreaModes, machineModes, machineStateKeys } from '../../../../redux/machineStore/types';

import { MachineControlButton } from '../MachineControls.styles';

const StartStopButton: React.FC = (): JSX.Element => {

    const stateMach: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const { machineState, machineTuples, disabledControls } = stateMach;
    const { MACHINE_STATE, DISABLED_CONTROLS, INITIAL_INPUT, SOURCE_CODE_MODES } = machineStateKeys;
    const { RUNNING, STOPPED } = machineModes;

    const errorsLength = machineTuples.errors.filter((el: any) => el.danger !== CompilerSyntaxIssues.WARNING_LEVEL).length;
    const dispatcher = useDispatch();

    const handleStartStopMachine = (): void => {
        if(machineState === RUNNING) {
            dispatcher(MachineActions.changeSingleField(MACHINE_STATE, STOPPED));
        } else {
            dispatcher(MachineActions.changeSingleField(MACHINE_STATE, RUNNING));
            dispatcher(MachineActions.changeSingleField(SOURCE_CODE_MODES, codeAreaModes.RUNNING));
        }
        dispatcher(MachineActions.changeSecondLevelSingleField(DISABLED_CONTROLS, INITIAL_INPUT, true));
    };

    return (
        <MachineControlButton
            onClick = {handleStartStopMachine}
            $ifSquare = {true}
            disabled = {errorsLength > 0 || disabledControls.controlButtons}
        >
            {machineState === RUNNING ? <FaPause/> : <FaPlay/>}
        </MachineControlButton>
    );
};

export default StartStopButton;