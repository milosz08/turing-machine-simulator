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

import machineInitialState from './initialState';
import { codeAreaModes, machineModes, machineReducerTypes } from './types';

import TuringAlgorithm from '../../algorithms/TuringAlgorithm';
import TuringReverseAlgorithm from '../../algorithms/TuringReverseAlgorithm';

const machineReducer = (state = machineInitialState, action: any) => {
    const actionType = action.type.includes('.') ? action.type.substring(0, action.type.lastIndexOf('.')) : action.type;
    switch (actionType) {

        case machineReducerTypes.CHANGE_SINGLE_FIELD: {
            const { key, value } = action.payload;
            return { ...state, [key]: value };
        }

        case machineReducerTypes.CHANGE_SECOND_LEVEL_SINGLE_FIELD: {
            const { keyFirst, keySecond, value } = action.payload;
            return { ...state, [keyFirst]: { ...state[keyFirst], [keySecond]: value } };
        }

        case machineReducerTypes.ONE_STEP_FORWARD: {
            const { machineTuples, findingLabel, tapeValues, headPosition } = state;
            const ta = new TuringAlgorithm(machineTuples.labels, findingLabel, tapeValues.valuesArray, headPosition);
            const findElement = ta.findMatchTupleForCurrentSymbol();
            let endingInfoObject = ta.preventEndlessLoop();
            if (findElement) {
                const { headPosition: hP, tapeValues: tV } = ta.fixedBlankElements(findElement!);
                const { allSteps, actualState } = ta.settingNextElementFromTuple(findElement, state.allSteps);
                endingInfoObject = ta.endingTupleState(findElement);
                if (Boolean(findElement.terminate)) {
                    endingInfoObject = ta.machineStoppedByTupleSign(findElement);
                }
                return {
                    ...state,
                    headPosition: hP,
                    findingLabel: findElement.newState,
                    allStatesCount: state.allStatesCount + 1,
                    allHeadPositions: [ ...state.allHeadPositions, headPosition ],
                    allBlanksElements: [ ...state.allBlanksElements, ta.blankSpaceAdding ],
                    disabledControls: { ...state.disabledControls, controlButtons: endingInfoObject.controlButtons },
                    tapeValues: { ...state.tapeValues, valuesArray: tV },
                    machineFinish: endingInfoObject.machineFinish,
                    machineState: endingInfoObject.machineState,
                    allSteps,
                    actualState
                };
            }
            return {
                ...state,
                machineFinish: true,
                disabledControls: { ...state.disabledControls, controlButtons: true },
                machineState: machineModes.STOPPED,
                machineCustomMessage: `Machine stopped! State '${findingLabel}' has no action 
                                       for symbol: '${ta.getTapeValue()}' (ln ${state.actualState.prevState!.lineIndex})`
            }
        }

        case machineReducerTypes.ONE_STEP_BACKWARD: {
            const { tapeValues: tV, allSteps: aS, allHeadPositions: aP, allBlanksElements: aB } = state;
            const tr = new TuringReverseAlgorithm(tV.valuesArray, aS, aP, aB);
            if(aS.length > 0) {
                const {
                    headPosition, actualState, allSteps, valuesArray, allHeadPositions, allBlanksElements
                } = tr.reverseAlgorithm(aS);
                return {
                    ...state,
                    headPosition,
                    actualState,
                    allSteps,
                    tapeValues: { ...state.tapeValues, valuesArray },
                    allHeadPositions,
                    allBlanksElements
                }
            }
            return {
                ...state,
                machineFinish: true,
                disabledControls: { ...state.disabledControls, controlButtons: true },
            };
        }

        case machineReducerTypes.MACHINE_RESET: {
            return {
                ...state,
                machineState: machineModes.RESET,
                sourceCodeAreaMode: codeAreaModes.IDLE,
                headPosition: 0,
                allStatesCount: 0,
                allSteps: [],
                machineFinish: false,
                findingLabel: state.initialStateLabel,
                actualState: {
                    prevState: null,
                    nextState: null,
                },
                tapeValues: {
                    ...state.tapeValues,
                    valuesArray: [ ...state.tapeValues.initialInput ],
                },
                disabledControls: {
                    ...state.disabledControls, initialInput: false, controlButtons: false
                },
                machineCustomMessage: null,
            };
        }

        default: {
            return state;
        }
    }
};

export default machineReducer;