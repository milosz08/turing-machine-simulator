/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */

export enum CompileAndRun {
  COMMENT_CHAR = '#',
  INITIAL_VALUE_RANGE_CHAR = '$',
  STOP_LABEL = 'stop',
}

export const TapeValues = {
  ILL_STATE: [CompileAndRun.COMMENT_CHAR, '*', '_', '', ' '],
  ILL_TAPE_SYMBOL: [CompileAndRun.COMMENT_CHAR, '', ' '],
  LEG_DIR: { RIGHT: '>', LEFT: '<', HALT: '*' },
  LEG_STOP: '!',
  ANY: '*',
  BLANK: '_',
  SPACE: ' ',
} as const;

export enum TupleDefinitions {
  CURRENT_STATE = 'current state',
  CURRENT_SYMBOL = 'current symbol',
  NEW_SYMBOL = 'new symbol',
  DIRECTION = 'direction',
  NEW_STATE = 'new state',
  TERMINATE = 'terminate',
}

export enum Directions {
  LEFT = "left'",
  RIGHT = 'right',
}

export enum FilesService {
  SAMPLE_MACHINE_PROGRAM_NAME = 'turing-machine-program.txt',
  MACHINE_PROGRAM_EXTENSION = 'txt',
  CLICK_TO_LOAD_PROGRAM = 'Click here to load program from your PC.',
  SUCCESS_LOAD_PROGRAM = 'Your Turing Machine Program was successfully loaded!',
  PROGRAM_LOAD_ERROR = 'Error! Turing Machine Program not loaded!',
  DEF_PROGRAMS_REL_PATH = '/examples',
}

export const examplePrograms: string[] = [
  'Replace Binary String',
  'Replace Ternary String',
  'Check Symmetric Strings',
  'Binary Palindrome Detector',
];
