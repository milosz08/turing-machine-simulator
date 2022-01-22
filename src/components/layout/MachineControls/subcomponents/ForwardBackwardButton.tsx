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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reduxStore';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { machineModes, machineStateKeys } from '../../../../redux/machineStore/types';
import { MachineActions, ReturnedToReducer } from '../../../../redux/machineStore/actions';

import { MachineControlButton } from '../MachineControls.styles';

interface PropsProvider {
    render: () => JSX.Element;
    dispatcherCallback: () => ReturnedToReducer;
    machineMode: machineModes;
    disabledItem: boolean;
}

const ForwardBackwardButton: React.FC<PropsProvider> = ({
    render, dispatcherCallback, machineMode, disabledItem
}): JSX.Element => {

    const { machineFinish }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const dispatcher = useDispatch();

    const handleForwardBackward = (): void => {
        dispatcher(dispatcherCallback());
        dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, machineMode));
    };

    useEffect(() => {
        if(machineFinish) {
            dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, machineModes.FINISH));
        }
    }, [ machineFinish ]);

    return (
        <MachineControlButton
            $ifSquare = {true}
            onClick = {handleForwardBackward}
            disabled = {disabledItem}
        >
            {render()}
        </MachineControlButton>
    );
};

export default ForwardBackwardButton;