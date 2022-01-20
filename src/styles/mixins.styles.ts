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

import { css } from 'styled-components';
import { NonChangeValues } from './theme.styles';

export const BorderElement = ({
    _textColour, _bgcColour, _content
}: { _textColour: string, _bgcColour: string, _content: string }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1300px;
    border: 1px solid ${NonChangeValues.BORDER_COLOUR};
    border-radius: 5px;
    ::after {
        position: absolute;
        content: '${_content}';
        width: fit-content;
        top: -9px;
        padding: 0 10px;
        left: 50%;
        transform: translateX(-50%);
        color: ${_textColour};
        background-color: ${_bgcColour};
        font-size: .8rem;
        text-transform: uppercase;
    }
`;