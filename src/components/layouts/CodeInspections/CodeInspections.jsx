/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
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

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../store/StoreProvider';

import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';
import { CODEAREA_MODES, MACHINE_MESSAGES, SYNTAX_PROBLEMS } from '../../../utils/machineConfiguration';

import { CodeInspectionsWrapper, CursorPosButton, TerminalMode, LeftContent } from './CodeInspections.styles';

/**
 * Component responsible for generating the bottom bar of the code field informing about the current
 * machine mode, action to be performed and current data on the state of the head, cursor position, etc.
 * 
 * @param { boolean } openWindow - label informing about an open window with errors and warnings. 
 * @param { Dispatch<SetStateAction<boolean> } setOpenWindow - callbakck changing 'openWindow' label.
 * @param { Object<number> } cursorPos - current cursor position (X and Y axios) in codearea field.
 * 
 * @returns { JSX.Element }
 */
const CodeInspections = ({ openWindow, setOpenWindow, cursorPos }) => {

    const { labelsArrays, codearea, codeareaMode, onCompile, actualState, allSteps } = useContext(StoreContext);
    
    const { ERROR_LEVEL, WARNING_LEVEL } = SYNTAX_PROBLEMS;
    const { errors } = labelsArrays;

    const allCharacters = codearea.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '').length;

    const errorsArr = errors.filter(element => element.danger === ERROR_LEVEL);
    const warningsArr = errors.filter(element => element.danger === WARNING_LEVEL);

    /**
     * @details Function responsible for returning the appropriate content in the lower bar of the code field,
     *          based on the current state of the machine.
     * 
     * @returns { string }
     */
    const bottomInfoBarContent = () => {
        const { RUNNING, COMPILING, DEBUGGING } = CODEAREA_MODES;
        switch(codeareaMode) {
            case RUNNING:
                return (
                    `Ln ${cursorPos.ln}, 
                     Col ${cursorPos.col} (${cursorPos.sel} selected), 
                     Total signs: ${allCharacters}`
                );
            case COMPILING:
                return (
                    `Compiling status: ${onCompile}, 
                     Errors: ${errorsArr.length}, 
                     Warnings: ${warningsArr.length}`
                );
            case DEBUGGING:
                return (
                    `State counter: ${allSteps.length},
                     Previous label: ${actualState.prevState?.currentState},
                     Next label: ${actualState.nextState?.newState}`
                );
            default: throw new Error(`Unexpected code area mode: ${codeareaMode}!`);
        }
    }

    return (
        <CodeInspectionsWrapper
            background = {selectBarBackground(codeareaMode)}
            openWindow = {openWindow}
        >
            <TerminalMode>
                Current status: {codeareaMode}
            </TerminalMode>
            <LeftContent animationWorking = {onCompile}>
                <CursorPosButton
                    title = {codeareaMode === CODEAREA_MODES.COMPILING ? MACHINE_MESSAGES.DEBUGGER_ACCESIBILITY : ''}
                    background = {selectBarBackground(codeareaMode)}
                    onClick = {() => setOpenWindow(prevState => !prevState)}
                    disabled = {codeareaMode !== CODEAREA_MODES.COMPILING}
                >
                    {bottomInfoBarContent()}
                </CursorPosButton>
                {codeareaMode !== CODEAREA_MODES.DEBUGGING && <FontAwesomeIcon icon = {selectShowIcon(onCompile)}/>}
            </LeftContent>
        </CodeInspectionsWrapper>
    );
};

/**
 * @details Function responsible for returning the appropriate icon, depending on the current state of the 
 *          machine (for edition - the default arrow icon, additional animation and, respectively, other icons for 
 *          the failed or successful compilation state).
 * 
 * @param { string } value 
 * 
 * @returns { IconDefinition }
 */
const selectShowIcon = value  => {
    const { COMPILE_SUCCESS, COMPILE_FAILURE } = CODEAREA_MODES;
    switch(value) {
        case COMPILE_SUCCESS:  return faCheck;
        case COMPILE_FAILURE:  return faExclamationTriangle;
        default:               return faSyncAlt;
    }
}

/**
 * @details Function responsible for returning the appropriate property regarding the color of the bottom 
 *          beam based on the current state of the machine (debugging, compiling, editing - default state).
 * 
 * @param { string } value -  current machine state (debugging, compiling, editing - default).
 * @returns { string }
 */
const selectBarBackground = value => {
    const { DEBUG_BAR_COLOUR, COMPILING_BAR_COLOUR, STATUS_BAR_COLOUR, COMPILING_BAR_HOVER_COLOUR } = NON_CHANGE_VALUES;
    const { DEBUGGING, COMPILING } = CODEAREA_MODES;
    switch(value) {
        case DEBUGGING:   return { normal: DEBUG_BAR_COLOUR, hover: '' };
        case COMPILING:   return { normal: COMPILING_BAR_COLOUR, hover: COMPILING_BAR_HOVER_COLOUR };
        default:          return { normal: STATUS_BAR_COLOUR, hover: '' };
    }
}

export default CodeInspections;