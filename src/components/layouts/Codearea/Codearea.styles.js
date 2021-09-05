/*!
 * @file Codearea.styles.js
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
    padding: 0 60px;
    font-size: 1rem;
    min-height: 500px;
`;