import styled from 'styled-components';
import { CodeareaMode } from './Codearea';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

export const CodeareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1300px;
    max-height: fit-content;
`;

export const CodeareaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    padding-left: 60px;
    font-size: 1rem;
    height: 600px;
`;

export const CodeareaField = styled.div`
    position: relative;
    border: 1px solid ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
    border-bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    textarea {
        font-weight: 500;
        width: calc(100% - 40px);
        height: 100%;
        background-color: transparent;
        color: ${STYLED_CONSTANTS.GRAY_COLOUR};
        padding: 6px;
        margin-left: 40px;
        font-size: 1rem;
        border: none;
        outline: none;
        resize: none;
        ::-webkit-scrollbar {
            width: 2px;
            height: 2px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${STYLED_CONSTANTS.GRAY_COLOUR};
        }
    }
`;

export const CodeInspections = styled.div`
    width: calc(100% - 60px);
    margin-left: 60px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.background.normal};
    padding: 0 8px;
    border-bottom-left-radius: ${props => props.openWindow ? 'none' : '7px'};
    border-bottom-right-radius: ${props => props.openWindow ? 'none' : '7px'};
`;

export const CursorPosButton = styled.button`
    padding: 3px 4px;
    font-size: .8rem;
    font-weight: 200;
    background-color: transparent;
    color: ${STYLED_CONSTANTS.WHITE_COLOUR};
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
    width: 100%;
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
        background-color: ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
        color: ${STYLED_CONSTANTS.GRAY_COLOUR};
        font-weight: 700;
    }
    aside {
        flex-grow: 1;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 21px;
        background-color: ${props => {
            if(props.prev) {
                return STYLED_CONSTANTS.DEBUG_BAR_COLOUR;
            } else if(props.next) {
                return STYLED_CONSTANTS.STATUS_BAR_COLOUR;
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
            props.prev ? STYLED_CONSTANTS.DEBUG_BAR_COLOUR : STYLED_CONSTANTS.STATUS_BAR_COLOUR
        )};
        color: ${STYLED_CONSTANTS.WHITE_COLOUR};
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
                props.prev ? STYLED_CONSTANTS.DEBUG_BAR_COLOUR : STYLED_CONSTANTS.STATUS_BAR_COLOUR
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
    0% { transform: rotate(0deg) }
    99% { transform: rotate(360deg) }
    100% { transform: rotate(0deg) }
  }
`;

export const RowsCounter = styled.div.attrs(props => ({ 
    style: {
        height: `calc(100% + ${props.positionY}px)`,
        transform: `translateY(-${props.positionY}px)`
    } 
}))`
    padding: 0 6px 6px 0;
    text-align: right;
    width: calc(100% - 60px);
`;