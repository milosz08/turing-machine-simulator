import { CompileAndRun, TapeValues, TupleDefinitions } from '@/utils/machine-config';
import { CompilerSyntaxIssues } from '@/utils/machine-messages';

const { COMMENT_CHAR, INITIAL_VALUE_RANGE_CHAR, STOP_LABEL } = CompileAndRun;
const { CURRENT_STATE, CURRENT_SYMBOL, NEW_SYMBOL, DIRECTION, NEW_STATE, TERMINATE } =
  TupleDefinitions;
const { ILL_STATE, ILL_TAPE_SYMBOL, LEG_STOP, LEG_DIR, ANY } = TapeValues;

const {
  ERROR_LEVEL,
  ILLEGAL_SYMBOLS,
  MISSING_INITIAL_STATE,
  TOO_FEW_ARGUMENTS,
  TOO_MANY_ARGUMENTS,
  NOT_INCLUDE_TERMINATE,
  WARNING_LEVEL,
  ENDLESS_LOOP,
} = CompilerSyntaxIssues;

class CodeAreaCompiler {
  private _textarea: string = '';
  private readonly _initialState: string = '';

  constructor(textarea: string, initialState: string) {
    this._textarea = textarea;
    this._initialState = initialState;
  }

  private _tuplesArray: { [key: string]: any }[] = [];

  get tuplesArray(): { [p: string]: any }[] {
    return this._tuplesArray;
  }

  private _problemsArray: { [key: string]: any }[] = [];

  get problemsArray(): { [p: string]: any }[] {
    return this._problemsArray;
  }

  private static reverseArray(arrayToReverse: object[], singleTupleIndex: number): object[] {
    const reverseArray = [];
    for (let i = 0; i < arrayToReverse.length; i++) {
      if (arrayToReverse[i][singleTupleIndex] !== '') {
        reverseArray.push(arrayToReverse[i][singleTupleIndex]);
      }
    }
    return reverseArray;
  }

  private static ignoreSingleLineWithComment(
    lineWithComment: string,
    arrayLine: string[]
  ): string[] {
    if (lineWithComment.indexOf(COMMENT_CHAR) === 0 && lineWithComment.length > 1) {
      arrayLine.splice(0, 0, COMMENT_CHAR);
    }
    return arrayLine;
  }

  setInitialInput(): string {
    const $ = INITIAL_VALUE_RANGE_CHAR;
    const getInitialInput = this.createArrayFromArea().find(line =>
      line.startsWith(COMMENT_CHAR.repeat(3))
    );

    if (getInitialInput) {
      const [start, end] = getInitialInput
        .split('')
        .map((c, i) => (c === $ ? i : []))
        .filter(v => Number(v) > 0);
      if (!start || !end) {
        return '';
      } else {
        return getInitialInput.substring(Number(start) + 1, Number(end));
      }
    } else {
      return '';
    }
  }

  validateCodeArea(): boolean {
    const createArray = this.createArrayFromArea();
    const splitAllElements = createArray.map(line => line.split(' '));
    for (let i = 0; i < splitAllElements.length; i++) {
      if (splitAllElements[i][0] !== '') {
        splitAllElements[i] = CodeAreaCompiler.ignoreSingleLineWithComment(
          splitAllElements[i][0],
          splitAllElements[i]
        );
        if (splitAllElements[i][0] !== COMMENT_CHAR) {
          const ignoreComments = this.ignoreCommentsAfterTuple(splitAllElements[i]);
          const [cState, cSymb, nSymb, dSymb, nState, terminate] =
            this.findIllegalSymbols(ignoreComments);
          this.tooLowTooMuchElementInTuple(ignoreComments, i);
          this.validateData(cState, i, CURRENT_STATE);
          this.validateData(cSymb, i, CURRENT_SYMBOL);
          this.validateData(nSymb, i, NEW_SYMBOL);
          this.validateData(dSymb, i, DIRECTION, ERROR_LEVEL);
          this.validateData(nState, i, NEW_STATE);
          if (terminate) {
            this.validateData(terminate, i, TERMINATE);
          }
        }
      }
    }
    this.findInitialStateLabel(CodeAreaCompiler.reverseArray(splitAllElements, 0));
    this.ifProgramNotStopLabel(splitAllElements);
    this.ifProgramHasInfiniteLoop(splitAllElements);
    const onlyErrors = this._problemsArray.filter(problem => problem.danger === ERROR_LEVEL);
    if (onlyErrors.length === 0) {
      this.convertIntoTuplesArray();
      return true;
    }
    return false;
  }

  private createArrayFromArea() {
    return this._textarea.replace(/\t/g, ' ').replace(/  +/g, ' ').split(/\r?\n/);
  }

  private convertIntoTuplesArray() {
    const createArray = this.createArrayFromArea();
    const arrayWithIndex = createArray.map((line, originalIndex) => `${originalIndex + 1} ${line}`);
    const removeComments = arrayWithIndex.filter(
      (line, index) =>
        !line
          .substring(String(index + 1).length, line.length)
          .replace(' ', '')
          .startsWith(COMMENT_CHAR)
    );
    const filterOnlyUseful = removeComments.filter(line => !Number(line));
    const removeOtherComments = filterOnlyUseful.map(line => line.split(COMMENT_CHAR)[0]);
    removeOtherComments.forEach(line => {
      const splitSimpleLine = line.split(' ').filter(el => el !== '');
      const fieldNames = [
        'lineIndex',
        'currentState',
        'currentSymbol',
        'newSymbol',
        'direction',
        'newState',
        'terminate',
      ];
      const resultObject = fieldNames.reduce((obj, fieldName, index) => {
        obj[fieldName] = splitSimpleLine[index];
        return obj;
      }, {});
      this._tuplesArray.push(resultObject);
    });
  }

