/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: theme-styles.ts
 *   Created at: 2023-08-01, 00:05:57
 *   Last updated at: 2023-08-30, 18:30:32
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

const NonExportableColors: { [key: string]: string } = {
  WHITE_NONEXP: '#fcfcfc',
  LIGHTBLACK_NONEXP: '#242424',
  BLACK_NONEXP: '#1a1b1e',
  GRAY_NONEXP: '#575757',
  LIGHTGRAY_NONEXP: '#cdcdcd',
  LIGHT_SEPARATOR_NONEXP: '#bdbdbd',
  DARK_SEPARATOR_NONEXP: '#484848',
};

const {
  WHITE_NONEXP,
  LIGHTBLACK_NONEXP,
  BLACK_NONEXP,
  GRAY_NONEXP,
  LIGHTGRAY_NONEXP,
  LIGHT_SEPARATOR_NONEXP,
  DARK_SEPARATOR_NONEXP,
} = NonExportableColors;

const Themes = {
  lightTheme: {
    BODY: BLACK_NONEXP,
    BODY_TINT2: GRAY_NONEXP,
    TEXT: WHITE_NONEXP,
    TEXT_TINT1: LIGHTGRAY_NONEXP,
    SEPARATOR: DARK_SEPARATOR_NONEXP,

    BUTTON_FONT_WEIGHT: 600,
    BUTTON_COLOUR: LIGHTBLACK_NONEXP,
    BUTTON_BACKGROUND: WHITE_NONEXP,
    DIS_BUTTON_BACKGROUND: GRAY_NONEXP,

    INPUT_COLOUR: LIGHTGRAY_NONEXP,
    INPUT_FOCUS_COLOUR: WHITE_NONEXP,
    INPUT_FONT_WEIGHT: 200,
  },
  darkTheme: {
    BODY: WHITE_NONEXP,
    BODY_TINT1: LIGHTGRAY_NONEXP,
    BODY_TINT2: GRAY_NONEXP,
    TEXT: LIGHTBLACK_NONEXP,
    TEXT_TINT1: BLACK_NONEXP,
    SEPARATOR: LIGHT_SEPARATOR_NONEXP,

    BUTTON_FONT_WEIGHT: 200,
    BUTTON_COLOUR: WHITE_NONEXP,
    BUTTON_BACKGROUND: LIGHTBLACK_NONEXP,
    DIS_BUTTON_BACKGROUND: LIGHTGRAY_NONEXP,

    INPUT_COLOUR: GRAY_NONEXP,
    INPUT_FOCUS_COLOUR: BLACK_NONEXP,
    INPUT_FONT_WEIGHT: 600,
  },
};

export const NonChangeValues = {
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

export type LightThemeType = typeof Themes.lightTheme;
export type DarkThemeType = typeof Themes.darkTheme;

export default Themes;
