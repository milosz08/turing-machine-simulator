import React, { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons';

import {
    CodeareaContainer, CodeareaField, RowsCounter, CodeareaWrapper, CodeInspections, CursorPosButton,
    TerminalMode, LeftContent, SingleRow, RowsContainer
} from './Codearea.styles';

import STYLED_CONSTANTS from '../../../utils/StylesConstants';
import getInputSelection from '../../../utils/getInputSelection';
import TextareaCompile, { SYNTAX_ERRORS } from './../../../utils/TextareaCompile';
import ErrorInfo from '../ErrorInfo/ErrorInfo';

const Codearea = () => {

    const {
        labelsArrays, setLabelsArrays, startLabel, codeareaMode, setCodeareaMode, onCompile, setOnCompile, actualState
    } = useContext(StoreContext);
    const { errors } = labelsArrays;

    const [ codearea, setCodearea ] = useState('0 0 _ r 1o\n0 1 _ r 1i\n0 _ _ * accept\n1o _ _ l 2o\n1o * * r 1o\n1i _ _ l 2i\n1i * * r 1i\n2o 0 _ l 3\n2o _ _ * accept\n2o * * * reject');
    const [ openWindow, setOpenWindow ] = useState(false);

    const [ scrollY, setScrollY ] = useState(0);
    const [ cursorPos, setCursorPos ] = useState({ start: 0, end: 0 });

    const areaRef = useRef(null);

    const countOfLines = codearea.split('\n').length;
    const allCharacters = codearea.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '').length;
    const selectedCount = codearea.length !== 0 ? cursorPos.end - cursorPos.start : 0;

    const errorsArr = errors.filter(element => element.danger === SYNTAX_ERRORS.ERROR_LEVEL);
    const warningsArr = errors.filter(element => element.danger === SYNTAX_ERRORS.WARNING_LEVEL);

    const generateLinesNumbers = Array.from({ length: countOfLines }, (e, i) => i).map(element => (
        <SingleRow 
            key = {element}
            prev = {element === actualState.prevState?.lineIndex - 1}
            next = {element === actualState.nextState?.lineIndex - 1}
        >
            <div>{element === actualState.prevState?.lineIndex - 1 ? 'Prev' : 'Next'}</div>
            <span>{element + 1}</span>
            <aside/>
        </SingleRow>
    ));

    const handleCompile = () => {
        const validate = new TextareaCompile(codearea, startLabel);
        const validateIndicator = validate.validateCodeArea();
        if(validateIndicator) {
            setOnCompile(CodeareaMode.COMPILE_SUCCESS);
        } else {
            setOnCompile(CodeareaMode.COMPILE_FAILURE);
        }
        setCodeareaMode(CodeareaMode.COMPILING);
        setLabelsArrays({ labels: validate.objectsArray, errors: validate.problemsArray });
    }

    useEffect(() => {
        const HTMLelement = areaRef.current;
        const onMouseMoveEvent = () => {
            const result = getInputSelection(areaRef.current);
            setCursorPos(result);
        }
        const resetCompileState = () => {
            setOnCompile(CodeareaMode.COMPILING);
            setCodeareaMode(CodeareaMode.RUNNING);
        }
        if(codeareaMode !== CodeareaMode.DEBUGGIN) {
            HTMLelement.addEventListener('click', onMouseMoveEvent, true);
            HTMLelement.addEventListener('keydown', onMouseMoveEvent, true);
            HTMLelement.addEventListener('focus', resetCompileState, true);
        }
        return () => {
            if(HTMLelement) {
                HTMLelement.removeEventListener('click', onMouseMoveEvent, true);
                HTMLelement.removeEventListener('keydown', onMouseMoveEvent, true);
                HTMLelement.removeEventListener('focus', resetCompileState, true);
            }
        }
    }, [codearea, onCompile, setLabelsArrays, setOpenWindow, setCodeareaMode, codeareaMode, setOnCompile]);

    return (
        <CodeareaContainer>
        <div>123</div>
        <CodeareaWrapper>
            <RowsContainer>
                <RowsCounter positionY = {scrollY}>
                    {generateLinesNumbers}
                </RowsCounter>
            </RowsContainer>
            <CodeareaField>
                <textarea
                    placeholder = 'Input here your Turing Machine program code.'
                    value = {codearea}
                    onChange = {({ target }) => setCodearea(target.value)}
                    onBlur = {handleCompile}
                    onScroll = {() => setScrollY(areaRef.current.scrollTop)}
                    ref = {areaRef}
                    disabled = {codeareaMode === CodeareaMode.DEBUGGING}
                />
            </CodeareaField>
        </CodeareaWrapper>
        <CodeInspections 
            background = {selectBarBackground(codeareaMode)}
            openWindow = {openWindow}
        >
            <TerminalMode>
                Current status: {codeareaMode}
            </TerminalMode>
            <LeftContent animationWorking = {onCompile}>
                <CursorPosButton
                    title = {codeareaMode === CodeareaMode.COMPILING ? 'Click here to see all Errors and Warnings' : ''}
                    background = {selectBarBackground(codeareaMode)}
                    onClick = {() => setOpenWindow(prevState => !prevState)}
                    disabled = {codeareaMode !== CodeareaMode.COMPILING}
                >
                    {codeareaMode === CodeareaMode.RUNNING && `Ln ${cursorPos.start}, Col ${countOfLines} ${' '}
                    (${selectedCount} selected), Total signs: ${allCharacters}`}
                    {codeareaMode === CodeareaMode.COMPILING &&
                    `Compiling status: ${onCompile}, Errors: ${errorsArr.length}, Warnings: ${warningsArr.length}`}
                    {codeareaMode === CodeareaMode.DEBUGGING && 
                    `Remained number of states: ${0}, Current label: ${0}`}
                </CursorPosButton>
                {codeareaMode !== CodeareaMode.DEBUGGING && <FontAwesomeIcon icon = {selectShowIcon(onCompile)}/>}
            </LeftContent>
        </CodeInspections>
        {openWindow && <ErrorInfo/>}
    </CodeareaContainer>
    );
};

export const CodeareaMode = {
    DEBUGGING: 'debugging',
    COMPILING: 'compiled',
    RUNNING: 'running',
    COMPILE_SUCCESS: 'Succeess',
    COMPILE_FAILURE: 'Failure',
}

const selectShowIcon = value  => {
    switch(value) {
        case CodeareaMode.COMPILE_SUCCESS:  return faCheck;
        case CodeareaMode.COMPILE_FAILURE:  return faExclamationTriangle;
        default:                            return faSyncAlt;
    }
}

const selectBarBackground = value => {
    const {
        DEBUG_BAR_COLOUR, COMPILING_BAR_COLOUR, STATUS_BAR_COLOUR, COMPILING_BAR_HOVER_COLOUR
    } = STYLED_CONSTANTS;

    switch(value) {
        case CodeareaMode.DEBUGGING:   return { normal: DEBUG_BAR_COLOUR, hover: '' };
        case CodeareaMode.COMPILING:  return { normal: COMPILING_BAR_COLOUR, hover: COMPILING_BAR_HOVER_COLOUR };
        default:                      return { normal: STATUS_BAR_COLOUR, hover: '' };
    }
}

export default Codearea;