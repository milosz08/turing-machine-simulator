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

import { examplePrograms } from '../../../config/machineConfig';
import useLoadExampleProgram from '../../../hooks/useLoadExampleProgram';

import { LoadExamplesExampleProgramButton, LoadExamplesProgramContainer } from './LoadExamplesProgram.styles';

const LoadExamplesProgram: React.FC = (): JSX.Element => {

    const loadProgram = useLoadExampleProgram();

    const generateExamplesPrograms: JSX.Element[] = examplePrograms.map(programName => (
        <LoadExamplesExampleProgramButton
            key = {`${programName}_${Math.floor(Math.random() * 1000)}`}
            onClick = {() => loadProgram(programName)}
            title = {`Click to load '${programName}' example program`}
        >
            {programName}
        </LoadExamplesExampleProgramButton>
    ));

    useEffect(() => {
        loadProgram(examplePrograms[0]);
    }, []);

    return (
        <LoadExamplesProgramContainer>
            {generateExamplesPrograms}
        </LoadExamplesProgramContainer>
    );
};

export default LoadExamplesProgram;