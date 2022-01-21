/*
 * Copyright (c) 2022-2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import { NonChangeValues } from '../../../../styles/theme.styles';
import { CompilerSyntaxIssues } from '../../../../config/machineMessages';

import { RootState } from '../../../../redux/reduxStore';
import { MachineInitialTypes } from '../../../../redux/machineStore/initialState';
import { PreferencesInitialTypes } from '../../../../redux/preferencesStore/initialState';

import {
    SyntaxErrorsInfoContainer, SyntaxErrorsInfoHeader, SyntaxErrorsListElement, SyntaxErrorsListElementDanger,
    SyntaxErrorsUnorderedList
} from '../CodeInspections.styles';

const SyntaxNonErrors = React.lazy(() => import('./SyntaxNonErrors'));

const SyntaxErrorsInfo: React.FC = (): JSX.Element => {

    const { machineTuples }: MachineInitialTypes = useSelector((state: RootState) => state.machineReducer);
    const { ifOpenErrors }: PreferencesInitialTypes = useSelector((state: RootState) => state.preferencesReducer);

    const { errors } = machineTuples;
    const { ERROR_COLOUR, WARNING_COLOUR } = NonChangeValues;

    const generateErrorsList: JSX.Element[] = machineTuples.errors.map((error: any) => (
        <SyntaxErrorsListElement
            key = {`${error.problemType}__${error.lineIndex}__${error.labelIndex}`}
        >
            Ln {error.lineIndex}:{' '}
            <SyntaxErrorsListElementDanger
                $labelInfoColour = {error.danger === CompilerSyntaxIssues.ERROR_LEVEL ? ERROR_COLOUR : WARNING_COLOUR}
            >
                {error.danger}
            </SyntaxErrorsListElementDanger>
            {typeof error.labelIndex !== 'number' ? ` <${error.labelIndex}>` : ''} : <strong>{error.problemType}</strong>.
        </SyntaxErrorsListElement>
    ));

    return (
        <>
            {ifOpenErrors && <SyntaxErrorsInfoContainer>
                {errors.length > 0 && <>
                    <SyntaxErrorsInfoHeader>
                        Compiling problems:
                    </SyntaxErrorsInfoHeader>
                    <SyntaxErrorsUnorderedList>
                        {generateErrorsList}
                    </SyntaxErrorsUnorderedList>
                </>}
                {errors.length === 0 && <SyntaxNonErrors/>}
            </SyntaxErrorsInfoContainer>}
        </>
    );
};

export default SyntaxErrorsInfo;