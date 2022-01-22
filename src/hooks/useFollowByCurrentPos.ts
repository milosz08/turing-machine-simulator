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
import { useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';

import { RootState } from '../redux/reduxStore';
import { MachineInitialTypes } from '../redux/machineStore/initialState';
import { PreferencesInitialTypes } from '../redux/preferencesStore/initialState';

import { CodeAreaContext } from '../components/layout/CodeArea/CodeArea';
import useIsMount from './useIsMount';

const useFollowByCurrentPos = () => {

    const { actualState }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { ifCodeFollow }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);

    const { areaRef } = useContext<Partial<{ areaRef: React.MutableRefObject<any> }>>(CodeAreaContext);
    const isMount = useIsMount();

    useEffect(() => {
        if((actualState.prevState || actualState.nextState) && ifCodeFollow && !isMount) {
            const codeArea = areaRef!.current;
            const activePrevState = Number(actualState.prevState?.lineIndex) - 1;
            const visiblyCenter = Math.floor(codeArea.offsetHeight / 2); // center of visibility in code area
            const scrollFromTop = (activePrevState + 1) * S_ROW_HEIGHT; // total px from top (base on single row height)
            codeArea.scrollTo(0, scrollFromTop - visiblyCenter); // scroll destination in half-of-visibility
        }
    }, [ actualState ]);

};

const S_ROW_HEIGHT = 21;

export default useFollowByCurrentPos;