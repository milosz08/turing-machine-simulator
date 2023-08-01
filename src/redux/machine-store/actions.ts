/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: actions.ts
 * Last modified: 7/31/23, 11:43 PM
 * Project name: react-ts-turing-simulator
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

import { createAction } from "@reduxjs/toolkit";
import * as ActionType from "./action-type";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

enum Actions {
    SWITCHING_MACHINE_STATE = "[MACHINE REDUCER] SWITCHING MACHINE STATE",
    ONE_STEP_FORWARD = "[MACHINE REDUCER] ONE STEP FORWARD",
    ONE_STEP_BACKWARD = "[MACHINE REDUCER] ONE STEP BACKWARD",
    SET_INITIAL_TAPE_INPUT = "[MACHINE REDUCER] SET INITIAL TAPE INPUT",
    SET_CHANGE_INPUT_STATE= "[MACHINE REDUCER] SET CHANGE INPUT STATE",
    MACHINE_START_STOP_TOGGLING= "[MACHINE REDUCER] MACHINE START STOP TOGGLING",
    COMPILE_CODE_AREA = "[MACHINE REDUCER] COMPILE CODE AREA",
    ENABLE_COMPILE_BUTTON = "[MACHINE REDUCER] ENABLE COMPILE BUTTON",
    INSERT_SOURCE_CODE = "[MACHINE REDUCER] INSERT SOURCE CODE",
    DISABLE_ALL_CONTROL_BUTTONS = "[MACHINE REDUCER] DISABLE ALL CONTROL BUTTONS",
    LOAD_EXAMPLE_PROGRAM = "[MACHINE REDUCER] LOAD EXAMPLE PROGRAM",
    SET_LOAD_AJAX_ERROR = "[MACHINE REDUCER] SET LOAD AJAX ERROR",
    DISABLE_CONTROLS_BEFORE_LOAD_PROGRAM = "[MACHINE REDUCER] DISABLE CONTROLS BEFORE LOAD PROGRAM",
    LOAD_INITIAL_INPUT_ON_TAPE = "[MACHINE REDUCER] LOAD INITIAL INPUT ON TAPE",
    MACHINE_RESET = "[MACHINE REDUCER] MACHINE RESET",
}

export const switchMachineStateAction = createAction<ActionType.SwitchMachineStateActionType, Actions>(Actions.SWITCHING_MACHINE_STATE);
export const oneStepForwardAction = createAction<void, Actions>(Actions.ONE_STEP_FORWARD);
export const oneStepBackwardAction = createAction<void, Actions>(Actions.ONE_STEP_BACKWARD);
export const setInitialTapeInputAction = createAction<ActionType.SetInitialTapeInputActionType, Actions>(Actions.SET_INITIAL_TAPE_INPUT);
export const setChangeInputStateAction = createAction<ActionType.SetChangeInputStateActionType, Actions>(Actions.SET_CHANGE_INPUT_STATE);
export const machineStartStopTogglingAction = createAction<void, Actions>(Actions.MACHINE_START_STOP_TOGGLING);
export const compileCodeAreaAction = createAction<void, Actions>(Actions.COMPILE_CODE_AREA);
export const enableCompileButtonAction = createAction<void, Actions>(Actions.ENABLE_COMPILE_BUTTON);
export const insertSourceCodeAction = createAction<ActionType.InsertSourceCodeActionType, Actions>(Actions.INSERT_SOURCE_CODE);
export const disableAllControlButtonsAction = createAction<void, Actions>(Actions.DISABLE_ALL_CONTROL_BUTTONS);
export const loadExampleProgramAction = createAction<ActionType.LoadExampleProgramActionType, Actions>(Actions.LOAD_EXAMPLE_PROGRAM);
export const setLoadAjaxErrorAction = createAction<void, Actions>(Actions.SET_LOAD_AJAX_ERROR);
export const disableControlsBeforeLoadProgramAction = createAction<void, Actions>(Actions.DISABLE_CONTROLS_BEFORE_LOAD_PROGRAM);
export const loadInitialInputOnTapeAction = createAction<void, Actions>(Actions.LOAD_INITIAL_INPUT_ON_TAPE);
export const machineResetAction = createAction<void, Actions>(Actions.MACHINE_RESET);
