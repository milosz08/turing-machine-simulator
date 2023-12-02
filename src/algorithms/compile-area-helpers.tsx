/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
