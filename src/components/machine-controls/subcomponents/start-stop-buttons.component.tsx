/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: start-stop-buttons.component.tsx
 * Last modified: 8/1/23, 5:48 PM
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

import * as React from "react";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPause, FaPlay } from "react-icons/fa";

import { RootState } from "~/app-redux/redux-store";
import { IMachineStoreReduxState } from "~/app-redux/machine-store/state";
import { MachineModes } from "~/app-utils/machine-modes";
import { CompilerSyntaxIssues } from "~/app-utils/machine-messages";

import * as MachineAction from "~/app-redux/machine-store/actions";

import { MachineControlButton } from "../machine-controls.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const StartStopButtonsComponent: React.FC = (): JSX.Element => {

    const stateMach: IMachineStoreReduxState = useSelector((state: RootState) => state.machine);
    const { machineState, machineTuples, disabledControls } = stateMach;

    const errorsLength = machineTuples.errors.filter(el => el.danger !== CompilerSyntaxIssues.WARNING_LEVEL).length;
    const dispatcher = useDispatch();

    const handleStartStopMachine = (): void => {
        dispatcher(MachineAction.machineStartStopTogglingAction());
    };

    return (
        <MachineControlButton
            onClick = {handleStartStopMachine}
            $ifSquare = {true}
            disabled = {errorsLength > 0 || disabledControls.controlButtons}
        >
            {machineState === MachineModes.RUNNING ? <FaPause/> : <FaPlay/>}
        </MachineControlButton>
    );
};

export default StartStopButtonsComponent;
