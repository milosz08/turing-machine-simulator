import { MachineModes } from './machine-modes';

const {
  IDLE,
  RUNNING,
  RESET,
  STOPPED,
  FINISH,
  FORWARD,
  LOOP,
  BACKWARD,
  COMPILE_PROGRAM,
  COMPILE_SUCCESSFUL,
  COMPILE_FAILURE,
  DEBUGGING,
  AJAX_ERROR_LOAD,
  SUCCESSFULLY_LOAD_PROGRAM,
} = MachineModes;

export const machineMessages: { [key in keyof typeof MachineModes]: string } = {
  [IDLE]: 'Machine idle. Write or load sample program and compile to run machine.',
  [STOPPED]: 'Machine stopped.',
  [RUNNING]: 'Machine running...',
  [RESET]: "Machine reset. Press 'run' or 'steps' to start the machine working.",
  [FINISH]: "Machine has finish work. Press 'Machine Reset' button.",
  [FORWARD]: 'Machine did one step forward.',
  [BACKWARD]: 'Machine did one step backward.',
  [LOOP]: 'Machine stopped! Prevent memory leaks induced by endless loop.',
  [COMPILE_PROGRAM]: 'To run machine, compile your program.',
  [COMPILE_SUCCESSFUL]: "Compile Success. Press 'Machine Reset' button.",
  [COMPILE_FAILURE]: 'Compile Failure. Syntax error/s detected. Check errors box below.',
  [DEBUGGING]: 'Machine debugging. Please wait for validate source code.',
  [AJAX_ERROR_LOAD]: 'Error: Load AJAX request program failure. Try again.',
  [SUCCESSFULLY_LOAD_PROGRAM]: 'Machine program was successfully loaded!',
} as const;

export enum CompilerSyntaxIssues {
  TOO_MANY_ARGUMENTS = 'Too many arguments. There are too many arguments on the line. Expected comment',
  TOO_FEW_ARGUMENTS = 'Too few arguments. There are too few arguments on this line. Expected comment',
  ILLEGAL_SYMBOLS = 'Illegal symbols. There are illegal symbols on the label',
  MISSING_INITIAL_STATE = 'Missing Initial State. Program must have a declared Initial State label',
  NOT_INCLUDE_TERMINATE = "Program should include 'stop' label to prevent uncontrolled head behaviour after finish",
  ENDLESS_LOOP = 'Endless loop. Possible memory leaks and undesirable program operation',
  WARNING_LEVEL = 'Warning',
  ERROR_LEVEL = 'Error',
}

export enum AdditionalMessages {
  DEBUGGER_ACCESSIBILITY = 'Click here to see all Errors and Warnings',
  CODE_AREA_PLACEHOLDER = 'Input here your Turing Machine program...',
}

export const CompileStatus: { [key: string]: string } = {
  [COMPILE_SUCCESSFUL]: 'Success',
  [COMPILE_FAILURE]: 'Failure',
} as const;
