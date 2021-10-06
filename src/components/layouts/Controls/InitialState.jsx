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
import { ControlInputContainer } from './Controls.styles';

/**
 * Component responsible for setting the name for the startup label.
 * 
 * @returns { JSX.Element }
 */
const InitialState = () => {
    
    const { startLabel, setStartLabel, disableElms } = useContext(StoreContext);
    
    return (
        <ControlInputContainer pseudoContent = 'initial state'>
            <input
                value = {startLabel}
                onChange = {({ target }) => setStartLabel(target.value)}
                disabled = {disableElms.inputs}
            />
        </ControlInputContainer>
    );
}

export default InitialState;