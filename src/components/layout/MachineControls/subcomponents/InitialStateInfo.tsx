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

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reduxStore';
import { MachineActions } from '../../../../redux/machineStore/actions';
import { machineStateKeys } from '../../../../redux/machineStore/types';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';

import { MachineControlsInput, MachineControlsInputContainer } from '../MachineControls.styles';

const InitialStateInfo: React.FC = (): JSX.Element => {

    const { initialStateLabel, disabledControls }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const { INITIAL_STATE_LABEL } = machineStateKeys;
    const dispatcher = useDispatch();

    const handleChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatcher(MachineActions.changeSingleField(INITIAL_STATE_LABEL, target.value));
    };

    return (
        <MachineControlsInputContainer
            $content = 'initial state label'
        >
            <MachineControlsInput
                type = 'text'
                value = {initialStateLabel}
                onChange = {handleChangeInput}
                disabled = {disabledControls.initialInput}
            />
        </MachineControlsInputContainer>
    );
};

export default InitialStateInfo;