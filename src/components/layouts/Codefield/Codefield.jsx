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
import { StoreContext } from '../../store/StoreProvider';

import { CODEAREA_MODES, MACHINE_MESSAGES } from '../../../utils/machineConfiguration';
import InputIndicators from '../../../utils/turingAlgorithms/InputIndicators';

import { CodefieldWrapper, CodeTextarea } from './Codefield.styles';

/**
 * Component responsible for generating the field for entering the machine code.
 * 
 * @param { React.MutableRefObject<> } areaRef - reference of codearea.
 * @param { Dispatch<SetStateAction<number>> } setScrollY - setting codearea scroll position.
 * @param { callback() => void } handleCompile - callback function compiling and creating program structure.
 * @param { callback() => void } setCursorPos - setting cursor position in code field.
 * 
 * @returns { JSX.Element }
 */
const Codefield = ({ areaRef, setScrollY, handleCompile, setCursorPos }) => {

    const {
        codearea, setCodearea, codeareaMode, disableElms, setOnCompile, setCodeareaMode, setDisableElms
    } = useContext(StoreContext);
    const { DEBUGGING } = CODEAREA_MODES;

    /**
     * Support for the field for entering the code (listening for events).
     * 
     * @param { boolean } ifEventIsFocus - flag that decides if an event is 'focus'.
     */
    const handleEvent = ifEventIsFocus => {
        if(ifEventIsFocus) {
            setOnCompile(CODEAREA_MODES.COMPILING);
            setCodeareaMode(CODEAREA_MODES.RUNNING);
            setDisableElms({ fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: false });
        } else {
            const inputInd = new InputIndicators(areaRef.current, codearea);
            const { ln, col } = inputInd.convertInputSelection();
            const posCurs = {
                ln, col, sel: inputInd.getInputSelection()
            };
            setCursorPos(posCurs); // setting properties of cursor position
        }
    }

    return (
        <CodefieldWrapper>
            <CodeTextarea
                placeholder = {MACHINE_MESSAGES.CODEAREA_PLACEHOLDER}
                value = {codearea}
                onChange = {({ target }) => setCodearea(target.value)}
                onBlur = {handleCompile}
                onFocus = {() => handleEvent(true)}
                onClick = {() => handleEvent(false)}
                onKeyDown = {() => handleEvent(false)}
                onScroll = {() => setScrollY(areaRef.current.scrollTop)}
                ref = {areaRef}
                disabled = {codeareaMode === DEBUGGING}
                scrollDisabled = {disableElms.scrollCodearea}
                spellcheck = 'false'
                autocomplete = 'off'
                autocorrect = 'off'
                autocapitalize = 'off'
            />
        </CodefieldWrapper>
    );
};

export default Codefield;