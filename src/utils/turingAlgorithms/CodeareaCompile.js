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

import { COMPILE_AND_RUN, SYNTAX_PROBLEMS, TUPLE_DEF, TAPE_VALUES } from '../machineConfiguration';

const { COMMENT_CHAR, INITIAL_VALUE_RANGE_CHAR, STOP_LABEL } = COMPILE_AND_RUN;
const {
    ERROR_LEVEL, ILLEGAL_SYMBOLS, MISSING_INITIAL_STATE, TOO_MANY_ARGUMENTS, TOO_FEW_ARGUMENTS, NOT_INCLUDE_TERMINATE,
    WARNING_LEVEL, ENDLESS_LOOP
} = SYNTAX_PROBLEMS;
const { CURRENT_STATE, CURRENT_SYMBOL, NEW_SYMBOL, DIRECTION, NEW_STATE, TERMINATE } = TUPLE_DEF;
const { ILL_STATE, ILL_TAPE_SYMB, LEG_STOP, LEG_DIR, ANY } = TAPE_VALUES;

/**
 * @details One of the classes of the turing machine algorithm containing methods that compile a pure string 
 *          (value in the program code input field) into an object containing all tuples. The class acts 
 *          as a compiler and validates user input before starting the program.
 * 
 * @constructor { string } textarea - program entered by the user in the form of a pure string.
 *              { string } initialState - initial state of turing machine.
 */
class CodeareaCompile {
    _tuplesArray = [];
    _problemsArray = [];

    constructor(textarea, initialState) {
        this.textarea = textarea;
        this.initialState = initialState;
    };

    /**
     * This method takes the value from the constructor, and converts all tabs and whitespace using Regex, and 
     * then splits the string into an array of strings based on a line break (universal for '\n' and '\r').
     * 
     * @returns { string[] }
     */
    createArrayFromArea() {
        return this.textarea.replace(/\t/g, ' ').replace(/  +/g, ' ').split(/\r?\n/);
    };

    /**
     * This method is responsible for extracting the initial value of the tape from the compiled program. 
     * If the value exists, it is returned; if the method finds no value, it returns an empty string.
     * 
     * @returns { string }
     */
    setInitialInput() {
        const $ = INITIAL_VALUE_RANGE_CHAR;
        const getInitialInput = this.createArrayFromArea().find(line => line.startsWith(COMMENT_CHAR.repeat(3)));

        if(getInitialInput) { // If initial input label exist create tuple
            const [ start, end ] = getInitialInput.split('').map((c, i) => c === $ ? i : []).filter(v => v > 0);
            if(!start || !end) { // If anything of this tuple is 'null' or 'undefined' return blank string
                return '';
            } else {
                return getInitialInput.substring(start + 1, end);
            }
        } else {
            return '';
        }
    };

    /**
     * This method is responsible for processing the raw string into an array of objects containing all the states 
     * of the machine. This method omits white space and all comments. This method starts only after passing the 
     * compiler validation process.
     */
    convertIntoTuplesArray() {
        const createArray = this.createArrayFromArea();
        // Adding index field which is read from actual row
        const arrayWithIndex = createArray.map((line, originalIndex) => `${originalIndex + 1} ${line}`);
        // Remove all unecessary values (comments, white chars, etc.)
        const removeComments = arrayWithIndex.filter((line, index) => (
            !line.substring(String(index + 1).length, line.length)
                 .replace(' ', '')
                 .startsWith(COMMENT_CHAR)
        ));

        const filterOnlyUseful = removeComments.filter(line => !Number(line)); // Temporary remove tuple index
        const removeOtherComments = filterOnlyUseful.map(line => line.split(COMMENT_CHAR)[0]);
        
        // Pushing all machine state tuples into labels array
        removeOtherComments.forEach(line => {
            const splitSimpleLine = line.split(' ').filter(el => el !== '');
            if(splitSimpleLine.length === 7) { // If the tuple contains a '!' character indicating an immediate stop
                const [ lineIndex, currentState, currentSymbol, newSymbol, direction, newState, terminate ] = splitSimpleLine;
                this._tuplesArray.push({
                    lineIndex, currentState, currentSymbol, newSymbol, direction, newState, terminate
                });
            } else {
                const [ lineIndex, currentState, currentSymbol, newSymbol, direction, newState ] = splitSimpleLine;
                this._tuplesArray.push({
                    lineIndex, currentState, currentSymbol, newSymbol, direction, newState
                });
            }
        });
    };

    /**
     * This method is responsible for adding a single break after the comment character. It allows the user to 
     * enter the content of the comment immediately after typing the character indicating the comment. 
     * This is necessary for the program to function properly.
     * 
     * @param { string[] } oneLine - array of strings to be processed.
     */
    addBreakAfterCommentSign(oneLine) {
        const elementIndex = oneLine.findIndex(el => el[0] === COMMENT_CHAR && el.length > 1);
        if(elementIndex !== -1) { // If comment was entered incorrectly, correct.
            oneLine[elementIndex] = oneLine[elementIndex].replace(COMMENT_CHAR, '');
            oneLine.splice(elementIndex, 0, COMMENT_CHAR);
        }
    };