  private addBreakAfterCommentSign(oneLine: string[]) {
    const elementIndex = oneLine.findIndex(el => el[0] === COMMENT_CHAR && el.length > 1);
    if (elementIndex !== -1) {
      oneLine[elementIndex] = oneLine[elementIndex].replace(COMMENT_CHAR, '');
      oneLine.splice(elementIndex, 0, COMMENT_CHAR);
    }
  }

  private validateData(
    el: boolean,
    i: number | string,
    tupleElement: string,
    danger = ERROR_LEVEL,
    syntax = ILLEGAL_SYMBOLS
  ) {
    if (el) {
      this._problemsArray.push({
        lineIndex: typeof i === 'number' ? String(i + 1) : i,
        problemType: syntax,
        danger: danger,
        labelIndex: tupleElement,
      });
    }
  }

  private findInitialStateLabel(array: object[]) {
    const response = array.filter(el => String(el) === this._initialState);
    if (response.length === 0) {
      this._problemsArray.push({
        lineIndex: 1,
        problemType: MISSING_INITIAL_STATE,
        danger: ERROR_LEVEL,
        labelIndex: CURRENT_STATE,
      });
    }
  }

  private findIllegalSymbols(allTuplesArrayElement: string[]): boolean[] {
    const [curState, curSymb, newSymb, dir, newState, stopped] = allTuplesArrayElement.filter(
      el => el !== '' && el !== ' '
    );
    const currState = Boolean(ILL_STATE.find(sign => curState?.includes(sign)));
    const currSymb = Boolean(ILL_TAPE_SYMBOL.find(sign => curSymb?.includes(sign)));
    const nextSymb = Boolean(ILL_TAPE_SYMBOL.find(sign => newSymb?.includes(sign)));
    const dirSymb = dir !== LEG_DIR.RIGHT && dir !== LEG_DIR.LEFT && dir !== LEG_DIR.HALT;
    const nextState = Boolean(ILL_STATE.find(sign => newState?.includes(sign)));
    if (allTuplesArrayElement.length === 6 && Boolean(stopped)) {
      const terminate = Boolean(stopped !== LEG_STOP);
      return [currState, currSymb, nextSymb, dirSymb, nextState, terminate];
    }
    return [currState, currSymb, nextSymb, dirSymb, nextState];
  }

  private tooLowTooMuchElementInTuple(removeBlankSpaces: string[], i: number): void {
    if (removeBlankSpaces.length > 6) {
      // Too many label
      this.validateData(true, i, ' ', ERROR_LEVEL, TOO_MANY_ARGUMENTS);
    } else if (removeBlankSpaces.length < 5) {
      // Too few labels
      this.validateData(true, i, ' ', ERROR_LEVEL, TOO_FEW_ARGUMENTS);
    }
  }

  private ignoreCommentsAfterTuple(arrayWithComment: string[]): string[] {
    const removeBlankSpaces = arrayWithComment.filter(el => el !== '' && el !== ' ');
    this.addBreakAfterCommentSign(removeBlankSpaces);
    const commentIndex = removeBlankSpaces.indexOf(COMMENT_CHAR);
    if (commentIndex !== -1) {
      // If comment exist
      return removeBlankSpaces.slice(0, commentIndex);
    }
    return removeBlankSpaces;
  }

  private ifProgramNotStopLabel(arrayWithTuples: string[][]): void {
    const allStates = arrayWithTuples
      .filter(el => el[0] !== '' && el[0] !== COMMENT_CHAR)
      .map(el => el[4]);
    const findTerminateState = allStates[0]
      ? Boolean(allStates.find(state => state.includes(STOP_LABEL)))
      : false;
    this.validateData(!findTerminateState, '-', ' ', WARNING_LEVEL, NOT_INCLUDE_TERMINATE);
  }

  private ifProgramHasInfiniteLoop(arrayWithTuples: string[][]) {
    const findMultipleLabels = arrayWithTuples
      .filter(el => el[0] !== '' && el[0] !== COMMENT_CHAR)
      .map(el => el[0]);
    for (let i = 0; i < arrayWithTuples.length; i++) {
      if (findMultipleLabels[i] !== '' && findMultipleLabels[i] !== COMMENT_CHAR) {
        const [cState, cSym, nSym, , nState] = arrayWithTuples[i].slice(0, 5);
        const ifMultipleLabelsExist = findMultipleLabels.filter(label => label === cState);
        if (!(ifMultipleLabelsExist.length > 1)) {
          const findEndlessLoop = Boolean(cState === nState && cSym === ANY && nSym === ANY);
          this.validateData(findEndlessLoop, i, ' ', WARNING_LEVEL, ENDLESS_LOOP);
        }
      }
    }
  }
}

export { CodeAreaCompiler };
