/**
 * @file styledComponentThemes.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Styles File.
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

/**
 * Styled components light theme.
 */
export const LIGHT_THEME = {
    BODY: '#fcfcfc',
    BODY_TINT1: '#cdcdcd',
    BODY_TINT2: '#575757',
    TEXT: '#242424',
    TEXT_TINT1: '#1a1b1e',

    BUTTON_FONT_WEIGHT: 200,
    BUTTON_COLOUR: '#fcfcfc',
    BUTTON_BACKGROUND: '#242424',
    DIS_BUTTON_BACKGROUND: '#cdcdcd',

    INPUT_COLOUR: '#575757',
    INPUT_FOCUS_COLOUR: '#1a1b1e',
    INPUT_FONT_WEIGHT: 600,
};

/**
 * Styled components dark theme.
 */
export const DARK_THEME = {
    BODY: '#1a1b1e',
    BODY_TINT2: '#575757',
    TEXT: '#fcfcfc',
    TEXT_TINT1: '#cdcdcd',

    BUTTON_FONT_WEIGHT: 600,
    BUTTON_COLOUR: '#242424',
    BUTTON_BACKGROUND: '#fcfcfc',
    DIS_BUTTON_BACKGROUND: '#575757',

    INPUT_COLOUR: '#cdcdcd',
    INPUT_FOCUS_COLOUR: '#fcfcfc',
    INPUT_FONT_WEIGHT: 200,
};

/**
 * Styled components for both, dark and light theme (static).
 */
export const NON_CHANGE_VALUES = {
    WHITE_COLOUR: '#fcfcfc',
    BORDER_COLOUR: '#575757',
    STATUS_BAR_COLOUR: '#117bc9',
    STATUS_BAR_HOVER_COLOUR: '#2888CE',
    COMPILING_BAR_COLOUR: '#67147a',
    COMPILING_BAR_HOVER_COLOUR: '#762B87',
    DEBUG_BAR_COLOUR: '#ca653a',
    WARNING_COLOUR: '#dcbb6d',
    ERROR_COLOUR: '#d15545',
};