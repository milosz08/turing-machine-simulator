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
import { useDispatch } from 'react-redux';

import { MachineControlButton } from '../MachineControls.styles';
import { MachineActions, ReturnedToReducer } from '../../../../redux/machineStore/actions';
import { machineModes, machineStateKeys } from '../../../../redux/machineStore/types';

interface PropsProvider {
    render: () => JSX.Element;
    dispatcherCallback: () => ReturnedToReducer;
    machineModes: machineModes;
}

const ForwardBackwardButton: React.FC<PropsProvider> = ({ render, dispatcherCallback, machineModes }): JSX.Element => {

    const dispatcher = useDispatch();

    const handleForwardBackward = (): void => {
        dispatcher(dispatcherCallback());
        dispatcher(MachineActions.changeSingleField(machineStateKeys.MACHINE_STATE, machineModes));
    };

    return (
        <MachineControlButton
            $ifSquare = {true}
            onClick = {handleForwardBackward}
        >
            {render()}
        </MachineControlButton>
    );
};

export default ForwardBackwardButton;