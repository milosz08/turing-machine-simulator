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

export const ErrorInfoContainer = styled.div`
    width: calc(100% - 120px);
    margin: 0 60px;
    border: 1px solid ${BORDER_COLOUR};
    border-top: none;
    font-size: .8rem;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    padding: 15px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    header {
        margin-bottom: 5px;
    }
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const ListElement = styled.li`
    margin-left: 20px;
    color: ${({ theme }) => theme.TEXT};
    span {
        color: ${props => props.labelInfoColour};
    }
    strong {
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
`;