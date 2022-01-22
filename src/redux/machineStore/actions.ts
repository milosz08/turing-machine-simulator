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

import { machineReducerTypes, machineStateKeys } from './types';
import { addCustomSuffix } from '../reduxStore';

export interface ReturnedToReducer {
    type: machineReducerTypes | string;
    payload?: {
        [key: string]: any;
    }
}

export class MachineActions {

    public static changeSingleField = (key: machineStateKeys, value: any): ReturnedToReducer => ({
        type: addCustomSuffix(machineReducerTypes.CHANGE_SINGLE_FIELD, key),
        payload: {
            key, value
        }
    });

    public static changeSecondLevelSingleField = (
        keyFirst: machineStateKeys, keySecond: machineStateKeys, value: any
    ): ReturnedToReducer => ({
        type: addCustomSuffix(machineReducerTypes.CHANGE_SECOND_LEVEL_SINGLE_FIELD, keySecond),
        payload: {
            keyFirst, keySecond, value
        }
    });

    public static oneStepForward = (): ReturnedToReducer => ({
        type: machineReducerTypes.ONE_STEP_FORWARD,
    });

    public static oneStepBackward = (): ReturnedToReducer => ({
        type:machineReducerTypes.ONE_STEP_BACKWARD,
    });

}