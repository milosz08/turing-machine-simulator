/**
 * @file FilesSupport.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
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