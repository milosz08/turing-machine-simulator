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

import { button_rs, input_rs } from '../../../styles/reset.styles';
import { BorderElement, ControlButton, MainContainer } from '../../../styles/mixins.styles';

export const MachineControlsContainer = styled.section`
    ${MainContainer()}
`;

export const MachineControlsInputContainer = styled.div<{ $content: string }>`
    ${props => BorderElement({
        _textColour: props.theme.TEXT, _bgcColour: props.theme.BODY, _content: props.$content
    })};
    padding: 10px;
    width: 300px;
`;

export const MachineControlsInput = styled(input_rs)`
    flex-grow: 1;
    padding: 7px 5px 5px;
    color: ${({ theme }) => theme.INPUT_COLOUR};
    transition: .2s;
    text-align: center;
    font-size: .9rem;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    :focus {
        color: ${({ theme }) => theme.INPUT_FOCUS_COLOUR};
    }
`;

export const MachineControlsButtonsContainer = styled.div`
    display: flex;
`;

export const MachineControlButton = styled(button_rs)<{ $ifSquare?: boolean }>`
    ${props => ControlButton({
        _fontWeight: props.theme.BUTTON_FONT_WEIGHT,
        _bgcColour: props.theme.BUTTON_BACKGROUND,
        _textColour: props.theme.BUTTON_COLOUR,
        _disabledColour: props.theme.DIS_BUTTON_BACKGROUND,
        _ifSquare: props.$ifSquare
    })};
    display: flex;
    justify-content: center;
    align-items: center;
`;