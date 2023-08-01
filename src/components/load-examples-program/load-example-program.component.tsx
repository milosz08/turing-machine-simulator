/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: load-example-program.component.tsx
 * Last modified: 8/1/23, 9:32 PM
 * Project name: turing-machine-simulator
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

import * as React from "react";
import type { JSX } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { examplePrograms, FilesService } from "~/app-utils/machine-config";

import * as MachineAction from "~/app-redux/machine-store/actions";
import * as PrefAction from "~/app-redux/preferences-store/actions";

import { LoadExamplesExampleProgramButton, LoadExamplesProgramContainer } from "./load-example-program.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const LoadExampleProgramComponent: React.FC = (): JSX.Element => {

    const dispatcher = useDispatch();

    const loadProgramCallback = useCallback(programName => {
        const URL = `${programName.replace(/ /g, "-").toLocaleLowerCase()}.${FilesService.MACHINE_PROGRAM_EXTENSION}`;
        const relativePath = `/assets/${FilesService.DEF_PROGRAMS_REL_PATH}/`;
        fetch(relativePath + URL, { method: "GET" })
            .then(res => {
                if (res.ok) return res.text();
                throw new Error(res.statusText);
            })
            .then(data => {
                if (data) {
                    dispatcher(MachineAction.loadExampleProgramAction({ sourceCode: data }));
                    dispatcher(PrefAction.resetCursorPositionAction());
                } else {
                    dispatcher(MachineAction.setLoadAjaxErrorAction());
                }
            })
            .catch(err => {
                dispatcher(MachineAction.setLoadAjaxErrorAction());
                console.error(`Failure load program! Error: ${err}`);
            });
        dispatcher(MachineAction.disableControlsBeforeLoadProgramAction());
    }, []);

    const generateExamplesPrograms: JSX.Element[] = examplePrograms.map(programName => (
        <LoadExamplesExampleProgramButton
            key={`${programName}_${Math.floor(Math.random() * 1000)}`}
            onClick={() => loadProgramCallback(programName)}
            title={`Click to load '${programName}' example program`}
        >
            {programName}
        </LoadExamplesExampleProgramButton>
    ));

    useEffect(() => {
        loadProgramCallback(examplePrograms[0]);
    }, []);

    return (
        <LoadExamplesProgramContainer>
            {generateExamplesPrograms}
        </LoadExamplesProgramContainer>
    );
};

export default LoadExampleProgramComponent;
