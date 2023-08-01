/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: third-party-libraries.styles.ts
 * Last modified: 8/1/23, 2:13 AM
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

import styled from "styled-components";
import { a_rs } from "~/app-styles/reset-styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ThirdPartyLibrariesContainer = styled.section`
    width: 1300px;
    font-size: 1rem;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.TEXT};
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const ThirdPartyLibrariesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 0.75rem;
    row-gap: 0.125rem;
    list-style: none;
`;

export const ThirdPartyLibrariesListElement = styled.li`
    display: flex;
    &:nth-child(odd) {
        justify-content: flex-end;
    }
    &:nth-child(even) {
        justify-content: flex-start;
    }
`;

export const ThirdPartyLibraryLink = styled(a_rs)`
`;
