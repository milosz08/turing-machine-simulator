/*!
 * @file CodeInspections.styles.js
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

import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';
import { CODEAREA_MODES } from '../../../utils/machineConfiguration';

const { WHITE_COLOUR } = NON_CHANGE_VALUES;
const { COMPILING } = CODEAREA_MODES;

export const CodeInspectionsWrapper = styled.div`
    width: calc(100% - 120px);
    margin: 0 60px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.background.normal};
    color: ${WHITE_COLOUR};
    padding: 0 8px;
    border-bottom-left-radius: ${props => props.openWindow ? 'none' : '5px'};
    border-bottom-right-radius: ${props => props.openWindow ? 'none' : '5px'};
`;

export const CursorPosButton = styled.button`
    padding: 3px 4px;
    font-size: .8rem;
    font-weight: 200;
    background-color: transparent;
    color: ${WHITE_COLOUR};
    border: none;
    cursor: pointer;
    :hover {
      background-color: ${props => props.background.hover};
    }
    :disabled {
      cursor: text;
    }
`;

export const TerminalMode = styled.div`
    padding: 3px 4px;
    font-size: .8rem;
    font-weight: 200;
`;

export const LeftContent = styled.div`
    svg {
        font-weight: 200;
        font-size: .7rem;
        margin: 0 15px;
        animation: ${props => props.animationWorking === COMPILING ? 'circle' : 'none'} 3s infinite linear;
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