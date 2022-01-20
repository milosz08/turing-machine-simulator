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

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import machineReducer from './machineStore/reducer';
import preferencesReducer from './preferencesStore/reducer';

import { prefReducerTypes } from './preferencesStore/types';
import { machineReducerTypes } from './machineStore/types';

const rootReducers = combineReducers({
    machineReducer,
    preferencesReducer
});

export const addCustomSuffix = (type: prefReducerTypes | machineReducerTypes, suffix: string): string => {
    return type + '.' + suffix;
}

const reduxStore = createStore(
    rootReducers,
    composeWithDevTools(),
);

export type RootState = ReturnType<typeof rootReducers>;
export default reduxStore;