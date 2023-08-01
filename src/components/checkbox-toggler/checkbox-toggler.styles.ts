/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: checkbox-toggler.styles.ts
 * Last modified: 8/1/23, 1:00 AM
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

import styled from "styled-components";
import { input_rs } from "~/app-styles/reset-styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const CheckboxToggleElementContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: .8rem;
`;

export const CheckboxToggleAsideLeftAndRight = styled.p`
    margin: -3px 20px 0;
`;

export const CheckboxToggleInput = styled(input_rs)`
    opacity: 0;
    position: absolute;
    &:checked + label div {
        transform: translateX(14px);
    }
`;

export const CheckboxToggleLabel = styled.label`
    background-color: ${({ theme }) => theme.TEXT};
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 12px;
    width: 26px;
    transform: scale(1.5);
`;

export const CheckboxToggleStyledInput = styled.div`
    background-color: ${({ theme }) => theme.BODY};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 8px;
    width: 8px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
`;
