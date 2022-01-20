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
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { PrefActions } from '../../../../redux/preferencesStore/actions';
import { headSpeed, prefStateKeys } from '../../../../redux/preferencesStore/types';

import { MachineChangeAdditionalValuesContainer, MachineChangeHeadSpeedRangeInput } from '../AdditionalControls.styles';

const ChangeHeadSpeed: React.FC = (): JSX.Element => {

    const { MIN, MAX } = headSpeed;

    const [ speed, setSpeed ] = useState<number>(MAX);
    const dispatcher = useDispatch();

    const handleChangeHeadSpeed = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const revert = (MAX - parseInt(target.value)) + MIN;
        setSpeed(Number(target.value));
        dispatcher(PrefActions.changeSingleField(prefStateKeys.HEAD_SPEED, revert));
    };

    return (
        <MachineChangeAdditionalValuesContainer
            $content = 'head speed'
        >
            <MachineChangeHeadSpeedRangeInput
                type = 'range'
                value = {speed}
                min = {MIN}
                max = {MAX}
                onChange = {handleChangeHeadSpeed}
            />
        </MachineChangeAdditionalValuesContainer>
    );
};

export default ChangeHeadSpeed;