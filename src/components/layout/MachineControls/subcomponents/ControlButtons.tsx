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
import { useDispatch, useSelector } from 'react-redux';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';

import { CompilerSyntaxIssues } from '../../../../config/machineMessages';

import { RootState } from '../../../../redux/reduxStore';
import { MachineActions } from '../../../../redux/machineStore/actions';
import { PrefActions } from '../../../../redux/preferencesStore/actions';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { headSpeed, prefStateKeys } from '../../../../redux/preferencesStore/types';
import { machineModes, machineStateKeys } from '../../../../redux/machineStore/types';

import { MachineControlButton, MachineControlsButtonsContainer } from '../MachineControls.styles';

const ForwardBackwardButton = React.lazy(() => import('./ForwardBackwardButton'));
const StartStopButton = React.lazy(() => import('./StartStopButton'));

const ControlButtons: React.FC = (): JSX.Element => {

    const stateMach: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const { RUNNING, BACKWARD, FORWARD, STOPPED } = machineModes;
    const { machineState: state, machineTuples, disabledControls } = stateMach;

    const errorsLength = machineTuples.errors.filter((el: any) => el.danger !== CompilerSyntaxIssues.WARNING_LEVEL).length;
    const fullSpeedDisabled = state === RUNNING || state === STOPPED || state === FORWARD || state === BACKWARD;
    const dispatcher = useDispatch();

    const handleFullSpeed = (): void => {
        dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, RUNNING));
        dispatcher(PrefActions.changeSingleField(prefStateKeys.HEAD_SPEED, Number(headSpeed.IMMEDIATELY)));
    };

    const handleReset = (): void => {
        dispatcher(MachineActions.machineReset());
    };

    return (
        <MachineControlsButtonsContainer>
            <MachineControlButton
                onClick = {handleFullSpeed}
                disabled = {fullSpeedDisabled || errorsLength > 0 || disabledControls.controlButtons}
            >
                Run at full speed
            </MachineControlButton>
            <ForwardBackwardButton
                render = {() => <FaStepBackward/>}
                dispatcherCallback = {MachineActions.oneStepBackward}
                machineMode = {BACKWARD}
                disabledItem = {state === RUNNING || errorsLength > 0 || disabledControls.controlButtons}
            />
            <StartStopButton/>
            <ForwardBackwardButton
                render = {() => <FaStepForward/>}
                dispatcherCallback = {MachineActions.oneStepForward}
                machineMode = {FORWARD}
                disabledItem = {state === RUNNING || errorsLength > 0 || disabledControls.controlButtons}
            />
            <MachineControlButton
                onClick = {handleReset}
                disabled = {state === RUNNING || errorsLength > 0 || disabledControls.resetButton}
            >
                Machine Reset
            </MachineControlButton>
        </MachineControlsButtonsContainer>
    );
}

export default ControlButtons;