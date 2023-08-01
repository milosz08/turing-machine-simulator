/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: code-area.component.tsx
 * Last modified: 8/1/23, 7:57 PM
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
import { createContext, useRef } from "react";

const CodeAreaRowsComponent = React.lazy(() => import("./subcomponents/code-area-rows.component"));
const CodeAreaFieldComponent = React.lazy(() => import("./subcomponents/code-area-field.component"));
const CodeInspectionsComponent = React.lazy(() => import("~/app-components/code-inspections/code-inspections.component"));
const SyntaxErrorInfoComponent = React.lazy(() => import("~/app-components/code-inspections/subcomponents/syntax-error-info.component"));

import { CodeAreaContainer, CodeAreaWrapper } from "./code-area.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const CodeAreaContext = createContext<Partial<{ areaRef: React.MutableRefObject<any> }>>({});

const CodeAreaComponent: React.FC = (): JSX.Element => {

    const areaRef = useRef<HTMLElement | null>(null);

    return (
        <CodeAreaContainer>
            <CodeAreaContext.Provider
                value = {{ areaRef }}
            >
                <CodeAreaWrapper>
                    <CodeAreaRowsComponent/>
                    <CodeAreaFieldComponent/>
                </CodeAreaWrapper>
                <CodeInspectionsComponent/>
                <SyntaxErrorInfoComponent/>
            </CodeAreaContext.Provider>
        </CodeAreaContainer>
    );
};

export default CodeAreaComponent;
