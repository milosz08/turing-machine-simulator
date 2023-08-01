/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: header-left-nav.component.tsx
 * Last modified: 8/1/23, 12:58 AM
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

const SimpleNavLinkComponent = React.lazy(() => import("~/app-components/simple-nav-link/simple-nav-link.component"));

import { HeaderSingleNavContainer } from "../header.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const HeaderLeftNavComponent: React.FC = (): JSX.Element => (
    <HeaderSingleNavContainer>
        <SimpleNavLinkComponent link="https://en.wikipedia.org/wiki/Turing_machine">
            About Turing Machine
        </SimpleNavLinkComponent>
        <SimpleNavLinkComponent link="https://github.com/Milosz08/turing-machine-simulator">
            Source Code
        </SimpleNavLinkComponent>
    </HeaderSingleNavContainer>
);

export default HeaderLeftNavComponent;
