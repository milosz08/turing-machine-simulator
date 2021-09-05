/*!
 * @file Codearea.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import CodeareaCompile from '../../../utils/turingAlgorithms/CodeareaCompile';
import { CODEAREA_MODES } from '../../../utils/machineConfiguration';
import { MACHINE_MESSAGES } from '../../../utils/machineConfiguration';

import ErrorInfo from '../ErrorInfo/ErrorInfo';
import CodeareaRows from '../CodeareaRows/CodeareaRows';
import Codefield from '../Codefield/Codefield';
import CodeInspections from '../CodeInspections/CodeInspections';

import { CodeareaContainer, CodeareaWrapper } from './Codearea.styles';
import MiscControls from '../MiscControls/MiscControls';

/**
 * @details Component responsible for generating all elements of the code input field. It generates subcomponents 
 *          in the form of the number of lines, debugger, etc. It is also responsible for running the 
 *          method compiling the program (separate class).
 * 
 * @returns { JSX.Element }
 */
const Codearea = () => {

    const {
        setLabelsArrays, startLabel, setCodeareaMode, setOnCompile, setMachineEndMessage, 
        codearea, setInitialInput, disableElms, setDisableElms
    } = useContext(StoreContext);
    
    const [ openWindow, setOpenWindow ] = useState(false);
    const [ scrollY, setScrollY ] = useState(0);
    const [ cursorPos, setCursorPos ] = useState({ ln: 0, col: 0, sel: 0 });
    const [ disableCompileButton, setDisableCompileButton ] = useState(false);

    const areaRef = useRef(null);

    /**
     * Function run when the machine program is compiled. Based on the returned values from the methods 
     * of the validating and processing class, it returns an object with all labels or an object containing 
     * compiler errors or warnings, respectively.
     */
    const handleCompile = () => {
        const validate = new CodeareaCompile(codearea, startLabel);
        const validateIndicator = validate.validateCodearea();
        const initialInput = validate.setInitialInput();
        if(initialInput) {
            setInitialInput(initialInput);
        }
        if(validateIndicator) {
            setOnCompile(CODEAREA_MODES.COMPILE_SUCCESS);
            setMachineEndMessage(MACHINE_MESSAGES.COMPILE_SUCCESSFUL);
            setDisableElms({ ...disableElms, reset: false });
        } else {
            setOnCompile(CODEAREA_MODES.COMPILE_FAILURE);
            setMachineEndMessage(MACHINE_MESSAGES.COMPILE_FAILURE);
        }
        setCodeareaMode(CODEAREA_MODES.COMPILING);
        setLabelsArrays({ labels: validate._tuplesArray, errors: validate._problemsArray });
        setDisableCompileButton(true);
    }

    /**
     * Run on every code change (compilation needed each time to verify syntax).
     */
    useEffect(() => {
        setDisableCompileButton(false);
        setDisableElms({ fullSpeed: true, prev: true, startStop: true, next: true, reset: true, inputs: false });
        setMachineEndMessage(MACHINE_MESSAGES.COMPILE_PROGRAM);
    }, [codearea, setMachineEndMessage, setDisableElms]);

    return (
        <CodeareaContainer>
            <MiscControls
                handleCompile = {handleCompile}
                disableCompileButton = {disableCompileButton}
            />
            <CodeareaWrapper>
                <CodeareaRows
                    scrollY = {scrollY}
                    areaRef = {areaRef}
                />
                <Codefield
                    areaRef = {areaRef}
                    setScrollY = {setScrollY}
                    handleCompile = {handleCompile}
                    setCursorPos = {setCursorPos}
                />
            </CodeareaWrapper>
            <CodeInspections
                openWindow = {openWindow}
                setOpenWindow = {setOpenWindow}
                cursorPos = {cursorPos}
            />
        {openWindow && <ErrorInfo/>}
    </CodeareaContainer>
    );
};

export default Codearea;