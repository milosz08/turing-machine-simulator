/*
 * Copyright (c) 2022-2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import { FaCheck, FaExclamationTriangle, FaSyncAlt } from 'react-icons/fa';

import { NonChangeValues } from '../../../../styles/theme.styles';
import { codeAreaModes, machineModes } from '../../../../redux/machineStore/types';

const { DEBUG_BAR_COLOUR, COMPILING_BAR_COLOUR, STATUS_BAR_COLOUR, COMPILING_BAR_HOVER_COLOUR } = NonChangeValues;
const { RUNNING, COMPILED } = codeAreaModes;

class CompileAreaHelpers {

    public static selectShowIcon(mode: machineModes) {
        switch(mode) {
            case machineModes.COMPILE_SUCCESSFUL: return <FaCheck/>;
            case machineModes.COMPILE_FAILURE: return <FaExclamationTriangle/>;
            default: return <FaSyncAlt/>;
        }
    };

    public static selectBarBackground(mode: codeAreaModes): { normal: string, hover: string } {
        switch(mode) {
            case RUNNING: return { normal: DEBUG_BAR_COLOUR, hover: '' };
            case COMPILED: return { normal: COMPILING_BAR_COLOUR, hover: COMPILING_BAR_HOVER_COLOUR };
            default: return { normal: STATUS_BAR_COLOUR, hover: '' };
        }
    };

}

export default CompileAreaHelpers;