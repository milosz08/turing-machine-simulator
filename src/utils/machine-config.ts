/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: machine-config.ts
 * Last modified: 7/31/23, 11:12 PM
 * Project name: react-ts-turing-simulator
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

export enum CompileAndRun {
    COMMENT_CHAR = "#",
    INITIAL_VALUE_RANGE_CHAR = "$",
    STOP_LABEL = "stop",
}

export const TapeValues = {
    ILL_STATE: [ CompileAndRun.COMMENT_CHAR, "*", "_", "", " " ],
    ILL_TAPE_SYMBOL: [ CompileAndRun.COMMENT_CHAR, "", " " ],
    LEG_DIR: { RIGHT: ">", LEFT: "<", HALT: "*" },
    LEG_STOP: "!",
    ANY: "*",
    BLANK: "_",
    SPACE: " "
} as const;

export enum TupleDefinitions {
    CURRENT_STATE = "current state",
    CURRENT_SYMBOL = "current symbol",
    NEW_SYMBOL = "new symbol",
    DIRECTION = "direction",
    NEW_STATE = "new state",
    TERMINATE = "terminate"
}

export enum Directions {
    LEFT = "left'",
    RIGHT = "right",
}

export enum FilesService {
    SAMPLE_MACHINE_PROGRAM_NAME = "turing-machine-program.txt",
    MACHINE_PROGRAM_EXTENSION = "txt",
    CLICK_TO_LOAD_PROGRAM = "Click here to load program from your PC.",
    SUCCESS_LOAD_PROGRAM = "Your Turing Machine Program was successfully loaded!",
    PROGRAM_LOAD_ERROR = "Error! Turing Machine Program not loaded!",
    DEF_PROGRAMS_REL_PATH = "/examples",
}

export const examplePrograms: string[] = [
    "Replace Binary String",
    "Replace Ternary String",
    "Check Symmetric Strings",
    "Binary Palindrome Detector"
];
