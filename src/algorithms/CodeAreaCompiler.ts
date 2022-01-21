/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import { CompileAndRun, TupleDefinitions, TapeValues } from '../config/machineConfig';
import { CompilerSyntaxIssues } from '../config/machineMessages';

const { COMMENT_CHAR, INITIAL_VALUE_RANGE_CHAR, STOP_LABEL } = CompileAndRun;
const { CURRENT_STATE, CURRENT_SYMBOL, NEW_SYMBOL, DIRECTION, NEW_STATE, TERMINATE } = TupleDefinitions;
const { ILL_STATE, ILL_TAPE_SYMBOL, LEG_STOP, LEG_DIR, ANY } = TapeValues;

const {
    ERROR_LEVEL, ILLEGAL_SYMBOLS, MISSING_INITIAL_STATE, TOO_FEW_ARGUMENTS, TOO_MANY_ARGUMENTS,
    NOT_INCLUDE_TERMINATE, WARNING_LEVEL, ENDLESS_LOOP
} = CompilerSyntaxIssues;

class CodeAreaCompiler {

    private _tuplesArray: { [key: string]: any }[] = [];
    private _problemsArray: { [key: string]: any }[] = [];
    private _textarea: string = '';
    private readonly _initialState: string = '';

    public constructor(textarea: string, initialState: string) {
        this._textarea = textarea;
        this._initialState = initialState;
    };

    get tuplesArray(): { [p: string]: any }[] {
        return this._tuplesArray;
    }

    get problemsArray(): { [p: string]: any }[] {
        return this._problemsArray;
    }

    /**
     * This method takes the value from the constructor, and converts all tabs and whitespace using Regex, and
     * then splits the string into an array of strings based on a line break (universal for '\n' and '\r').
     */
    private createArrayFromArea() {
        return this._textarea.replace(/\t/g, ' ').replace(/  +/g, ' ').split(/\r?\n/);
    };

