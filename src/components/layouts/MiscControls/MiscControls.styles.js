/*!
 * @file MiscControls.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript Styled Component file.
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
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
