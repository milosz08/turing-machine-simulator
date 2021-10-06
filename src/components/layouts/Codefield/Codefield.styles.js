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

export const CodefieldWrapper = styled.div`
    position: relative;
    border: 1px solid ${({ theme }) => theme.BODY_TINT2};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 0;
    margin-bottom: -5px;
    z-index: 2;
    width: 100%;
    height: 100%;
    min-height: 500px;
`;

export const CodeTextarea = styled.textarea`
    font-weight: 500;
    width: calc(100% - 40px);
    height: 100%;
    min-height: 500px;
    background-color: transparent;
    color: ${({ theme }) => theme.TEXT_TINT1};
    padding: 6px 6px 0 6px;
    margin-left: 40px;
    font-size: 1rem;
    border: none;
    outline: none;
    resize: vertical;
    cursor: auto;
    overflow: ${props => props.scrollDisabled ? 'hidden' : 'auto'};
    ::-webkit-scrollbar {
        width: 15px;
        height: auto;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.BODY_TINT2};
    }
    ::-webkit-resizer {
        background-color: ${({ theme }) => theme.BODY};
        border-width: 8px;
        border-style: solid;
        border-color: transparent ${({ theme }) => theme.BODY_TINT2} ${({ theme }) => theme.BODY_TINT2} transparent;
    }
    :disabled {
        resize: none;
        cursor: default;
    }
`;