/*!
 * @file FilesSupport.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React from 'react';

import SaveToFile from './SaveToFile';
import ReadFromFile from './ReadFromFile';

import { FilesSupportContainer } from './FilesSupport.styles';

/**
 * @details Structure for the section responsible for handling files.
 * 
 * @returns { JSX.Element }
 */
const FilesSupport = () => (
    <FilesSupportContainer>
        <SaveToFile/>
        <ReadFromFile/>
    </FilesSupportContainer>
);

export default FilesSupport;