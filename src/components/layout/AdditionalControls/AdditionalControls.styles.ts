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
import { input_rs } from '../../../styles/reset.styles';
import { BorderElement, MainContainer } from '../../../styles/mixins.styles';
import { MachineControlButton } from '../MachineControls/MachineControls.styles';

export const AdditionalControlsContainer = styled.section`
    ${MainContainer()};
    margin: 20px 0 40px;
`;

export const MachineChangeAdditionalValuesContainer = styled.div<{ $content: string }>`
    ${props => BorderElement({
    _textColour: props.theme.TEXT, _bgcColour: props.theme.BODY, _content: props.$content
})};
    padding: 15px 0 18px;
    width: 220px;
`;

export const CompileButtonElement = styled(MachineControlButton)`
    width: fit-content;
    height: fit-content;
    font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
`;

export const MachineChangeHeadSpeedRangeInput = styled(input_rs)`
    appearance: none;
    width: calc(100% - 60px);
    position: relative;
    top: 3px;
    margin: 10px 0;
    ::-webkit-slider-thumb {
        appearance: none;
        background-color: ${({ theme }) => theme.TEXT};
        height: 13px;
        width: 13px;
        border-radius: 100%;
        cursor: pointer;
        margin-top: -5px;
    }
    ::-moz-range-thumb {
        appearance: none;
        background-color: ${({ theme }) => theme.TEXT};
        height: 13px;
        width: 13px;
        border-radius: 100%;
        cursor: pointer;
    }
    ::-ms-thumb {
        appearance: none;
        background-color: ${({ theme }) => theme.TEXT};
        height: 13px;
        width: 13px;
        border-radius: 100%;
        cursor: pointer;
    }
    ::-ms-track {
        cursor: pointer;
        border-color: transparent;
        color: transparent;
        height: 3px;
        background-color: transparent;
        border-radius: 100px;
    }
    ::-webkit-slider-runnable-track {
        height: 3px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND};
        border-radius: 100px;
    }
    ::-moz-range-track {
        height: 3px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND};
        border-radius: 100px;
    }
    ::-ms-fill-lower {
        background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND}
    }
`;