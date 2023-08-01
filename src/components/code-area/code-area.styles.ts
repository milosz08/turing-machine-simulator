/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: code-area.styles.ts
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

import styled from "styled-components";
import { NonChangeValues } from "~/app-styles/theme-styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const CodeAreaContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 1300px;
    max-height: fit-content;
`;

export const CodeAreaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    padding: 0 60px;
    font-size: 1rem;
    min-height: 500px;
`;

export const CodeAreaRowsContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: calc(100% - 80px);
    height: 100%;
    border-radius: 7px;
`;

export const CodeAreaFieldWrapper = styled.div`
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

export const CodeAreaFieldTextarea = styled.textarea<{ $scrollDisabled: boolean }>`
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
    overflow: ${({ $scrollDisabled }) => $scrollDisabled ? "hidden" : "auto"};
    &::-webkit-scrollbar {
        width: 15px;
        height: auto;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.BODY_TINT2};
    }
    &::-webkit-resizer {
        background-color: ${({ theme }) => theme.BODY};
        border-width: 8px;
        border-style: solid;
        border-color: transparent ${({ theme }) => theme.BODY_TINT2} ${({ theme }) => theme.BODY_TINT2} transparent;
    }
    &:disabled {
        resize: none;
        cursor: default;
    }
`;

export const CodeAreaSingleRowContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    &:nth-child(1) {
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

export const CodeAreaSingleRowIndicator = styled.div<{ $prev: boolean, $next: boolean }>`
    position: absolute;
    display: ${props => props.$prev || props.$next ? "block" : "none"};
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    height: 20px;
    left: -59px;
    background-color: ${props => props.$prev ? NonChangeValues.DEBUG_BAR_COLOUR : NonChangeValues.STATUS_BAR_COLOUR};
    color: ${NonChangeValues.WHITE_COLOUR};
    font-size: .8rem;
    font-weight: 300;
    line-height: 1.6;
    padding: 0 6px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    &::after {
        position: absolute;
        content: '';
        right: -10px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid ${props => props.$prev ? NonChangeValues.DEBUG_BAR_COLOUR : NonChangeValues.STATUS_BAR_COLOUR};
    }
`;

export const CodeAreaSingleRowIndicatorDualBottom = styled(CodeAreaSingleRowIndicator)<{ $prev: boolean, $next: boolean }>`
    top: calc(50% + 3px);
    left: -56px;
`;

export const CodeAreaSingleRowLineNumber = styled.span`
    position: relative;
    width: 40px;
    left: 0;
    padding: 0 6px;
    color: ${({ theme }) => theme.TEXT_TINT1};
    font-weight: 700;
    text-align: right;
`;

export const CodeAreaSingleRowHighlighter = styled.aside<{ $prev: boolean, $next: boolean }>`
    flex-grow: 1;
    border-radius: 0 5px 5px 0;
    height: 21px;
    opacity: .5;
    background-color: ${props => {
        if (props.$prev) { return NonChangeValues.DEBUG_BAR_COLOUR; }
        else if (props.$next) { return NonChangeValues.STATUS_BAR_COLOUR; }
    }};
`;

export const CodeAreaSingleRowDualIHighlighter = styled.div`
    position: relative;
    flex-grow: 1;
    z-index: 20 !important;
    border-radius: 0 5px 5px 0;
    height: 21px;
    opacity: .5;
    background-color: ${NonChangeValues.DEBUG_BAR_COLOUR};
`;

export const CodeAreaSingleRowDualHighlighterBottom = styled.div`
    position: absolute;
    border-radius: 0 5px 5px 0;
    left: 40px;
    top: 3px;
    opacity: .5;
    content: '';
    width: calc(100% - 35px);
    height: 100%;
    background-color: ${NonChangeValues.STATUS_BAR_COLOUR};
`;

export const CodeAreaRowsCounter = styled.div.attrs<{ $positionY: number }>(props => ({
    style: {
        height: `calc(100% + ${props.$positionY}px)`,
        transform: `translateY(-${props.$positionY}px)`
    }
}))<{ $positionY: number }>`
    padding: 0 6px 0 0;
    text-align: right;
    width: calc(100% - 60px);
`;
