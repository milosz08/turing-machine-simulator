/**
 * @file Codearea.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Styled Component file.
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

import styled from 'styled-components';
import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';

import { ControlButton } from '../Controls/Controls.styles';
import { CodeareaMode } from './Codearea';

export const CodeareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(1300px - 60px);
    max-height: fit-content;
`;

export const CodeareaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    padding: 0 60px;
    font-size: 1rem;
    min-height: 500px;
`;

export const CompileButton = styled(ControlButton)`
    margin: 0 auto 30px auto;
    width: fit-content;
    font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
`;

export const CodeareaField = styled.div`
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
    textarea {
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
        ::-webkit-scrollbar {
            width: 15px;
            height: 2px;
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
    }
`;

export const CodeInspections = styled.div`
    width: calc(100% - 120px);
    margin: 0 60px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.background.normal};
    color: ${NON_CHANGE_VALUES.WHITE_COLOUR};
    padding: 0 8px;
    border-bottom-left-radius: ${props => props.openWindow ? 'none' : '5px'};
    border-bottom-right-radius: ${props => props.openWindow ? 'none' : '5px'};
`;

export const CursorPosButton = styled.button`
    padding: 3px 4px;
    font-size: .8rem;
    font-weight: 200;
    background-color: transparent;
    color: ${NON_CHANGE_VALUES.WHITE_COLOUR};
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

export const RowsContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: calc(100% - 80px);
    height: 100%;
    border-radius: 7px;
`;

export const SingleRow = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    span {
        position: relative;
        width: 40px;
        left: 0;
        padding: 0 6px;
        color: ${({ theme }) => theme.TEXT_TINT1};
        font-weight: 700;
    }
    aside {
        flex-grow: 1;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 21px;
        opacity: .5;
        background-color: ${props => {
            if(props.prev) {
                return NON_CHANGE_VALUES.DEBUG_BAR_COLOUR;
            } else if(props.next) {
                return NON_CHANGE_VALUES.STATUS_BAR_COLOUR;
            }
        }};
    }
    div {
        position: absolute;
        display: ${props => props.prev || props.next ? 'block' : 'none'};
        top: 50%;
        transform: translateY(-50%);
        width: fit-content;
        height: 20px;
        left: -59px;
        background-color: ${props => (
            props.prev ? NON_CHANGE_VALUES.DEBUG_BAR_COLOUR : NON_CHANGE_VALUES.STATUS_BAR_COLOUR
        )};
        color: ${NON_CHANGE_VALUES.WHITE_COLOUR};
        font-size: .8rem;
        font-weight: 300;
        line-height: 1.6;
        padding: 0 6px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        ::after {
            position: absolute;
            content: '';
            right: -10px;
            width: 0; 
            height: 0; 
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid ${props => (
                props.prev ? NON_CHANGE_VALUES.DEBUG_BAR_COLOUR : NON_CHANGE_VALUES.STATUS_BAR_COLOUR
            )};
        }
    }
    :nth-child(1) {
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

export const LeftContent = styled.div`
    svg {
        font-weight: 200;
        font-size: .7rem;
        margin: 0 15px;
        animation: ${props => props.animationWorking === CodeareaMode.COMPILING ? 'circle' : 'none'} 3s infinite linear;
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

export const RowsCounter = styled.div.attrs(props => ({ 
    style: {
        height: `calc(100% + ${props.positionY}px)`,
        transform: `translateY(-${props.positionY}px)`
    } 
}))`
    padding: 0 6px 0 0;
    text-align: right;
    width: calc(100% - 60px);
`;