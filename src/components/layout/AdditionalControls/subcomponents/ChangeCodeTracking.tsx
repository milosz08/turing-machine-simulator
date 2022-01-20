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

import { MachineChangeAdditionalValuesContainer } from '../AdditionalControls.styles';

import { RootState } from '../../../../redux/reduxStore';
import { prefStateKeys } from '../../../../redux/preferencesStore/types';
import { PrefActions } from '../../../../redux/preferencesStore/actions';
import { PreferencesInitialTypes } from '../../../../redux/preferencesStore/initialState';

const CheckboxToggleElement = React.lazy(() => import('../../../high-order/CheckboxToggleElement/CheckboxToggleElement'));

const ChangeCodeTracking: React.FC = (): JSX.Element => {

    const { ifCodeFollow }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);
    const dispatcher = useDispatch();

    const handleChangeFollowingCode = (): void => {
        dispatcher(PrefActions.changeSingleField(prefStateKeys.IF_CODE_FOLLOW, !ifCodeFollow));
    };

    return (
        <MachineChangeAdditionalValuesContainer
            $content = 'code tracking'
        >
            <CheckboxToggleElement
                leftContent = 'off'
                rightContent = 'on'
                checked = {ifCodeFollow}
                changeCallback = {handleChangeFollowingCode}
            />
        </MachineChangeAdditionalValuesContainer>
    );
};

export default ChangeCodeTracking;