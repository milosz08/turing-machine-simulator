/*!
 * @file ErrorInfo.styles.js
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

export const ErrorInfoContainer = styled.div`
    width: calc(100% - 120px);
    margin: 0 60px;
    border: 1px solid ${BORDER_COLOUR};
    border-top: none;
    font-size: .8rem;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    padding: 15px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    header {
        margin-bottom: 5px;
    }
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const ListElement = styled.li`
    margin-left: 20px;
    color: ${({ theme }) => theme.TEXT};
    span {
        color: ${props => props.labelInfoColour};
    }
    strong {
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
`;