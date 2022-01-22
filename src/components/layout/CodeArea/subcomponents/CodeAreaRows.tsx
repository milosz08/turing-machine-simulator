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

import useFollowByCurrentPos from '../../../../hooks/useFollowByCurrentPos';

import { RootState } from '../../../../redux/reduxStore';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { PreferencesInitialTypes } from '../../../../redux/preferencesStore/initialState';

import { CodeAreaRowsContainer, CodeAreaRowsCounter } from '../CodeArea.styles';

const CodeAreaDoubleIndicatorMarks = React.lazy(() => import('./CodeAreaDoubleIndicatorMarks'));
const CodeAreaSingleRow = React.lazy(() => import('./CodeAreaSingleRow'));

const CodeAreaRows: React.FC = (): JSX.Element => {

    const { rawCodeAreaInput, actualState }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { codeScrollPos }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);

    useFollowByCurrentPos();

    const countOfLines = rawCodeAreaInput.split('\n').length;
    const activePrevState = Number(actualState.prevState?.lineIndex) - 1;
    const activeNextState = Number(actualState.nextState?.lineIndex) - 1;

    const generateCountingRows = Array.from({ length: countOfLines }, (e, i) => i).map(iter => (
        iter === activePrevState && iter === activeNextState ? (
            <CodeAreaDoubleIndicatorMarks
                key = {iter}
                iteration = {iter}
            />
        ) : (
            <CodeAreaSingleRow
                key = {iter}
                iterator = {iter}
                prev = {iter === activePrevState}
                next = {iter === activeNextState}
            />
        )
    ));

    return (
        <CodeAreaRowsContainer>
            <CodeAreaRowsCounter
                $positionY = {codeScrollPos}
            >
                {generateCountingRows}
            </CodeAreaRowsCounter>
        </CodeAreaRowsContainer>
    );
};

export default CodeAreaRows;