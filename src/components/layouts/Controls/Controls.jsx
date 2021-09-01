import React, { useContext, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { useIsMount } from './../../../utils/useIsMount';

import { StoreContext } from '../../store/StoreProvider';
import { CodeareaMode } from '../Codearea/Codearea';
import { ContainerStyled, ControlButton, ControlButtonSqr } from './Controls.styles';
import InitialInput from './InitialInput';
import InitialState from './InitialState';

// eslint-disable-next-line no-extend-native
String.prototype.replaceAt = function(index, char) {
    var a = this.split('');
    a[index] = char;
    return a.join('');
}

const Controls = () => {

    const {
        labelsArrays, stateCounter, setStateCounter, setCodeareaMode, setOnCompile, startLabel, tapeValue, setTapeValue, 
        initialInput, setMachineEndMessage, headPosition, setHeadPosition, setActualState, allSteps, setAllSteps
    } = useContext(StoreContext);
    
    const { labels } = labelsArrays;

    const [ playPauseToggle, setPlayPauseToggle ] = useState(false);
    const [ disableBtns, setDisableBtns ] = useState({
        fullSpeed: false, prev: false, startStop: false, next: false, reset: false, inputs: false,
    });

    const [ findingLabel, setFindingLabel ] = useState(startLabel);
    const [ prevElement, setPrevElement ] = useState(null);

    const isMount = useIsMount();
    const increment = useRef(null);
    
    const turingAlgorithm = () => {
        const sameStatesSearch = labels.filter(el => el.currentState === findingLabel); // Get array of same labels
        let curTapeSymb = tapeValue.substr(headPosition, 1); // Get single value from tape     
        if(curTapeSymb === '' || curTapeSymb === ' ') {
            curTapeSymb = '_';
        }
        // Find the match label to current tape symbol
        let findMatchElement = sameStatesSearch.find(label => label.currentSymbol === curTapeSymb);
        if(Boolean(!findMatchElement)) { // For any of rest characters
            findMatchElement = sameStatesSearch.find(label => label.currentSymbol === '*');
        }
        if(findMatchElement) { // Find direction and move head
            setPrevElement(findMatchElement);
            let signToReplace;
            switch(findMatchElement.newSymbol) {
                case '_': signToReplace = ' '; break;
                case '*': signToReplace = '*'; break;
                default: signToReplace = findMatchElement.newSymbol;
            }
            if(signToReplace !== '*') {
                setTapeValue(tapeValue.replaceAt(headPosition, signToReplace));
            }
            switch(findMatchElement.direction) {
                case 'r': setHeadPosition(prevState => prevState + 1); break;
                case 'l': setHeadPosition(prevState => prevState - 1); break;
                default: setHeadPosition(prevState => prevState);
            }
            if(findMatchElement.newState === `halt-${findMatchElement.currentState}`) { // End of states
                setMachineEndMessage(`Machine has finish work. Press 'Machine Reset' button.`);
                setDisableBtns({ ...disableBtns, startStop: true, reset: false, inputs: true });
                setPlayPauseToggle(false);
                clearInterval(increment.current);
            }
            setFindingLabel(findMatchElement.newState);
            setActualState({ prevState: prevElement, nextState: findMatchElement });
            setAllSteps(prevArray => [ ...prevArray, findMatchElement ]);
        } else { // End of states
            setMachineEndMessage(
                `Machine stopped! State '${findingLabel}' has no action for symbol: '${curTapeSymb}'.`
            );
            setDisableBtns({ fullSpeed: true, prev: true, startStop: true, next: true, reset: false, inputs: true });  
            setPlayPauseToggle(false);   
            clearInterval(increment.current);
        }
    };

    const handleStepBackward = () => {
        if(allSteps.length > 0) {
            const copy = [...allSteps];
            const prevArrElement = copy.pop();
            let signToReplace;
            setPrevElement(prevArrElement);
            switch(prevArrElement.currentSymbol) {
                case '*': signToReplace = '*'; break;
                default: signToReplace = initialInput[headPosition];
            }
            if(signToReplace !== '*') {
                setTapeValue(tapeValue.replaceAt(headPosition, signToReplace));
            }
            switch(prevArrElement.direction) {
                case 'r': setHeadPosition(prevState => prevState - 1); break;
                case 'l': setHeadPosition(prevState => prevState + 1); break;
                default: setHeadPosition(prevState => prevState);
            }
            setActualState({ prevState: prevElement, nextState: prevArrElement });
            setAllSteps(copy);
            setMachineEndMessage(`Machine did one step backward.`);
        } else {
            setTapeValue(tapeValue.replaceAt(headPosition, initialInput[headPosition]));
            handleReset();
        }
    };

    const handleStepForward = () => {
        setStateCounter(prevState => prevState + 1);
        setMachineEndMessage(`Machine did one step forward.`);
    };

    const handleRun = speed => {
        let counter = stateCounter;
        increment.current = setInterval(() => { setStateCounter(counter++); }, speed);
        setPlayPauseToggle(true);
        setDisableBtns({ fullSpeed: true, prev: true, startStop: false, next: true, reset: true, inputs: true });
        setMachineEndMessage('Machine running...');
        setCodeareaMode(CodeareaMode.DEBUGGING);
    };

    useEffect(() => {
        if(!isMount) { // Skip first render
            turingAlgorithm();
        } else {
            handleReset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateCounter]);


    const handlePause = () => {
        clearInterval(increment.current);
        setPlayPauseToggle(false);
        setDisableBtns({ ...disableBtns, prev: false, startStop: false, next: false });
        setMachineEndMessage(`Machine stopped.`);
    };

    const handleReset = () => {
        increment.current = null;
        setDisableBtns({ fullSpeed: false, prev: false, startStop: false, next: false, reset: false, inputs: false });
        setActualState({ prevState: null, nextState: null });
        setMachineEndMessage(`Machine reset. Press 'run' or 'steps' to start the machine working.`);
        clearInterval(increment.current);
        setTapeValue(initialInput);
        setFindingLabel(startLabel);
        setAllSteps([]);
        setHeadPosition(0);
        setCodeareaMode(CodeareaMode.RUNNING);
        setOnCompile(CodeareaMode.COMPILING);
    };
    
    return (
        <ContainerStyled>
            <InitialInput inputDisabled = {disableBtns.inputs}/>
            <div>
                <ControlButton 
                    onClick = {() => handleRun(1)} 
                    title = 'Run at full speed'
                    disabled = {disableBtns.fullSpeed || labelsArrays.labels.length === 0}
                >
                    Run at full speed
                </ControlButton>
                <ControlButtonSqr 
                    onClick = {handleStepBackward} 
                    title = 'One step backward'
                    disabled = {disableBtns.prev || labelsArrays.labels.length === 0}
                >
                    <FontAwesomeIcon icon = {faStepBackward}/>
                </ControlButtonSqr>
                {!playPauseToggle && <ControlButtonSqr 
                    onClick = {() => handleRun(100)} 
                    title = 'Run'
                    disabled = {disableBtns.startStop || labelsArrays.labels.length === 0}
                >
                    <FontAwesomeIcon icon = {faPlay}/>
                </ControlButtonSqr>}
                {playPauseToggle && <ControlButtonSqr 
                    onClick = {handlePause} 
                    title = 'Pause'
                    disabled = {disableBtns.startStop || labelsArrays.labels.length === 0}
                >
                    <FontAwesomeIcon icon = {faPause}/>
                </ControlButtonSqr>}
                <ControlButtonSqr
                    onClick = {handleStepForward}
                    title = 'One step forward'
                    disabled = {disableBtns.next || labelsArrays.labels.length === 0}
                >
                    <FontAwesomeIcon icon = {faStepForward}/>
                </ControlButtonSqr>
                <ControlButton
                    onClick = {handleReset}
                    title = 'Machine reset'
                    disabled = {disableBtns.reset}
                >Machine reset</ControlButton>
            </div>
            <InitialState inputDisabled = {disableBtns.inputs}/>
        </ContainerStyled>
    );
};

export default Controls;