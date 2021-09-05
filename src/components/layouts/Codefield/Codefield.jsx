/*!
 * @file Codefield.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { CODEAREA_MODES, MACHINE_MESSAGES } from '../../../utils/machineConfiguration';
import InputIndicators from '../../../utils/turingAlgorithms/InputIndicators';

import { CodefieldWrapper, CodeTextarea } from './Codefield.styles';

/**
 * @details Component responsible for generating the field for entering the machine code.
 * 
 * @param { React.MutableRefObject<> } areaRef - reference of codearea.
 * @param { Dispatch<SetStateAction<number>> } setScrollY - setting codearea scroll position.
 * @param { callback() => void } handleCompile - callback function compiling and creating program structure.
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