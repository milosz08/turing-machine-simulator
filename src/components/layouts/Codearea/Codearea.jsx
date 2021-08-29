import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons';

import {
    CodeareaContainer, CodeareaField, RowsCounter, CodeareaWrapper, CodeInspections, CursorPosButton,
    TerminalMode, LeftContent
} from './Codearea.styles';

import STYLED_CONSTANTS from '../../../utils/StylesConstants';
import getInputSelection from '../../../utils/getInputSelection';
import TextareaCompile, { SYNTAX_ERRORS } from './../../../utils/TextareaCompile';

const Codearea = () => {

    const [ codearea, setCodearea ] = useState('');
    const [ codeareaMode, setCodeareaMode ] = useState(CodeareaMode.RUNNING);
    const [ onCompile, setOnCompile ] = useState(CodeareaMode.COMPILING);

    const [ problemsArray, setProblemsArray ] = useState([ ]);

    const [ scrollY, setScrollY ] = useState(0);
    const [ cursorPos, setCursorPos ] = useState({ start: 0, end: 0 });

    const areaRef = useRef(null);

    const countOfLines = codearea.split('\n').length;
    const allCharacters = codearea.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '').length;
    const selectedCount = codearea.length !== 0 ? cursorPos.end - cursorPos.start : 0;

    const errorsArr = problemsArray.filter(element => element.danger === SYNTAX_ERRORS.ERROR_LEVEL);
    const warningsArr = problemsArray.filter(element => element.danger === SYNTAX_ERRORS.WARNING_LEVEL);

    const generateLinesNumbers = Array.from({ length: countOfLines }, (e, i) => i).map(element => (
        <div key = {element}>{element + 1}</div>
    ));

    const handleCompile = () => {
        const validate = new TextareaCompile(codearea, '0');
        const validateIndicator = validate.validateCodeArea();
        if(validateIndicator) {
            setOnCompile(CodeareaMode.COMPILE_SUCCESS);
        } else {
            setOnCompile(CodeareaMode.COMPILE_FAILURE);
        }
        setProblemsArray(validate.problemsArray);
        setCodeareaMode(CodeareaMode.COMPILING);
    }

    useEffect(() => {
        const HTMLelement = areaRef.current;
        const onMouseMoveEvent = e => {
            const result = getInputSelection(areaRef.current);
            setCursorPos(result);
        }
        const resetCompileState = () => {
            setOnCompile(CodeareaMode.COMPILING);
            setCodeareaMode(CodeareaMode.RUNNING);
        }
        HTMLelement.addEventListener('click', onMouseMoveEvent, true);
        HTMLelement.addEventListener('keydown', onMouseMoveEvent, true);
        HTMLelement.addEventListener('focus', resetCompileState, true);
        return () => {
            if(HTMLelement) {
                HTMLelement.removeEventListener('click', onMouseMoveEvent, true);
                HTMLelement.removeEventListener('keydown', onMouseMoveEvent, true);
                HTMLelement.removeEventListener('focus', resetCompileState, true);
            }
        }
    }, [codearea, onCompile]);

    return (
        <CodeareaContainer>
        <div>123</div>
        <CodeareaWrapper>
            <RowsCounter positionY = {scrollY}>
                {generateLinesNumbers}
            </RowsCounter>
            <CodeareaField
                placeholder = 'Input here your Turing Machine program code.'
                value = {codearea}
                onChange = {({ target }) => setCodearea(target.value)}
                onBlur = {handleCompile}
                onScroll = {() => setScrollY(areaRef.current.scrollTop)}
                ref = {areaRef}
            />
        </CodeareaWrapper>
        <CodeInspections background = {selectBarBackground(codeareaMode)}>
            <TerminalMode>
                Current status: {codeareaMode}
            </TerminalMode>
            <LeftContent animationWorking = {onCompile}>
                <CursorPosButton
                    title = {codeareaMode === CodeareaMode.RUNNING ? 'Click here to set cursor position' : ''}
                    background = {selectBarBackground(codeareaMode)}
                    disabled = {codeareaMode !== CodeareaMode.RUNNING}
                >
                    {codeareaMode === CodeareaMode.RUNNING && `Ln ${cursorPos.start}, Col ${countOfLines} ${' '}
                    (${selectedCount} selected), Total signs: ${allCharacters}`}
                    {codeareaMode === CodeareaMode.COMPILING &&
                    `Compiling status: ${onCompile}, Errors: ${errorsArr.length}, Warnings: ${warningsArr.length}`}
                </CursorPosButton>
                <FontAwesomeIcon icon = {selectShowIcon(onCompile)}/>
            </LeftContent>
        </CodeInspections>
    </CodeareaContainer>                
    );
};

export const CodeareaMode = {
    DEBUGGIN: 'debugging',
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
    const { DEBUG_BAR_COLOUR, COMPILING_BAR_COLOUR, STATUS_BAR_COLOUR, STATUS_BAR_HOVER_COLOUR } = STYLED_CONSTANTS;
    switch(value) {
        case CodeareaMode.DEBUGGIN:   return { normal: DEBUG_BAR_COLOUR, hover: '' };
        case CodeareaMode.COMPILING:  return { normal: COMPILING_BAR_COLOUR, hover: '' };
        default:                      return { normal: STATUS_BAR_COLOUR, hover: STATUS_BAR_HOVER_COLOUR };
    }
}

export default Codearea;