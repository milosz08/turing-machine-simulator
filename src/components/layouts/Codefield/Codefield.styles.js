/*!
 * @file Codefield.styles.js
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

export const CodefieldWrapper = styled.div`
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
`;

export const CodeTextarea = styled.textarea`
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
    overflow: ${props => props.scrollDisabled ? 'hidden' : 'auto'};
    ::-webkit-scrollbar {
        width: 15px;
        height: auto;
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
    :disabled {
        resize: none;
        cursor: default;
    }
`;