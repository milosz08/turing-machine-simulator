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

import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { MACHINE_MESSAGES } from '../../../utils/machineConfiguration';

import { RowsContainer, RowsCounter, SingleRow, Indicator, LineNumber, Highlither } from './CodeareaRows.styles';

/**
 * Component responsible for the generation of consecutive numbers of code lines in the codearea.
 * It also controls the visibility of indicators in the form of the previous head position
 * and the next head position.
 * 
 * @param { number } scrollY - stored the current scroll position of codearea.
 * @param { React.MutableRefObject<> } areaRef - referential to codearea.
 * 
 * @returns { JSX.Element }
 */
const CodeareaRows = ({ scrollY, areaRef }) => {
    
    const { codearea, actualState, addtlnContr } = useContext(StoreContext);
    const { PREV_LABEL, NEXT_LABEL } = MACHINE_MESSAGES;

    const countOfLines = codearea.split('\n').length;
    
    const activePrevState = actualState.prevState?.lineIndex - 1;
    const activeNextState = actualState.nextState?.lineIndex - 1;

    /**
     * Generation of successive elements of a single line based on '\n' characters in codearea.
     */
    const generateLinesNumbers = Array.from({ length: countOfLines }, (e, i) => i).map(element => {
        const ifPrev = element === activePrevState;
        const ifNext = element === activeNextState;
        
        return (
            <SingleRow key = {element}>
                <Indicator  
                    prev = {ifPrev} next = {ifNext}
                >
                    {element === actualState.prevState?.lineIndex - 1 ? PREV_LABEL : NEXT_LABEL}
                </Indicator>
                <LineNumber>
                    {element + 1}
                </LineNumber>
                <Highlither
                    prev = {ifPrev} next = {ifNext}
                />
            </SingleRow>
        );
    });

    /**
     * While the machine is running (debug mode), it will track the position of the currently 
     * serviced row label with each component re-renderer and reposition the scroll accordingly.
     */
    useEffect(() => {
        if((actualState.prevState || actualState.nextState) && addtlnContr.codeFollow) { // only if machine working
            const codearea = areaRef.current;

            const visiblyCenter = Math.floor(codearea.offsetHeight / 2); // center of visibility in codearea
            const scrollFromTop = (activePrevState + 1) * S_ROW_HEIGHT; // total px from top (base on single row height)
            
            codearea.scrollTo(0, scrollFromTop - visiblyCenter); // scroll destination in half-of-visibility
        }
    }, [activePrevState, actualState, addtlnContr.codeFollow, areaRef, codearea]);

    return (
        <RowsContainer>
            <RowsCounter
                positionY = {scrollY}
            >
                {generateLinesNumbers}
            </RowsCounter>
        </RowsContainer>
    );
};

/**
 * Constant that specifies the height of one line of the code entry field.
 */
const S_ROW_HEIGHT = 21;

export default CodeareaRows;