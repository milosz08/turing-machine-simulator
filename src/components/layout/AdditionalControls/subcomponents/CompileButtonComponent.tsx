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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useCompileCodeArea from '../../../../hooks/useCompileCodeArea';

import { RootState } from '../../../../redux/reduxStore';
import { machineStateKeys } from '../../../../redux/machineStore/types';
import { MachineActions } from '../../../../redux/machineStore/actions';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';

import { CompileButtonElement } from '../AdditionalControls.styles';

const CompileButtonComponent: React.FC = (): JSX.Element => {

    const machineState: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const { disabledControls, rawCodeAreaInput } = machineState;
    const { DISABLED_CONTROLS, COMPILE_BUTTON } = machineStateKeys;

    const compile = useCompileCodeArea();
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(MachineActions.changeSecondLevelSingleField(DISABLED_CONTROLS, COMPILE_BUTTON, false));
    }, [ rawCodeAreaInput ]);

    return (
        <CompileButtonElement
            onClick = {compile}
            disabled = {disabledControls.compileButton}
        >
            To compile program, press this button or click outside the code area.
        </CompileButtonElement>
    );
};

export default CompileButtonComponent;