    /**
     * This method adds an element to the global problem array based on the condition in the parameters.
     * 
     * @param { boolean } el - condition returning boolean value.
     * @param { number } i - actual line index.
     * @param { string } tupleElement - one of the tuple elements.
     * @param { string } danger - danger of the problem (error, warning etc.).
     * @param { string } syntax - type of syntax problem.
     */
    validateData(el, i, tupleElement, danger = ERROR_LEVEL, syntax = ILLEGAL_SYMBOLS) {
        if(el) {
            this._problemsArray.push({
                lineIndex: typeof i === 'number' ? String(i + 1) : i,
                problemType: syntax,
                danger: danger,
                labelIndex: tupleElement
            });
        }
    };

    /**
     * This method answers whether there is an initial state in the program (it must match the one specified 
     * in the input). If it is not present, or is inconsistent, a new error is added to the global 
     * table of compilation problems.
     * 
     * @param { Object[] } array - array of all tuples generated by the compiler.
     */
    findInitialStateLabel(array) {
        const response = array.filter(el => String(el) === this.initialState);
        if(response.length === 0) { // If no initial state label found push new problem
            this._problemsArray.push({
                lineIndex: 1,
                problemType: MISSING_INITIAL_STATE,
                danger: ERROR_LEVEL,
                labelIndex: CURRENT_STATE
            });
        }
    };

    /**
     * This method is responsible for inverting all elements in the array passed in the parameters.
     * This method returns an inverted array of elements.
     * 
     * @param { Object[] } arrayToReverse - array to be reversed.
     * @param { number } singleTupleIndex - number representing a single element of the machine tuple.
     * 
     * @returns { Object[] } 
     */
    reverseArray(arrayToReverse, singleTupleIndex) {
        const reverseArray = [];
        for(let i = 0; i < arrayToReverse.length; i++) {
            if(arrayToReverse[i][singleTupleIndex] !== '') {
                reverseArray.push(arrayToReverse[i][singleTupleIndex]);
            }
        }
        return reverseArray;
    };

    /**
     * This method responsible for finding forbidden characters in tulpi (passed in parameters). The method 
     * returns a tuple in the form of array elements.
     * 
     * @param {*} allTuplesArrayElement - array of single tuple in global tupes array.
     * 
     * @returns { boolean[] } 
     */
    findIllegalSymbols(allTuplesArrayElement) {
        const [
            curState, curSymb, newSymb, dir, newState, stopped
        ] = allTuplesArrayElement.filter(el => el !== '' && el !== ' ');
        // Finding illegal symbols
        const currState = Boolean(ILL_STATE.find(sign => curState?.includes(sign)));
        const currSymb = Boolean(ILL_TAPE_SYMB.find(sign => curSymb?.includes(sign)));
        const nextSymb = Boolean(ILL_TAPE_SYMB.find(sign => newSymb?.includes(sign)));
        const dirSymb = dir !== LEG_DIR.RIGHT && dir !== LEG_DIR.LEFT && dir !== LEG_DIR.HALT;
        const nextState = Boolean(ILL_STATE.find(sign => newState?.includes(sign)));
        if(allTuplesArrayElement.length === 6 && Boolean(stopped)) { // If the tuple has an immediate stop
            const terminate = Boolean(stopped !== LEG_STOP);
            return [ currState, currSymb, nextSymb, dirSymb, nextState, terminate ];
        }
        return [ currState, currSymb, nextSymb, dirSymb, nextState ];
    };

    /**
     * This method responsible for validating if there are too many/too few elements in the tuple.
     * 
     * @param { string[] } removeBlankSpaces - processed array containing only tuples.
     * @param { number } i - index of an element in the global tuple array.
     */
    tooLowTooMuchElementInTuple(removeBlankSpaces, i) {
        if(removeBlankSpaces.length > 6) { // Too many label
            this.validateData(true, i, ' ', ERROR_LEVEL, TOO_MANY_ARGUMENTS);
        } else if(removeBlankSpaces.length < 5) { // Too few labels
            this.validateData(true, i, ' ', ERROR_LEVEL, TOO_FEW_ARGUMENTS);
        }
    };

    /**
     * This method responsible for skipping comments in existing tuples (comments after all labels).
     * 
     * @param { string[] } arrayWithComment - a single tuple with comment.
     * 
     * @returns { string[] }
     */
    ignoreCommentsAfterTuple(arrayWithComment) {
        let removeBlankSpaces = arrayWithComment.filter(el => el !== '' && el !== ' ');
        this.addBreakAfterCommentSign(removeBlankSpaces);
        const commentIndex = removeBlankSpaces.indexOf(COMMENT_CHAR);
        if(commentIndex !== -1) { // If comment exist
            return removeBlankSpaces.slice(0, commentIndex);
        }
        return removeBlankSpaces;
    };

