/*!
 * @file machineConfiguration.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript Static objects and primitives file stored informations about the whole Machine.
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 * 
 * @date 09/05/2021
 */

/**
 * Object stores all possible modes of the machine.
 */
export const CODEAREA_MODES = {
    DEBUGGING: 'debugging',
    COMPILING: 'compiled',
    RUNNING: 'running',
    COMPILE_SUCCESS: 'Success',
    COMPILE_FAILURE: 'Failure'
};

/**
 * Object stores all machine messages.
 */
export const MACHINE_MESSAGES = {
    CODEAREA_PLACEHOLDER: 'Input here your Turing Machine program...',
    
    COMPILE_PROGRAM: 'To run machine, compile your program.',
    COMPILE_SUCCESSFUL: `Compile Success. Press 'Machine Reset' button.`,
    COMPILE_FAILURE: 'Compile Failure. Syntax error/s detected. Check errors box below.',
    
    DEBUGGER_ACCESIBILITY: 'Click here to see all Errors and Warnings',
    
    PREV_LABEL: 'Prev',
    NEXT_LABEL: 'Next',

    CLICK_TO_LOAD_PROGRAM: 'Click here to load program from your PC.',
    SUCCESS_LOAD_PROGRAM: 'Your Turing Machine Program was succesfully loaded!',
    PROGRAM_LOAD_ERROR: 'Error! Turing Machine Program not loaded!',
    AJAX_ERROR_LOAD: 'Error: Load AJAX request program failure. Try again.'

};

/**
 * Example program name that appears in the user's system window when saving the program to a file.
 */
export const SAMPLE_MACHINE_PROGRAM_NAME = 'turing-machine-program.txt';
export const MACHINE_PROGRAM_EXTENSION = 'txt';
export const DEF_PROGRAMS_REL_PATH = '/examples';

/**
 * All examples programs (NOTE: this list must match the names of programs in the ./examples directory).
 * Example: replace-binary-string (in folder) -> Replace Binary String (in array).
 */
 export const EXAMPLES_PROGRAMS = [
    'Replace Binary String',
    'Replace Ternary String',
    'Check Symmetric Strings',
    'Binary Palindrome Detector'
];

/**
 * 
 */
export const COMPILE_AND_RUN = {
    COMMENT_CHAR: '#',
    INITIAL_VALUE_RANGE_CHAR: '$', // Used to extract the initial tape values from the code.
    STOP_LABEL: 'stop',
};

/**
 * 
 */
export const TAPE_VALUES = {
    ILL_STATE: [ COMPILE_AND_RUN.COMMENT_CHAR, '*', '_', '', ' ' ],
    ILL_TAPE_SYMB: [ COMPILE_AND_RUN.COMMENT_CHAR, '', ' ' ],
    LEG_DIR: { RIGHT: '>', LEFT: '<', HALT: '*' },
    LEG_STOP: '!',
    ANY: '*'
};

/**
 * 
 */
export const SYNTAX_PROBLEMS = {
    TOO_MANY_ARGUMENTS: 'Too many arguments. There are too many arguments on the line. Expected comment',
    TOO_FEW_ARGUMENTS: 'Too few arguments. There are too few arguments on this line. Expected comment',
    
    ILLEGAL_SYMBOLS: 'Illegal symbols. There are illegal symbols on the label',
    MISSING_INITIAL_STATE: 'Missing Initial State. Program must have a declared Initial State label',
    DUPLICATE_INITIAL_STATE: 'Duplicate Initial State. There can only be one Initial State label in single program',
    
    NOT_INCLUDE_TERMINATE: `Program should include 'stop' label to prevent uncontrolled head behaviour after finish`,
    ENDLESS_LOOP: 'Endless loop. Possible memory leaks and undesirable program operation',

    WARNING_LEVEL: 'Warning',
    ERROR_LEVEL: 'Error'
};

/**
 * 
 */
export const TUPLE_DEF = {
    CURRENT_STATE: 'current state',
    CURRENT_SYMBOL: 'current symbol',
    NEW_SYMBOL: 'new symbol',
    DIRECTION: 'direction',
    NEW_STATE: 'new state',
    TERMINATE: 'terminate'
};

/**
 * 
 */
export const HEAD_SPEED = {
    MIN_SPEED: 100,
    MAX_SPEED: 1000,
};