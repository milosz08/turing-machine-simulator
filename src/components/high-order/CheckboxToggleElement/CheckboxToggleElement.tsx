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

import {
    CheckboxToggleAsideLeftAndRight, CheckboxToggleElementContainer, CheckboxToggleInput, CheckboxToggleLabel,
    CheckboxToggleStyledInput
} from './CheckboxToggleElement.styles';

interface PropsProvider {
    leftContent?: string;
    rightContent?: string;
    checked: boolean;
    changeCallback: () => void;
}

const CheckboxToggleElement: React.FC<PropsProvider> = ({ leftContent, rightContent, checked, changeCallback }): JSX.Element => (
    <CheckboxToggleElementContainer>
        {leftContent && <CheckboxToggleAsideLeftAndRight>
            {leftContent}
        </CheckboxToggleAsideLeftAndRight>}
        <CheckboxToggleInput
            type = 'checkbox'
            id = 'checkboxToggle'
            checked = {checked}
            onChange = {changeCallback}
        />
        <CheckboxToggleLabel htmlFor = 'checkboxToggle'>
            <CheckboxToggleStyledInput/>
        </CheckboxToggleLabel>
        {rightContent && <CheckboxToggleAsideLeftAndRight>
            {rightContent}
        </CheckboxToggleAsideLeftAndRight>}
    </CheckboxToggleElementContainer>
);

export default CheckboxToggleElement;