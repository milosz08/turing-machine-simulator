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