/*!
 * @file TapeInfos.styles.js
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
const { BORDER_COLOUR } = NON_CHANGE_VALUES;

export const TapeInfosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1300px;
    margin-bottom: 20px;
`;

export const StateInfosWrapper = styled.div`
    width: 220px;
    height: 50px;
    border: 1px solid ${BORDER_COLOUR};
    border-radius: 5px;
    font-size: .9rem;
    padding: 16px 0 12px;
    text-align: center;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    position: relative;
    ::after {
        position: absolute;
        content: '${props => props.pseudoContent}';
        width: fit-content;
        top: -12px;
        padding: 0 6px;
        left: 50%;
        transform: translateX(-50%);
        color: ${({ theme }) => theme.TEXT};
        background-color: ${({ theme }) => theme.BODY};
        border: 3px solid ${({ theme }) => theme.BODY};
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
        font-size: .8rem;
        text-transform: uppercase;
    }
`;

export const MessageWrapper = styled.div`
    margin: 0 50px;
    max-width: 700px;
    text-align: center;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;
