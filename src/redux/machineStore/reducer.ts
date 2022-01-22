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
import { machineReducerTypes } from './types';

const machineReducer = (state = machineInitialState, action: any) => {
    const actionType = action.type.includes('.') ? action.type.substring(0, action.type.lastIndexOf('.')) : action.type;
    switch(actionType) {

        case machineReducerTypes.CHANGE_SINGLE_FIELD: {
            const { key, value } = action.payload;
            return { ...state, [key]: value };
        }

        case machineReducerTypes.CHANGE_SECOND_LEVEL_SINGLE_FIELD: {
            const { keyFirst, keySecond, value } = action.payload;
            return { ...state, [keyFirst]: { ...state[keyFirst], [keySecond]: value } };
        }

        case machineReducerTypes.ONE_STEP_FORWARD: {
            console.log('one step forward');
            return state;
        }

        case machineReducerTypes.ONE_STEP_BACKWARD: {
            console.log('one step backward');
            return state;
        }

        default: {
            return state;
        }
    }
};

export default machineReducer;