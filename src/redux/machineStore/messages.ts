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

const {
    IDLE, RUNNING, RESET, STOPPED, FINISH, FORWARD, LOOP, BACKWARD, COMPILE_PROGRAM, COMPILE_SUCCESSFUL, COMPILE_FAILURE
} = machineModes;

export const machineMessages: { [key in keyof typeof machineModes]: string } = {
    [IDLE]: 'Machine idle. Write or load sample program and compile to run machine.',
    [STOPPED]: 'Machine stopped.',
    [RUNNING]: 'Machine running...',
    [RESET]: 'Machine reset. Press \'run\' or \'steps\' to start the machine working.',
    [FINISH]: 'Machine has finish work. Press \'Machine Reset\' button.',
    [FORWARD]: 'Machine did one step forward.',
    [BACKWARD]: 'Machine did one step backward.',
    [LOOP]: 'Machine stopped! Prevent memory leaks induced by endless loop.',
    [COMPILE_PROGRAM]: 'To run machine, compile your program.',
    [COMPILE_SUCCESSFUL]: 'Compile Success. Press \'Machine Reset\' button.',
    [COMPILE_FAILURE]: 'Compile Failure. Syntax error/s detected. Check errors box below.',
} as const;