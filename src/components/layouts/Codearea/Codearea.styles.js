import styled from 'styled-components';
import { CodeareaMode } from './Codearea';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

export const CodeareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 500px;
`;

export const CodeareaWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    font-size: 1rem;
`;

export const CodeareaField = styled.textarea`
    width: 100%;
    height: 100%;
    font-weight: 500;
    background-color: ${STYLED_CONSTANTS.BLACK_COLOUR};
    color: ${STYLED_CONSTANTS.GRAY_COLOUR};
    padding: 6px;
    font-size: 1rem;
    border: none;  
    border-right: 1px solid ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
    resize: none;
    outline: none;
`;

export const CodeInspections = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.background.normal};
    padding: 0 8px;
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

export const RowsCounter = styled.div`
    background-color: ${STYLED_CONSTANTS.LIGHTEN_BLACK_COLOUR};
    padding: 6px;
    text-align: right;
    width: 40px;
    height: calc(100% + ${props => props.positionY}px);
    transform: translateY(-${props => props.positionY}px);
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