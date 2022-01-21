/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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
import { button_rs } from '../../../styles/reset.styles';
import { NonChangeValues } from '../../../styles/theme.styles';

export const CodeInspectionsContainer = styled.div<{ $openWindow: boolean, $background: { normal: string, hover: string }}>`
    width: calc(100% - 120px);
    margin: 0 60px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.$background.normal};
    color: ${NonChangeValues.WHITE_COLOUR};
    padding: 0 8px;
    border-bottom-left-radius: ${props => props.$openWindow ? 'none' : '5px'};
    border-bottom-right-radius: ${props => props.$openWindow ? 'none' : '5px'};
`;

export const TerminalMode = styled.div`
    padding: 3px 4px;
    font-size: .8rem;
    font-weight: 200;
`;

export const TerminalLeftContent = styled.div<{ $animationWorking: boolean }>`
    display: flex;
    align-items: center;
    svg {
        font-weight: 200;
        font-size: .7rem;
        margin: 0 15px;
        animation: ${props => props.$animationWorking ? 'circle' : 'none'} 3s infinite linear;
    }
    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        99% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`;

export const SyntaxInfosButton = styled(button_rs)<{ $background: { [key: string]: string } }>`
    padding: 3px 4px;
    font-size: .8rem;
    font-weight: 200;
    background-color: transparent;
    color: ${NonChangeValues.WHITE_COLOUR};
    border: none;
    cursor: pointer;
    :hover {
        background-color: ${props => props.$background.hover};
    }
    :disabled {
        cursor: text;
    }
`;

export const SyntaxErrorsInfoContainer = styled.div`
    width: calc(100% - 120px);
    margin: 0 60px;
    border: 1px solid ${NonChangeValues.BORDER_COLOUR};
    border-top: none;
    font-size: .8rem;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    padding: 15px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`;

export const SyntaxErrorsInfoHeader = styled.h3`
    margin-bottom: 5px;
    font-weight: inherit;
    font-size: inherit;
`;

export const SyntaxErrorsUnorderedList = styled.ul`
    list-style-type: none;
`;

export const SyntaxErrorsListElement = styled.li`
    margin-left: 20px;
    color: ${({ theme }) => theme.TEXT};
    strong {
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
`;

export const SyntaxErrorsListElementDanger = styled.span<{ $labelInfoColour: string }>`
    color: ${props => props.$labelInfoColour};
`;