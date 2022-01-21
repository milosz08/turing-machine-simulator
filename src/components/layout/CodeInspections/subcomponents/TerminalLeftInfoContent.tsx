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

import useChangeBottomBarInfo from '../../../../hooks/useChangeBottomBarInfo';
import { AdditionalMessages } from '../../../../config/machineMessages';

import { RootState } from '../../../../redux/reduxStore';
import { prefStateKeys } from '../../../../redux/preferencesStore/types';
import { PrefActions } from '../../../../redux/preferencesStore/actions';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { codeAreaModes, machineModes } from '../../../../redux/machineStore/types';
import { PreferencesInitialTypes } from '../../../../redux/preferencesStore/initialState';

import { SyntaxInfosButton, TerminalLeftContent } from '../CodeInspections.styles';

import CompileAreaHelpers from './CompileAreaHelpers';

const TerminalLeftInfoContent: React.FC = (): JSX.Element => {

    const { machineState, sourceCodeAreaMode }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { ifOpenErrors }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);

    const dispatcher = useDispatch();
    const bottomInfo = useChangeBottomBarInfo();
    const backgroundColors = CompileAreaHelpers.selectBarBackground(sourceCodeAreaMode);

    const { COMPILE_PROGRAM } = machineModes;
    const { COMPILED, IDLE, RUNNING } = codeAreaModes;

    const handleOpenErrorsWindow = (): void => {
        dispatcher(PrefActions.changeSingleField(prefStateKeys.IF_OPEN_ERRORS, !ifOpenErrors));
    };

    return (
        <TerminalLeftContent
            $animationWorking = {sourceCodeAreaMode === IDLE}
        >
            <SyntaxInfosButton
                title = {machineState === COMPILE_PROGRAM ? AdditionalMessages.DEBUGGER_ACCESSIBILITY : ''}
                $background = {backgroundColors}
                disabled = {sourceCodeAreaMode !== COMPILED}
                onClick = {handleOpenErrorsWindow}
            >
                {bottomInfo()}
            </SyntaxInfosButton>
            {sourceCodeAreaMode !== RUNNING && CompileAreaHelpers.selectShowIcon(machineState)}
        </TerminalLeftContent>
    );
};

export default TerminalLeftInfoContent;