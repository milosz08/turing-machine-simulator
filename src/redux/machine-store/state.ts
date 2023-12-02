/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { CodeAreaModes } from '~/app-utils/code-area-modes';
import { MachineModes } from '~/app-utils/machine-modes';

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
    initialInput: ' ',
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
  initialStateLabel: 'q0',
  machineState: MachineModes.IDLE,
  allStatesCount: 0,
  rawCodeAreaInput: '',
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
  findingLabel: 'q0',
  allSteps: [],
  allHeadPositions: [],
  allBlanksElements: [],
  machineCustomMessage: null,
};
