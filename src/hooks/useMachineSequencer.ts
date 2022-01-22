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

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useIsMount from './useIsMount';

import { RootState } from '../redux/reduxStore';
import { machineModes } from '../redux/machineStore/types';
import { MachineActions } from '../redux/machineStore/actions';
import { MachineInitialTypes } from '../redux/machineStore/initialState';
import { PreferencesInitialTypes } from '../redux/preferencesStore/initialState';

const useMachineSequencer = () => {

    const { machineState, machineFinish }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { headSpeed }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);

    const dispatcher = useDispatch();
    const isMount = useIsMount();
    const increment = useRef<any>(null);

    useEffect(() => {
        const intervalSingleMove = (): void => {
            if (!isMount) {
                const intervalFunction = (): void => {
                    dispatcher(MachineActions.oneStepForward());
                };
                if (machineState === machineModes.RUNNING) {
                    increment.current = setInterval(intervalFunction, headSpeed);
                } else if(machineState === machineModes.STOPPED || machineFinish) {
                    clearInterval(increment.current);
                }
            }
        };
        intervalSingleMove();
    }, [ machineState, machineFinish ]);

};

export default useMachineSequencer;