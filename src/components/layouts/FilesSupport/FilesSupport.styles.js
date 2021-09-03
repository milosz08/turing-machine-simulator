/**
 * @file FilesSupport.styles.js
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

export const FilesSupportContainer = styled.div`
    display: flex;
    width: 1300px;
    margin: 30px 0;
`;

export const FileSupportWrapper = styled.div`
    border: 1px solid ${NON_CHANGE_VALUES.BORDER_COLOUR};
    border-radius: 5px;
    padding: 30px 0 20px 0;
    margin: ${props => props.direction === 'left' ? '0 20px 0 0' : '0 0 0 20px'};
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input[type = 'file'] {
        opacity: 0;
        width: 0.1px;
        height: 0.1px;
        position: absolute;
    }
    label {
        display: block;
        position: relative;
        padding: 6px 15px;
        border: 0;
        border-radius: 5px;
        font-size: 1rem;
        letter-spacing: -1px;
        color: ${({ theme }) => theme.BUTTON_COLOUR};
        font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
        background-color: ${({ theme }) => theme.BUTTON_BACKGROUND};
        width: 200px;
        text-align: center;
        cursor: pointer;
    }
    ::after {
        position: absolute;
        content: '${props => props.pseudoContent}';
        width: fit-content;
        top: -12px;
        padding: 0 10px;
        left: 50%;
        transform: translateX(-50%);
        color: ${({ theme }) => theme.TEXT};
        background-color: ${({ theme }) => theme.BODY};
        border: 3px solid ${({ theme }) => theme.BODY};
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
        font-size: .8rem;
        text-transform: uppercase;
    }
    div {
        margin-top: 20px;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
`;