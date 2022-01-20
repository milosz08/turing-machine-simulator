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

import { machineModes } from './types';

export interface MachineInitialTypes {
    tapeValues: {
        initialInput: string;
        valuesArray: string[];
    };
    disabledControls: {
        initialInput: boolean;
        initialStateLabel: boolean;
    };
    headPosition: number;
    initialStateLabel: string;
    machineState: machineModes;
    allStatesCount: number;
    currentLabelInfos: {
        prevLabel: string;
        nextLabel: string;
    };
}

const machineInitialState: MachineInitialTypes = {
    tapeValues: {
        initialInput: ' ',
        valuesArray: [],
    },
    disabledControls: {
        initialInput: false,
        initialStateLabel: false,
    },
    headPosition: 0,
    initialStateLabel: 'q0',
    machineState: machineModes.IDLE,
    allStatesCount: 0,
    currentLabelInfos: {
        prevLabel: '',
        nextLabel: '',
    },
};

export default machineInitialState;