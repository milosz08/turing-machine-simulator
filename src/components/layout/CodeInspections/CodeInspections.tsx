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

import CompileAreaHelpers from './subcomponents/CompileAreaHelpers';

import { RootState } from '../../../redux/reduxStore';
import { PreferencesInitialTypes } from '../../../redux/preferencesStore/initialState';
import { MachineInitialTypes } from '../../../redux/machineStore/initialState';

import { CodeInspectionsContainer, TerminalMode } from './CodeInspections.styles';

const TerminalLeftInfoContent = React.lazy(() => import('./subcomponents/TerminalLeftInfoContent'));

const CodeInspections: React.FC = (): JSX.Element => {

    const { ifOpenErrors }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);
    const { sourceCodeAreaMode }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);

    const backgroundColors = CompileAreaHelpers.selectBarBackground(sourceCodeAreaMode);

    return (
        <CodeInspectionsContainer
            $background = {backgroundColors}
            $openWindow = {ifOpenErrors}
        >
            <TerminalMode>
                Current status: {sourceCodeAreaMode}
            </TerminalMode>
            <TerminalLeftInfoContent/>
        </CodeInspectionsContainer>
    );
};

export default CodeInspections;