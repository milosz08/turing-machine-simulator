/*!
 * @file CodeareaRows.styles.js
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

const { DEBUG_BAR_COLOUR, STATUS_BAR_COLOUR } = NON_CHANGE_VALUES;

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

export const Indicator = styled.div`
    position: absolute;
    display: ${props => props.prev || props.next ? 'block' : 'none'};
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    height: 20px;
    left: -59px;
    background-color: ${props => props.prev ? DEBUG_BAR_COLOUR : STATUS_BAR_COLOUR};
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
        border-left: 10px solid ${props => props.prev ? DEBUG_BAR_COLOUR : STATUS_BAR_COLOUR};
    }
`;

export const LineNumber = styled.span`
    position: relative;
    width: 40px;
    left: 0;
    padding: 0 6px;
    color: ${({ theme }) => theme.TEXT_TINT1};
    font-weight: 700;
`;

export const Highlither = styled.aside`
    flex-grow: 1;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 21px;
        opacity: .5;
        background-color: ${props => {
            if(props.prev) { return DEBUG_BAR_COLOUR; } 
                else if(props.next) { return STATUS_BAR_COLOUR; }
        }};
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