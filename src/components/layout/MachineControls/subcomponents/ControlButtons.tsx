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
import { useDispatch } from 'react-redux';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';

import { MachineActions } from '../../../../redux/machineStore/actions';
import { PrefActions } from '../../../../redux/preferencesStore/actions';
import { headSpeed, prefStateKeys } from '../../../../redux/preferencesStore/types';
import { machineModes, machineStateKeys } from '../../../../redux/machineStore/types';

import { MachineControlButton, MachineControlsButtonsContainer } from '../MachineControls.styles';

const ForwardBackwardButton = React.lazy(() => import('./ForwardBackwardButton'));
const StartStopButton = React.lazy(() => import('./StartStopButton'));

const ControlButtons: React.FC = (): JSX.Element => {

    const dispatcher = useDispatch();

    const handleFullSpeed = (): void => {
        dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, machineModes.RUNNING));
        dispatcher(PrefActions.changeSingleField(prefStateKeys.HEAD_SPEED, Number(headSpeed.IMMEDIATELY)));
    };

    const handleReset = (): void => {
        dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, machineModes.RESET));
    };

    return (
        <MachineControlsButtonsContainer>
            <MachineControlButton
                onClick = {handleFullSpeed}
            >
                Run at full speed
            </MachineControlButton>
            <ForwardBackwardButton
                render = {() => <FaStepBackward/>}
                dispatcherCallback = {MachineActions.oneStepBackward}
                machineModes = {machineModes.BACKWARD}
            />
            <StartStopButton/>
            <ForwardBackwardButton
                render = {() => <FaStepForward/>}
                dispatcherCallback = {MachineActions.oneStepForward}
                machineModes = {machineModes.FORWARD}
            />
            <MachineControlButton
                onClick = {handleReset}
            >
                Machine Reset
            </MachineControlButton>
        </MachineControlsButtonsContainer>
    );
}

export default ControlButtons;