    /**
     * This method is responsible for removing unnecessary content from the code entered by the 
     * user (comments, etc. ). If it does not find a comment, it returns the unchanged value.
     * 
     * @param { string } lineWithComment - comment character (if any, if not any character)
     * @param { string[] } arrayLine - single tuple.
     * 
     * @returns { string[] }
     */
    ignoreSingleLineWithComment(lineWithComment, arrayLine) {
        if(lineWithComment.indexOf(COMMENT_CHAR) === 0 && lineWithComment.length > 1) {
            lineWithComment = lineWithComment.replace(COMMENT_CHAR, '');
            arrayLine.splice(0, 0, COMMENT_CHAR);       
        }
        return arrayLine;
    };

    /**
     * This method responsible for checking if the program contains an end label. If not, it 
     * adds a warning to the global problem table.
     * 
     * @param { string[][] } arrayWithTuples - array with another arrays in the form of tuples.
     */ 
    ifProgramHasntStopLabel(arrayWithTuples) {
        const allStates = arrayWithTuples.filter(el => el[0] !== '' && el[0] !== COMMENT_CHAR).map(el => el[4]);
        const findTerminateState = Boolean(allStates.find(state => state.includes(STOP_LABEL)));
        this.validateData(!findTerminateState, '-', ' ', WARNING_LEVEL, NOT_INCLUDE_TERMINATE);
    };

    /**
     * This method is responsible for checking if the program contains tuples that can cause an infinite 
     * loop. This is a warning, not an error.
     * 
     * @param { string[][] } arrayWithTuples - array with another arrays in the form of tuples.
     */
    ifProgramHasInfiniteLoop(arrayWithTuples) {
        const findMultipleLabels = arrayWithTuples.filter(el => el[0] !== '' && el[0] !== COMMENT_CHAR).map(el => el[0]);
        for(let i = 0; i < arrayWithTuples.length; i++) {
            if(arrayWithTuples[i] !== '' && arrayWithTuples[i] !== COMMENT_CHAR) { // Ignore unused values
                const [ cState, cSym, nSym,, nState ] = arrayWithTuples[i].slice(0, 5);
                const ifMultipleLabelsExist = findMultipleLabels.filter(label => label === cState);
                if(!(ifMultipleLabelsExist.length > 1)) { // If is only single label
                    const findEndlessLoop = Boolean(cState === nState && cSym === ANY && nSym === ANY);
                    this.validateData(findEndlessLoop, i, ' ', WARNING_LEVEL, ENDLESS_LOOP);
                }
            }
        }
    };

    /**
     * Main method responsible for checking all labels in tuples. Generates errors and warnings. With warnings, 
     * positive compilation of the program is possible. At the end it checks the error table. If it contains 
     * no errors (may contain warnings) it returns true, if it contains errors (no warnings) it returns false.
     * 
     * @returns { boolean }
     */
    validateCodearea() {
        // Create an array with splitting all elements
        const createArray = this.createArrayFromArea();
        const splitAllElements = createArray.map(line => line.split(' '));
        for(let i = 0; i < splitAllElements.length; i++) {
            if(splitAllElements[i][0] !== '') { // Skip blank lines
                splitAllElements[i] = this.ignoreSingleLineWithComment(splitAllElements[i][0], splitAllElements[i]);
                if(splitAllElements[i][0] !== COMMENT_CHAR) { // Skip all comments
                    const ignoreComments = this.ignoreCommentsAfterTuple(splitAllElements[i]);
                    const [ cState, cSymb, nSymb, dSymb, nState, terminate ] = this.findIllegalSymbols(ignoreComments);
                    
                    // Errors
                    this.tooLowTooMuchElementInTuple(ignoreComments, i); // Too much/few elements in tuple
                    this.validateData(cState, i, CURRENT_STATE); // Invalid <current state>
                    this.validateData(cSymb || cSymb.length > 1, i, CURRENT_SYMBOL); // Invalid <current symbol>
                    this.validateData(nSymb || nSymb.length > 1, i, NEW_SYMBOL); // Invalid <new symbol>
                    this.validateData(dSymb || dSymb === '', i, DIRECTION, ERROR_LEVEL); // Invalid <direction>
                    this.validateData(nState, i, NEW_STATE); // Invalid <new state>
                    
                    if(terminate) { //If terminate symbol exist in tuple
                        this.validateData(terminate, i, TERMINATE); // Invalid <terminate>
                    }
                }
            }
        }
        this.findInitialStateLabel(this.reverseArray(splitAllElements, 0)); // Error, if not find initial state
        this.ifProgramHasntStopLabel(splitAllElements); // Warning, if not find stop at the end label
        this.ifProgramHasInfiniteLoop(splitAllElements); // Warning, if program has infinite loops

        const onlyErrors = this._problemsArray.filter(problem => problem.danger === ERROR_LEVEL);
        if(onlyErrors.length === 0) { // If all good
            this.convertIntoTuplesArray();
            return true;
        }

        return false;
    };
};

export default CodeareaCompile;