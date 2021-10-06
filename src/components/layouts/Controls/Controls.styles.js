/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
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

import styled from 'styled-components';

import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';
const { BORDER_COLOUR } = NON_CHANGE_VALUES;

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1300px;
    margin: 30px 0;
`;

export const ControlButton = styled.button`
    padding: 6px 15px;
    width: 200px;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    letter-spacing: -1px;
    font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
    margin: 0 5px;
    background-color: ${({ theme }) => theme.BUTTON_BACKGROUND};
    color: ${({ theme }) => theme.BUTTON_COLOUR};
    :disabled {
        background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND};
        cursor: not-allowed;
    }
`;

export const ControlButtonSqr = styled(ControlButton)`
    padding: 6px;
    width: 40px;
`;

export const ControlInputContainer = styled.div`
    border: 1px solid ${BORDER_COLOUR};
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    position: relative;
    display: flex;
    input {
        flex-grow: 1;
        border: none;
        background-color: transparent;
        padding: 7px 5px 5px;
        color: ${({ theme }) => theme.INPUT_COLOUR};
        transition: .2s;
        text-align: center;
        font-size: .9rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
        :focus {
            outline: none;
            color: ${({ theme }) => theme.INPUT_FOCUS_COLOUR};
        }
    }
    ::after {
        position: absolute;
        content: '${props => props.pseudoContent}';
        width: fit-content;
        top: -12px;
        padding: 0 6px;
        left: 50%;
        transform: translateX(-50%);
        color: ${({ theme }) => theme.TEXT};
        background-color: ${({ theme }) => theme.BODY};
        border: 3px solid ${({ theme }) => theme.BODY};
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
        font-size: .8rem;
        text-transform: uppercase;
    }
`;