    /**
     * This method is responsible for extracting the initial value of the tape from the compiled program.
     * If the value exists, it is returned; if the method finds no value, it returns an empty string.
     */
    public setInitialInput(): string {
        const $ = INITIAL_VALUE_RANGE_CHAR;
        const getInitialInput = this.createArrayFromArea().find(line => line.startsWith(COMMENT_CHAR.repeat(3)));

        if(getInitialInput) { // If initial input label exist create tuple
            const [ start, end ] = getInitialInput.split('').map((c, i) => c === $ ? i : []).filter(v => v > 0);
            if(!start || !end) { // If anything of this tuple is 'null' or 'undefined' return blank string
                return '';
            } else {
                return getInitialInput.substring(Number(start) + 1, Number(end));
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
    private convertIntoTuplesArray() {
        const createArray = this.createArrayFromArea();
        // Adding index field which is read from actual row
        const arrayWithIndex = createArray.map((line, originalIndex) => `${originalIndex + 1} ${line}`);
        // Remove all unnecessary values (comments, white chars, etc.)
        const removeComments = arrayWithIndex.filter((line, index) => (
            !line.substring(String(index + 1).length, line.length).replace(' ', '').startsWith(COMMENT_CHAR)
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
     */
    private addBreakAfterCommentSign(oneLine: string[]) {
        const elementIndex = oneLine.findIndex(el => el[0] === COMMENT_CHAR && el.length > 1);
        if(elementIndex !== -1) { // If comment was entered incorrectly, correct.
            oneLine[elementIndex] = oneLine[elementIndex].replace(COMMENT_CHAR, '');
            oneLine.splice(elementIndex, 0, COMMENT_CHAR);
        }
    };

    /**
     * This method adds an element to the global problem array based on the condition in the parameters.
     */
    private validateData(el: boolean, i: number | string, tupleElement: string, danger = ERROR_LEVEL, syntax = ILLEGAL_SYMBOLS) {
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
     */
    private findInitialStateLabel(array: object[]) {
        const response = array.filter(el => String(el) === this._initialState);
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
     */
    private static reverseArray(arrayToReverse: object[], singleTupleIndex: number): object[] {
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
     */
    private findIllegalSymbols(allTuplesArrayElement: string[]): boolean[] {
        const [
            curState, curSymb, newSymb, dir, newState, stopped
        ] = allTuplesArrayElement.filter(el => el !== '' && el !== ' ');
        // Finding illegal symbols
        const currState = Boolean(ILL_STATE.find(sign => curState?.includes(sign)));
        const currSymb = Boolean(ILL_TAPE_SYMBOL.find(sign => curSymb?.includes(sign)));
        const nextSymb = Boolean(ILL_TAPE_SYMBOL.find(sign => newSymb?.includes(sign)));
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
     */
    private tooLowTooMuchElementInTuple(removeBlankSpaces: string[], i: number): void {
        if(removeBlankSpaces.length > 6) { // Too many label
            this.validateData(true, i, ' ', ERROR_LEVEL, TOO_MANY_ARGUMENTS);
        } else if(removeBlankSpaces.length < 5) { // Too few labels
            this.validateData(true, i, ' ', ERROR_LEVEL, TOO_FEW_ARGUMENTS);
        }
    };

    /**
     * This method responsible for skipping comments in existing tuples (comments after all labels).
     */
    private ignoreCommentsAfterTuple(arrayWithComment: string[]): string[] {
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
     */
    private static ignoreSingleLineWithComment(lineWithComment: string, arrayLine: string[]): string[] {
        if(lineWithComment.indexOf(COMMENT_CHAR) === 0 && lineWithComment.length > 1) {
            arrayLine.splice(0, 0, COMMENT_CHAR);
        }
        return arrayLine;
    };

    /**
     * This method responsible for checking if the program contains an end label. If not, it
     * adds a warning to the global problem table.
     */
    private ifProgramNotStopLabel(arrayWithTuples: string[][]): void {
        const allStates = arrayWithTuples.filter(el => el[0] !== '' && el[0] !== COMMENT_CHAR).map(el => el[4]);
        const findTerminateState = allStates[0] ? Boolean(allStates.find(state => state.includes(STOP_LABEL))) : false;
        this.validateData(!findTerminateState, '-', ' ', WARNING_LEVEL, NOT_INCLUDE_TERMINATE);
    };

    /**
     * This method is responsible for checking if the program contains tuples that can cause an infinite
     * loop. This is a warning, not an error.
     */
    private ifProgramHasInfiniteLoop(arrayWithTuples: string[][]) {
        const findMultipleLabels = arrayWithTuples.filter(el => el[0] !== '' && el[0] !== COMMENT_CHAR).map(el => el[0]);
        for(let i = 0; i < arrayWithTuples.length; i++) {
            if(findMultipleLabels[i] !== '' && findMultipleLabels[i] !== COMMENT_CHAR) { // Ignore unused values
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
     */
    public validateCodeArea(): boolean {
        // Create an array with splitting all elements
        const createArray = this.createArrayFromArea();
        const splitAllElements = createArray.map(line => line.split(' '));
        for(let i = 0; i < splitAllElements.length; i++) {
            if(splitAllElements[i][0] !== '') { // Skip blank lines
                splitAllElements[i] = CodeAreaCompiler.ignoreSingleLineWithComment(splitAllElements[i][0], splitAllElements[i]);
                if(splitAllElements[i][0] !== COMMENT_CHAR) { // Skip all comments
                    const ignoreComments = this.ignoreCommentsAfterTuple(splitAllElements[i]);
                    const [ cState, cSymb, nSymb, dSymb, nState, terminate ] = this.findIllegalSymbols(ignoreComments);

                    // Errors
                    this.tooLowTooMuchElementInTuple(ignoreComments, i); // Too much/few elements in tuple
                    this.validateData(cState, i, CURRENT_STATE); // Invalid <current state>
                    this.validateData(cSymb, i, CURRENT_SYMBOL); // Invalid <current symbol>
                    this.validateData(nSymb, i, NEW_SYMBOL); // Invalid <new symbol>
                    this.validateData(dSymb, i, DIRECTION, ERROR_LEVEL); // Invalid <direction>
                    this.validateData(nState, i, NEW_STATE); // Invalid <new state>

                    if(terminate) { //If terminate symbol exist in tuple
                        this.validateData(terminate, i, TERMINATE); // Invalid <terminate>
                    }
                }
            }
        }
        this.findInitialStateLabel(CodeAreaCompiler.reverseArray(splitAllElements, 0)); // Error, if not find initial state
        this.ifProgramNotStopLabel(splitAllElements); // Warning, if not find stop at the end label
        this.ifProgramHasInfiniteLoop(splitAllElements); // Warning, if program has infinite loops

        const onlyErrors = this._problemsArray.filter(problem => problem.danger === ERROR_LEVEL);
        if(onlyErrors.length === 0) { // If all good
            this.convertIntoTuplesArray();
            return true;
        }

        return false;
    };

}

export default CodeAreaCompiler;