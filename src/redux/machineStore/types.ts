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

export enum machineReducerTypes {
    CHANGE_SINGLE_FIELD = 'CHANGE_SINGLE_FIELD__M',
    CHANGE_SECOND_LEVEL_SINGLE_FIELD = 'CHANGE_SECOND_LEVEL_SINGLE_FIELD__M',
    ONE_STEP_BACKWARD = 'ONE_STEP_BACKWARD__M',
    ONE_STEP_FORWARD = 'ONE_STEP_FORWARD__M',
}

export enum machineStateKeys {
    TAPE_VALUES = 'tapeValues',
    INITIAL_INPUT = 'initialInput',
    VALUES_ARRAY = 'valuesArray',
    HEAD_POSITION = 'headPosition',
    DISABLED_CONTROLS = 'disabledControls',
    INITIAL_STATE_LABEL = 'initialStateLabel',
    MACHINE_STATE = 'machineState',
    ALL_STATES_COUNT = 'allStatesCount',
    CURR_LABELS_INFO = 'currentLabelInfos',
    PREV_LABEL = 'prevLabel',
    NEXT_LABEL = 'nextLabel',
    RAW_CODE_AREA_INPUT = 'rawCodeAreaInput',
    MACHINE_TUPLES = 'machineTuples',
    LABELS = 'labels',
    ERRORS = 'errors',
    COMPILE_BUTTON = 'compileButton',
    CONTROL_BUTTONS = 'controlButtons',
    RESET_BUTTON = 'resetButton',
    ACTUAL_STATE = 'actualState',
    PREV_STATE = 'prevState',
    NEXT_STATE = 'nextState',
    SOURCE_CODE_MODES = 'sourceCodeAreaMode',
}

export enum machineModes {
    IDLE = 'IDLE',
    STOPPED = 'STOPPED',
    RUNNING = 'RUNNING',
    RESET = 'RESET',
    LOOP = 'LOOP',
    FINISH = 'FINISH',
    BACKWARD = 'BACKWARD',
    FORWARD = 'FORWARD',
    COMPILE_PROGRAM = 'COMPILE_PROGRAM',
    COMPILE_SUCCESSFUL = 'COMPILE_SUCCESSFUL',
    COMPILE_FAILURE = 'COMPILE_FAILURE',
    DEBUGGING = 'DEBUGGING',
    AJAX_ERROR_LOAD = 'AJAX_ERROR_LOAD',
    SUCCESSFULLY_LOAD_PROGRAM = 'SUCCESSFULLY_LOAD_PROGRAM',
}

export enum codeAreaModes {
    COMPILED = 'compiled',
    RUNNING = 'debugging',
    IDLE = 'listening',
}