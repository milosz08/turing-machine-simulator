class TextareaCompile {
    objectsArray = [];
    problemsArray = [];

    constructor(textarea, initialState) {
        this.fullString = textarea;
        this.initialState = initialState;
    }

    createArrayFromArea() {
        return this.fullString.replace(/\t/g, ' ').replace(/  +/g, ' ').split('\n');
    }

    convertIntoObject() {
        const createArray = this.createArrayFromArea();
        
        const arrayWithIndex = createArray.map((line, originalIndex) => `${originalIndex + 1} ${line}`);
        const removeComments = arrayWithIndex.filter((line, index) => (
            !line.substring(String(index + 1).length, line.length).replace(' ', '').startsWith(COM_INDICATION)
        ));

        const filterOnlyUseful = removeComments.filter(line => !Number(line));
        const removeOtherComments = filterOnlyUseful.map(line => line.split(COM_INDICATION)[0]);
        
        [...removeOtherComments].forEach(line => {
            const splitSimpleLine = line.split(' ');
            this.objectsArray.push({
                lineIndex: splitSimpleLine[0],
                currentState: splitSimpleLine[1],
                currentSymbol: splitSimpleLine[2],
                newSymbol: splitSimpleLine[3],
                direction: splitSimpleLine[4],
                newState: splitSimpleLine[5]
            });
        });
    }

    // If user has not add space after comment sign ';'
    addBreakAfterCommentSign(oneLine) {
        const elementIndex = oneLine.findIndex(el => el[0] === COM_INDICATION && el.length > 1);
        if(elementIndex !== -1) {
            oneLine[elementIndex] = oneLine[elementIndex].replace(COM_INDICATION, '');
            oneLine.splice(elementIndex, 0, COM_INDICATION);
        }
    }

    // Pushing new errors into global array
    validateData(el, i, label, danger = SYNTAX_ERRORS.ERROR_LEVEL, syntax = SYNTAX_ERRORS.ILLEGAL_SYMBOLS) {
        if(el) {
            this.problemsArray.push({
                lineIndex: String(i + 1),
                problemType: syntax,
                danger: danger,
                labelIndex: label
            });
        }
    }
    
    // Validate initial machine state
    findInitialStateLabel(array) {
        const response = array.filter(el => String(el) === this.initialState);
        
        if(response.length === 0) {
            this.problemsArray.push({
                lineIndex: 1,
                problemType: SYNTAX_ERRORS.MISSING_INITIAL_STATE,
                danger: SYNTAX_ERRORS.ERROR_LEVEL,
                labelIndex: 'current state'
            });
        }
    }

    reverseArray(arrayToReverse, elementIndex) {
        const reverseArray = [];
        for(let i = 0; i < arrayToReverse.length; i++) {
            if(arrayToReverse[i][elementIndex] !== '') {
                reverseArray.push(arrayToReverse[i][elementIndex]);
            }
        }
        return reverseArray;
    }

    validateCodeArea() {
        const createArray = this.createArrayFromArea();
        const splitAllElements = createArray.map(line => line.split(' '));

        // Validation Errors    
        for(let i = 0; i < splitAllElements.length; i++) {
            if(splitAllElements[i][0] !== '') {
                if(splitAllElements[i][0].indexOf(COM_INDICATION) === 0 && splitAllElements[i][0].length > 1) {
                    splitAllElements[i][0] = splitAllElements[i][0].replace(COM_INDICATION, '');
                    splitAllElements[i].splice(0, 0, COM_INDICATION);
                }
                if(splitAllElements[i][0] !== COM_INDICATION) {
                    const direction = splitAllElements[i][3]?.toLocaleLowerCase();
                    const removeBlankSpaces = splitAllElements[i].filter(el => el !== '' && el !== ' ');

                    const initIllegalState = ILLEGAL_STATE.find(sign => removeBlankSpaces[0]?.includes(sign));
                    const nextIllegalState = ILLEGAL_STATE.find(sign => removeBlankSpaces[4]?.includes(sign));

                    const currentIllegalSymbol = SYMBOL_ILLEGAL.find(sign => removeBlankSpaces[1]?.includes(sign));
                    const newIllegalSymbol = SYMBOL_ILLEGAL.find(sign => removeBlankSpaces[2]?.includes(sign));

                    if(removeBlankSpaces.length > 5) { // Too many labels
                        this.addBreakAfterCommentSign(removeBlankSpaces);
                        if(removeBlankSpaces.indexOf(COM_INDICATION) !== 5) {
                            this.problemsArray.push({
                                lineIndex: i + 1,
                                problemType: SYNTAX_ERRORS.TOO_MANY_ARGUMENTS,
                                danger: SYNTAX_ERRORS.ERROR_LEVEL,
                                labelIndex: '',
                            });
                        }
                    } else if(removeBlankSpaces.length < 5) { // Too few labels
                        this.problemsArray.push({
                            lineIndex: i + 1,
                            problemType: SYNTAX_ERRORS.TOO_FEW_ARGUMENTS,
                            danger: SYNTAX_ERRORS.ERROR_LEVEL,
                            labelIndex: removeBlankSpaces.length
                        });
                    } else {
                        this.validateData( // Illegal symbol in <direction> label
                            (direction !== 'r' && direction !== 'l' && direction !== '*' && direction) || direction === '',
                            i, 'direction', SYNTAX_ERRORS.ERROR_LEVEL
                        );
                        // Illegal symbol in <current state> label
                        this.validateData(initIllegalState, i, 'current state');
                        // Illegal symbol in <next state> label
                        this.validateData(nextIllegalState, i, 'next state');
                        // Illegal symbol in <current symbol>
                        this.validateData(currentIllegalSymbol || removeBlankSpaces[1].length > 1, i, 'current symbol');
                        // Illegal symbol in <new symbol>
                        this.validateData(newIllegalSymbol || removeBlankSpaces[2].length > 1, i, 'new symbol');
                    }
                }
            }

            // Validation Warnings
        }   
        
        // Validate if machine not have initial state or initial state is duplicated
        this.findInitialStateLabel(this.reverseArray(splitAllElements, 0));

        // If all good
        if(this.problemsArray.length === 0) {
            this.convertIntoObject();
            return true;
        }
        return false;
    }
};

export const SYNTAX_ERRORS = {
    TOO_MANY_ARGUMENTS: 'Too many arguments. There are too many arguments on the line. Expected comment',
    TOO_FEW_ARGUMENTS: 'Too few arguments. There are too few arguments on this line. Expected comment',
    ILLEGAL_SYMBOLS: 'Illegal symbols. There are illegal symbols on the label',
    MISSING_INITIAL_STATE: 'Missing Initial State. Program must have a declared Initial State label',
    DUPLICATE_INITIAL_STATE: 'Duplicate Initial State. There can only be one Initial State label in single program',
    WARNING_LEVEL: 'Warning',
    ERROR_LEVEL: 'Error'
};

export const ILLEGAL_STATE = [ ';', '*', '_', '', ' ' ];
export const SYMBOL_ILLEGAL = [ ';', '', ' ' ];
export const COM_INDICATION = ';';
export const END_STATE = 'stop';

export default TextareaCompile;