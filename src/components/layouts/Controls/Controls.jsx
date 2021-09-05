/*!
 * @file Controls.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

import React, { useContext, useState, useRef, useEffect } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

import { SYNTAX_PROBLEMS, TAPE_VALUES, COMPILE_AND_RUN, MACHINE_STATES } from '../../../utils/machineConfiguration';
import { useIsMount } from './../../../utils/customHooks/useIsMount';
import { CODEAREA_MODES } from '../../../utils/machineConfiguration';

import InitialInput from './InitialInput';
import InitialState from './InitialState';

import { ContainerStyled, ControlButton, ControlButtonSqr } from './Controls.styles';

/**
 * @details Component responsible for the control and all the logic of a Turing machine. Includes functions for 
 *          running the algorithm, stopping, undoing and debugging.
 * 
 * @returns { JSX.Element }
 */
const Controls = () => {

    const {
        labelsArrays, setCodeareaMode, setOnCompile, startLabel, tapeValue, setTapeValue, initialInput, setMachineEndMessage, 
        headPosition, setHeadPosition, setActualState, allSteps, setAllSteps, disableElms, setDisableElms, addtlnContr
    } = useContext(StoreContext);
    
    const { labels, errors } = labelsArrays;
    const onlyErrors = errors.filter(el => el.danger === SYNTAX_PROBLEMS.ERROR_LEVEL);

    const [ playPauseToggle, setPlayPauseToggle ] = useState(false);
    
    const [ findingLabel, setFindingLabel ] = useState(startLabel);
    const [ allHeadPos, setAllHeadPos ] = useState([]);
    const [ activeIndicator, setActiveInicator ] = useState(false);
    const [ allBlanks, setAllBlanks ] = useState([]);

    const isMount = useIsMount();
    const increment = useRef(null);

    /**
     * Main function containing all the logic of the Turing machine algorithm. Started at each tick (single tuple) 
     * triggered manually, or with an asynchronous counter.
     */
    const turingAlgorithm = () => {
        let blankSpaceAdding = false;
        const sameStatesSearch = labels.filter(el => el.currentState === findingLabel);

        const getSingleValueFromTape = () => {
            const curTapeSymb = tapeValue[headPosition]; // Get single value from tape
            if(curTapeSymb === TAPE_VALUES.SPACE) { return TAPE_VALUES.BLANK; }
            return curTapeSymb;
        };

        const findMathTupleForCurrentSymbol = _curTapeSymb => {
            const findMatchElement = sameStatesSearch.find(label => label.currentSymbol === _curTapeSymb);
            if(Boolean(!findMatchElement)) { // For any of rest characters
                return sameStatesSearch.find(label => label.currentSymbol === TAPE_VALUES.ANY);
            }
            return findMatchElement;
        };

        const replaceSingleChar = _findMatchElement => {
            let signToReplace;
            switch(_findMatchElement.newSymbol) {
                case TAPE_VALUES.BLANK:     signToReplace = TAPE_VALUES.SPACE; break;
                case TAPE_VALUES.ANY:       signToReplace = TAPE_VALUES.ANY; break;
                default:                    signToReplace = findMatchElement.newSymbol;
            }
            if(signToReplace !== TAPE_VALUES.ANY) {
                let copy = [...tapeValue];
                copy[headPosition] = signToReplace;
                setTapeValue(copy);
            }
        };

        const moveHead = _findMatchElement => {
            switch(_findMatchElement.direction) {
                case TAPE_VALUES.LEG_DIR.RIGHT:     setHeadPosition(prevState => prevState + 1); break;
                case TAPE_VALUES.LEG_DIR.LEFT:      setHeadPosition(prevState => prevState - 1); break;
                default:                            setHeadPosition(prevState => prevState);
            }
        };

        const fixedBlankElements = _findMatchElement => {
            if(_findMatchElement.direction === TAPE_VALUES.LEG_DIR.RIGHT && !tapeValue[headPosition + 1]) {
                blankSpaceAdding = true;
                setTapeValue(prevArray => [ ...prevArray, TAPE_VALUES.SPACE ]);
            }
            if(_findMatchElement.direction === TAPE_VALUES.LEG_DIR.LEFT && headPosition === 0) {
                blankSpaceAdding = true;
                setTapeValue(prevArray => [TAPE_VALUES.SPACE].concat([...prevArray]));
                setHeadPosition(prevState => prevState + 1);
            }
        };

        const globalEnd = () => {
            setPlayPauseToggle(false);
            clearInterval(increment.current);
        };

        const preventEndlessLoop = () => {
            if(tapeValue.filter(el => el === TAPE_VALUES.SPACE).length > 100) {
                setMachineEndMessage(MACHINE_STATES.ALGORITHM_LOOP);
                globalEnd();
                setDisableElms({
                    fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: true, scrollCodearea: false
                });
            }
        };

        const endingTupleState = _findMatchElement => {
            if(_findMatchElement.newState === `${COMPILE_AND_RUN.STOP_LABEL}-${_findMatchElement.currentState}`) {
                setMachineEndMessage(MACHINE_STATES.ALGORITHM_FINISH);
                globalEnd();
                setDisableElms({ ...disableElms,
                    startStop: true, reset: false, inputs: true, scrollCodearea: false
                });
            }
        };

        const machineStoppedByTupleSign = _findMatchElement => {
            if(_findMatchElement.terminate) {
                handlePause();
            }
        };

        const settingNextElementFromTuple = _findMatchElement => {
            const nextElementsSearch = labels.filter(el => el.currentState === _findMatchElement.newState);
            let symbol;
            switch(tapeValue[headPosition + 1]) {
                case TAPE_VALUES.SPACE:     symbol = TAPE_VALUES.BLANK; break;
                default:                    symbol = tapeValue[headPosition + 1];
            }
            let findMathNextElm = nextElementsSearch.find(label => label.currentSymbol === symbol);
            if(!findMathNextElm) { findMathNextElm = _findMatchElement; }
            setActualState({ prevState: _findMatchElement, nextState: findMathNextElm });
            setAllSteps(prevArray => [ ...prevArray, _findMatchElement ]);
        };

        const curTapeSymb = getSingleValueFromTape();
        const findMatchElement = findMathTupleForCurrentSymbol(curTapeSymb);

        if(findMatchElement) {
            replaceSingleChar(findMatchElement);
            moveHead(findMatchElement);
            fixedBlankElements(findMatchElement);
            preventEndlessLoop();
            endingTupleState(findMatchElement);
            setFindingLabel(findMatchElement.newState);
            settingNextElementFromTuple(findMatchElement);
            machineStoppedByTupleSign(findMatchElement);
            setAllHeadPos(prevArray => [ ...prevArray, headPosition ]);
            setAllBlanks(prevArray => [ ...prevArray, blankSpaceAdding ]);
        } else {
            setMachineEndMessage(`Machine stopped! State '${findingLabel}' has no action for symbol: '${curTapeSymb}'.`);
            setDisableElms({
                fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: true, scrollCodearea: false
            });
            globalEnd();
        }
    };

    /**
     * Activated by the user with each button press, it moves back one position (based on the stored transition table).
     */
    const handleStepBackward = () => {
        let copyTape = [...tapeValue];
        const copy = [...allSteps];
        const prevArrElement = copy.pop();
        const copyH = [...allHeadPos];
        const prevHeadPos = copyH.pop();
        const copyB = [...allBlanks];
        const prevIfBlankSpace = copyB.pop();

        const replaceSingleChar = () => {
            let signToReplace;
            switch(prevArrElement.currentSymbol) {
                case TAPE_VALUES.BLANK:     signToReplace = TAPE_VALUES.SPACE; break;
                case TAPE_VALUES.ANY:       signToReplace = TAPE_VALUES.ANY; break;
                default:                    signToReplace = prevArrElement.currentSymbol;
            }
            if(signToReplace !== TAPE_VALUES.ANY) {
                copyTape[prevHeadPos] = signToReplace;
            }
            if(prevIfBlankSpace && prevArrElement.direction !== TAPE_VALUES.LEG_DIR.RIGHT) {
                copyTape.splice(prevHeadPos, 1);
            }
        };

        const nextElementSetter = () => {
            let nextElement = copy[allSteps.length - 2];
            if(!nextElement) { nextElement = prevArrElement; }
            return nextElement;
        };

        if(allSteps.length > 0) {
            replaceSingleChar();
            setActualState({ prevState: prevArrElement, nextState: nextElementSetter() });
            setHeadPosition(prevHeadPos);
            setAllSteps(copy);
            setTapeValue(copyTape);
            setAllHeadPos(copyH);
            setAllBlanks(copyB);
            setMachineEndMessage(MACHINE_STATES.ALGORITHM_BACKWARD);
        } else {
            handleReset();
        }
    };

    /**
     * Each time it clicks, it runs a Turing machine algorithm.
     */
    const handleStepForward = () => {
        setActiveInicator(prevState => !prevState);
        setMachineEndMessage(MACHINE_STATES.ALGORITHM_FORWARD);
    };
    
    /**
     * An asynchronous counter that runs the Turing machine algorithm function.
     * 
     * @param { number } speed - speed of asynchronous counter.
     */
    const handleRun = (speed = addtlnContr.headSpeed) => {
        increment.current = setInterval(() => { setActiveInicator(prevState => !prevState) }, speed);
        setPlayPauseToggle(true);
        setDisableElms({
            fullSpeed: true, prev: true, startStop: false, next: true, reset: true, inputs: true, scrollCodearea: true
        });
        setMachineEndMessage(MACHINE_STATES.ALGORITHM_RUNNING);
        setCodeareaMode(CODEAREA_MODES.DEBUGGING);
    };

    /**
     * Manually stopping the counter action.
     */
    const handlePause = () => {
        clearInterval(increment.current);
        setPlayPauseToggle(false);
        setDisableElms({ ...disableElms, prev: false, startStop: false, next: false, reset: false, scrollCodearea: false });
        setMachineEndMessage(MACHINE_STATES.ALGORITHM_STOPPED);
    };

    /**
     * Reset to default settings.
     * 
     * @param { boolean } notFirstLoad - parameter indicating whether this is the first loading of the component.
     */
    const handleReset = (notFirstLoad = true) => {
        increment.current = null;
        if(notFirstLoad) {
            setDisableElms({
                fullSpeed: false, prev: false, startStop: false, next: false, reset: false, inputs: false, scrollCodearea: false
            });
            setMachineEndMessage(MACHINE_STATES.ALGORITHM_RESET);
        } else {
            setMachineEndMessage(MACHINE_STATES.ALGORITHM_IDLE);
        }
        setActualState({ prevState: null, nextState: null });
        clearInterval(increment.current);
        setTapeValue([...initialInput]);
        setFindingLabel(startLabel);
        setAllSteps([]);
        setHeadPosition(0);
        setCodeareaMode(CODEAREA_MODES.RUNNING);
        setOnCompile(CODEAREA_MODES.COMPILING);
    };

    /**
     * Triggered at each tick of the asynchronous counter.
     */
    useEffect(() => {
        if(!isMount) { // Skip first render
            turingAlgorithm();
        } else {
            handleReset(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndicator]);
    
    return (
        <ContainerStyled>
            <InitialInput/>
            <div>
                <ControlButton 
                    onClick = {() => handleRun(1)} 
                    title = 'Run at full speed'
                    disabled = {disableElms.fullSpeed || onlyErrors.length}
                >
                    Run at full speed
                </ControlButton>
                <ControlButtonSqr 
                    onClick = {handleStepBackward} 
                    title = 'One step backward'
                    disabled = {disableElms.prev || onlyErrors.length}
                >
                    <FontAwesomeIcon icon = {faStepBackward}/>
                </ControlButtonSqr>
                {!playPauseToggle && <ControlButtonSqr 
                    onClick = {() => handleRun()} 
                    title = 'Run'
                    disabled = {disableElms.startStop || onlyErrors.length}
                >
                    <FontAwesomeIcon icon = {faPlay}/>
                </ControlButtonSqr>}
                {playPauseToggle && <ControlButtonSqr 
                    onClick = {handlePause} 
                    title = 'Pause'
                    disabled = {disableElms.startStop || onlyErrors.length}
                >
                    <FontAwesomeIcon icon = {faPause}/>
                </ControlButtonSqr>}
                <ControlButtonSqr
                    onClick = {handleStepForward}
                    title = 'One step forward'
                    disabled = {disableElms.next || onlyErrors.length}
                >
                    <FontAwesomeIcon icon = {faStepForward}/>
                </ControlButtonSqr>
                <ControlButton
                    onClick = {handleReset}
                    title = 'Machine reset'
                    disabled = {disableElms.reset || onlyErrors.length}
                >Machine Reset</ControlButton>
            </div>
            <InitialState/>
        </ContainerStyled>
    );
};

export default Controls;