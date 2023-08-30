/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: compile-area-helpers.tsx
 *   Created at: 2023-08-01, 21:13:54
 *   Last updated at: 2023-08-30, 18:55:52
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
import { FaCheck, FaExclamationTriangle, FaSyncAlt } from 'react-icons/fa';
import { NonChangeValues } from '~/app-styles/theme-styles';
import { CodeAreaModes } from '~/app-utils/code-area-modes';
import { MachineModes } from '~/app-utils/machine-modes';

const {
  DEBUG_BAR_COLOUR,
  COMPILING_BAR_COLOUR,
  STATUS_BAR_COLOUR,
  COMPILING_BAR_HOVER_COLOUR,
} = NonChangeValues;

const { RUNNING, COMPILED } = CodeAreaModes;

class CompileAreaHelpers {
  static selectShowIcon(mode: MachineModes) {
    switch (mode) {
      case MachineModes.COMPILE_SUCCESSFUL:
        return <FaCheck />;
      case MachineModes.COMPILE_FAILURE:
        return <FaExclamationTriangle />;
      default:
        return <FaSyncAlt />;
    }
  }

  static selectBarBackground(mode: CodeAreaModes): {
    normal: string;
    hover: string;
  } {
    switch (mode) {
      case RUNNING:
        return { normal: DEBUG_BAR_COLOUR, hover: '' };
      case COMPILED:
        return {
          normal: COMPILING_BAR_COLOUR,
          hover: COMPILING_BAR_HOVER_COLOUR,
        };
      default:
        return { normal: STATUS_BAR_COLOUR, hover: '' };
    }
  }
}

export default CompileAreaHelpers;
