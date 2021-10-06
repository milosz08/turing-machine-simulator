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

/**
 * Colours and another styles used in both themes (non-exportable static object).
 */
const NON_EXPORTABLE_STYLES = {
    WHITE_NONEXP: '#fcfcfc',
    LIGHTBLACK_NONEXP: '#242424',
    BLACK_NONEXP: '#1a1b1e',
    GRAY_NONEXP: '#575757',
    LIGHTGRAY_NONEXP: '#cdcdcd',
};

const { WHITE_NONEXP, LIGHTBLACK_NONEXP, BLACK_NONEXP, GRAY_NONEXP, LIGHTGRAY_NONEXP } = NON_EXPORTABLE_STYLES;

/**
 * Styled components light theme.
 */
export const LIGHT_THEME = {
    BODY: WHITE_NONEXP,
    BODY_TINT1: LIGHTGRAY_NONEXP,
    BODY_TINT2: GRAY_NONEXP,
    TEXT: LIGHTBLACK_NONEXP,
    TEXT_TINT1: BLACK_NONEXP,

    BUTTON_FONT_WEIGHT: 200,
    BUTTON_COLOUR: WHITE_NONEXP,
    BUTTON_BACKGROUND: LIGHTBLACK_NONEXP,
    DIS_BUTTON_BACKGROUND: LIGHTGRAY_NONEXP,

    INPUT_COLOUR: GRAY_NONEXP,
    INPUT_FOCUS_COLOUR: BLACK_NONEXP,
    INPUT_FONT_WEIGHT: 600,
};

/**
 * Styled components dark theme.
 */
export const DARK_THEME = {
    BODY: BLACK_NONEXP,
    BODY_TINT2: GRAY_NONEXP,
    TEXT: WHITE_NONEXP,
    TEXT_TINT1: LIGHTGRAY_NONEXP,

    BUTTON_FONT_WEIGHT: 600,
    BUTTON_COLOUR: LIGHTBLACK_NONEXP,
    BUTTON_BACKGROUND: WHITE_NONEXP,
    DIS_BUTTON_BACKGROUND: GRAY_NONEXP,

    INPUT_COLOUR: LIGHTGRAY_NONEXP,
    INPUT_FOCUS_COLOUR: WHITE_NONEXP,
    INPUT_FONT_WEIGHT: 200,
};

/**
 * Styled components for both, dark and light theme (static).
 */
export const NON_CHANGE_VALUES = {
    WHITE_COLOUR: WHITE_NONEXP,
    BORDER_COLOUR: GRAY_NONEXP,
    STATUS_BAR_COLOUR: '#117bc9',
    STATUS_BAR_HOVER_COLOUR: '#2888CE',
    COMPILING_BAR_COLOUR: '#67147a',
    COMPILING_BAR_HOVER_COLOUR: '#762B87',
    DEBUG_BAR_COLOUR: '#ca653a',
    WARNING_COLOUR: '#dcbb6d',
    ERROR_COLOUR: '#d15545',
};