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

import { RootState } from '../../../../redux/reduxStore';
import { MachineActions } from '../../../../redux/machineStore/actions';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { machineModes, machineStateKeys } from '../../../../redux/machineStore/types';

import { MachineControlButton } from '../MachineControls.styles';

const StartStopButton: React.FC = (): JSX.Element => {

    const { machineState }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { RUNNING, STOPPED } = machineModes;

    const dispatcher = useDispatch();

    const handleStartStopMachine = (): void => {
        if(machineState === RUNNING) {
            dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, STOPPED));
        } else {
            dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, RUNNING));
        }
    };

    return (
        <MachineControlButton
            onClick = {handleStartStopMachine}
            $ifSquare = {true}
        >
            {machineState === RUNNING ? <FaPause/> : <FaPlay/>}
        </MachineControlButton>
    );
};

export default StartStopButton;