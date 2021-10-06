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

import { ControlButton } from '../Controls/Controls.styles';
import { ToggleButton } from '../StaticStructures/StaticStructures.styles';

export const MiscControlsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 20px 0 40px 0;
`;

export const CompileButton = styled(ControlButton)`
    width: fit-content;
    height: fit-content;
    font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
`;

export const MiscToggleFollow = styled(ToggleButton)`
    font-size: .9rem;
    position: relative;
    top: -5px;
    aside {
        margin: -5px 20px 0 20px;
    }
    label {
        margin-bottom: 20px;
    }
`;

export const RangeInput = styled.input`
    appearance: none;
    background: transparent;
    width: calc(100% - 60px);
    position: relative;
    top: -4px;
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
    :focus {
        outline: none;
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
