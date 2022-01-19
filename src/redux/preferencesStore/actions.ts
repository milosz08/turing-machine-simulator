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

import { prefReducerTypes } from './types';

interface ReturnedToReducer {
    type: prefReducerTypes | string;
    payload?: {
        [key: string]: any;
    }
}

export class PrefActions {
    private static addCustomSuffix(type: prefReducerTypes, suffix: string): string {
        return type + '->' + suffix;
    }

    public static changeSingleField = (key: string, value: any): ReturnedToReducer => ({
        type: this.addCustomSuffix(prefReducerTypes.CHANGE_SINGLE_FIELD, key),
        payload: {
            key, value
        }
    });
}