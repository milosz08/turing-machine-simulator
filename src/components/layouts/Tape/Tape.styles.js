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

export const TapeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: 1px solid ${BORDER_COLOUR};
    border-radius: 5px;
    padding: 30px 0 50px 0;
    width: 1300px;
    position: relative;
    ::after {
        position: absolute;
        content: 'machine tape';
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

export const TapeCharacter = styled.span`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: 17px;
    height: 24px;
    font-size: 1.3rem;
    border-radius: 3px;
    font-weight: ${props => props.active ? props.theme.BUTTON_FONT_WEIGHT : props.theme.INPUT_FONT_WEIGHT};
    color: ${props => props.active ? props.theme.BODY : props.theme.TEXT};
    background-color: ${props => props.active ? props.theme.TEXT : 'transparent'};
    ::before {
        position: absolute;
        display: ${props => props.active ? 'block' : 'none'};
        content: '';
        bottom: -17px;
        width: 0; 
        height: 0; 
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 10px solid ${({ theme }) => theme.TEXT};
    }
    ::after {
        position: absolute;
        display: ${props => props.active ? 'block' : 'none'};
        content: 'Head';
        width: 50px;
        height: 14px;
        font-size: .8rem;
        text-align: center;
        background-color: ${({ theme }) => theme.TEXT};
        color: ${({ theme }) => theme.BODY};
        font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        bottom: -31px;
    }
`;