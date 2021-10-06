/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import React, {  Fragment, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { SYNTAX_PROBLEMS } from '../../../utils/machineConfiguration';
import { NON_CHANGE_VALUES } from '../../../utils/styledComponentThemes';

import { ErrorInfoContainer, ListElement, List } from './ErrorInfo.styles';

/**
 * Component responsible for generating all compiler errors and warnings in the form of a list.
 * If the list is empty (no errors and/or warnings), the component generates information
 * about no errors/warnings.
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