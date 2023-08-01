/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: state.ts
 * Last modified: 7/31/23, 11:42 PM
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

import { MachineModes } from "~/app-utils/machine-modes";
import { CodeAreaModes } from "~/app-utils/code-area-modes";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface IMachineStoreReduxState {
    tapeValues: {
        initialInput: string;
        valuesArray: string[];
    };
    disabledControls: {
        initialInput: boolean;
        initialStateLabel: boolean;
        compileButton: boolean;
        controlButtons: boolean;
        resetButton: boolean;
    };
    headPosition: number;
    initialStateLabel: string;
    machineState: MachineModes;
    allStatesCount: number;
    rawCodeAreaInput: string;
    machineTuples: {
        labels: { [key: string]: any }[];
        errors: { [key: string]: any }[];
    };
    actualState: {
        prevState: { [key: string]: string } | null;
        nextState: { [key: string]: string } | null;
    };
    sourceCodeAreaMode: CodeAreaModes;
    machineFinish: boolean;
    findingLabel: string;
    allSteps: { [key: string]: string }[];
    allHeadPositions: number[];
    allBlanksElements: boolean[];
    machineCustomMessage: string | null;
}

export const machineStoreReduxState: IMachineStoreReduxState = {
    tapeValues: {
        initialInput: " ",
        valuesArray: [],
    },
    disabledControls: {
        initialInput: false,
        initialStateLabel: false,
        compileButton: false,
        controlButtons: true,
        resetButton: true,
    },
    headPosition: 0,
    initialStateLabel: "q0",
    machineState: MachineModes.IDLE,
    allStatesCount: 0,
    rawCodeAreaInput: "",
    machineTuples: {
        labels: [],
        errors: [],
    },
    actualState: {
        prevState: null,
        nextState: null,
    },
    sourceCodeAreaMode: CodeAreaModes.IDLE,
    machineFinish: false,
    findingLabel: "q0",
    allSteps: [],
    allHeadPositions: [],
    allBlanksElements: [],
    machineCustomMessage: null,
};
