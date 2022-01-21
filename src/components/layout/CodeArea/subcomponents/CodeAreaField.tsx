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
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputIndicators from '../../../../algorithms/InputIndicators';
import useCompileCodeArea from '../../../../hooks/useCompileCodeArea';

import { RootState } from '../../../../redux/reduxStore';
import { machineModes, machineStateKeys } from '../../../../redux/machineStore/types';
import { MachineActions } from '../../../../redux/machineStore/actions';
import { prefStateKeys } from '../../../../redux/preferencesStore/types';
import { PrefActions } from '../../../../redux/preferencesStore/actions';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';

import { CodeAreaFieldTextarea, CodeAreaFieldWrapper } from '../CodeArea.styles';

const CodeAreaField: React.FC = (): JSX.Element => {

    const stateMach: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { rawCodeAreaInput, disabledControls, machineState } = stateMach;
    const { DISABLED_CONTROLS, CONTROL_BUTTONS } = machineStateKeys;

    const dispatcher = useDispatch();
    const areaRef = useRef<HTMLElement | any>(null);
    const compile = useCompileCodeArea();

    const handleInsertSourceCode = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
        dispatcher(MachineActions.changeSingleField(machineStateKeys.RAW_CODE_AREA_INPUT, target.value));
    };

    const handleOnScrollTextarea = (): void => {
        dispatcher(PrefActions.changeSingleField(prefStateKeys.CODE_SCROLL_POS, Number(areaRef.current!.scrollTop)));
    };

    const handleTextFieldActive = (isEventIsFocus: boolean): void => {
        if(isEventIsFocus) {
            dispatcher(MachineActions.changeSecondLevelSingleField(DISABLED_CONTROLS, CONTROL_BUTTONS, true));
        } else {
            const inputIndicators = new InputIndicators(areaRef.current, rawCodeAreaInput);
            const { ln, col } = inputIndicators.convertInputSelection();
            dispatcher(PrefActions.changeSingleField(prefStateKeys.CURSOR_POSITION, {
                ln, col, sel: inputIndicators.getInputSelection()
            }));
        }
    };

    return (
        <CodeAreaFieldWrapper>
            <CodeAreaFieldTextarea
                $scrollDisabled = {machineState === machineModes.RUNNING}
                ref = {areaRef}
                value = {rawCodeAreaInput}
                onBlur = {compile}
                onChange = {handleInsertSourceCode}
                onScroll = {handleOnScrollTextarea}
                onFocus = {() => handleTextFieldActive(true)}
                onClick = {() => handleTextFieldActive(false)}
                onKeyDown = {() => handleTextFieldActive(false)}
                disabled = {disabledControls.initialInput}
            />
        </CodeAreaFieldWrapper>
    );
};

export default CodeAreaField;