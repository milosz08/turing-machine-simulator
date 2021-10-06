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

const { DEBUG_BAR_COLOUR, STATUS_BAR_COLOUR } = NON_CHANGE_VALUES;

export const RowsContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: calc(100% - 80px);
    height: 100%;
    border-radius: 7px;
`;

export const SingleRow = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    :nth-child(1) {
        span {
            padding-top: 6px;
        }
        aside {
            margin-top: 6px;
        }
        div {
            top: calc(50% + 3px);
        }
    }
`;

export const Indicator = styled.div`
    position: absolute;
    display: ${props => props.prev || props.next ? 'block' : 'none'};
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    height: 20px;
    left: -59px;
    background-color: ${props => props.prev ? DEBUG_BAR_COLOUR : STATUS_BAR_COLOUR};
    color: ${NON_CHANGE_VALUES.WHITE_COLOUR};
    font-size: .8rem;
    font-weight: 300;
    line-height: 1.6;
    padding: 0 6px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    ::after {
        position: absolute;
        content: '';
        right: -10px;
        width: 0; 
        height: 0; 
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid ${props => props.prev ? DEBUG_BAR_COLOUR : STATUS_BAR_COLOUR};
    }
`;

export const LineNumber = styled.span`
    position: relative;
    width: 40px;
    left: 0;
    padding: 0 6px;
    color: ${({ theme }) => theme.TEXT_TINT1};
    font-weight: 700;
`;

export const Highlither = styled.aside`
    flex-grow: 1;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 21px;
        opacity: .5;
        background-color: ${props => {
            if(props.prev) { return DEBUG_BAR_COLOUR; } 
                else if(props.next) { return STATUS_BAR_COLOUR; }
        }};
`;

export const RowsCounter = styled.div.attrs(props => ({ 
    style: {
        height: `calc(100% + ${props.positionY}px)`,
        transform: `translateY(-${props.positionY}px)`
    } 
}))`
    padding: 0 6px 0 0;
    text-align: right;
    width: calc(100% - 60px);
`;