import React, {  Fragment, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { SYNTAX_ERRORS } from '../../../utils/TextareaCompile';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

import { ErrorInfoContainer, ListElement, List } from './ErrorInfo.styles';

const ErrorInfo = () => {

    const { labelsArrays } = useContext(StoreContext);

    const { errors } = labelsArrays;
    const { WARNING_COLOUR, ERROR_COLOUR } = STYLED_CONSTANTS;

    const generateErrorsList = errors.map(error => (
        <ListElement 
            key = {`${error.problemType}__${error.lineIndex}__${error.labelIndex}`}
            labelInfoColour = {error.danger === SYNTAX_ERRORS.ERROR_LEVEL ? ERROR_COLOUR : WARNING_COLOUR}
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