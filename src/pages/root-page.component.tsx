/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: root-page.component.tsx
 * Last modified: 7/31/23, 11:28 PM
 * Project name: react-ts-turing-simulator
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

const TapeComponent = React.lazy(() => import("~/app-components/tape/tape.component"));
const MachineControlsComponent = React.lazy(() => import("~/app-components/machine-controls/machine-controls.component"));
const CurrentStateInfoComponent = React.lazy(() => import("~/app-components/current-state-info/current-state-info.component"));
const AdditionalControlsComponent = React.lazy(() => import("~/app-components/additional-controls/additional-controls.component"));
const CodeAreaComponent = React.lazy(() => import("~/app-components/code-area/code-area.component"));
const LoadExampleProgramComponent = React.lazy(() => import("~/app-components/load-examples-program/load-example-program.component"));
const FilesSupportComponent = React.lazy(() => import("~/app-components/files-support/files-support.component"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const RootPageComponent: React.FC = (): JSX.Element => (
    <>
        <TapeComponent/>
        <MachineControlsComponent/>
        <CurrentStateInfoComponent/>
        <AdditionalControlsComponent/>
        <CodeAreaComponent/>
        <LoadExampleProgramComponent/>
        <FilesSupportComponent/>
    </>
);

export default RootPageComponent;
