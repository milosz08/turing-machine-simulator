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

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { FilesService } from '../config/machineConfig';

import { codeAreaModes, machineModes, machineStateKeys } from '../redux/machineStore/types';
import { MachineActions } from '../redux/machineStore/actions';
import { PrefActions } from '../redux/preferencesStore/actions';
import { prefStateKeys } from '../redux/preferencesStore/types';

const useLoadExampleProgram = () => {

    const { RAW_CODE_AREA_INPUT, MACHINE_STATE, DISABLED_CONTROLS, CONTROL_BUTTONS, SOURCE_CODE_MODES } = machineStateKeys;

    const dispatcher = useDispatch();

    return useCallback(name => {
        const URL = `${name.replace(/ /g, '-').toLocaleLowerCase()}.${FilesService.MACHINE_PROGRAM_EXTENSION}`;
        const relativePath = `${process.env.PUBLIC_URL}${FilesService.DEF_PROGRAMS_REL_PATH}/`;
        fetch(relativePath + URL, { method: 'GET' })
            .then(res => {
                if(res.ok) {
                    return res.text()
                }
                throw new Error(res.statusText);
            })
            .then(data => {
                if(data) {
                    dispatcher(MachineActions.changeSingleField(RAW_CODE_AREA_INPUT, data));
                    dispatcher(MachineActions.changeSingleField(MACHINE_STATE, machineModes.SUCCESSFULLY_LOAD_PROGRAM));
                    dispatcher(MachineActions.changeSingleField(SOURCE_CODE_MODES, codeAreaModes.IDLE));
                    dispatcher(PrefActions.changeSingleField(prefStateKeys.CURSOR_POSITION, { ln: 0, col: 0, sel: 0 }));
                } else {
                    dispatcher(MachineActions.changeSingleField(MACHINE_STATE, machineModes.AJAX_ERROR_LOAD));
                }
            })
            .catch(err => {
                console.error(`Failure load program! Error: ${err}`);
            });
        dispatcher(MachineActions.changeSecondLevelSingleField(DISABLED_CONTROLS, CONTROL_BUTTONS, true));
    }, []);

};

export default useLoadExampleProgram;