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

import React, {  Fragment, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { SYNTAX_PROBLEMS } from '../../../utils/machineConfiguration';
import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';

import { ErrorInfoContainer, ListElement, List } from './ErrorInfo.styles';

/**
 * @details Component responsible for generating all compiler errors and warnings in the form of a list. 
 *          If the list is empty (no errors and/or warnings), the component generates information 
 *          about no errors/warnings.
 * 
 * @returns { JSX.Element }
 */
const ErrorInfo = () => {

    const { labelsArrays } = useContext(StoreContext);

    const { errors } = labelsArrays;
    const { WARNING_COLOUR, ERROR_COLOUR } = NON_CHANGE_VALUES;

    /**
     * Generating all compiler errors and warnings.
     */
    const generateErrorsList = errors.map(error => (
        <ListElement
            key = {`${error.problemType}__${error.lineIndex}__${error.labelIndex}`}
            labelInfoColour = {error.danger === SYNTAX_PROBLEMS.ERROR_LEVEL ? ERROR_COLOUR : WARNING_COLOUR}
        >
            Ln {error.lineIndex}: <span>Syntax {error.danger}</span> 
            {typeof error.labelIndex !== 'number' ? ` <${error.labelIndex}>` : ''} : 
            <strong> {error.problemType}.</strong>
        </ListElement>
    ));

    return (
        <ErrorInfoContainer>
            {errors.length > 0 &&
                <Fragment>
                    <header>Compiling Problems:</header>
                    <List>{generateErrorsList}</List>
                </Fragment>
            }
            {errors.length === 0 &&
                <List>
                    <ListElement>None problems</ListElement>
                </List>
            }
        </ErrorInfoContainer>
    );
}

export default ErrorInfo;