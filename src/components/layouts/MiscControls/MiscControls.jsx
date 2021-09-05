/*!
 * @file MiscControls.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { HEAD_SPEED } from '../../../utils/machineConfiguration';

import { StateInfosWrapper } from '../TapeInfos/TapeInfos.styles';
import { MiscControlsContainer, CompileButton, MiscToggleFollow, RangeInput } from './MiscControls.styles';

/**
 * Component responsible for additional machine control (setting following active tuples, 
 * changing head speed, etc.).
 * 
 * @param { () => void } handleCompile - callback function responsible for compiling the program.
 * @param { boolean } disableCompileButton - flag that blocks the compile button of the program.
 * 
 * @returns { JSX.Element } 
 */
const MiscControls = ({ handleCompile, disableCompileButton }) => {
    
    const { MIN_SPEED, MAX_SPEED } = HEAD_SPEED;

    const { addtlnContr, setAddtlnContr, disableElms } = useContext(StoreContext);
    const [ handleInput, setHandleInput ] = useState(MAX_SPEED);

    /**
     * Function that sets the head speed. Inverts the value from the input.
     * 
     * @param { React.EventHandler { target } } target - value in input range.
     */
    const handleRangeInput = ({ target }) => {
        const revert = (MAX_SPEED - parseInt(target.value)) + MIN_SPEED;
        setHandleInput(target.value);
        setAddtlnContr({ ...addtlnContr, headSpeed: revert });
    };

    return (
        <MiscControlsContainer>
            <StateInfosWrapper pseudoContent = 'code tracking'>
            <MiscToggleFollow>
                <aside>off</aside>
                <input
                    type = 'checkbox'
                    id = 'followToggler'
                    checked = {addtlnContr.codeFollow}
                    onChange = {({ target }) => setAddtlnContr({ ...addtlnContr, codeFollow: target.checked })}
                    disabled = {disableElms.prev}
                />
                <label htmlFor = 'followToggler'>
                    <div/>
                </label>
                <aside>on</aside>
            </MiscToggleFollow>
            </StateInfosWrapper>
            <CompileButton
                onClick = {handleCompile}
                disabled = {disableCompileButton}
            >
                To compile program, press this button or click outside the code area.
            </CompileButton>
            <StateInfosWrapper pseudoContent = 'speed intervals'>
                <RangeInput
                    type = 'range'
                    min = {MIN_SPEED}
                    max = {MAX_SPEED}
                    value = {handleInput}
                    onChange = {handleRangeInput}
                    disabled = {disableElms.prev}
                />  
            </StateInfosWrapper>
        </MiscControlsContainer>
    );
};

export default MiscControls;