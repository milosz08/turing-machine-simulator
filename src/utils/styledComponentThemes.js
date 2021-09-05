/*!
 * @file styledComponentThemes.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Styles File.
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
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